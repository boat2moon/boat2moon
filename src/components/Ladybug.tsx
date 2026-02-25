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
 * 可爱的虫子组件
 * - 浅色模式：红色瓢虫在地面爬行
 * - 深色模式：驾驶 UFO 的虫子在太空飞行
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
  // X 轴移动方向：1 向右，-1 向左（乒乓式移动）
  const xDirectionRef = useRef<number>(Math.random() > 0.5 ? 1 : -1);

  // 检测暗黑模式 - 监听 html class 变化（next-themes 通过 class 控制主题）
  useEffect(() => {
    const checkDarkMode = () => {
      // next-themes 通过在 html 上添加 dark/light class 控制主题
      const hasDarkClass = document.documentElement.classList.contains("dark");
      setIsDarkMode(hasDarkClass);
    };

    checkDarkMode();

    // 监听 html class 变化，next-themes 切换时会立即触发
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // 生成新的随机 Y 轴目标位置（X 轴使用乒乓式碰壁反弹）
  const generateNewTarget = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Y 轴使用容器高度（只在主体内容区上下范围内移动）
    const margin = 60;
    const y = margin + Math.random() * (container.scrollHeight - margin * 2);

    // 只更新 Y 轴目标，X 轴保持当前位置（由乒乓逻辑控制）
    targetRef.current = { x: targetRef.current.x, y };
  }, [containerRef]);

  // 动画循环
  const animate = useCallback(() => {
    if (isScared || isDisappearing || !isVisible) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    if (!containerRef.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const margin = 60;
    const screenWidth = window.innerWidth;
    // 计算相对于容器的 X 轴边界
    const minX = margin - containerRect.left;
    const maxX = screenWidth - margin - containerRect.left;

    setPosition((prev) => {
      const target = targetRef.current;
      const dy = target.y - prev.y;

      // 计算移动速度
      const speed = isDarkMode ? 1.2 : 0.8; // UFO 飞得更快

      // X 轴：乒乓式移动（持续向一个方向，碰壁反弹）
      let newX = prev.x + xDirectionRef.current * speed;

      // 检测是否碰到边界，碰到就反向
      if (newX >= maxX) {
        newX = maxX;
        xDirectionRef.current = -1; // 反向向左
      } else if (newX <= minX) {
        newX = minX;
        xDirectionRef.current = 1; // 反向向右
      }

      // Y 轴：保持向目标点移动的逻辑
      const yDistance = Math.abs(dy);
      let newY = prev.y;

      if (yDistance > 10) {
        // 向目标移动
        newY = prev.y + (dy / yDistance) * speed;
      } else {
        // 接近目标时生成新的 Y 轴目标
        generateNewTarget();
      }

      // 更新旋转角度（朝向移动方向）
      const angle = Math.atan2(dy, xDirectionRef.current) * (180 / Math.PI) + 90;
      setRotation(angle);

      return { x: newX, y: newY };
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [isScared, isDisappearing, isVisible, generateNewTarget, isDarkMode, containerRef]);

  // 初始化和动画
  useEffect(() => {
    generateNewTarget();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, generateNewTarget]);

  // 定期更换目标
  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!isScared && !isDisappearing && isVisible) {
          generateNewTarget();
        }
      },
      3000 + Math.random() * 4000,
    );

    return () => clearInterval(interval);
  }, [generateNewTarget, isScared, isDisappearing, isVisible]);

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
        y: containerRect.top + position.y,
      });
    }
    setIsDisappearing(true);
    setShowMessage(true);

    // 消失动画完成后隐藏
    setTimeout(() => {
      setIsVisible(false);
      setIsDisappearing(false);

      // 消息显示 3 秒后消失
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);

      // 8-15秒后重新出现
      respawnTimeoutRef.current = setTimeout(
        () => {
          // 重新定位到屏幕左侧或右侧边缘（优先出现在两侧）
          if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const margin = 60;
            const screenWidth = window.innerWidth;
            const minX = margin - containerRect.left;
            const maxX = screenWidth - margin - containerRect.left;
            // 随机选择出现在左侧还是右侧
            const startFromLeft = Math.random() > 0.5;
            xDirectionRef.current = startFromLeft ? 1 : -1; // 设置初始方向
            setPosition({
              x: startFromLeft ? minX : maxX,
              y: margin + Math.random() * (containerRef.current.scrollHeight - margin * 2),
            });
          }
          generateNewTarget();
          setIsVisible(true);
        },
        8000 + Math.random() * 7000,
      );
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

  // 根据模式选择不同的消息文案
  const getMessage = () => {
    return isDarkMode ? "消灭了一个BUG🐞！" : "消灭了一个BUG🐞！";
  };

  return (
    <>
      {/* 消灭 BUG 提示消息 - 使用 Portal 渲染到 body 确保最顶层 */}
      {showMessage &&
        typeof document !== "undefined" &&
        createPortal(
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
              <span className="ladybug-message-icon">{isDarkMode ? "🛸" : "🎉"}</span>
              <span className="ladybug-message-text">{getMessage()}</span>
            </div>
          </div>,
          document.body,
        )}

      {/* 虫子本体 */}
      {isVisible && (
        <div
          ref={bugRef}
          className={`ladybug ${isDarkMode ? "ladybug-ufo" : ""} ${isScared ? "ladybug-scared" : ""}
          ${isDisappearing ? "ladybug-disappearing" : ""}`}
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            transform: `translate(-50%, -50%) rotate(${isDarkMode ? 0 : rotation}deg)`,
            zIndex: 1, // 低于内容
            pointerEvents: "auto",
            cursor: "pointer",
            transition: isScared ? "transform 0.1s ease-out" : "none",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          title={isDarkMode ? "点击击落 UFO~" : "点击我试试~"}
        >
          {isDarkMode ? (
            /* UFO 虫子 SVG - 深色模式 */
            <svg
              width="64"
              height="48"
              viewBox="0 0 48 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`ufo-svg ${isScared ? "ufo-shake" : "ufo-float"}`}
            >
              {/* UFO 光束 */}
              <path d="M18 32 L24 24 L30 32" fill="rgba(100, 255, 218, 0.3)" className="ufo-beam" />
              <path
                d="M15 36 L24 26 L33 36"
                fill="rgba(100, 255, 218, 0.15)"
                className="ufo-beam-outer"
              />

              {/* UFO 底盘 */}
              <ellipse cx="24" cy="22" rx="16" ry="5" fill="url(#ufoGradient)" />

              {/* UFO 底部灯光 */}
              <circle cx="16" cy="22" r="2" fill="#64ffda" className="ufo-light" />
              <circle
                cx="24"
                cy="23"
                r="2"
                fill="#64ffda"
                className="ufo-light"
                style={{ animationDelay: "0.2s" }}
              />
              <circle
                cx="32"
                cy="22"
                r="2"
                fill="#64ffda"
                className="ufo-light"
                style={{ animationDelay: "0.4s" }}
              />

              {/* UFO 舱体 - 玻璃罩 */}
              <ellipse
                cx="24"
                cy="18"
                rx="10"
                ry="8"
                fill="url(#glassGradient)"
                stroke="#64ffda"
                strokeWidth="1"
              />

              {/* 虫子驾驶员 */}
              {/* 虫子身体 */}
              <ellipse cx="24" cy="16" rx="5" ry="4" fill="#7cb342" />

              {/* 虫子头部 */}
              <circle cx="24" cy="11" r="4" fill="#8bc34a" />

              {/* 虫子眼睛 */}
              <circle cx="22" cy="10" r="2" fill="white" />
              <circle cx="26" cy="10" r="2" fill="white" />
              <circle
                cx={isScared ? "22" : "22.5"}
                cy={isScared ? "10" : "10.5"}
                r="1"
                fill="#1a1a1a"
              />
              <circle
                cx={isScared ? "26" : "26.5"}
                cy={isScared ? "10" : "10.5"}
                r="1"
                fill="#1a1a1a"
              />

              {/* 虫子触角 */}
              <path
                d="M21 7 Q19 4 17 2"
                stroke="#7cb342"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M27 7 Q29 4 31 2"
                stroke="#7cb342"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* 触角尖端小球 */}
              <circle cx="17" cy="2" r="1.5" fill="#aed581" />
              <circle cx="31" cy="2" r="1.5" fill="#aed581" />

              {/* 渐变定义 */}
              <defs>
                <linearGradient id="ufoGradient" x1="8" y1="22" x2="40" y2="22">
                  <stop offset="0%" stopColor="#455a64" />
                  <stop offset="50%" stopColor="#78909c" />
                  <stop offset="100%" stopColor="#455a64" />
                </linearGradient>
                <radialGradient id="glassGradient" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="rgba(100, 255, 218, 0.4)" />
                  <stop offset="100%" stopColor="rgba(69, 90, 100, 0.6)" />
                </radialGradient>
              </defs>
            </svg>
          ) : (
            /* 瓢虫 SVG - 浅色模式 */
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
          )}

          {/* 害怕时的表情符号 */}
          {isScared && (
            <span
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-lg animate-bounce"
              style={{ transform: `translateX(-50%) rotate(${isDarkMode ? 0 : -rotation}deg)` }}
            >
              {isDarkMode ? "😱" : "😰"}
            </span>
          )}
        </div>
      )}
    </>
  );
}
