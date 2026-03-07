import type { Metadata } from "next";

import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "boat2moon | TypeScript全栈工程师 · AI应用全栈开发",
  description:
    "张于淼的个人网站。TypeScript全栈工程师，展示项目作品集、技术栈与个人简介。擅长 React/Next.js 前后端开发、AI 大模型应用全栈开发。",
  alternates: {
    canonical: "https://www.boat2moon.com",
  },
};

/**
 * 首页入口（服务端组件），导出 metadata 后将渲染委托给客户端 HomePage。
 */
export default function Home() {
  return <HomePage />;
}
