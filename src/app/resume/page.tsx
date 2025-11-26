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

/**
 * ResumePage 承载完整的个人简历内容，引用独立的 SCSS Module 保持视觉复刻。
 */
export default function ResumePage() {
  return (
    <div className={styles.resumePage}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1>张于淼</h1>
            <div className={styles.tagline}>
              男 &nbsp;|&nbsp; 211院校计算机-人工智能专业 &nbsp;|&nbsp; 2026硕士应届生
            </div>
            {/* <div className={styles.tagline}>求职意向：JS/TS全栈开发 &nbsp;|&nbsp; AI应用开发</div> */}
            <div className={styles.tagline}>实习意向：前端开发 &nbsp;|&nbsp; AI应用开发</div>
            <p className={styles.summary}>
              <strong>简历摘要：</strong>
              {/* AI复合型程序员，熟悉JS/TS前后端开发生态，积极参与开源，实现A/B/C端业务闭环，了解项目工程化及CI/CD流程，并具有一定AI算法和应用调优经验，综合赋能AI大模型应用全栈开发。 */}
              AI复合型程序员，熟悉JS/TS前后端开发生态，实现A/B/C端业务闭环，了解项目工程化及CI/CD流程，并具有一定AI算法和应用调优经验，综合赋能AI大模型应用全栈开发。
            </p>
          </div>
          <Image
            src="/resume/avatar.jpg"
            alt="头像"
            width={294}
            height={377}
            className={styles.avatar}
          />
          <div className={styles.contacts}>
            <div className={styles.contactsColumn}>
              <div className={styles.contactItem}>
                <PiPhoneCallFill aria-hidden="true" className={styles.contactIcon} />
                <span>电话：17354991160</span>
              </div>
              <a
                className={`${styles.contactItem} ${styles.contactLink}`}
                href="https://github.com/boat2moon"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub aria-hidden="true" className={styles.contactIcon} />
                <span>Github：</span>
                <span className={styles.contactValue}>https://github.com/boat2moon</span>
              </a>
            </div>
            <div className={styles.contactsColumn}>
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
              <strong>熟悉前端：</strong>HTML，Sass / Tailwind，AntD / Shadcn，React，Redux /
              Zustand，Next
            </li>
            <li>
              <strong>了解后端：</strong>Node.js / Hono / Nest，RESTful API，Prisma / Drizzle
            </li>
            <li>
              <strong>AI 相关：</strong>Prompt Engineering，LangChain.JS，Function_Call /
              MCP，Agent，RAG，向量数据库, Vercel AI
            </li>
            <li>
              <strong>CI/CD：</strong>Github Actions，Serverless
            </li>
            <li>
              <strong>外语水平：</strong>通过英语六级
            </li>
            <li>
              <strong>日常办公：</strong>{" "}
              熟悉常用办公工具，有良好的材料文档撰写水平，具备数据处理能力产出美观图表，常兼顾组内工作中各种ppt制作和汇报材料润色。
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>项目 | 实习经历</h2>
          <ul className={styles.tree}>
            <li>
              <div className={styles.node}>
                <span className={styles.nodeTitle}>
                  <TfiWrite aria-hidden="true" className={styles.nodeIcon} />
                  <span className={styles.titleText}>
                    {/* <span>入木 AI</span> */}
                    <span>DocFlow</span>
                    <span aria-hidden="true" className={styles.inlineSeparator} />
                    <span>AI大模型协同文档平台</span>
                    <span
                      aria-hidden="true"
                      className={styles.inlineSeparator}
                      style={{ "--inline-separator-width": "2.5em" } as CSSProperties}
                    />
                    <span>
                      社区合作开发，
                      <a
                        className={styles.inlineLink}
                        href="https://github.com/xun082/DocFlow"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        前端开源
                        <FiGithub aria-hidden="true" className={styles.inlineIconSmall} />
                      </a>
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
                      定制封装 fetch ，将包括参数整理、响应解析、SSE、超时与重试控制、Token
                      刷新及统一错误处理——完整串联成一个高内聚、可观测的闭环体系，简洁统一了业务请求行为，提升了
                      HTTP 客户端的健壮性与扩展性。
                    </li>
                    <li>
                      使用 Tiptap + 自研 Prompt 模板实现 AI 写作流水线，平均生成速度提升 35%。
                    </li>
                    <li>
                      引入 Zustand 状态模块化与 Prisma Schema 代码生成，减少 40% 模型重复定义。
                    </li>
                    <li>自建监控面板结合 OSS CDN 日志，降低静态资源成本 28%。</li>
                    <li>撰写部署手册并输出 CI/CD 流程规范，支撑后续团队迭代。</li>
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
                      <strong>全栈开发</strong> | Go · gRPC · etcd
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.node}>
                    <span>
                      <strong>项目介绍：</strong>一个 Node 全栈 AIGC
                      知识库平台，覆盖文档创建、文档管理、AI 写作、AI
                      文本处理与多人协同编辑。负责项目一期从 0 到 1
                      的架构设计、开发、上线、监控与运维。
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.node}>
                    <span className={styles.nodeTitle}>亮点成就：</span>
                  </div>
                  <ul>
                    <li>设计 gRPC 微服务拆分问答、评估、素材三个域模块。</li>
                    <li>基于 etcd 实现会话状态共享，保障多节点一致性。</li>
                    <li>编写 Prompt 组合策略，面试评分准确率提升 17%。</li>
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
                <span className={styles.nodeTime}>2023.10 - 2024.07</span>
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
                      调研并撰写方案材料、收集数据、制作PPT，为多个行业网络的机理与相关算法做技术储备。
                    </li>
                    <li>基于 Python 爬虫库 PySpider，编码汇总目标地区电力行业网络基础设施数据</li>
                    <li>
                      独立完成交通网络中港口模块的 PetriNet 事件网络仿真并基于 PyQt 可视化数据界面。
                    </li>
                    <li>参与设计指标体系评估机理仿真合理性，以及攻击效果与恢复效率。</li>
                    <li>协助安排定期会议汇报与任务协调。</li>
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
                <span className={styles.nodeTime}>2025.04 - 2025.5</span>
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
                      （一类抗癌靶向药）的全链路研发，包括
                      分子/蛋白生成模型生成药物候选分子、疗效预测模型筛选高效分子、毒性预测模型过滤高毒分子等环节，从而提升研发效率，降低研发成本，加速新药上市进程。
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.node}>
                    <span className={styles.nodeTitle}>负责事项：</span>
                  </div>
                  <ul>
                    <li>
                      项目初期技术调研，包括毒性预测、疗效预测及生成模型。分析项目关键难点并与数据团队沟通。
                    </li>
                    <li>负责毒性预测模块的算法复现。</li>
                    <li>撰写调研报告并协助安排周会汇报。</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>纵向科研成果 · 交叉行业 AI 赋能</h2>
          <ul className={styles.skillList}>
            <li>
              论文1：《A Spatial Multi-Scale Reservoir Computing Framework for Power Flow Analysis
              in Power Grids》，一种数据驱动的AI计算框架解决电网潮流计算问题，现期刊Complex
              Engineering Systems在投，并曾在第二十届全国网络科学与工程论坛做分组报告。
            </li>
            <li>
              论文2：《When, Where, and What: A Graph Reservoir Computing Framework for
              Spatiotemporal Power Grid Disturbance
              Monitoring》，一种解决电网扰动监测“何时-何处-何事”问题的一体化协同AI计算方案，一区Top期刊
              IEEE Transactions on Industrial Informatics 在投。
            </li>
            <li>
              专利1：《基于图储备池计算的有限观测下电网扰动时空协同监测方法》，申请号
              202511169552X，已受理。
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>获奖情况</h2>
          <ul className={styles.awardList}>
            <li>
              校二等奖学金　<span className={styles.awardDate}>2025</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
