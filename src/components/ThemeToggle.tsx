"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * 灯泡主题切换按钮。
 * 亮灯 = 浅色模式，灭灯 = 深色模式。
 * 固定在页面右上角，带发光脉冲动画。
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // 避免 SSR 水合不匹配
  useEffect(() => setMounted(true), []);

  // 简历页不显示切换按钮
  if (pathname === "/resume") return null;

  if (!mounted) {
    // 占位：避免布局抖动
    return <div className="fixed right-4 top-4 z-50 h-10 w-10" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full
        transition-all duration-300 hover:scale-110 active:scale-95 bg-zinc-200/80
        dark:bg-zinc-800/80 backdrop-blur-sm shadow-md hover:shadow-lg cursor-pointer"
      aria-label={isDark ? "切换到浅色模式" : "切换到深色模式"}
      title={isDark ? "💡 开灯" : "🌙 关灯"}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-6 w-6 transition-all duration-500 ${
          isDark
            ? "text-zinc-400 drop-shadow-none"
            : "text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
          }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 灯泡主体 */}
        <path
          d="M9 21h6M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z"
          fill={isDark ? "none" : "currentColor"}
          className="transition-all duration-500"
        />
        {/* 灯泡底部螺纹 */}
        <path d="M10 17h4M10 19h4" />
        {/* 亮灯时的光芒线 */}
        {!isDark && (
          <g className="animate-pulse" style={{ animationDuration: "2s" }}>
            <line x1="12" y1="1" x2="12" y2="0" strokeWidth="2" />
            <line x1="4.22" y1="4.22" x2="3.51" y2="3.51" strokeWidth="2" />
            <line x1="1" y1="12" x2="0" y2="12" strokeWidth="2" />
            <line x1="19.78" y1="4.22" x2="20.49" y2="3.51" strokeWidth="2" />
            <line x1="23" y1="12" x2="24" y2="12" strokeWidth="2" />
          </g>
        )}
      </svg>
    </button>
  );
}
