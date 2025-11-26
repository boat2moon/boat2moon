"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          <Card
            key={project.title}
            className="group border border-zinc-200/80 bg-white dark:bg-zinc-900
              dark:border-zinc-800 shadow-md transition-all duration-300 hover:shadow-xl
              hover:scale-[1.02] hover:border-cyan-400/50 dark:hover:bg-zinc-800/80"
          >
            <CardHeader>
              <CardTitle
                className="text-xl group-hover:text-cyan-600 transition-colors dark:text-zinc-100"
              >
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm dark:text-zinc-400">
                {project.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={`${project.title}-${tag}`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                >
                  {tag}
                </Badge>
              ))}
              {project.reference ? (
                <a
                  className="text-xs text-zinc-500 underline-offset-4 transition hover:text-cyan-600
                    hover:underline"
                  href={project.reference}
                  target="_blank"
                  rel="noreferrer"
                >
                  参考链接 →
                </a>
              ) : null}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
