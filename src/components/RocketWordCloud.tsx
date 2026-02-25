"use client";

import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent } from "echarts/components";

// 仅注册词云所需的最小模块（wordcloud 插件自行注册 series 类型）
echarts.use([CanvasRenderer, TooltipComponent]);
import { wordCloudData as baseWords, type WordCloudData } from "../data/wordCloudData";

// 粒子接口定义
interface Particle {
  id: number;
  x: number;
  y: number;
  chars: string;
  opacity: number;
  size: number;
  element: HTMLDivElement | null;
}

// 二进制尾焰组件 - 使用 requestAnimationFrame 优化性能
const BinaryFlame = React.memo(function BinaryFlame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const particleIdRef = useRef(0);
  const lastSpawnTimeRef = useRef(0);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 获取粒子颜色
    const getColor = (opacity: number): string => {
      if (opacity > 0.7) return "rgb(251, 146, 60)"; // 橙-400
      if (opacity > 0.4) return "rgb(249, 115, 22)"; // 橙-500
      return "rgb(234, 88, 12)"; // 橙-600
    };

    // 创建粒子 DOM 元素
    const createParticleElement = (chars: string): HTMLDivElement => {
      const el = document.createElement("div");
      el.style.cssText = `
        position: absolute;
        font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
        font-weight: 700;
        letter-spacing: 0.1em;
        font-size: 14px;
        will-change: transform, opacity;
        pointer-events: none;
      `;
      el.textContent = chars;
      return el;
    };

    // 生成新粒子
    const spawnParticle = () => {
      const chars = Array.from({ length: Math.floor(Math.random() * 3) + 2 }, () =>
        Math.random() > 0.5 ? "1" : "0",
      ).join("");

      const element = createParticleElement(chars);
      container.appendChild(element);

      const particle: Particle = {
        id: particleIdRef.current++,
        x: 0,
        y: (Math.random() - 0.5) * 80,
        chars,
        opacity: 1,
        size: Math.random() * 0.5 + 0.7,
        element,
      };

      particlesRef.current.push(particle);
    };

    // 更新粒子样式
    const updateParticleStyle = (particle: Particle) => {
      if (!particle.element) return;

      const color = getColor(particle.opacity);
      const blur = (1 - particle.opacity) * 0.5;
      const glowIntensity = particle.opacity * 20;
      const glowOpacity = particle.opacity * 0.9;

      particle.element.style.transform = `translate(${particle.x}px, calc(-50% + ${particle.y}px)) scale(${particle.size})`;
      particle.element.style.opacity = String(particle.opacity);
      particle.element.style.color = color;
      // 多层发光效果，更接近火焰效果
      particle.element.style.textShadow = `
        0 0 ${glowIntensity * 0.5}px rgba(251, 146, 60, ${glowOpacity}),
        0 0 ${glowIntensity}px rgba(249, 115, 22, ${glowOpacity * 0.8}),
        0 0 ${glowIntensity * 1.5}px rgba(234, 88, 12, ${glowOpacity * 0.5})
      `;
      particle.element.style.filter = `blur(${blur}px)`;
      particle.element.style.top = "50%";
      particle.element.style.left = "0";
    };

    // 动画循环
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // 以约 50ms 间隔生成新粒子
      if (currentTime - lastSpawnTimeRef.current > 50) {
        spawnParticle();
        lastSpawnTimeRef.current = currentTime;
      }

      // 更新所有粒子
      const particles = particlesRef.current;
      const speed = deltaTime * 0.067; // 约 2px per 30ms

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        // 更新位置和透明度
        particle.x -= speed;
        particle.y += (Math.random() - 0.5) * 3 * (deltaTime / 30);
        particle.opacity -= 0.015 * (deltaTime / 30);

        if (particle.opacity <= 0) {
          // 移除粒子
          if (particle.element && container.contains(particle.element)) {
            container.removeChild(particle.element);
          }
          particles.splice(i, 1);
        } else {
          updateParticleStyle(particle);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      // 清理所有粒子元素
      particlesRef.current.forEach((particle) => {
        if (particle.element && container.contains(particle.element)) {
          container.removeChild(particle.element);
        }
      });
      particlesRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none
        overflow-visible"
    />
  );
});

