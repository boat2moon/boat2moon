import type { Metadata } from "next";

import ResumePage from "./ResumePage";

export const metadata: Metadata = {
  title: "个人简历 - 张于淼",
  description:
    "张于淼的个人简历。211院校计算机-人工智能专业硕士应届生，岗位意向：大前端 / AI应用全栈开发。擅长 TypeScript 全栈、React/Next.js、AI 大模型应用开发。",
  openGraph: {
    title: "个人简历 - 张于淼 | boat2moon",
    description: "211院校计算机-人工智能专业硕士应届生，岗位意向：大前端 / AI应用全栈开发。",
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
 * 简历页入口（服务端组件），导出 metadata 后将渲染委托给客户端 ResumePage。
 */
export default function ResumePageWrapper() {
  return <ResumePage />;
}
