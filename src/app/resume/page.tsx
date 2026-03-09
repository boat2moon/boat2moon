import type { Metadata } from "next";

import Image from "next/image";
import type { CSSProperties } from "react";

import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiSolidNetworkChart } from "react-icons/bi";
import { VscRobot } from "react-icons/vsc";
import { TfiWrite } from "react-icons/tfi";
import { GiMedicines } from "react-icons/gi";
import { FiGithub } from "react-icons/fi";

import styles from "./resume.module.scss";
import ResumeClient from "./ResumeClient";

export const metadata: Metadata = {
  title: "个人简历 - 张于淼",
  description:
    "张于淼的个人简历。211院校计算机-人工智能专业硕士应届生，岗位意向：大前端 / AI应用全栈开发 / Agent开发。擅长 TypeScript 全栈、React/Next.js、AI 大模型应用开发。",
  openGraph: {
    title: "个人简历 - 张于淼 | boat2moon",
    description:
      "211院校计算机-人工智能专业硕士应届生，岗位意向：大前端 / AI应用全栈开发 / Agent开发",
    url: "https://www.boat2moon.com/resume",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "张于淼 - 个人简历",
      },
    ],
  },
  alternates: {
    canonical: "https://www.boat2moon.com/resume",
  },
};

/**
 * 简历页入口（服务端组件），内容结构服务端直出利于SEO与爬虫抓取
 */
