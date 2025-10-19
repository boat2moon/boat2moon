"use client";

import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

interface WordCloudData {
  name: string;
  value: number;
  description?: string;
}

// 二进制尾焰组件 - 横向扩散效果
function BinaryFlame() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      chars: string;
      opacity: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    let particleId = 0;

    // 生成新粒子
    const spawnParticle = () => {
      const newParticle = {
        id: particleId++,
        x: 0, // 从火箭尾部开始
        y: (Math.random() - 0.5) * 80, // 垂直方向随机分布
        chars: Array.from({ length: Math.floor(Math.random() * 3) + 2 }, () =>
          Math.random() > 0.5 ? "1" : "0",
        ).join(""),
        opacity: 1,
        size: Math.random() * 0.5 + 0.7, // 随机大小
      };

      setParticles((prev) => [...prev, newParticle]);

      // 2秒后移除粒子
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 2000);
    };

    // 每50ms生成新粒子
    const spawnInterval = setInterval(spawnParticle, 50);

    // 每30ms更新粒子位置
    const updateInterval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: particle.x - 2, // 向左移动
          y: particle.y + (Math.random() - 0.5) * 3, // 轻微垂直抖动
          opacity: Math.max(0, particle.opacity - 0.015), // 逐渐淡出
        })),
      );
    }, 30);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(updateInterval);
    };
  }, []);

  return (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none
        overflow-visible"
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute font-mono font-bold tracking-wider transition-all duration-100
            ease-out"
          style={{
            left: `${particle.x}px`,
            top: `50%`,
            transform: `translateY(calc(-50% + ${particle.y}px)) scale(${particle.size})`,
            opacity: particle.opacity,
            fontSize: "12px",
            color:
              particle.opacity > 0.7
                ? "rgb(251, 146, 60)" // 橙-400
                : particle.opacity > 0.4
                  ? "rgb(249, 115, 22)" // 橙-500
                  : "rgb(234, 88, 12)", // 橙-600
            textShadow: `0 0 ${particle.opacity * 15}px rgba(249, 115, 22, ${particle.opacity * 0.8})`,
            filter: `blur(${(1 - particle.opacity) * 0.5}px)`,
          }}
        >
          {particle.chars}
        </div>
      ))}
    </div>
  );
}

export default function RocketWordCloud() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 动态导入 echarts-wordcloud 以避免 SSR 问题
    import("echarts-wordcloud").then(() => {
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!chartRef.current || !isLoaded) return;

    // 初始化 ECharts 实例
    const chart = echarts.init(chartRef.current);
    chartInstanceRef.current = chart;

    // 加载火箭蒙版图片
    const maskImage = new Image();
    maskImage.src = "/rocket2_black.png";

    maskImage.onload = () => {
      // 基础词云数据 - 技能词汇及其描述
      const baseWords: WordCloudData[] = [
        { name: "React", value: 80, description: "用于构建用户界面的 JavaScript 库" },
        { name: "Next.js", value: 75, description: "基于 React 的全栈框架，支持 SSR/SSG" },
        { name: "TypeScript", value: 85, description: "JavaScript 的超集，提供类型安全" },
        { name: "Node.js", value: 70, description: "基于 Chrome V8 的 JavaScript 运行时" },
        { name: "NestJS", value: 65, description: "企业级 Node.js 后端框架" },
        { name: "Express", value: 60, description: "轻量级 Node.js Web 应用框架" },
        { name: "PostgreSQL", value: 55, description: "强大的开源关系型数据库" },
        { name: "Redis", value: 50, description: "高性能键值对内存数据库" },
        { name: "MongoDB", value: 55, description: "灵活的文档型 NoSQL 数据库" },
        { name: "TailwindCSS", value: 65, description: "实用优先的 CSS 框架" },
        { name: "React Native", value: 60, description: "使用 React 构建原生移动应用" },
        { name: "Electron", value: 55, description: "使用 Web 技术构建桌面应用" },
        { name: "WebSocket", value: 50, description: "实时双向通信协议" },
        { name: "GraphQL", value: 60, description: "灵活高效的 API 查询语言" },
        { name: "REST API", value: 65, description: "基于 HTTP 的 API 架构风格" },
        { name: "Docker", value: 70, description: "容器化应用部署平台" },
        { name: "Kubernetes", value: 60, description: "容器编排与管理系统" },
        { name: "CI/CD", value: 65, description: "持续集成与持续部署" },
        { name: "微前端", value: 55, description: "前端应用的微服务架构" },
        { name: "全端协同", value: 50, description: "前后端全栈协作开发" },
        { name: "Serverless", value: 55, description: "无服务器架构，按需计费" },
        { name: "AI/AIGC", value: 75, description: "人工智能与 AI 生成内容" },
        { name: "Web3", value: 60, description: "基于区块链的去中心化网络" },
        { name: "安全", value: 50, description: "应用安全与数据保护" },
        { name: "性能", value: 55, description: "性能优化与监控" },
        { name: "Vue", value: 45, description: "渐进式 JavaScript 框架" },
        { name: "Python", value: 40, description: "简洁强大的通用编程语言" },
        { name: "Go", value: 35, description: "高效的并发编程语言" },
        { name: "Rust", value: 30, description: "内存安全的系统编程语言" },
        { name: "Java", value: 40, description: "企业级面向对象编程语言" },
      ];

      // 复制词汇多次以填充更密集
      const wordCloudData: WordCloudData[] = [];
      for (let i = 0; i < 3; i++) {
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
            sizeRange: [10, 32], // 减小字体大小范围: 最小10px, 最大32px
            rotationRange: [0, 0], // 不旋转,保持水平
            rotationStep: 0,
            gridSize: 6, // 减小网格大小以允许更密集的布局
            drawOutOfBound: false,
            shrinkToFit: true,
            layoutAnimation: true,
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

    // 响应式处理
    const handleResize = () => {
      chart.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, [isLoaded]);

  return (
    <div className="relative w-full h-full">
      <div ref={chartRef} className="w-full h-full min-h-[500px]" />
      {/* 二进制尾焰效果 */}
      <BinaryFlame />
    </div>
  );
}
