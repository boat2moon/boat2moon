"use client";

/**
 * NotesSection 记录近期思考与观点，辅助访客理解作者的工作方法论。
 * 采用序号圆形徽标，强化条目标识与节奏感。
 */
type NotesSectionProps = {
  notes: string[];
};

export default function NotesSection({ notes }: NotesSectionProps) {
  return (
    <section
      id="notes"
      className="rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50 p-10
        shadow-lg"
    >
      <div className="space-y-3 mb-6">
        <h2 className="text-3xl font-bold text-zinc-900">杂记</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
      </div>
      <div className="space-y-4 text-sm text-zinc-700">
        {notes.map((note, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span
              className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full
                bg-gradient-to-r from-cyan-500 to-blue-500 text-xs font-bold text-white"
            >
              {idx + 1}
            </span>
            <p className="leading-relaxed">{note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
