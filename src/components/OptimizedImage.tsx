import { useState } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string | { default?: string; src?: string } | any;
  alt: string;
  fallbackSrc?: string;
  showErrorIndicator?: boolean;
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

const OptimizedImage = ({ 
  src, 
  alt, 
  fallbackSrc,
  showErrorIndicator = true,
  className = "",
  loading = "eager",
  width,
  height,
  onError,
  ...props 
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);
  
  // Resolve src synchronously
  const resolvedSrc = resolveSrc(src);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`[OptimizedImage] Failed to load: ${resolvedSrc}`);
    setImageError(true);
    if (onError) {
      onError(e);
    }
  };

  // Error placeholder
  if (imageError && showErrorIndicator) {
    return (
      <div 
        className={`flex items-center justify-center bg-muted border border-border ${className}`}
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

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      onError={handleImageError}
      {...props}
    />
  );
};

export default OptimizedImage;
