"use client";

import { useEffect, useState } from "react";

import BusinessSection from "@/components/home/BusinessSection";
import FullStackSection from "@/components/home/FullStackSection";
import HeroSection from "@/components/home/HeroSection";
import NotesSection from "@/components/home/NotesSection";
import OmniSection from "@/components/home/OmniSection";
import ProfileSection from "@/components/home/ProfileSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import StickyFooter from "@/components/home/StickyFooter";
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
        className="relative z-10 bg-gradient-to-b from-zinc-100 via-zinc-50 to-white pb-24 pt-16
          text-zinc-900"
      >
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
