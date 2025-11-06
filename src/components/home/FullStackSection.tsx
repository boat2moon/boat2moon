"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TopicMeta } from "@/data/home";

/**
 * FullStackSection 概览全栈技术支撑点，用格栅布局突出六大能力面。
 * 每张卡片对应一条落地经验，便于快速扫描技术覆盖范围。
 */
type FullStackSectionProps = {
  topics: TopicMeta[];
};

export default function FullStackSection({ topics }: FullStackSectionProps) {
  return (
    <section id="fullstack" className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-zinc-900">全栈技术</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        <p className="text-sm text-zinc-600">核心技术支柱，覆盖研发链路的关键节点</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Card
            key={topic.title}
            className="border border-zinc-200/80 bg-white shadow-md transition-all duration-300
              hover:shadow-lg hover:border-cyan-400/50"
          >
            <CardHeader>
              <CardTitle className="text-lg">{topic.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-600 leading-relaxed">{topic.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
