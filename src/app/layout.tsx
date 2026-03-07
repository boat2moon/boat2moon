import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.boat2moon.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "boat2moon | TypeScript全栈工程师 · AI应用全栈开发",
    template: "%s | boat2moon",
  },
  description:
    "张于淼的个人网站。TypeScript全栈工程师，擅长 React/Next.js 前后端开发、AI 大模型应用开发，实现 A/B/C 端业务闭环交付。",
  keywords: [
    "全栈工程师",
    "TypeScript",
    "React",
    "Next.js",
    "AI应用开发",
    "大模型",
    "前端开发",
    "boat2moon",
    "张于淼",
    "LangChain",
    "Vercel AI SDK",
    "全栈开发",
  ],
  authors: [{ name: "张于淼", url: siteUrl }],
  creator: "张于淼",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: "boat2moon",
    title: "boat2moon | TypeScript全栈工程师 · AI应用全栈开发",
    description:
      "TypeScript全栈工程师，擅长 React/Next.js 前后端开发、AI 大模型应用开发，实现 A/B/C 端业务闭环交付。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "boat2moon - TypeScript全栈工程师",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "boat2moon | TypeScript全栈工程师 · AI应用全栈开发",
    description:
      "TypeScript全栈工程师，擅长 React/Next.js 前后端开发、AI 大模型应用开发，实现 A/B/C 端业务闭环交付。",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "msvalidate.01": "B287BE39F49AE2E541D73C3C926E0AEF",
    },
  },
};

/** 全站 JSON-LD 结构化数据 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "张于淼",
  url: siteUrl,
  jobTitle: "TypeScript全栈工程师",
  description: "AI复合型程序员，熟悉JS/TS前后端开发生态，实现A/B/C端业务闭环交付，AI应用全栈开发。",
  sameAs: ["https://github.com/boat2moon", "https://juejin.cn/user/2928754707930126"],
  knowsAbout: ["TypeScript", "React", "Next.js", "Node.js", "AI应用开发", "LangChain", "全栈开发"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
