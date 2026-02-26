"use client";

import dynamic from "next/dynamic";
import MatrixRocketPlaceholder from "@/components/MatrixRocketPlaceholder";

// 预加载 echarts 相关 chunks —— 和 next/dynamic 加载组件代码并行
// 这样当 RocketWordCloud 挂载后 useEffect 中的 import() 可直接命中缓存
if (typeof window !== "undefined") {
  import("echarts/core");
  import("echarts/renderers");
  import("echarts/components");
  import("echarts-wordcloud");
}

const RocketWordCloud = dynamic(() => import("@/components/RocketWordCloud"), {
  ssr: false,
  loading: () => <MatrixRocketPlaceholder />,
});

/**
 * HeroSection 负责渲染首屏的太空主题展示，包括词云火箭与月球/地球装饰。
 * 该区域通过粘性布局与动效营造沉浸感，并承担吸引滚动的引导作用。
 */
export default function HeroSection() {
  return (
    <section className="relative h-[100svh] overflow-hidden">
      <div className="sticky top-0 isolate flex h-[100svh] flex-col justify-center">
        {/* 背景层：利用径向渐变与散点实现深空氛围 */}
        <div className="absolute inset-0 -z-20 bg-black">
          <div
            className="absolute inset-0
              bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1),_rgba(0,0,0,1))]"
          />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                              radial-gradient(2px 2px at 60% 70%, white, transparent),
                              radial-gradient(1px 1px at 50% 50%, white, transparent),
                              radial-gradient(1px 1px at 80% 10%, white, transparent),
                              radial-gradient(2px 2px at 90% 60%, white, transparent),
                              radial-gradient(1px 1px at 33% 50%, white, transparent),
                              radial-gradient(1px 1px at 66% 33%, white, transparent)`,
              backgroundSize: "200% 200%",
              backgroundPosition: "0% 0%, 40% 40%, 80% 80%, 30% 90%, 70% 20%, 50% 60%, 90% 40%",
            }}
          />
        </div>

        <div
          className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 sm:px-10 lg:grid-cols-2
            lg:gap-16 lg:px-16"
        >
          {/* 左侧词云火箭：突出技能栈与视觉记忆点 */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg h-[320px] sm:h-[400px] lg:h-[500px]">
              {/* 标题 - 移动端放大并贴合屏幕宽度 */}
              <h2
                className="mb-4 sm:mb-6 text-center text-zinc-400 text-base tracking-[0.2em] px-2
                  sm:text-sm sm:tracking-[0.3em] sm:px-0"
              >
                <span className="hidden sm:inline">
                  JS/TS全栈开发 · AI/大模型应用开发 · 网站逐步构建中···
                </span>
                <span className="sm:hidden">全栈开发 · AI应用开发 · 构建中···</span>
              </h2>
              <RocketWordCloud />
            </div>
          </div>

          {/* 右侧星球组：以渐变与投影呈现层次感 */}
          <div className="relative flex items-center justify-center">
            {/* 外层容器保持固定尺寸，内部整体缩放 */}
            <div
              className="relative h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] lg:h-[500px]
                lg:w-[500px]"
            >
              {/* 月球整体使用 scale 缩放，保持环形坑相对位置 */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.6]
                  sm:scale-[0.8] lg:scale-100 transition-transform duration-300"
              >
                <div className="relative h-80 w-80">
                  <div
                    className="absolute inset-0 rounded-full
                      bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.15),transparent_70%)]
                      blur-2xl"
                  />
                  <div
                    className="relative h-full w-full rounded-full bg-gradient-to-br from-zinc-300
                      via-zinc-400 to-zinc-600
                      shadow-[inset_-10px_-10px_60px_rgba(0,0,0,0.6),0_0_80px_rgba(161,161,170,0.4)]
                      animate-[spin_60s_linear_infinite]"
                  >
                    <div
                      className="absolute left-[20%] top-[15%] h-12 w-12 rounded-full bg-zinc-500/60
                        shadow-[inset_2px_2px_8px_rgba(0,0,0,0.7)]"
                    />
                    <div
                      className="absolute left-[60%] top-[30%] h-8 w-8 rounded-full bg-zinc-500/50
                        shadow-[inset_1px_1px_6px_rgba(0,0,0,0.6)]"
                    />
                    <div
                      className="absolute left-[40%] top-[60%] h-16 w-16 rounded-full bg-zinc-500/70
                        shadow-[inset_3px_3px_10px_rgba(0,0,0,0.8)]"
                    />
                    <div
                      className="absolute left-[70%] top-[70%] h-10 w-10 rounded-full bg-zinc-500/55
                        shadow-[inset_2px_2px_7px_rgba(0,0,0,0.7)]"
                    />
                    <div
                      className="absolute left-[15%] top-[75%] h-6 w-6 rounded-full bg-zinc-500/45
                        shadow-[inset_1px_1px_5px_rgba(0,0,0,0.6)]"
                    />
                    <div
                      className="absolute left-[25%] top-[25%] h-24 w-24 rounded-full
                        bg-gradient-to-br from-white/30 to-transparent blur-xl"
                    />
                  </div>
                </div>
              </div>

              {/* 地球 - 响应式定位避免与月球重叠 */}
              <div className="absolute -right-2 -top-4 sm:right-4 sm:top-2 lg:right-8 lg:top-8">
                <div
                  className="relative h-24 w-24 scale-[0.5] sm:scale-[0.65] lg:scale-100
                    transition-transform duration-300"
                >
                  <div
                    className="absolute inset-0 rounded-full
                      bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.3),transparent_70%)]
                      blur-lg"
                  />
                  <div
                    className="relative h-full w-full rounded-full bg-gradient-to-br from-blue-400
                      via-blue-500 to-green-600
                      shadow-[inset_-8px_-8px_30px_rgba(0,0,0,0.5),0_0_40px_rgba(59,130,246,0.3)]
                      animate-[spin_90s_linear_infinite]"
                  >
                    <div
                      className="absolute inset-0 rounded-full
                        bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.3),transparent_50%)]"
                    />
                    <div
                      className="absolute inset-0 rounded-full
                        bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.2),transparent_40%)]"
                    />
                    <div
                      className="absolute left-[30%] top-[30%] h-8 w-8 rounded-full bg-white/40
                        blur-sm"
                    />
                  </div>
                </div>
              </div>

              <div
                className="absolute left-[10%] top-[20%] h-1 w-1 rounded-full bg-white/80
                  animate-pulse"
              />
              <div
                className="absolute left-[80%] top-[40%] h-1 w-1 rounded-full bg-white/60
                  animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute left-[25%] top-[85%] h-1 w-1 rounded-full bg-white/70
                  animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>

        {/* 滚动提示：引导用户探索下方内容 */}
        <div
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col
            items-center gap-2 animate-bounce z-10"
        >
          <span
            className="text-xs sm:text-sm text-zinc-400 tracking-wider sm:tracking-widest
              bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm"
          >
            盼星星 盼月亮 盼Offer 🙋‍♂️
          </span>
          <svg
            className="w-6 h-6 text-zinc-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
