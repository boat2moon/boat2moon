"use client";

import { useEffect, useRef, useState } from "react";

import BusinessSection from "@/components/home/BusinessSection";
import FullStackSection from "@/components/home/FullStackSection";
import HeroSection from "@/components/home/HeroSection";
import NotesSection from "@/components/home/NotesSection";
import OmniSection from "@/components/home/OmniSection";
import ProfileSection from "@/components/home/ProfileSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import StickyFooter from "@/components/home/StickyFooter";
import Ladybug from "@/components/Ladybug";
import {
  businessEmpowerment,
  friendLinks,
  fullStackFocus,
  omniDeliveries,
  projects,
  recentNotes,
} from "@/data/home";

/**
 * Home 页面作为入口，统一组织首屏动效、主体内容与粘性页脚。
 * 通过组件化拆分，让视觉区域与数据配置解耦，便于后续维护与扩展。
 */
export default function Home() {
  const [showFooter, setShowFooter] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 监听滚动位置：当视口滚动离开首屏约 50px 时，触发底部导航上浮
    const handleScroll = () => {
      setShowFooter(window.scrollY > window.innerHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // 组件卸载需同步移除监听，避免内存泄漏
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* 首屏动效区域：词云火箭与行星场景 */}
      <HeroSection />

      {/* 主体内容区：浅色背景承载核心信息模块 */}
      <main
        ref={mainRef}
        className="relative z-10 bg-gradient-to-b from-zinc-100 via-zinc-50 to-white
          dark:from-zinc-950 dark:via-zinc-900 dark:to-black pb-24 pt-16 text-zinc-900
          dark:text-zinc-100"
      >
        {/* 虫子组件 - 浅色模式瓢虫/深色模式UFO */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div className="pointer-events-auto">
            <Ladybug containerRef={mainRef} />
          </div>
        </div>

        {/* 暗黑模式下的星星背景装饰 */}
        <div className="absolute inset-0 hidden dark:block pointer-events-none overflow-hidden">
          {/* 第一层星星：慢速呼吸 */}
          <div
            className="absolute inset-0 opacity-40 animate-twinkle-slow"
            style={{
              backgroundImage: `radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.7), transparent),
                              radial-gradient(2px 2px at 60% 70%, rgba(255,255,255,0.7), transparent),
                              radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.6), transparent),
                              radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.7), transparent),
                              radial-gradient(2px 2px at 90% 60%, rgba(255,255,255,0.6), transparent),
                              radial-gradient(1px 1px at 33% 50%, rgba(255,255,255,0.7), transparent),
                              radial-gradient(1px 1px at 66% 33%, rgba(255,255,255,0.6), transparent)`,
              backgroundSize: "800px 800px",
              backgroundRepeat: "repeat",
            }}
          />
          {/* 第二层星星：稍快呼吸，增加层次感 */}
          <div
            className="absolute inset-0 opacity-30 animate-twinkle"
            style={{
              backgroundImage: `radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.6), transparent),
                              radial-gradient(2px 2px at 40% 45%, rgba(255,255,255,0.6), transparent),
                              radial-gradient(1px 1px at 70% 85%, rgba(255,255,255,0.6), transparent),
                              radial-gradient(2px 2px at 85% 25%, rgba(255,255,255,0.6), transparent)`,
              backgroundSize: "650px 650px",
              backgroundRepeat: "repeat",
            }}
          />
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 sm:px-10 lg:px-16">
          <ProfileSection />
          <ProjectsSection projects={projects} />
          <FullStackSection topics={fullStackFocus} />
          <OmniSection deliveries={omniDeliveries} />
          <BusinessSection items={businessEmpowerment} />
          <NotesSection notes={recentNotes} />

          {/* 占位符：确保底部内容不被粘性页脚遮挡 */}
          <div className="h-20" />
        </div>
      </main>

      {/* 粘性底栏：联动滚动状态展示联系信息 */}
      <StickyFooter showFooter={showFooter} friendLinks={friendLinks} />
    </div>
  );
}
