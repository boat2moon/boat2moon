import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RocketWordCloud from "@/components/RocketWordCloud";

type ProjectMeta = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  reference?: string;
};

const projects: ProjectMeta[] = [
  {
    title: "入木 AI",
    subtitle: "AIGC 工具链，沉淀企业知识的多模态生产力平台",
    description:
      "构建语义检索、提示治理与多模态素材管线，交付运营侧快速搭建营销资产的闭环工具，支撑日常上新效率提升 3 倍。",
    tags: ["AIGC", "全栈", "B 端"],
  },
  {
    title: "伯乐 Talk",
    subtitle: "人才服务对话机器人，AI 驱动的 HR 智能助手",
    description:
      "打造候选人画像 + 岗位画像的匹配评分模型，落地候选人问答与推荐推送，实现客服人力节省 60%。",
    tags: ["AI 应用", "前端", "服务端"],
  },
  {
    title: "Nest 后端基座",
    subtitle: "面向多业务线的领域驱动服务 Skeleton",
    description:
      "集中封装认证、配置化 RBAC、审计日志、消息队列适配等能力，统一部署流程，让新业务线上架周期由周降至天。",
    tags: ["NestJS", "后端", "CI/CD"],
  },
  {
    title: "多端协同项目",
    subtitle: "一套业务逻辑覆盖 Web / 桌面 / 小程序",
    description:
      "通过微前端 + BFF 组合拳，统一接口契约与状态管理，交付营销活动的多端体验，新增渠道 2 周内完成上线。",
    tags: ["全端", "微前端", "A/B/C"],
    reference: "https://gemini.google.com/app/fd9ab82994ff0d1b",
  },
  {
    title: "仿扣子 / Dify 工作流",
    subtitle: "低门槛可视化 AI 工作流",
    description:
      "实现可视化节点编排、变量调试与推理模板化，帮助运营团队在无工程师介入的情况下上线对话流程。",
    tags: ["Workflow", "AIGC", "低代码"],
  },
  {
    title: "数字孪生",
    subtitle: "城市级 3D 资产管理 / 驾培仿真平台",
    description: "整合 WebGL + 实时数据同步，驱动多场景监控与模拟决策，构建 AI 推演迭代闭环。",
    tags: ["数字孪生", "实时系统", "全栈"],
  },
  {
    title: "Web3 即服务",
    subtitle: "链上交互与后台运营一体化",
    description:
      "梳理 DID、NFT、交易看板的通用组件，建立上链合规流程与灰度策略，为品牌活动提供可信激励。",
    tags: ["Web3", "全栈", "合规"],
  },
];

const fullStackFocus = [
  {
    title: "全栈开发之前端",
    description:
      "以组件自治 + 状态分层为核心，构建可预期的交互体验，结合 Design Token 与 Storybook 保持风格统一。",
  },
  {
    title: "全栈开发之大前端",
    description:
      "跨 Web / 小程序 / 桌面端复用业务模型，利用模块联邦与跨端渲染管线打造一致的研发体验。",
  },
  {
    title: "全栈开发之微前端",
    description:
      "建设基于 Module Federation 的应用拼装平台，支持跨团队独立发布，同时引入观测与沙箱隔离策略。",
  },
  {
    title: "全栈开发之后端",
    description: "聚焦事件驱动 + DDD，拆解核心域、支撑域，建立统一的服务治理与可观测性基线。",
  },
  {
    title: "全栈开发之 CI/CD",
    description:
      "流水线覆盖测试、扫描、部署、回滚四大环节，沉淀 GitOps 流程，实现灰度、蓝绿、热修复的自动化。",
  },
  {
    title: "全栈开发之安全/性能",
    description: "自顶向下梳理安全策略（认证、权限、审计）与性能守护（压测、APM、前端体验分级）。",
  },
];

const omniDeliveries = [
  {
    title: "WEB 端",
    description: "SSR + SSG 混合渲染，结合 Edge Functions 与 Web Worker 构建实时体验。",
  },
  {
    title: "PC 桌面端",
    description: "Electron / Tauri 多容器共存，封装自动更新通道与插件化体系。",
  },
  {
    title: "移动 APP 端",
    description: "React Native 与 Flutter 双栈策略，接入动态化配置与数据埋点闭环。",
  },
  {
    title: "小程序端",
    description: "统一 BFF 透出聚合接口，低成本同步微信 / 支付宝 / 企业端小程序体验。",
  },
  {
    title: "后台服务端",
    description:
      "利用 Nest + GraphQL + gRPC 构建业务支撑与外部开放接口，配合 API Gateway 提升安全。",
  },
  {
    title: "A/B/C 端闭环",
    description: "围绕客户（C）、合作伙伴（B）、内部团队（A）建立统一的指标体系和交付节奏。",
  },
];

