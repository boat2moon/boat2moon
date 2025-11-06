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
            <div className={styles.tagline}>求职意向：JS/TS全栈开发 &nbsp;|&nbsp; AI应用开发</div>
            <p className={styles.summary}>
              <strong>简历摘要：</strong>
              熟悉TS前后端开发生态，积极参与开源，实现A/B/C端业务闭环，了解项目工程化及CI/CD流程，并具有一定AI算法和应用调优经验，综合赋能AI应用全栈开发。
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
              <strong>编程语言：</strong>主 TypeScript / JavaScript，副 Python
            </li>
            <li>
              <strong>前端：</strong>HTML，Scss / Tailwind，AntD / Shadcn，React / Next.js，Redux
            </li>
            <li>
              <strong>后端：</strong>Node.js / Nest.js，RESTful API，Prisma，Pgsql
            </li>
            <li>
              <strong>AI 相关：</strong>Vercel AI，LangChain.JS
            </li>
            <li>
              <strong>CI/CD：</strong>Github Actions，serverless
            </li>
            <li>
              <strong>外语水平：</strong>通过英语六级
            </li>
            <li>
              <strong>日常办公：</strong>{" "}
              熟悉常用办公工具，有良好的材料文档撰写水平，具备数据处理能力产出美观图表，常负责组内工作中各种ppt制作和汇报材料润色。
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
                    <span>入木 AI</span>
                    <span aria-hidden="true" className={styles.inlineSeparator} />
                    <span>大模型协同写作平台</span>
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
                        <FiGithub aria-hidden="true" />
                      </a>
                      ，后端闭源
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className={styles.nodeSeparator} />
                <span className={styles.nodeTime}>2023.03 - 2023.06</span>
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
                      <strong>项目介绍：</strong>一个 Node 全栈开发的 AIGC
                      知识库平台，包括文档创建，文档管理，AI 写作，AI
                      处理文本，还有多人协同编辑。我作为项目一期开发人员，参与了从 0
                      搭建项目，设计、开发、上线，以及统计、监控和运维项目。
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.node}>
                    <span className={styles.nodeTitle}>亮点成就：</span>
                  </div>
                  <ul>
                    <li>完成多租户权限与协同冲突解决方案，支撑多人实时编辑。</li>
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
                <span className={styles.nodeTime}>2023.03 - 2023.06</span>
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

            {/* <li>
              <div className={styles.node}>
                <span className={styles.nodeTitle}>
                  <BiServer aria-hidden="true" className={styles.nodeIcon} />
                  基于 Nest 的后端管理系统
                </span>
                <span aria-hidden="true" className={styles.nodeSeparator} />
                <span className={styles.nodeTime}>2023.03 - 2023.06</span>
              </div>
              <ul>
                <li>
                  <div className={styles.node}>
                    <span className={styles.nodeTags}>
                      <strong>Nest 后端开发</strong> | Go · gRPC · etcd
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
                    <span className={styles.nodeTitle}>核心内容：</span>
                  </div>
                  <ul>
                    <li>实现 RBAC 权限模型 + Redis 缓存，加速接口鉴权。</li>
                    <li>封装 gRPC Client SDK，降低服务接入门槛。</li>
                    <li>整合 etcd 服务注册与健康检查，提升可用性。</li>
                  </ul>
                </li>
                <li>
                  <div className={styles.node}>
                    <span className={styles.nodeTitle}>Github：</span>
                    <a className={styles.link} href="#">
                      待公开
                    </a>
                  </div>
                </li>
              </ul>
            </li> */}

            <li>
              <div className={styles.node}>
                <span className={styles.nodeTitle}>
                  <BiSolidNetworkChart aria-hidden="true" className={styles.nodeIcon} />
                  <span className={styles.titleText}>
                    <span>城市巨系统网络攻防建模（一期）</span>
                    <span
                      aria-hidden="true"
                      className={styles.inlineSeparator}
                      style={{ "--inline-separator-width": "2.5em" } as CSSProperties}
                    />
                    <span>合肥国家科学中心数据科学研究院</span>
                  </span>
                </span>
                <span aria-hidden="true" className={styles.nodeSeparator} />
                <span className={styles.nodeTime}>2024.03 - 2024.06</span>
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
                      <strong>项目介绍：</strong>一个 Node 全栈 AIGC
                      知识库平台，覆盖文档创建、文档管理、AI 写作、AI
                      文本处理与多人协同编辑。负责项目一期从 0 到 1
                      的架构设计、开发、上线、监控与运维。
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.node}>
                    <span className={styles.nodeTitle}>负责事项：</span>
                  </div>
                  <ul>
                    <li>调研并撰写材料、数据、技术汇报，汇总多方向机理与算法储备。</li>
                    <li>开发 PySpider 爬虫管线，实现数据采集与清洗闭环。</li>
                    <li>独立完成港口模块 Petri 网仿真与 PyQt 可视化界面，封装 GitHub 工具集。</li>
                    <li>设计指标体系评估攻击效果与恢复效率。</li>
                    <li>协助周会组织与多部门任务协调。</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <div className={styles.node}>
                <span className={styles.nodeTitle}>
                  <GiMedicines aria-hidden="true" className={styles.nodeIcon} />
                  <span className={styles.titleText}>
                    <span>AI 赋能 ADC 药物全链路研发（一期）</span>
                    <span
                      aria-hidden="true"
                      className={styles.inlineSeparator}
                      style={{ "--inline-separator-width": "2.5em" } as CSSProperties}
                    />
                    <span>觉微软件科技（苏州）有限公司</span>
                  </span>
                </span>
                <span aria-hidden="true" className={styles.nodeSeparator} />
                <span className={styles.nodeTime}>2023.09 - 2023.12</span>
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
                      <strong>项目介绍：</strong>一个 Node 全栈 AIGC
                      知识库平台，覆盖文档创建、文档管理、AI 写作、AI
                      文本处理与多人协同编辑。负责项目一期从 0 到 1
                      的架构设计、开发、上线、监控与运维。
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.node}>
                    <span className={styles.nodeTitle}>负责事项：</span>
                  </div>
                  <ul>
                    <li>完成毒性预测、疗效预测及生成模型的调研与复现。</li>
                    <li>主导毒性预测模块，优化特征管线并提升 F1 指标 12%。</li>
                    <li>输出模型指标分析与性能评估报告。</li>
                    <li>协助周会汇报与技术方案撰写。</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>科研成果 · 交叉行业 AI 赋能</h2>
          <ul className={styles.skillList}>
            <li>
              论文（GitHub · PPT）：《一种 AI
              赋能电网潮流分析的计算框架》，并在第二十届全国网络科学与工程论坛做学生报告。
            </li>
            <li>专利（GitHub · PPT）：《一种 AI 赋能电网扰动监测的算法方案》。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>获奖情况</h2>
          <ul className={styles.awardList}>
            <li>
              校二等奖学金　<span className={styles.awardDate}>2023.11</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
