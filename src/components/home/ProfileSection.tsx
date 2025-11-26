"use client";

/**
 * ProfileSection 承载个人简介模块，强调身份定位与核心能力。
 * 通过分栏布局保持视觉平衡，辅以色块强化信息分区。
 */
export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="grid gap-8 rounded-3xl border border-zinc-200/80 bg-white/90 dark:bg-zinc-900/90
        dark:border-zinc-800 p-10 shadow-lg backdrop-blur lg:grid-cols-[0.4fr_1.6fr]"
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">个人简介</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
      </div>
      <div className="space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          Hello~，我是一名AI复合型程序员。熟悉JS/TS前后端开发生态，积极参与开源，实现A/B/C端业务闭环交付，了解项目工程化及CI/CD线上部署流程，并具有一定交叉行业不同业务场景下的AI算法和应用调优经验，综合赋能AI大模型应用全栈开发。
        </p>
      </div>
    </section>
  );
}
