// home.ts

/**
 * Home 页面所需的静态数据与类型定义，集中管理以便组件复用。
 */
export type ProjectMeta = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  reference?: string;
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

export const fullStackFocus: TopicMeta[] = [
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
    title: "全栈开发之 AI 应用",
    description: "面向业务流程构建提示工程、模型评测、上线监控三件套，帮助团队快速验证并持续优化。",
  },
  {
    title: "全栈开发之电商独立站",
    description: "营销漏斗 + SEO 优化双线推进，沉淀数据飞轮与自动化营销工具，实现增长闭环。",
  },
  {
    title: "全栈开发之 WEB3（观望...）",
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
