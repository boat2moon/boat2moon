"use client";

import { Github, Link as LinkIcon, Mail, FileText } from "lucide-react";
import Link from "next/link";
import type { FriendLink } from "@/data/home";

/**
 * StickyFooter 负责全局底部导航，包含联系方式、外链与简历入口。
 * 组件接受 showFooter 控制粘性动画，确保滚动到指定高度后再展示。
 */
type StickyFooterProps = {
  showFooter: boolean;
  friendLinks: FriendLink[];
};

export default function StickyFooter({ showFooter, friendLinks }: StickyFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`fixed bottom-0 left-0 z-20 w-full bg-slate-900/95 text-zinc-100
        shadow-[0_-2px_12px_rgba(12,24,36,0.2)] backdrop-blur-sm transition-transform duration-300
        ease-in-out ${showFooter ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-4 text-sm sm:px-10 lg:px-14">
        <div
          className="flex w-full flex-col items-center gap-5 text-center sm:flex-wrap
            sm:justify-center sm:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
        >
          <div className="flex flex-col items-center gap-3 lg:flex-1 lg:items-start lg:text-left">
            <div className="font-semibold">© {currentYear} boat2moon</div>
            <div
              className="flex w-full flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-6
                lg:justify-start"
            >
              <a
                href="mailto:boat2moon@proton.me"
                className="flex items-center gap-1.5 transition hover:text-cyan-300"
              >
                <Mail size={16} />
                <span className="whitespace-nowrap">邮箱：boat2moon@proton.me</span>
              </a>
              <a
                href="https://github.com/boat2moon"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition hover:text-cyan-300"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <Link
                href="/resume"
                className="flex items-center gap-1.5 transition hover:text-cyan-300"
              >
                <FileText size={16} />
                <span>我的简历</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 lg:flex-1">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <LinkIcon size={16} />
              <span className="font-medium">友情链接：</span>
            </div>
            <div className="flex w-full flex-wrap justify-center gap-2 sm:gap-3">
              {friendLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs transition hover:text-cyan-300 hover:underline sm:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
