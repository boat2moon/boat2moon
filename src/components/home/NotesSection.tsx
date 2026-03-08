"use client";

import Image from "next/image";

/**
 * NotesSection 记录近期思考与观点，辅助访客理解作者的工作方法论。
 * 采用序号圆形徽标，强化条目标识与节奏感。
 * 右侧展示 OG 预览图，增强视觉丰富度。
 */
type NotesSectionProps = {
  notes: string[];
};

export default function NotesSection({ notes }: NotesSectionProps) {
  return (
    <section
      id="notes"
      className="rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50
        dark:from-zinc-900 dark:to-zinc-950 dark:border-zinc-800 p-10 shadow-lg"
    >
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        {/* 左侧：标题 + 笔记列表 */}
        <div className="flex-1 min-w-0">
          <div className="space-y-3 mb-6">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              杂记（整理迁移中...）
            </h2>
            <div className="h-1 w-16 bg-zinc-800 dark:bg-zinc-200 rounded-full" />
          </div>
          <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
            {notes.map((note, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full
                    bg-zinc-800 dark:bg-zinc-200 text-xs font-bold text-white dark:text-zinc-900"
                >
                  {idx + 1}
                </span>
                <p className="leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：OG 预览图 */}
        <div className="sm:w-80 w-full shrink-0">
          <div
            className="overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-700/60
              shadow-md"
          >
            <Image
              src="/og-image.png"
              alt="boat2moon 预览图"
              width={600}
              height={315}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
