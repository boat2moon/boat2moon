"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./resume.module.scss";

/**
 * 简历页客户端外壳组件
 * 包含简历渲染的缩放逻辑、监听事件及打印处理等交互
 */
export default function ResumeClient({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | "auto">("auto");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (mainRef.current) {
        const targetWidth = 794; // 简历固定宽度 A4 210mm approx 794px
        const screenWidth = window.innerWidth;
        const newScale = screenWidth < targetWidth ? screenWidth / targetWidth : 1;

        setScale(newScale);

        if (newScale < 1) {
          setHeight(mainRef.current.scrollHeight * newScale);
        } else {
          setHeight("auto");
        }
      }
    };

    window.addEventListener("resize", handleResize);
    const resizeObserver = new ResizeObserver(handleResize);
    if (mainRef.current) {
      resizeObserver.observe(mainRef.current);
    }

    handleResize();
    setReady(true);

    const handleBeforePrint = () => {
      alert(
        "💡 提示：请将“目标打印机”选择为“另存为 PDF”（Save as PDF），这样生成的 PDF 才能保留可点击的超链接效果，以及视觉效果跟网页中更加一致。",
      );
    };
    window.addEventListener("beforeprint", handleBeforePrint);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("beforeprint", handleBeforePrint);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.resumePage}>
      <button className={styles.printBtn} onClick={() => window.print()} title="打印 / 另存为 PDF">
        <svg
          className={styles.printerSvg}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 出纸（hover 时滑出） */}
          <g className={styles.paper}>
            <rect x="18" y="38" width="28" height="22" rx="2" fill="#fff" />
            <line x1="23" y1="45" x2="41" y2="45" stroke="#ccc" strokeWidth="1.5" />
            <line x1="23" y1="49" x2="37" y2="49" stroke="#ccc" strokeWidth="1.5" />
            <line x1="23" y1="53" x2="39" y2="53" stroke="#ccc" strokeWidth="1.5" />
          </g>
          {/* 打印机主体 */}
          <rect x="8" y="22" width="48" height="22" rx="4" fill="currentColor" />
          {/* 进纸槽 */}
          <rect x="16" y="10" width="32" height="16" rx="2" fill="currentColor" opacity="0.7" />
          {/* 出纸口 */}
          <rect x="14" y="38" width="36" height="4" rx="1" fill="currentColor" opacity="0.85" />
          {/* 电源指示灯 */}
          <circle className={styles.led} cx="46" cy="33" r="2.5" fill="#4ade80" />
          {/* 按钮 */}
          <circle cx="38" cy="33" r="2" fill="rgba(255,255,255,0.25)" />
        </svg>
      </button>
      <div className={styles.container} style={{ height: height }}>
        <main
          ref={mainRef}
          className={styles.main}
          style={{
            transform: `scale(${scale})`,
            marginLeft: scale < 1 ? 0 : "auto",
            marginRight: scale < 1 ? 0 : "auto",
            opacity: ready ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
