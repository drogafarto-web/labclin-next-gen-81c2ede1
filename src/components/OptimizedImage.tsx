import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string | { default?: string; src?: string } | any;
  alt: string;
  fallbackSrc?: string;
  showErrorIndicator?: boolean;
  priority?: boolean;
  enableWebP?: boolean;
  showSkeleton?: boolean;
}

// Resolve src SYNCHRONOUSLY to avoid race conditions in production
const resolveSrc = (src: string | { default?: string; src?: string } | any): string => {
  if (typeof src === "string") {
    return src;
  }
  if (src && typeof src === "object") {
    // Handle Vite ES6 imports: { default: "url" }
    return src.default || src.src || String(src);
  }
  return String(src);
};

// Get WebP version of an image path
const getWebPSrc = (src: string): string | null => {
  // Don't convert if already WebP or if it's a data URL
  if (src.endsWith('.webp') || src.startsWith('data:')) {
    return null;
  }
  // Replace extension with .webp
  return src.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
};

const OptimizedImage = ({ 
  src, 
  alt, 
  fallbackSrc,
  showErrorIndicator = true,
  priority = false,
  enableWebP = false,
  showSkeleton = true,
  className = "",
  width,
  height,
  onError,
  onLoad,
  ...props 
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);
  
  // Resolve src synchronously
  const resolvedSrc = resolveSrc(src);
  const webpSrc = enableWebP ? getWebPSrc(resolvedSrc) : null;

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before entering viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`[OptimizedImage] Failed to load: ${resolvedSrc}`);
    setImageError(true);
    if (onError) {
      onError(e);
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  // Error placeholder
  if (imageError && showErrorIndicator) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-muted border border-border",
          className
        )}
        style={{ width: width || '100%', height: height || '100%', minHeight: '100px' }}
        title={`Failed to load: ${alt}`}
      >
        <svg 
          className="w-12 h-12 text-muted-foreground opacity-30" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  // Use fallback if provided and error occurred
  const finalSrc = (imageError && fallbackSrc) ? fallbackSrc : resolvedSrc;
  const finalWebpSrc = (imageError && fallbackSrc) ? getWebPSrc(fallbackSrc) : webpSrc;

  const loadingValue = priority ? "eager" : "lazy";
  const fetchPriorityValue = priority ? "high" : "auto";

  // Skeleton placeholder while loading
  const skeleton = showSkeleton && !isLoaded && (
    <div 
      className={cn(
        "absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-muted/70 to-muted rounded",
        isLoaded && "opacity-0 transition-opacity duration-300"
      )}
      style={{ width: width || '100%', height: height || '100%' }}
    />
  );

  // If WebP is available, use picture element
  if (finalWebpSrc && isInView) {
    return (
      <div ref={imgRef} className={cn("relative overflow-hidden", className)} style={{ width, height }}>
        {skeleton}
        <picture>
          <source type="image/webp" srcSet={finalWebpSrc} />
          <img
            src={finalSrc}
            alt={alt}
            className={cn(
              "w-full h-full transition-opacity duration-300",
              !isLoaded && "opacity-0",
              isLoaded && "opacity-100"
            )}
            loading={loadingValue}
            fetchPriority={fetchPriorityValue}
            decoding={priority ? "sync" : "async"}
            width={width}
            height={height}
            onError={handleImageError}
            onLoad={handleImageLoad}
            {...props}
          />
        </picture>
      </div>
    );
  }

  // Standard image (no WebP or not in view yet)
  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)} style={{ width, height }}>
      {skeleton}
      {isInView && (
        <img
          src={finalSrc}
          alt={alt}
          className={cn(
            "w-full h-full transition-opacity duration-300",
            !isLoaded && "opacity-0",
            isLoaded && "opacity-100"
          )}
          loading={loadingValue}
          fetchPriority={fetchPriorityValue}
          decoding={priority ? "sync" : "async"}
          width={width}
          height={height}
          onError={handleImageError}
          onLoad={handleImageLoad}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
