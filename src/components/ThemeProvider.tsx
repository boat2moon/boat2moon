"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * 主题 Provider：使用 next-themes 提供深色/浅色模式切换能力。
 * attribute="class" 配合 Tailwind v4 的 @custom-variant dark 策略使用。
 */
export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
