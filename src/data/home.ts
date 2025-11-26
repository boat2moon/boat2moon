// home.ts

/**
 * Home 页面所需的静态数据与类型定义，集中管理以便组件复用。
 */
export type ProjectMeta = {
  title: string;
  description: string;
  tags: string[];
  images?: string[];
  link?: string;
};

export type TopicMeta = {
  title: string;
  description: string;
};

export type FriendLink = {
  label: string;
  href: string;
};

export const projects: ProjectMeta[] = [
  {
    title: "入木 AI",
    description:
      "一个 TS 全栈开发的现代化 AIGC 协同文档编辑平台，集成了丰富的编辑能力与多人实时协作功能，支持知识库管理、插件扩展与持久化存储。",
    images: ["/public/rumu1.png", "/public/rumu2.png"],
    tags: [
      "Next.js",
      "React",
      "ShadcnUI",
      "Zustand",
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "Tiptap",
      "ChatGPT API",
      "Docker",
      "阿里云 Serverless",
    ],
    link: "#",
  },
  {
    title: "伯乐 Talk（待上线）",
    description:
      "基于 ReAct 范式的垂直领域 AI Agent 面试模拟平台。利用大模型推理能力，通过工作流编排实现简历深度解析、结构化诊断及多轮个性化面试问答，提供实时评分反馈与改进建议。",
    images: ["/public/bole1.png", "/public/bole2.png", "/public/bole3.png", "/public/bole4.png"],
    tags: [
      "Next.js",
      "React",
      "Zustand",
      "Drizzle",
      "PostgreSQL",
      "LangChain.js",
      "RAG",
      "Vercel AI SDK",
      "ChatGPT API",
      "Zod",
    ],
    link: "#",
  },
  {
    title: "开发中......",
    description: "更多创意正在孵化中，敬请期待。",
    tags: ["Coming Soon"],
    link: "#",
    images: ["/public/dev.png"],
  },
];

export const fullStackFocus: TopicMeta[] = [
  {
    title: "前端",
    description:
      "以组件自治 + 状态分层为核心，构建可预期的交互体验，结合 Design Token 与 Storybook 保持风格统一。",
  },
  {
    title: "大前端",
    description:
      "跨 Web / 小程序 / 桌面端复用业务模型，利用模块联邦与跨端渲染管线打造一致的研发体验。",
  },
  {
    title: "微前端",
    description:
      "建设基于 Module Federation 的应用拼装平台，支持跨团队独立发布，同时引入观测与沙箱隔离策略。",
  },
  {
    title: "后端",
    description: "聚焦事件驱动 + DDD，拆解核心域、支撑域，建立统一的服务治理与可观测性基线。",
  },
  {
    title: "CI/CD",
    description:
      "流水线覆盖测试、扫描、部署、回滚四大环节，沉淀 GitOps 流程，实现灰度、蓝绿、热修复的自动化。",
  },
  {
    title: "安全/性能",
    description: "自顶向下梳理安全策略（认证、权限、审计）与性能守护（压测、APM、前端体验分级）。",
  },
];

export const omniDeliveries: TopicMeta[] = [
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

export const businessEmpowerment: TopicMeta[] = [
  {
    title: "AI 应用开发",
    description: "面向业务流程构建提示工程、模型评测、上线监控三件套，帮助团队快速验证并持续优化。",
  },
  {
    title: "电商独立站开发",
    description: "营销漏斗 + SEO 优化双线推进，沉淀数据飞轮与自动化营销工具，实现增长闭环。",
  },
  {
    title: "WEB3 开发（观望...）",
    description: "聚焦 DID、NFT、智能合约审计，攻击面评估 + 合规研究并行，确保品牌资产安全落链。",
  },
];

export const friendLinks: FriendLink[] = [
  { label: "我的博客", href: "https://juejin.cn/user/2928754707930126" },
  { label: "3R社区", href: "https://3rcd.com/" },
  { label: "前端面试派", href: "https://www.mianshipai.com/" },
  { label: "Moment的博客", href: "https://juejin.cn/user/3782764966460398/posts" },
];

export const recentNotes: string[] = [
  "LLM 深入业务前需先明确价值指标，技术演示≠商业闭环。",
  "多端研发的本质是规范协作，工具只是加速器。",
  "工程效率与业务创新并不冲突，关键在于自动化的覆盖深度。",
];