export default function RocketWordCloud() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // 记录上一次的容器尺寸，用于判断是否真正需要 resize
  const lastSizeRef = useRef<{ width: number; height: number } | null>(null);
  // 标记图表是否已初始化完成
  const isInitializedRef = useRef(false);

  useEffect(() => {
    // 动态导入 echarts-wordcloud 以避免 SSR 问题
    import("echarts-wordcloud").then(() => {
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!chartRef.current || !isLoaded) return;

    // 如果已经初始化过，不要重复初始化
    if (isInitializedRef.current && chartInstanceRef.current) {
      return;
    }

    // 初始化 ECharts 实例
    const chart = echarts.init(chartRef.current);
    chartInstanceRef.current = chart;
    isInitializedRef.current = true;

    // 记录初始尺寸
    lastSizeRef.current = {
      width: chartRef.current.clientWidth,
      height: chartRef.current.clientHeight,
    };

    // 加载火箭蒙版图片
    const maskImage = new Image();
    maskImage.src = "/rocket2_black.png";

    maskImage.onload = () => {
      // 复制词汇多次以填充更密集
      const wordCloudData: WordCloudData[] = [];
      for (let i = 0; i < 2; i++) {
        baseWords.forEach((word) => {
          wordCloudData.push({
            // 使用零宽字符创建唯一但视觉上相同的名称
            name: i === 0 ? word.name : word.name + "\u200B".repeat(i),
            value: word.value - i * 10, // 每次重复降低权重
            description: word.description, // 保留描述
          });
        });
      }

      // 创建名称到描述的映射表
      const descriptionMap = new Map<string, string>();
      baseWords.forEach((word) => {
        if (word.description) {
          descriptionMap.set(word.name, word.description);
        }
      });

      chart.setOption({
        tooltip: {
          show: true,
          formatter: (params: { name?: string }) => {
            if (!params.name) return "";
            // 去掉零宽字符获取原始名称
            const cleanName = params.name.replace(/\u200B/g, "");
            const description = descriptionMap.get(cleanName);
            // 返回格式化的 tooltip
            return `<div style="padding: 4px 8px;">
              <div style="font-weight: bold; margin-bottom: 4px; color: #22d3ee;">${cleanName}</div>
              <div style="font-size: 12px; color: #94a3b8;">${description || "暂无描述"}</div>
            </div>`;
          },
        },
        series: [
          {
            type: "wordCloud",
            shape: "circle",
            keepAspect: true,
            maskImage: maskImage,
            left: "center",
            top: "center",
            width: "100%",
            height: "100%",
            right: null,
            bottom: null,
            sizeRange: [11, 32], // 减小字体大小范围: 最小10px, 最大32px
            rotationRange: [0, 0], // 不旋转,保持水平
            rotationStep: 0,
            gridSize: 7, // 减小网格大小以允许更密集的布局
            drawOutOfBound: false,
            shrinkToFit: true,
            layoutAnimation: false, // 禁用布局动画，避免移动端滚动时重绘闪烁
            textStyle: {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: function () {
                // 使用青色到蓝色的渐变色系
                const colors = [
                  "rgb(34, 211, 238)", // cyan-400
                  "rgb(6, 182, 212)", // cyan-500
                  "rgb(8, 145, 178)", // cyan-600
                  "rgb(59, 130, 246)", // blue-500
                  "rgb(37, 99, 235)", // blue-600
                  "rgb(96, 165, 250)", // blue-400
                ];
                return colors[Math.floor(Math.random() * colors.length)];
              },
            },
            emphasis: {
              focus: "self",
              textStyle: {
                fontSize: undefined, // 自动放大
                color: "rgb(255, 255, 255)", // 强调时变白色
                textShadowBlur: 20,
                textShadowColor: "rgba(34, 211, 238, 0.8)",
                fontWeight: "bolder",
              },
            },
            data: wordCloudData,
          },
        ],
      });
    };

    // 使用 ResizeObserver 替代 window resize 事件
    // 这样只有当容器真正改变尺寸时才会触发 resize
    // 移动端滚动时地址栏收缩不会影响容器宽度，所以不会触发
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
    const MIN_SIZE_CHANGE = 10; // 最小尺寸变化阈值（像素）

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const lastSize = lastSizeRef.current;

        // 只有当尺寸变化超过阈值时才触发 resize
        // 这可以过滤掉移动端地址栏导致的微小高度变化
        if (lastSize) {
          const widthChange = Math.abs(width - lastSize.width);
          const heightChange = Math.abs(height - lastSize.height);

          // 忽略小于阈值的变化（通常是地址栏收缩导致的）
          if (widthChange < MIN_SIZE_CHANGE && heightChange < MIN_SIZE_CHANGE) {
            return;
          }
        }

        // 使用防抖，避免频繁 resize
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }

        resizeTimeout = setTimeout(() => {
          if (chartInstanceRef.current && !chartInstanceRef.current.isDisposed()) {
            lastSizeRef.current = { width, height };
            chartInstanceRef.current.resize();
          }
        }, 200);
      }
    });

    resizeObserver.observe(chartRef.current);

    return () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeObserver.disconnect();
      chart.dispose();
      isInitializedRef.current = false;
    };
  }, [isLoaded]);

  return (
    <div className="relative w-full h-full">
      <div
        ref={chartRef}
        className="w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[500px]"
      />
      {/* 二进制尾焰效果 */}
      <BinaryFlame />
    </div>
  );
}
