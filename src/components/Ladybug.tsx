"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Position {
  x: number;
  y: number;
}

interface LadybugProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

/**
 * 可爱的瓢虫组件 - 在浅色模式下爬来爬去
 * - 随机移动
 * - 悬停时害怕（呆住）
 * - 点击消失（有动画）
 * - 一段时间后重新出现
 */
export default function Ladybug({ containerRef }: LadybugProps) {
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScared, setIsScared] = useState(false);
  const [isDisappearing, setIsDisappearing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messagePosition, setMessagePosition] = useState<Position>({ x: 0, y: 0 });

  const bugRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const targetRef = useRef<Position>({ x: 100, y: 100 });
  const respawnTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 检测暗黑模式
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // 也监听媒体查询
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => checkDarkMode();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // 生成新的随机目标位置
  const generateNewTarget = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // 在容器内随机选择位置，留出边距
    const margin = 60;
    const x = margin + Math.random() * (rect.width - margin * 2);
    const y = margin + Math.random() * (container.scrollHeight - margin * 2);

    targetRef.current = { x, y };
  }, [containerRef]);

  // 动画循环
  const animate = useCallback(() => {
    if (isScared || isDisappearing || !isVisible) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    setPosition((prev) => {
      const target = targetRef.current;
      const dx = target.x - prev.x;
      const dy = target.y - prev.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // 到达目标附近时生成新目标
      if (distance < 10) {
        generateNewTarget();
        return prev;
      }

      // 计算移动方向和速度
      const speed = 0.8;
      const newX = prev.x + (dx / distance) * speed;
      const newY = prev.y + (dy / distance) * speed;

      // 更新旋转角度（朝向移动方向）
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      setRotation(angle);

      return { x: newX, y: newY };
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [isScared, isDisappearing, isVisible, generateNewTarget]);

  // 初始化和动画
  useEffect(() => {
    if (isDarkMode) return;

    generateNewTarget();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, generateNewTarget, isDarkMode]);

  // 定期更换目标
  useEffect(() => {
    if (isDarkMode) return;

    const interval = setInterval(() => {
      if (!isScared && !isDisappearing && isVisible) {
        generateNewTarget();
      }
    }, 3000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, [generateNewTarget, isScared, isDisappearing, isVisible, isDarkMode]);

  // 处理鼠标悬停 - 害怕
  const handleMouseEnter = () => {
    setIsScared(true);
  };

  const handleMouseLeave = () => {
    setIsScared(false);
  };

  // 处理点击 - 消失
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // 保存点击时的视口位置用于显示消息（fixed 定位需要视口坐标）
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      setMessagePosition({ 
        x: containerRect.left + position.x, 
        y: containerRect.top + position.y 
      });
    }
    setIsDisappearing(true);
    setShowMessage(true);

    // 消失动画完成后隐藏
    setTimeout(() => {
      setIsVisible(false);
      setIsDisappearing(false);

      // 消息显示 2 秒后消失
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);

      // 8-15秒后重新出现
      respawnTimeoutRef.current = setTimeout(() => {
        // 重新定位到随机位置
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const margin = 60;
          setPosition({
            x: margin + Math.random() * (rect.width - margin * 2),
            y: margin + Math.random() * (containerRef.current.scrollHeight - margin * 2),
          });
        }
        generateNewTarget();
        setIsVisible(true);
      }, 8000 + Math.random() * 7000);
    }, 600);
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (respawnTimeoutRef.current) {
        clearTimeout(respawnTimeoutRef.current);
      }
    };
  }, []);

  // 暗黑模式下不显示
  if (isDarkMode) return null;

  return (
    <>
      {/* 消灭 BUG 提示消息 - 使用 Portal 渲染到 body 确保最顶层 */}
      {showMessage && typeof document !== "undefined" && createPortal(
        <div
          className="ladybug-message"
          style={{
            position: "fixed",
            left: messagePosition.x,
            top: messagePosition.y,
            transform: "translate(-50%, -50%)",
            zIndex: 99999,
            pointerEvents: "none",
          }}
        >
          <div className="ladybug-message-content">
            <span className="ladybug-message-icon">🎉</span>
            <span className="ladybug-message-text">消灭了一个BUG🐞！</span>
          </div>
        </div>,
        document.body
      )}

      {/* 瓢虫本体 */}
      {isVisible && (
    <div
      ref={bugRef}
      className={`ladybug ${isScared ? "ladybug-scared" : ""} ${isDisappearing ? "ladybug-disappearing" : ""}`}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        zIndex: 1, // 低于内容
        pointerEvents: "auto",
        cursor: "pointer",
        transition: isScared ? "transform 0.1s ease-out" : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      title="点击我试试~"
    >
      {/* 瓢虫 SVG */}
      <svg
        width="32"
        height="40"
        viewBox="0 0 32 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`ladybug-svg ${isScared ? "ladybug-shake" : "ladybug-walk"}`}
      >
        {/* 触角 */}
        <path
          d="M12 8 Q10 4 8 2"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 8 Q22 4 24 2"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* 头部 */}
        <ellipse cx="16" cy="10" rx="6" ry="5" fill="#1a1a1a" />

        {/* 眼睛 */}
        <circle cx="13" cy="9" r="2" fill="white" />
        <circle cx="19" cy="9" r="2" fill="white" />
        <circle
          cx={isScared ? "13" : "13.5"}
          cy={isScared ? "9" : "9.5"}
          r="1"
          fill="#1a1a1a"
        />
        <circle
          cx={isScared ? "19" : "19.5"}
          cy={isScared ? "9" : "9.5"}
          r="1"
          fill="#1a1a1a"
        />

        {/* 身体 */}
        <ellipse cx="16" cy="25" rx="12" ry="14" fill="#e53935" />

        {/* 中线 */}
        <line x1="16" y1="12" x2="16" y2="38" stroke="#1a1a1a" strokeWidth="2" />

        {/* 斑点 */}
        <circle cx="10" cy="20" r="2.5" fill="#1a1a1a" />
        <circle cx="22" cy="20" r="2.5" fill="#1a1a1a" />
        <circle cx="8" cy="28" r="2" fill="#1a1a1a" />
        <circle cx="24" cy="28" r="2" fill="#1a1a1a" />
        <circle cx="12" cy="33" r="1.8" fill="#1a1a1a" />
        <circle cx="20" cy="33" r="1.8" fill="#1a1a1a" />

        {/* 腿 - 左侧 */}
        <path
          d="M5 18 Q2 16 0 14"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="ladybug-leg-left"
        />
        <path
          d="M4 25 Q1 25 -1 24"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="ladybug-leg-left-2"
        />
        <path
          d="M5 32 Q2 34 0 36"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="ladybug-leg-left-3"
        />

        {/* 腿 - 右侧 */}
        <path
          d="M27 18 Q30 16 32 14"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="ladybug-leg-right"
        />
        <path
          d="M28 25 Q31 25 33 24"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="ladybug-leg-right-2"
        />
        <path
          d="M27 32 Q30 34 32 36"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="ladybug-leg-right-3"
        />
      </svg>

      {/* 害怕时的表情符号 */}
      {isScared && (
        <span
          className="absolute -top-6 left-1/2 -translate-x-1/2 text-lg animate-bounce"
          style={{ transform: `translateX(-50%) rotate(${-rotation}deg)` }}
        >
          😰
        </span>
      )}
    </div>
      )}
    </>
  );
}
