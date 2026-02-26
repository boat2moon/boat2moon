import React from "react";
import { ROCKET_MASK_DATA_URI } from "../data/rocketMaskData";

/**
 * MatrixRocketPlaceholder —— 黑客帝国风格的二进制飞船占位组件
 *
 * 纯 HTML + CSS 实现，SSR 兼容，0 JS 依赖。
 * 通过 CSS mask-image 将绿色二进制文字裁剪成火箭形状，
 * 飞船轮廓完全由二进制数字构成，无额外背景色。
 */

// 预生成伪随机二进制列数据（确定性，SSR 安全）
function generateColumns(count: number, rows: number): string[][] {
  const columns: string[][] = [];
  let seed = 42;
  const nextRand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  for (let col = 0; col < count; col++) {
    const column: string[] = [];
    for (let row = 0; row < rows; row++) {
      column.push(nextRand() > 0.5 ? "1" : "0");
    }
    columns.push(column);
  }
  return columns;
}

const COLS = 40;
const ROWS = 30;
const columns = generateColumns(COLS, ROWS);

// 根据列索引生成确定性的动画参数
function getAnimStyle(colIndex: number) {
  const delay = ((colIndex * 7 + 3) % 11) * 0.3;
  const duration = 2 + ((colIndex * 13 + 5) % 7) * 0.5;

  return {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  } as React.CSSProperties;
}

const MatrixRocketPlaceholder = React.memo(function MatrixRocketPlaceholder() {
  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[500px]">
      {/* 二进制文字填充火箭内部，纯数字构成形状 */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage: `url(${ROCKET_MASK_DATA_URI})`,
          WebkitMaskImage: `url(${ROCKET_MASK_DATA_URI})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex">
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className="flex-1 flex flex-col items-center animate-matrix-rain"
              style={getAnimStyle(colIndex)}
            >
              {col.map((char, rowIndex) => (
                <span
                  key={rowIndex}
                  className="text-[7px] sm:text-[9px] lg:text-[11px] font-mono font-bold
                    leading-tight select-none"
                  style={{
                    color:
                      (colIndex + rowIndex) % 7 === 0
                        ? "rgb(134, 239, 172)" // green-300 高亮
                        : (colIndex + rowIndex) % 3 === 0
                          ? "rgb(74, 222, 128)" // green-400
                          : "rgb(34, 197, 94)", // green-500
                    textShadow:
                      (colIndex + rowIndex) % 5 === 0
                        ? "0 0 6px rgba(74, 222, 128, 0.9), 0 0 12px rgba(34, 197, 94, 0.5)"
                        : "0 0 4px rgba(34, 197, 94, 0.4)",
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MatrixRocketPlaceholder;
