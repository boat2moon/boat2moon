"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TopicMeta } from "@/data/home";

/**
 * OmniSection 汇总多端协同交付的经验点，突出跨端一致性与技术选型。
 * 采用与全栈模块一致的卡片体系，保持页面视觉节奏统一。
 */
type OmniSectionProps = {
  deliveries: TopicMeta[];
};

export default function OmniSection({ deliveries }: OmniSectionProps) {
  return (
    <section id="omni" className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-zinc-900">全端开发</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        <p className="text-sm text-zinc-600">多端协同交付的知识图谱</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {deliveries.map((item) => (
          <Card
            key={item.title}
            className="border border-zinc-200/80 bg-white shadow-md transition-all duration-300
              hover:shadow-lg hover:border-blue-400/50"
          >
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
