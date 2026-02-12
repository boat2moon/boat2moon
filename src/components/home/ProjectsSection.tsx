"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectCarousel from "@/components/home/ProjectCarousel";
import type { ProjectMeta } from "@/data/home";

/**
 * ProjectsSection 列表化呈现代表性项目案例，展示从调研到交付的实战经验。
 * 通过 Card 组合与渐变 Tag 强调重点标签，支持可选的外部引用链接。
 */
type ProjectsSectionProps = {
  projects: ProjectMeta[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">主要项目案例</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          精选项目展示从调研、架构到交付的闭环能力
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link || "#"}
            target={project.link === "#" ? "_self" : "_blank"}
            className="block h-full"
          >
            <Card
              className="group flex h-full flex-col overflow-hidden border border-zinc-200/80
                bg-white shadow-md transition-all duration-300 hover:scale-[1.02]
                hover:border-cyan-400/50 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900
                dark:hover:bg-zinc-800/80"
            >
              {/* 图片/视频轮播区域 */}
              <ProjectCarousel media={project.media || []} title={project.title} />

              <CardHeader>
                <CardTitle
                  className="text-xl transition-colors group-hover:text-cyan-600 dark:text-zinc-100"
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
