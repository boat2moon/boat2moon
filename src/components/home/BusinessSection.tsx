"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TopicMeta } from "@/data/home";

/**
 * BusinessSection 聚焦业务赋能主题，强调“如何创造业务价值”的行动方案。
 * 通过紫色系 Hover 强调，暗示策略性的内容属性。
 */
type BusinessSectionProps = {
  items: TopicMeta[];
};

export default function BusinessSection({ items }: BusinessSectionProps) {
  return (
    <section id="business" className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">业务赋能</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          聚焦&ldquo;如何创造可衡量的业务价值&rdquo;
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.title}
            className="border border-zinc-200/80 bg-white dark:bg-zinc-900 dark:border-zinc-800
              shadow-md transition-all duration-300 hover:shadow-lg hover:border-purple-400/50
              dark:hover:bg-zinc-800/80"
          >
            <CardHeader>
              <CardTitle className="text-lg dark:text-zinc-100">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
