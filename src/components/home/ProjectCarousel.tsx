"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export type MediaItem =
  | { type: "image"; src: string | StaticImageData }
  | { type: "video"; src: string };

type ProjectCarouselProps = {
  media: MediaItem[];
  title: string;
};

export default function ProjectCarousel({ media, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isThrottled, setIsThrottled] = useState(false);
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [resetTimer, setResetTimer] = useState(0); // 用于重置自动轮播定时器
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // 只有多张媒体资源时才启用自动轮播
  const hasMultipleItems = media.length > 1;
  const currentItem = media[currentIndex];
  const isCurrentVideo = currentItem?.type === "video";

  useEffect(() => {
    // 如果只有一张图，或者是视频，或者正在悬停，则不自动轮播
    // (悬停时暂停轮播是常见交互，方便用户查看细节)
    if (!hasMultipleItems || isHovered || isCurrentVideo) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 3000); // 3秒自动切换

    return () => clearInterval(interval);
  }, [hasMultipleItems, isHovered, media.length, resetTimer, isCurrentVideo]);

  // 当切走时，暂停所有视频，并播放当前视频
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx !== currentIndex) {
          video.pause();
        } else {
          // 当前轮播到该视频，尝试重置到开头并播放
          video.currentTime = 0;
          video.play().catch((err) => console.log("Auto-play prevented:", err));
        }
      }
    });
  }, [currentIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault(); // 防止触发父级 Link 跳转
    e.stopPropagation();

    if (isThrottled) return;
    setIsThrottled(true);
    setTimeout(() => setIsThrottled(false), 500); // 500ms 节流，对应过渡动画时长

    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setResetTimer((prev) => prev + 1); // 重置定时器
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault(); // 防止触发父级 Link 跳转
    e.stopPropagation();

    if (isThrottled) return;
    setIsThrottled(true);
    setTimeout(() => setIsThrottled(false), 500); // 500ms 节流，对应过渡动画时长

    setCurrentIndex((prev) => (prev + 1) % media.length);
    setResetTimer((prev) => prev + 1); // 重置定时器
  };

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-zinc-100
        dark:bg-zinc-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {media.length > 0 ? (
        <>
          {/* 媒体容器 */}
          <div
            className="flex h-full w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {media.map((item, index) => (
              <div
                key={index}
                className="relative h-full w-full shrink-0 flex items-center justify-center
                  bg-black"
              >
                {item.type === "video" ? (
                  <div
                    className="h-full w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={item.src}
                      className="h-full w-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={`${title} - ${index + 1}`}
                    fill
                    className={cn(
                      "object-cover",
                      !hasMultipleItems &&
                        `transition-transform duration-500 group-hover:scale-105
                          group-data-[active=true]:scale-105`,
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {/* 切换按钮 - 仅在多图且悬停时显示 */}
          {hasMultipleItems && (
            <>
              <button
                onClick={handlePrev}
                className={cn(
                  `absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5
                    text-white backdrop-blur-sm transition-all hover:bg-black/70 z-10`,
                  "opacity-0 md:group-hover:opacity-100 max-md:opacity-100",
                )}
                aria-label="Previous media"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className={cn(
                  `absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5
                    text-white backdrop-blur-sm transition-all hover:bg-black/70 z-10`,
                  "opacity-0 md:group-hover:opacity-100 max-md:opacity-100",
                )}
                aria-label="Next media"
              >
                <ChevronRight size={16} />
              </button>

              {/* 指示器小圆点 - 仅在当前项不是视频时显示 */}
              {!isCurrentVideo && (
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 z-10">
                  {media.map((_, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-all shadow-sm",
                        idx === currentIndex ? "bg-white w-3" : "bg-white/50",
                      )}
                    />
                  ))}
                </div>
              )}
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
