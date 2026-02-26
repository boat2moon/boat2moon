"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectCarousel from "@/components/home/ProjectCarousel";
import type { ProjectMeta } from "@/data/home";

/**
 * ProjectsSection 列表化呈现代表性项目案例，展示从调研到交付的实战经验。
 * 通过 Card 组合与渐变 Tag 强调重点标签，支持可选的外部引用链接。
 *
 * 移动端触摸屏：第一次点击显示悬浮选中效果，再次点击才跳转。
 */
type ProjectsSectionProps = {
  projects: ProjectMeta[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  // 当前在移动端被"选中"（悬浮态）的卡片索引
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // 用于区分 touch 和 mouse 事件
  const isTouchRef = useRef(false);

  // 检测触摸事件，标记为触摸设备
  const handleTouchStart = useCallback(() => {
    isTouchRef.current = true;
  }, []);

  // 触摸设备上拦截点击：第一次选中，第二次跳转
  const handleClick = useCallback(
    (e: React.MouseEvent, index: number, link: string) => {
      if (!isTouchRef.current) return; // 桌面鼠标直接走默认行为
      if (link === "#") return; // 无链接的卡片不拦截

      if (activeIndex !== index) {
        // 第一次点击：阻止跳转，显示选中态
        e.preventDefault();
        setActiveIndex(index);
      }
      // 第二次点击（activeIndex === index）：不阻止，正常跳转
    },
    [activeIndex],
  );

  // 点击其他地方取消选中
  const handleContainerClick = useCallback(
    (e: React.MouseEvent) => {
      if (activeIndex === null) return;
      // 如果点击的不是卡片内部，取消选中
      const target = e.target as HTMLElement;
      if (!target.closest("[data-project-card]")) {
        setActiveIndex(null);
      }
    },
    [activeIndex],
  );

  return (
    <section id="projects" className="space-y-8" onClick={handleContainerClick}>
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">主要项目案例</h2>
        <div className="h-1 w-16 bg-zinc-800 dark:bg-zinc-200 rounded-full" />
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          精选项目展示从调研、架构到交付的闭环能力
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={project.link || "#"}
            target={project.link === "#" ? "_self" : "_blank"}
            className="block h-full"
            data-project-card
            onTouchStart={handleTouchStart}
            onClick={(e) => handleClick(e, index, project.link || "#")}
          >
            <Card
              className={`group flex h-full flex-col overflow-hidden border border-zinc-200/80
              bg-white shadow-md transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900
              ${
                activeIndex === index
                  ? `scale-[1.02] border-zinc-900/50 shadow-xl dark:border-zinc-100/50
                    dark:bg-zinc-800/80`
                  : `hover:scale-[1.02] hover:border-zinc-900/50 hover:shadow-xl
                    dark:hover:border-zinc-100/50 dark:hover:bg-zinc-800/80`
              }`}
            >
              {/* 图片/视频轮播区域 */}
              <ProjectCarousel media={project.media || []} title={project.title} />

              <CardHeader>
                <CardTitle
                  className={`text-xl transition-colors ${
                    activeIndex === index
                      ? "text-zinc-900 dark:text-zinc-100"
                      : `group-hover:text-zinc-900 dark:text-zinc-300
                        dark:group-hover:text-zinc-100`
                  }`}
                >
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <p className="leading-relaxed">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={`${project.title}-${tag}`}
                    className="border border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100
                      dark:border-zinc-700 dark:bg-zinc-800/40 dark:text-zinc-300
                      dark:hover:bg-zinc-800 transition-colors font-normal px-2.5 py-0.5 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