export default function ResumePageWrapper() {
  return (
    <ResumeClient>
      <header className={styles.header}>
        <div>
          <h1>张于淼</h1>
          <div className={styles.tagline}>
            男 &nbsp;|&nbsp; 211院校计算机-人工智能专业 &nbsp;|&nbsp; 2026硕士应届生
          </div>
          <div className={styles.tagline}>
            岗位意向：大前端 &nbsp;|&nbsp; AI应用全栈开发 &nbsp;|&nbsp; Agent开发
          </div>
          {/* <p className={styles.summary}>
                <strong>简历摘要：</strong>
                AI复合型程序员，熟悉JS/TS前后端开发生态，实现A/B/C端业务闭环，了解项目工程化及CI/CD流程，并具有一定交叉行业AI算法和应用调优经验，热衷于AI大模型应用全栈开发。
              </p> */}
          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <PiPhoneCallFill aria-hidden="true" className={styles.contactIcon} />
              <span>电话:</span>
              <span className={styles.contactValue}>17354991160</span>
            </div>
            <a
              className={`${styles.contactItem} ${styles.contactLink}`}
              href="mailto:boat2moon@foxmail.com"
            >
              <MdEmail aria-hidden="true" className={styles.contactIcon} />
              <span>邮箱:</span>
              <span className={styles.contactValue}>boat2moon@foxmail.com</span>
            </a>
            <a
              className={`${styles.contactItem} ${styles.contactLink}`}
              href="https://github.com/boat2moon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub aria-hidden="true" className={styles.contactIcon} />
              <span>GitHub:</span>
              <span className={styles.contactValue}>github.com/boat2moon</span>
            </a>
            <a
              className={`${styles.contactItem} ${styles.contactLink}`}
              href="https://www.boat2moon.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGlobe aria-hidden="true" className={styles.contactIcon} />
              <span>个人网站:</span>
              <span className={styles.contactValue}>boat2moon.com</span>
            </a>
          </div>
        </div>
        <Image
          src="/resume/avatar.jpg"
          alt="头像"
          width={294}
          height={377}
          className={styles.avatar}
        />
      </header>

      <section className={`${styles.section} ${styles.education}`}>
        <h2 className={styles.sectionTitle}>教育背景</h2>
        <p>
          本科毕业于扬州大学　<strong>计算机科学与技术专业</strong>
        </p>
        <p>
          硕士就读于 <strong>安徽大学</strong>　<strong>人工智能专业</strong>
          　课题方向涉及复杂网络与深度学习应用　2026年毕业
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>专业技能</h2>
        <ul className={styles.skillList}>
          <li>
            <strong>编程语言：</strong>主 JavaScript / TypeScript，副 Python
          </li>
          <li>
            <strong>熟悉前端：</strong>HTML，Sass / Tailwind CSS，工程化，组件库，状态管理，React 与
            Next 框架，富文本编辑器开发
          </li>
          <li>
            <strong>熟悉 AI 应用开发：</strong>
            LangChain.js，Vercel AI-SDK，Prompt工程与应用，知识工程与RAG，Agent理论与框架
          </li>
          <li>
            {/* <strong>了解后端：</strong>Node / Hono / Nest，RESTful API，ORM 与
                关系型/内存/向量数据库，消息队列 */}
            <strong>了解后端：</strong>Node / Hono / Nest，Next 实现 BFF 架构，ORM 与
            关系型/内存/向量数据库，消息队列
          </li>
          <li>
            <strong>CI/CD应用：</strong>Docker，GitHub Actions / Webhooks，Serverless，Edge Runtime
          </li>
          <li>
            <strong>外语水平：</strong>通过英语六级
          </li>
          {/* <li>
                <strong>日常办公：</strong>{" "}
                熟悉常用办公工具，有良好的材料文档撰写水平，具备数据处理能力产出美观图表，常兼顾组内工作中各种PPT制作和汇报材料润色。
              </li> */}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>项目经历</h2>
        <ul className={styles.tree}>
          <li>
            <div className={styles.node}>
              <span className={styles.nodeTitle}>
                <TfiWrite aria-hidden="true" className={styles.nodeIcon} />
                <span className={styles.titleText}>
                  <span>入木 AI</span>
                  {/* <span>DocFlow</span> */}
                  <span aria-hidden="true" className={styles.inlineSeparator} />
                  <span>AI 大模型协同文档平台</span>
                  <span
                    aria-hidden="true"
                    className={styles.inlineSeparator}
                    style={{ "--inline-separator-width": "2.5em" } as CSSProperties}
                  />
                  <span>
                    社区合作开发
                    <a
                      className={styles.inlineLink}
                      href="https://rumuai.top"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      （演示
                      <FiGithub aria-hidden="true" className={styles.inlineIconSmall} />
                      rumuai.top）
                    </a>
                  </span>
                </span>
              </span>
              <span aria-hidden="true" className={styles.nodeSeparator} />
              <span className={styles.nodeTime}>2025.7 - 2025.12</span>
            </div>
            <ul>
              <li>
                <div className={styles.node}>
                  <span className={styles.nodeTags}>
                    <strong>全栈开发</strong> | Next - React - Nest - ShadcnUI - Zustand - Tailwind
                    CSS - Prisma - PostgreSQL - OpenAI API - Docker - Serverless - OSS - CDN -
                    Cloudflare DO - Prometheus - Grafana - Tiptap - Yjs - Hocuspocus
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.node}>
                  <span>
                    {/* <strong>项目介绍：</strong>一个 TS 全栈开发的现代化 AIGC
                      协同文档编辑平台，集成了丰富的编辑能力与多人实时协作功能，支持知识库管理、插件扩展与持久化存储。我作为项目一期开发人员，参与了从
                      0 搭建项目，设计、开发、上线，以及统计、监控和运维项目。 */}
                    <strong>项目介绍：</strong>一个 TS 全栈开发的现代化 AIGC
                    协同文档编辑平台，集成了丰富的智能编辑能力与多人实时协作功能，支持知识库管理、插件扩展与持久化存储等。
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.node}>
                  <span className={styles.nodeTitle}>亮点成就：</span>
                </div>
                <ul>
                  <li>
                    <strong>前端：</strong>定制封装
                    fetch，将包括参数整理、响应解析、SSE、超时/重试控制、Token
                    刷新及统一错误处理——完整串联成一个高内聚、可观测的闭环体系，简洁统一了业务请求行为，提升了
                    HTTP 客户端的健壮性与扩展性。
                  </li>
                  <li>
                    <strong>前端：</strong>基于 Headless 富文本库定制高可扩展的 Slash Command
                    系统，通过自定义渲染桥接层打通富文本库内核与 React UI
                    的生命周期及跨框架数据流，采用工厂与命令模式实现 数据/逻辑/视图 分层解耦。
                    {/* 通过useImperativeHandle实现对React组件的精细化生命周期控制， */}
                  </li>
                  <li>
                    <strong>AI应用开发：</strong>实现内嵌 AI 助手（AI灵动岛），后端统一适配多 AI
                    服务商（含负载均衡+故障转移）；前端基于 SSE 流式响应 + &quot;累积缓冲 +
                    节流事务替换&quot;策略，解决富文本编辑器中流式 MD
                    实时渲染问题，支持表格/列表等复杂结构的稳定生成；并采用有限状态机管理多阶段自定义动画，实现流畅的伪3D效果与交互反馈。
                  </li>
                  <li>
                    <strong>全栈：</strong>
                    实现层级文档树组件，基于数据库自引与递归组件渲染；通过 HTML5 History API
                    结合自定义 emitter 事件订阅模式，避免了 Next Router 引发的 UI
                    闪烁和响应延迟，实现文档 切换/创建 零感知延迟与乐观更新。
                  </li>
                  <li>
                    <strong>全栈：</strong>基于 CRDT 算法（Yjs）实现多人实时协同编辑，将 WebSocket
                    服务迁移至 Cloudflare DO，实现零空闲成本，并在 Edge Runtime
                    环境向后兼容历史数据，离线编辑与断开恢复提供完整弱网体验。
                  </li>

                  <li>
                    <strong>系统优化：</strong>优化图片上传渲染全链路，通过 Web Worker 压缩与 OSS
                    动态裁剪减少 60%+ 带宽消耗；通过预计算宽高比占位解决 CLS
                    问题，并实现长图智能自适应布局，再配合 CDN 加速显著提升编辑体验。
                  </li>
                  <li>
                    <strong>CI/CD：</strong>搭建双平台 Serverless 部署架构（阿里云 FC + Cloudflare
                    DO）和 GitHub Actions CI 流水线，通过本地 Husky 增量守护 + CI
                    全量静态分析，实现推代码即上线的可靠持续交付闭环。
                  </li>
                  <li>
                    <strong>AI自动化：</strong>
                    搭建可复用 ComfyUI 工作流，在 RTX 5090 机器部署推理生成官网首页背景视频；通过
                    Suno 调制 BGM，打造统一风格产品 Taste。MVP 落地后，搭建 Openclaw 智能副手，配合
                    Skills 将 Claude Code / Codex 作为子 Agent 代理编码能力，探索 TDD 和智能 CI/CD
                    流程如 BUG 检修、Review 与 PR 等。
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <div className={styles.node}>
              <span className={styles.nodeTitle}>
                <VscRobot aria-hidden="true" className={styles.nodeIcon} />
                <span className={styles.titleText}>
                  <span>伯乐 Talk</span>
                  <span aria-hidden="true" className={styles.inlineSeparator} />
                  <span>AI 智能体面试模拟站</span>
                  <span
                    aria-hidden="true"
                    className={styles.inlineSeparator}
                    style={{ "--inline-separator-width": "2.5em" } as CSSProperties}
                  />
                  <span>
                    社区合作开发
                    <a
                      className={styles.inlineLink}
                      href="https://boletalk.top"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      （演示
                      <FiGithub aria-hidden="true" className={styles.inlineIconSmall} />
                      bltalk.top）
                    </a>
                  </span>
                </span>
              </span>
              <span aria-hidden="true" className={styles.nodeSeparator} />
              <span className={styles.nodeTime}>2025.11 - 2026.2</span>
            </div>
            <ul>
              <li>
                <div className={styles.node}>
                  <span className={styles.nodeTags}>
                    <strong>全栈开发</strong> | Next.js - React.js - Zustand - NextAuth - Drizzle -
                    PostgreSQL - Pgvector - LangChain.js - Vercel AI SDK - MCP - Zod - Cloudflare DO
                    - Serverless - ONNX Runtime Web - WebRTC - ASR - TTS
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.node}>
                  <span>
                    <strong>项目介绍：</strong>
                    {/* 基于 ReAct 范式的垂直领域 AI Agent
                        面试模拟平台。利用大模型推理能力，通过工作流编排实现简历深度解析、结构化诊断及多轮个性化面试问答，提供实时评分反馈与改进建议。 */}
                    基于TS生态全栈开发的多模态 AI
                    面试辅助系统，支持文本、语音、电话、数字人视频四种交互模式，集成共享工具层 +
                    Multi-Agents 架构 ，帮助求职者完成简历优化、模拟面试与评估报告生成全链路。
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.node}>
                  <span className={styles.nodeTitle}>亮点成就：</span>
                </div>
                <ul>
                  <li>
                    <strong>文本驱动Agents：</strong>设计 Multi-Agent Workflow 架构，解耦可扩展
                    Prompt 工程层、子 Agent 路由分发层、共享工具层；打通 PDF 文件解析、JD
                    模板注入和面试评估持久化等完整链路，基于 SSE 流式输出。
                  </li>
                  <li>
                    <strong>可靠语音交互：</strong>在文本 Agent I/O
                    端接入语音能力，核心链路复用，保持架构正交解耦；输入侧集成前端实时 ASR
                    ，AudioWorklet 降采样；输出侧构建双向流式 TTS 架构，配合 MediaSource Extensions
                    消除卡带感。
                  </li>
                  <li>
                    <strong>端到端电话面试：</strong>Cloudflare DO 服务端实现双 WebSocket
                    桥接，手写端到端语音大模型二进制帧协议编解码；前端 ScriptProcessor
                    低延迟采集音频，通过 AudioContext 时间轴队列式调度解决 PCM 音频重叠问题。
                  </li>
                  <li>
                    <strong>数字人视频面试：</strong>流媒体数字人播报 +
                    前端轻量级神经网络模型自研语音
                    Pipeline，实现免按钮数字人视频面试；音频预缓冲配合流式 ASR
                    实现同声识文，逐句发送策略将感知延迟从 3~5 秒降至 1 秒内，支持语音打断。
                  </li>
                  <li>
                    <strong>RAG/MCP/Tools：</strong>
                    {/* （引用溯源 + HyDE + 混合检索 + ReRank + 去重）  */}
                    构建多阶段 RAG 检索管线扩展信息边界，并集成 per-user
                    记忆系统实现跨会话个性化；通过 MCP 协议双向集成外部服务与暴露自身 AI
                    能力；重构共享 Tools 层扩展跨模式复用边界。
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <div className={styles.node}>
              <span className={styles.nodeTitle}>
                <BiSolidNetworkChart aria-hidden="true" className={styles.nodeIcon} />
                <span className={styles.titleText}>
                  <span>城市巨系统网络攻防建模（横向，一期）</span>
                  <span
                    aria-hidden="true"
                    className={styles.inlineSeparator}
                    style={{ "--inline-separator-width": "2.5em" } as CSSProperties}
                  />
                  <span>合肥国家科学中心数据科学研究院</span>
                </span>
              </span>
              <span aria-hidden="true" className={styles.nodeSeparator} />
              <span className={styles.nodeTime}>2023.10 - 2024.7</span>
            </div>
            <ul>
              <li>
                <div className={styles.node}>
                  <span className={styles.nodeTags}>
                    <strong>负责事件仿真</strong> | Python · PyQt · PetriNet · PySpider
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.node}>
                  <span>
                    <strong>项目介绍：</strong>
                    构建城市多行业巨系统网络攻防模型，涵盖电力网、交通网、供水网、油气网、通信网、金融网六大关键基础设施，模拟多层复杂网络环境下的攻击与防御场景，评估系统韧性与恢复能力等。
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.node}>
                  <span className={styles.nodeTitle}>负责事项：</span>
                </div>
                <ul>
                  <li>
                    调研并撰写方案材料、收集数据、制作PPT，为多个行业网络的机理与相关算法做技术储备
                  </li>
                  <li>基于 Python 爬虫库 PySpider，编码汇总目标地区电力行业网络基础设施数据</li>
                  <li>
                    独立完成交通网络中港口模块的 PetriNet 事件网络仿真并基于 PyQt 搭建数据可视化界面
                  </li>
                  <li>
                    协助组织定期会议汇报与任务协调；参与设计指标体系评估机理仿真合理性，以及攻击效果与恢复效率
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <div className={styles.node}>
              <span className={styles.nodeTitle}>
                <GiMedicines aria-hidden="true" className={styles.nodeIcon} />
                <span className={styles.titleText}>
                  <span>AI 赋能 ADC 药物全链路研发（横向，一期）</span>
                  <span
                    aria-hidden="true"
                    className={styles.inlineSeparator}
                    style={{ "--inline-separator-width": "2.5em" } as CSSProperties}
                  />
                  <span>觉微软件科技（苏州）有限公司</span>
                </span>
              </span>
              <span aria-hidden="true" className={styles.nodeSeparator} />
              <span className={styles.nodeTime}>2025.3 - 2025.4</span>
            </div>
            <ul>
              <li>
                <div className={styles.node}>
                  <span className={styles.nodeTags}>
                    <strong>负责算法复现</strong> | Python · PyTorch · DeepChem
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.node}>
                  <span>
                    {/* {毒性预测、疗效预测、生成模型} */}
                    <strong>项目介绍：</strong>期望通过 AI 技术赋能 ADC
                    （抗癌靶向药）的全链路研发，包括分子/蛋白生成模型生成药物候选分子、疗效预测模型筛选高效分子、毒性预测模型过滤高毒分子等环节，从而提升研发效率，降低研发成本，加速新药上市。
                  </span>
                </div>
              </li>
              <li>
                <div className={styles.node}>
                  <span className={styles.nodeTitle}>负责事项：</span>
                </div>
                <ul>
                  <li>
                    项目初期技术调研，包括毒性预测、疗效预测及生成模型；负责毒性预测模块的算法复现
                  </li>
                  <li>撰写调研报告并协助组织周会汇报；分析项目关键难点并与数据团队沟通</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>纵向科研成果 · 交叉行业 AI 赋能</h2>
        <ul className={styles.awardList}>
          <li>
            <strong>论文1：</strong>《A Spatial Multi-Scale Reservoir Computing Framework for Power
            Flow Analysis in Power Grids》，一种数据驱动的 AI
            计算框架解决电网潮流计算问题，曾在第二十届全国网络科学与工程论坛做分组报告，现期刊
            Complex Engineering Systems 已录用。
          </li>
          <li>
            <strong>论文2：</strong>《When, Where, and What: A Graph Reservoir Computing Framework
            for Spatiotemporal Power Grid Disturbance
            Monitoring》，一种解决有限观测下电网扰动监测“何时-何处-何事”问题的一体化 AI
            协同计算方案，一区Top期刊 IEEE Transactions on Industrial Informatics 在投。
          </li>
          <li>
            <strong>专利1：</strong>
            《基于图储备池计算的有限观测下电网扰动时空协同监测方法》，申请号 202511169552X，已实审。
          </li>
        </ul>
      </section>

      {/* <section className={styles.section}>
          <h2 className={styles.sectionTitle}>获奖情况</h2>
          <ul className={styles.awardList}>
            <li>
              校二等奖学金　<span className={styles.awardDate}>2025</span>
            </li>
          </ul>
        </section> */}
    </ResumeClient>
  );
}
