// home.ts

import previewBole1 from "@/assets/projects/bole-talk/preview-1.png";
import previewBole2 from "@/assets/projects/bole-talk/preview-2.png";
import previewBole3 from "@/assets/projects/bole-talk/preview-3.png";
import previewBole4 from "@/assets/projects/bole-talk/preview-4.png";
import previewDev from "@/assets/projects/misc/dev.png";
import previewRumu1 from "@/assets/projects/rumu/preview-1.png";
import previewRumu2 from "@/assets/projects/rumu/preview-2.png";

import { type MediaItem } from "@/components/home/ProjectCarousel";

/**
 * Home 页面所需的静态数据与类型定义，集中管理以便组件复用。
 */
export type ProjectMeta = {
  title: string;
  description: string;
  tags: string[];
  media?: MediaItem[];
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
    media: [
      { type: "image", src: previewRumu1 },
      { type: "image", src: previewRumu2 },
    ],
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
    link: "https://www.rumuai.top",
  },
  {
    title: "伯乐 Talk（待上线）",
    description:
      "基于 ReAct 范式的垂直领域 AI Agent 面试模拟平台。利用大模型推理能力，通过工作流编排实现简历深度解析、结构化诊断及多轮个性化面试问答，提供实时评分反馈与改进建议。",
    media: [
      { type: "image", src: previewBole1 },
      { type: "image", src: previewBole2 },
      { type: "image", src: previewBole3 },
      { type: "image", src: previewBole4 },
    ],
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
    title: "RobotPrinter AI-Island",
    description:
      "一个有趣的 React 组件库——机器人吐纸条！可用于 AI 对话、快捷指令、数据处理等场景，自带独特的 3D 动画效果和交互体验，支持拖拽、玻璃态风格、智能睡眠等丰富功能。",
    media: [{ type: "video", src: "/videos/robot-printer-demo.mp4" }],
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Vitest",
      "TailwindCSS",
      "CSS Variables",
      "GitHub Actions",
      "ESLint",
      "Prettier",
      "Husky",
    ],
    link: "https://github.com/boat2moon/RobotPrinter",
  },
  {
    title: "InfiniteTalk ComfyUI Workflow",
    description:
      "基于 InfiniteTalk 与 WanVideo 的中文语音驱动口型同步视频生成工作流。输入单张参考图与音频，即可在 32GB 显存环境稳定生成高质量说话人视频。",
    media: [
      { type: "video", src: "/videos/infinitetalk-demo.mp4" },
      { type: "video", src: "/videos/infinitetalk-demo-2.mp4" },
    ],
    tags: ["ComfyUI", "Wan2.1", "InfiniteTalk", "AIGC", "Video Generation"],
    link: "https://github.com/boat2moon/infinitetalk-comfyui-workflow",
  },
  {
    title: "开发中......",
    description: "更多创意正在孵化中，敬请期待。",
    tags: ["Coming Soon"],
    link: "#",
    media: [{ type: "image", src: previewDev }],
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
    title: "桌面客户端 - PC",
    description: "Electron / Tauri 多容器共存，封装自动更新通道与插件化体系。",
  },
  {
    title: "移动客户端 - APP",
    description: "React Native 与 Flutter 双栈策略，接入动态化配置与数据埋点闭环。",
  },
  {
    title: "小程序",
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
