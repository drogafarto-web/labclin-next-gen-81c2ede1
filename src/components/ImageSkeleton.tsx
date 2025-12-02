import { cn } from "@/lib/utils";

interface ImageSkeletonProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "landscape" | string;
  rounded?: boolean | string;
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

const ImageSkeleton = ({
  width,
  height,
  className,
  aspectRatio,
  rounded = true,
}: ImageSkeletonProps) => {
  const aspectClass = aspectRatio
    ? aspectRatioClasses[aspectRatio as keyof typeof aspectRatioClasses] ||
      `aspect-[${aspectRatio}]`
    : "";

  const roundedClass =
    typeof rounded === "string"
      ? rounded
      : rounded
      ? "rounded-lg"
      : "";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        aspectClass,
        roundedClass,
        className
      )}
      style={{
        width: width || "100%",
        height: !aspectRatio ? height || "100%" : undefined,
      }}
    >
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-muted/50 to-muted" />
      
      {/* Optional: Shimmer sweep animation */}
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-background/10 to-transparent"
        style={{
          animationTimingFunction: "ease-in-out",
        }}
      />

      {/* Image icon placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-10 h-10 text-muted-foreground/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ImageSkeleton;
