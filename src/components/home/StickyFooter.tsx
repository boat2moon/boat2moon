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
      <div
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 sm:gap-6
          lg:gap-10 px-6 py-3 text-sm sm:px-10 lg:px-16"
      >
        <div className="font-semibold">© {currentYear} boat2moon</div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-10 xl:gap-14">
          <a
            href="mailto:boat2moon@proton.me"
            className="flex items-center gap-1.5 transition hover:text-cyan-300"
          >
            <Mail size={16} />
            <span>邮箱：boat2moon@proton.me</span>
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
          <Link href="/resume" className="flex items-center gap-1.5 transition hover:text-cyan-300">
            <FileText size={16} />
            <span>简历</span>
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <LinkIcon size={16} />
            <span>友情链接：</span>
            <div className="flex flex-wrap items-center gap-2">
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
