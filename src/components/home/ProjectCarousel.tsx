"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ProjectCarouselProps = {
  images: Array<string | StaticImageData>;
  title: string;
};

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isThrottled, setIsThrottled] = useState(false);
  const [resetTimer, setResetTimer] = useState(0); // 用于重置自动轮播定时器

  // 只有多张图片时才启用自动轮播
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || !isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3秒自动切换

    return () => clearInterval(interval);
  }, [hasMultipleImages, isHovered, images.length, resetTimer]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault(); // 防止触发父级 Link 跳转
    e.stopPropagation();

    if (isThrottled) return;
    setIsThrottled(true);
    setTimeout(() => setIsThrottled(false), 500); // 500ms 节流，对应过渡动画时长

    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setResetTimer((prev) => prev + 1); // 重置定时器
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault(); // 防止触发父级 Link 跳转
    e.stopPropagation();

    if (isThrottled) return;
    setIsThrottled(true);
    setTimeout(() => setIsThrottled(false), 500); // 500ms 节流，对应过渡动画时长

    setCurrentIndex((prev) => (prev + 1) % images.length);
    setResetTimer((prev) => prev + 1); // 重置定时器
  };

  return (
    <div
      className="relative h-52 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentIndex(0); // 鼠标离开时重置回第一张图
      }}
    >
      {images.length > 0 ? (
        <>
          {/* 图片容器 */}
          <div
            className="flex h-full w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="relative h-full w-full shrink-0">
                <Image
                  src={src}
                  alt={`${title} - ${index + 1}`}
                  fill
                  className={cn(
                    "object-cover",
                    !hasMultipleImages && "transition-transform duration-500 group-hover:scale-105",
                  )}
                />
              </div>
            ))}
          </div>

          {/* 切换按钮 - 仅在多图且悬停时显示 */}
          {hasMultipleImages && (
            <>
              <button
                onClick={handlePrev}
                className={cn(
                  `absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5
                    text-white backdrop-blur-sm transition-all hover:bg-black/70`,
                  isHovered ? "opacity-100" : "opacity-0",
                )}
                aria-label="Previous image"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className={cn(
                  `absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5
                    text-white backdrop-blur-sm transition-all hover:bg-black/70`,
                  isHovered ? "opacity-100" : "opacity-0",
                )}
                aria-label="Next image"
              >
                <ChevronRight size={16} />
              </button>

              {/* 指示器小圆点 */}
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-all shadow-sm",
                      idx === currentIndex ? "bg-white w-3" : "bg-white/50",
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div
          className="flex h-full w-full items-center justify-center text-zinc-300
            dark:text-zinc-700"
        >
          <span className="text-5xl">🚧</span>
        </div>
      )}
    </div>
  );
}
