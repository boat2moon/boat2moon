"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * 太阳/月亮主题切换按钮。
 * ☀️ 太阳 = 当前浅色模式（点击切换到深色），🌙 月亮 = 当前深色模式（点击切换到浅色）。
 * 固定在页面右上角，带微动效。
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
      className={`fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full
        transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-sm shadow-lg
        cursor-pointer border ${
          isDark
            ? "bg-zinc-800/80 border-zinc-700 hover:shadow-indigo-500/20"
            : "bg-white/90 border-zinc-300 shadow-zinc-300/50 hover:shadow-amber-300/40"
        }`}
      aria-label={isDark ? "切换到浅色模式" : "切换到深色模式"}
      title={isDark ? "☀️ 切换到浅色" : "🌙 切换到深色"}
    >
      <div className="relative h-6 w-6">
        {/* 太阳图标 (浅色模式显示) */}
        <svg
          viewBox="0 0 24 24"
          className={`absolute inset-0 h-6 w-6 transition-all duration-500 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* 太阳中心 */}
          <circle cx="12" cy="12" r="4" fill="#f59e0b" stroke="#f59e0b" />
          {/* 光芒射线 */}
          <g className="text-amber-500" stroke="currentColor">
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
            <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
            <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
          </g>
        </svg>

        {/* 月亮图标 (深色模式显示) */}
        <svg
          viewBox="0 0 24 24"
          className={`absolute inset-0 h-6 w-6 transition-all duration-500 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="#a5b4fc"
            stroke="#818cf8"
            className="transition-colors duration-500"
          />
        </svg>
      </div>
    </button>
  );
}
