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
  imgClassName?: string;
  sizes?: string;
  enableSrcSet?: boolean;
}

// Resolve src SYNCHRONOUSLY to avoid race conditions in production
const resolveSrc = (src: string | { default?: string; src?: string } | any): string => {
  if (typeof src === "string") {
    return src;
  }
  if (src && typeof src === "object") {
    return src.default || src.src || String(src);
  }
  return String(src);
};

// Get WebP version of an image path
const getWebPSrc = (src: string): string | null => {
  // Não gerar WebP para:
  // 1. Já é WebP
  // 2. É data URL
  // 3. Tem query string
  // 4. É imagem processada pelo Vite (contém hash no path /assets/)
  if (
    src.endsWith('.webp') || 
    src.startsWith('data:') || 
    src.includes('?') ||
    src.match(/\/assets\/.*-[a-f0-9]{8}\.(jpg|jpeg|png|gif)$/i)
  ) {
    return null;
  }
  return src.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
};

// Generate srcset for responsive images (for static images in /public or /images)
const generateSrcSet = (src: string): string | null => {
  // Only generate srcset for local images in public folder
  if (!src.startsWith('/') || src.startsWith('data:') || src.includes('?')) {
    return null;
  }
  
  // For images that already have srcset-ready versions, return the base
  // This is a simplified version - in production you'd have actual resized images
  return null; // Disable auto srcset as we don't have resized versions
};

// Default responsive sizes for different use cases
const DEFAULT_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

const OptimizedImage = ({ 
  src, 
  alt, 
  fallbackSrc,
  showErrorIndicator = true,
  priority = false,
  enableWebP = true,
  showSkeleton = true,
  className = "",
  imgClassName = "",
  sizes = DEFAULT_SIZES,
  enableSrcSet = false,
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
  
  const resolvedSrc = resolveSrc(src);
  const webpSrc = enableWebP ? getWebPSrc(resolvedSrc) : null;
  const srcSet = enableSrcSet ? generateSrcSet(resolvedSrc) : null;

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
        rootMargin: '100px 0px', // Start loading 100px before viewport
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
    onError?.(e);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    onLoad?.(e);
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

  const finalSrc = (imageError && fallbackSrc) ? fallbackSrc : resolvedSrc;
  const finalWebpSrc = (imageError && fallbackSrc) ? getWebPSrc(fallbackSrc) : webpSrc;
  const loadingValue = priority ? "eager" : "lazy";
  const fetchPriorityValue = priority ? "high" : "auto";

  // Skeleton placeholder
  const skeleton = showSkeleton && !isLoaded && (
    <div 
      className={cn(
        "absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-muted/70 to-muted rounded",
        isLoaded && "opacity-0 transition-opacity duration-300"
      )}
      aria-hidden="true"
    />
  );

  // Common image props
  const imageProps = {
    alt,
    className: cn(
      "w-full h-full transition-opacity duration-300",
      imgClassName,
      !isLoaded && "opacity-0",
      isLoaded && "opacity-100"
    ),
    loading: loadingValue as "lazy" | "eager",
    fetchPriority: fetchPriorityValue as "high" | "low" | "auto",
    decoding: priority ? "sync" as const : "async" as const,
    width,
    height,
    onError: handleImageError,
    onLoad: handleImageLoad,
    sizes: sizes,
    ...props
  };

  // WebP with picture element
  if (finalWebpSrc && isInView) {
    return (
      <div ref={imgRef} className={cn("relative overflow-hidden", className)}>
        {skeleton}
        <picture>
          <source type="image/webp" srcSet={finalWebpSrc} />
          <img src={finalSrc} {...imageProps} />
        </picture>
      </div>
    );
  }

  // Standard image
  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)}>
      {skeleton}
      {isInView && (
        <img
          src={finalSrc}
          srcSet={srcSet || undefined}
          {...imageProps}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
