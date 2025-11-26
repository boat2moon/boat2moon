export interface WordCloudData {
  name: string;
  value: number;
  description?: string;
}

export const wordCloudData: WordCloudData[] = [
  // --- 核心语言 & 运行时 ---
  { name: "TypeScript", value: 90, description: "JavaScript 的超集，提供类型安全" },
  { name: "JavaScript", value: 85, description: "java和javascript就像雷锋和雷峰塔" },
  { name: "Node", value: 80, description: "基于 Chrome V8 的 JavaScript 运行时" },

  // --- AI & LLM 生态 ---
  { name: "AIGC", value: 90, description: "人工智能与 AI 生成内容" },
  { name: "LLM", value: 85, description: "载入人类史册的大语言模型" },
  { name: "RAG", value: 85, description: "检索增强生成" },
  { name: "Agent", value: 85, description: "智能代理" },
  { name: "VercelAI", value: 80, description: "Vercel 的 AI SDK" },
  { name: "LangChain", value: 75, description: "构建 LLM 应用的框架" },
  { name: "MCP", value: 75, description: "模型上下文协议" },

  // --- 全栈/Web 框架 ---
  { name: "Next", value: 90, description: "基于 React 的全栈框架，支持 SSR/SSG" },
  { name: "React", value: 88, description: "用于构建用户界面的 JavaScript 库" },
  { name: "Hono", value: 70, description: "轻量级 Node.js Web 应用框架" },
  { name: "Nest", value: 65, description: "企业级 Node.js 后端框架" },
  { name: "Fastify", value: 60, description: "快速低开销的 Web 框架" },
  { name: "Vue", value: 50, description: "渐进式 JavaScript 框架" },
  { name: "Electron", value: 55, description: "使用 Web 技术构建桌面应用" },
  { name: "ReactNative", value: 55, description: "使用 React 构建原生移动应用" },

  // --- UI & 交互 ---
  { name: "TailwindCSS", value: 80, description: "实用优先的 CSS 框架" },
  { name: "ShadcnUI", value: 75, description: "设计精美的 UI 组件库" },
  { name: "Tiptap", value: 60, description: "无头富文本编辑器框架" },
  { name: "WebSocket", value: 60, description: "实时双向通信协议" },

  // --- 数据 & 状态 ---
  { name: "PostgreSQL", value: 80, description: "强大的开源关系型数据库" },
  { name: "Prisma", value: 75, description: "下一代 Node.js 和 TypeScript ORM" },
  { name: "Drizzle", value: 70, description: "轻量级 TypeScript ORM" },
  { name: "Zod", value: 70, description: "TypeScript 优先的模式声明和验证库" },
  { name: "Redis", value: 65, description: "高性能键值对内存数据库" },
  { name: "MongoDB", value: 60, description: "灵活的文档型 NoSQL 数据库" },
  { name: "Zustand", value: 65, description: "轻量级状态管理库" },
  { name: "Auth.js", value: 65, description: "Web 应用身份验证解决方案" },
  { name: "ORM", value: 55, description: "对象关系映射" },
  { name: "Yjs", value: 55, description: "用于构建协作软件的 CRDT 库" },
  { name: "GraphQL", value: 55, description: "灵活高效的 API 查询语言" },

  // --- 基础设施 & 运维 ---
  { name: "Docker", value: 70, description: "容器化应用部署平台" },
  { name: "Serverless", value: 70, description: "无服务器架构，按需计费" },
  { name: "CI/CD", value: 65, description: "持续集成与持续部署" },
  { name: "Kubernetes", value: 60, description: "容器编排与管理系统" },
  { name: "OSS", value: 55, description: "对象存储服务" },
  { name: "CDN", value: 55, description: "内容分发网络" },
  { name: "Prometheus", value: 50, description: "开源监控报警系统" },
  { name: "Grafana", value: 50, description: "开源数据可视化平台" },
  { name: "安全", value: 60, description: "应用安全与数据保护" },
  { name: "性能", value: 60, description: "性能优化与监控" },

  // --- 工具 & 测试 ---
  { name: "Vitest", value: 60, description: "极速单元测试框架" },
  { name: "Playwright", value: 60, description: "可靠的端到端测试工具" },
  { name: "Prettier", value: 50, description: "代码格式化工具" },
  { name: "ESLint", value: 50, description: "JavaScript 代码检查工具" },

  // --- 概念 & 其他 ---
  { name: "大前端", value: 55, description: "跨平台前端开发技术" },
  { name: "同构", value: 55, description: "前后端共用代码架构" },
  { name: "微前端", value: 50, description: "前端应用的微服务架构" },
  { name: "Web3", value: 50, description: "基于区块链的去中心化网络" },
];
