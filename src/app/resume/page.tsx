"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { BiSolidNetworkChart } from "react-icons/bi";
import { VscRobot } from "react-icons/vsc";
import { TfiWrite } from "react-icons/tfi";
import { GiMedicines } from "react-icons/gi";

import styles from "./resume.module.scss";

/**
 * ResumePage 承载完整的个人简历内容，引用独立的 SCSS Module 保持视觉复刻。
 */
export default function ResumePage() {
  const mainRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    const handleResize = () => {
      if (mainRef.current) {
        const targetWidth = 794; // 简历固定宽度 A4 210mm approx 794px
        const screenWidth = window.innerWidth;
        const newScale = screenWidth < targetWidth ? screenWidth / targetWidth : 1;

        setScale(newScale);

        // 更新高度以消除 transform 缩放后的底部空白
        // 使用 scrollHeight 获取完整高度
        if (newScale < 1) {
          setHeight(mainRef.current.scrollHeight * newScale);
        } else {
          setHeight("auto");
        }
      }
    };

    // 监听窗口大小变化
    window.addEventListener("resize", handleResize);
    // 监听内容变化（如图片加载）可能导致的高度变化
    const resizeObserver = new ResizeObserver(handleResize);
    if (mainRef.current) {
      resizeObserver.observe(mainRef.current);
    }

    // 初始化
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.resumePage}>
      <div className={styles.container} style={{ height: height }}>
        <main
          ref={mainRef}
          className={styles.main}
          style={{
            transform: `scale(${scale})`,
            marginLeft: scale < 1 ? 0 : "auto",
            marginRight: scale < 1 ? 0 : "auto",
          }}
        >
          <header className={styles.header}>
            <div>
              <h1>张于淼</h1>
              <div className={styles.tagline}>
                男 &nbsp;|&nbsp; 211院校计算机-人工智能专业 &nbsp;|&nbsp; 2026硕士应届生
              </div>
              {/* <div className={styles.tagline}>求职意向：JS/TS全栈开发 &nbsp;|&nbsp; AI应用开发</div> */}
              <div className={styles.tagline}>实习意向：前端开发 &nbsp;|&nbsp; AI应用开发</div>
              {/* <p className={styles.summary}>
                <strong>简历摘要：</strong>
                AI复合型程序员，熟悉JS/TS前后端开发生态，实现A/B/C端业务闭环，了解项目工程化及CI/CD流程，并具有一定交叉行业AI算法和应用调优经验，热衷于AI大模型应用全栈开发。
              </p> */}
              <div className={styles.contacts}>
                <div className={styles.contactItem}>
                  <PiPhoneCallFill aria-hidden="true" className={styles.contactIcon} />
                  <span>电话：17354991160</span>
                </div>
                <a
                  className={`${styles.contactItem} ${styles.contactLink}`}
                  href="mailto:boat2moon@proton.me"
                >
                  <MdEmail aria-hidden="true" className={styles.contactIcon} />
                  <span>邮箱：</span>
                  <span className={styles.contactValue}>boat2moon@proton.me</span>
                </a>
                <a
                  className={`${styles.contactItem} ${styles.contactLink}`}
                  href="https://github.com/boat2moon"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub aria-hidden="true" className={styles.contactIcon} />
                  <span>GitHub：</span>
                  <span className={styles.contactValue}>https://github.com/boat2moon</span>
                </a>
                <a
                  className={`${styles.contactItem} ${styles.contactLink}`}
                  href="https://www.boat2moon.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGlobe aria-hidden="true" className={styles.contactIcon} />
                  <span>个人网站：</span>
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
                <strong>熟悉前端：</strong>HTML，Sass / Tailwind，工程化，AntD /
                Shadcn，React，Redux / Zustand，Next
              </li>
              <li>
                <strong>了解后端：</strong>Node.js / Hono / Nest，RESTful API，Prisma / Drizzle
              </li>
              <li>
                <strong>AI 相关：</strong>Prompt Engineering，LangChain.js，Function Calling /
                MCP，Agent，RAG，向量数据库
              </li>
              <li>
                <strong>CI/CD：</strong>GitHub Actions，Serverless
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
                      <span>AI大模型协同文档平台</span>
                      <span
                        aria-hidden="true"
                        className={styles.inlineSeparator}
                        style={{ "--inline-separator-width": "2.5em" } as CSSProperties}
                      />
                      <span>
                        社区合作开发
                        {/* ， */}
                        {/* <a
                        className={styles.inlineLink}
                        href="https://github.com/xun082/DocFlow"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        前端开源
                        <FiGithub aria-hidden="true" className={styles.inlineIconSmall} />
                      </a> */}
                      </span>
                    </span>
                  </span>
                  <span aria-hidden="true" className={styles.nodeSeparator} />
                  <span className={styles.nodeTime}>2025.7 - 2025.9</span>
                </div>
                <ul>
                  <li>
                    <div className={styles.node}>
                      <span className={styles.nodeTags}>
                        <strong>全栈开发</strong> | Next.js · React · ShadcnUI · Zustand · Auth.js ·
                        Prisma · PostgreSQL · Tiptap · ChatGPT API · Docker · 阿里云 Serverless OSS
                        CDN
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
                        协同文档编辑平台，集成了丰富的编辑能力与多人实时协作功能，支持知识库管理、插件扩展与持久化存储。
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.node}>
                      <span className={styles.nodeTitle}>亮点成就：</span>
                    </div>
                    <ul>
                      <li>
                        定制封装 fetch，将包括参数整理、响应解析、SSE、超时与重试控制、Token
                        刷新及统一错误处理——完整串联成一个高内聚、可观测的闭环体系，简洁统一了业务请求行为，提升了
                        HTTP 客户端的健壮性与扩展性。
                      </li>
                      <li>
                        调研对比国内外 Serverless 平台，选择了阿里云 FC 函数计算；并规避了 Next.js
                        Server Actions 触发阿里云 Serverless 的 maxMemoryUsage 错误。
                      </li>
                      <li>紧急修复网站无法访问问题，云函数区域从香港迁移到新加坡。</li>
                      <li>
                        请求 ChatGPT API 时，轮询使用多个实例，成功避免被 OpenAI 限制调用频率。
                      </li>
                      <li>优化 AI 接口鉴权，防止 Token 泄漏被盗用，保障安全性。</li>
                      <li>
                        把 AI 生成的 Markdown 格式转换为 HTML 插入到编辑器，实现了 AI
                        稳定生成富文本的效果。
                      </li>
                      <li>
                        排查修复 editor 编辑卡顿的问题，修复了导致内存泄漏的副作用 Bug，测试深度使用
                        2 小时以上再无异常。
                      </li>
                      <li>性能和体验优化。</li>
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
                      <span>社区合作开发</span>
                    </span>
                  </span>
                  <span aria-hidden="true" className={styles.nodeSeparator} />
                  <span className={styles.nodeTime}>2025.9 - 2025.11</span>
                </div>
                <ul>
                  <li>
                    <div className={styles.node}>
                      <span className={styles.nodeTags}>
                        <strong>全栈开发</strong> | Next.js · React · Zustand · Drizzle · PostgreSQL
                        · LangChain.js · RAG · ChatGPT API · Zod
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.node}>
                      <span>
                        <strong>项目介绍：</strong>基于 ReAct 范式的垂直领域 AI Agent
                        面试模拟平台。利用大模型推理能力，通过工作流编排实现简历深度解析、结构化诊断及多轮个性化面试问答，提供实时评分反馈与改进建议。
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.node}>
                      <span className={styles.nodeTitle}>亮点成就：</span>
                    </div>
                    <ul>
                      <li>
                        实现基于 LangGraph
                        的状态机工作流，将面试流程拆分为简历解析、问题生成、追问、评分等独立串行节点，解决了长文本处理中
                        LLM
                        注意力分散的问题；通过条件边控制流转，实现了可扩展、可调试的面试对话系统。
                      </li>
                      <li>
                        搭建 RAG（检索增强生成）管道，使用文本嵌入模型对 PDF 简历/JD
                        进行分块向量化并存入向量数据库，实现基于语义相似度的精准上下文检索，对话时动态注入
                        Prompt，提升用户个性化针对性。
                      </li>
                      <li>
                        利用 Zod + Structured Output 技术规范化 AI 输出，确保 AI
                        返回的评分、追问决策、反馈建议等字段格式稳定可解析，解决了 LLM
                        输出不可控的问题，保障下游业务逻辑正常运行。
                      </li>
                      <li>
                        实现全链路 Stream 流式响应，基于 SSE 协议打通服务端 LangChain
                        流与前端流式逐字渲染，大幅降低了用户等待长文本生成的心理延迟。
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
                        独立完成交通网络中港口模块的 PetriNet 事件网络仿真并基于 PyQt
                        搭建数据可视化界面
                      </li>
                      <li>
                        协助安排定期会议汇报与任务协调；参与设计指标体系评估机理仿真合理性，以及攻击效果与恢复效率
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
                        项目初期技术调研，包括毒性预测、疗效预测及生成模型；分析项目关键难点并与数据团队沟通
                      </li>
                      <li>负责毒性预测模块的算法复现</li>
                      <li>撰写调研报告并协助安排周会汇报</li>
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
                <strong>论文1：</strong>《A Spatial Multi-Scale Reservoir Computing Framework for
                Power Flow Analysis in Power
                Grids》，一种数据驱动的AI计算框架解决电网潮流计算问题，现期刊 Complex Engineering
                Systems 在投，并曾在第二十届全国网络科学与工程论坛做分组报告。
              </li>
              <li>
                <strong>论文2：</strong>《When, Where, and What: A Graph Reservoir Computing
                Framework for Spatiotemporal Power Grid Disturbance
                Monitoring》，一种解决有限观测下电网扰动监测“何时-何处-何事”问题的一体化协同AI计算方案，一区Top期刊
                IEEE Transactions on Industrial Informatics 在投。
              </li>
              <li>
                <strong>专利1：</strong>
                《基于图储备池计算的有限观测下电网扰动时空协同监测方法》，申请号
                202511169552X，已受理。
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
        </main>
      </div>
    </div>
  );
}
