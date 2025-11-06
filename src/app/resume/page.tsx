/**
 * ResumePage 暂作为简历内容的占位页，后续可补充详细的履历信息。
 * 使用简洁布局提供归档入口，并提示正在施工。
 */
export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-100 via-white to-zinc-50">
      <div
        className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center
          text-zinc-700"
      >
        <h1 className="text-4xl font-bold text-zinc-900">简历页准备中</h1>
        <p className="text-base leading-relaxed">
          感谢关注！我正在整理详细的项目经历与技能亮点，完成后将第一时间更新到此页面。
        </p>
        <p className="text-sm text-zinc-500">
          如需获取最新的简历版本，可以通过页脚中的邮箱或 GitHub 联系我。
        </p>
      </div>
    </main>
  );
}