const businessEmpowerment = [
  {
    title: "全栈开发之 AI 应用",
    description: "面向业务流程构建提示工程、模型评测、上线监控三件套，帮助团队快速验证并持续优化。",
  },
  {
    title: "全栈开发之 WEB3（慎重点击）",
    description: "聚焦 DID、NFT、智能合约审计，攻击面评估 + 合规研究并行，确保品牌资产安全落链。",
  },
  {
    title: "全栈开发之电商独立站",
    description: "营销漏斗 + SEO 优化双线推进，沉淀数据飞轮与自动化营销工具，实现增长闭环。",
  },
];

const recentNotes = [
  "LLM 深入业务前需先明确价值指标，技术演示≠商业闭环。",
  "多端研发的本质是规范协作，工具只是加速器。",
  "工程效率与业务创新并不冲突，关键在于自动化的覆盖深度。",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* 装饰面板 - 太空背景区域 */}
      <section className="relative h-screen overflow-hidden">
        <div className="sticky top-0 isolate flex h-screen flex-col justify-center">
          {/* 太空背景 - 星空效果 */}
          <div className="absolute inset-0 -z-20 bg-black">
            <div
              className="absolute inset-0
                bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1),_rgba(0,0,0,1))]"
            />
            {/* 星星点点效果 */}
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
            className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 sm:px-10
              lg:grid-cols-2 lg:gap-16 lg:px-16"
          >
            {/* 左侧 - 词云飞船 */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg h-[500px]">
                <h2 className="mb-6 text-center text-sm uppercase tracking-[0.3em] text-zinc-400">
                  JS/TS全栈开发 · AIGC应用开发 · WEB3探索
                </h2>
                <RocketWordCloud />
              </div>
            </div>

            {/* 右侧 - 月球和地球 */}
            <div className="relative flex items-center justify-center">
              <div className="relative h-[500px] w-[500px]">
                {/* 主体月球 */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative h-80 w-80">
                    {/* 月球光晕 */}
                    <div
                      className="absolute inset-0 rounded-full
                        bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.15),transparent_70%)]
                        blur-2xl"
                    />
                    {/* 月球主体 */}
                    <div
                      className="relative h-full w-full rounded-full bg-gradient-to-br from-zinc-300
                        via-zinc-400 to-zinc-600
                        shadow-[inset_-10px_-10px_60px_rgba(0,0,0,0.6),0_0_80px_rgba(161,161,170,0.4)]
                        animate-[spin_60s_linear_infinite]"
                    >
                      {/* 月球陨石坑 */}
                      <div
                        className="absolute left-[20%] top-[15%] h-12 w-12 rounded-full
                          bg-zinc-500/60 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.7)]"
                      />
                      <div
                        className="absolute left-[60%] top-[30%] h-8 w-8 rounded-full bg-zinc-500/50
                          shadow-[inset_1px_1px_6px_rgba(0,0,0,0.6)]"
                      />
                      <div
                        className="absolute left-[40%] top-[60%] h-16 w-16 rounded-full
                          bg-zinc-500/70 shadow-[inset_3px_3px_10px_rgba(0,0,0,0.8)]"
                      />
                      <div
                        className="absolute left-[70%] top-[70%] h-10 w-10 rounded-full
                          bg-zinc-500/55 shadow-[inset_2px_2px_7px_rgba(0,0,0,0.7)]"
                      />
                      <div
                        className="absolute left-[15%] top-[75%] h-6 w-6 rounded-full bg-zinc-500/45
                          shadow-[inset_1px_1px_5px_rgba(0,0,0,0.6)]"
                      />
                      {/* 月球高光 */}
                      <div
                        className="absolute left-[25%] top-[25%] h-24 w-24 rounded-full
                          bg-gradient-to-br from-white/30 to-transparent blur-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* 远处的地球 */}
                <div className="absolute right-8 top-8">
                  <div className="relative h-24 w-24">
                    {/* 地球光晕 */}
                    <div
                      className="absolute inset-0 rounded-full
                        bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.3),transparent_70%)]
                        blur-lg"
                    />
                    {/* 地球主体 */}
                    <div
                      className="relative h-full w-full rounded-full bg-gradient-to-br from-blue-400
                        via-blue-500 to-green-600
                        shadow-[inset_-8px_-8px_30px_rgba(0,0,0,0.5),0_0_40px_rgba(59,130,246,0.3)]
                        animate-[spin_90s_linear_infinite]"
                    >
                      {/* 云层效果 */}
                      <div
                        className="absolute inset-0 rounded-full
                          bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.3),transparent_50%)]"
                      />
                      <div
                        className="absolute inset-0 rounded-full
                          bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.2),transparent_40%)]"
                      />
                      {/* 高光 */}
                      <div
                        className="absolute left-[30%] top-[30%] h-8 w-8 rounded-full bg-white/40
                          blur-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* 星星点缀 */}
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

          {/* 向下滚动提示 */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
              animate-bounce"
          >
            <span className="text-sm text-zinc-400 tracking-widest">
              {/* 能赏一个 Offer 嘛 😃 要恰饭的嘛 ~~ */}
              盼星星 盼月亮 终于盼到你来给我发Offer 🙋‍♂️
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

      {/* 主要内容区域 - 浅灰色系背景 */}
      <main
        className="relative z-10 bg-gradient-to-b from-zinc-100 via-zinc-50 to-white pb-24 pt-16
          text-zinc-900"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 sm:px-10 lg:px-16">
          {/* 个人简介 */}
          <section
            id="profile"
            className="grid gap-8 rounded-3xl border border-zinc-200/80 bg-white/90 p-10 shadow-lg
              backdrop-blur lg:grid-cols-[0.4fr_1.6fr]"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-zinc-900">个人简介</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-zinc-700">
              <p>
                Hello~，我是一名程序员。熟悉TypeScript前后端开发生态，实现A/B/C端业务闭环交付，了解项目工程化及CI/CD线上部署流程，并具有一定的多行业AI算法和应用调优经验，综合赋能AI应用全栈开发。
              </p>
            </div>
          </section>

          {/* 主要项目案例 */}
          <section id="projects" className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-zinc-900">主要项目案例</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              <p className="text-sm text-zinc-600">精选项目展示从调研、架构到交付的闭环能力</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="group border border-zinc-200/80 bg-white shadow-md transition-all
                    duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-cyan-400/50"
                >
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-cyan-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{project.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-zinc-600">
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
                        className="text-xs text-zinc-500 underline-offset-4 transition
                          hover:text-cyan-600 hover:underline"
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

          {/* 全栈技术 */}
          <section id="fullstack" className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-zinc-900">全栈技术</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              <p className="text-sm text-zinc-600">核心技术支柱，覆盖研发链路的关键节点</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {fullStackFocus.map((topic) => (
                <Card
                  key={topic.title}
                  className="border border-zinc-200/80 bg-white shadow-md transition-all
                    duration-300 hover:shadow-lg hover:border-cyan-400/50"
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

          {/* 全端开发 */}
          <section id="omni" className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-zinc-900">全端开发</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              <p className="text-sm text-zinc-600">多端协同交付的知识图谱</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {omniDeliveries.map((item) => (
                <Card
                  key={item.title}
                  className="border border-zinc-200/80 bg-white shadow-md transition-all
                    duration-300 hover:shadow-lg hover:border-blue-400/50"
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

          {/* 业务赋能 */}
          <section id="business" className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-zinc-900">业务赋能</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              <p className="text-sm text-zinc-600">聚焦&ldquo;如何创造可衡量的业务价值&rdquo;</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {businessEmpowerment.map((item) => (
                <Card
                  key={item.title}
                  className="border border-zinc-200/80 bg-white shadow-md transition-all
                    duration-300 hover:shadow-lg hover:border-purple-400/50"
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

          {/* 杂记 */}
          <section
            id="notes"
            className="rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50
              p-10 shadow-lg"
          >
            <div className="space-y-3 mb-6">
              <h2 className="text-3xl font-bold text-zinc-900">杂记</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>
            <div className="space-y-4 text-sm text-zinc-700">
              {recentNotes.map((note, idx) => (
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

          <footer className="border-t border-dashed border-zinc-200 pt-6 text-sm text-zinc-500">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} boat2moon</span>
              <span className="space-x-4">
                <a className="transition hover:text-zinc-700" href="mailto:hey@boat2moon.dev">
                  邮件
                </a>
                <a
                  className="transition hover:text-zinc-700"
                  href="https://github.com/boat2moon"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
