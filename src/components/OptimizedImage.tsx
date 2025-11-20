import { useState, useEffect } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string | { default?: string; src?: string } | any;
  alt: string;
  webpSrc?: string;
  /** Responsive image sizes for srcset */
  sizes?: string;
  /** Generate srcset automatically for responsive images */
  responsive?: boolean;
  /** Auto-detect and use WebP version if available (default: true) */
  autoWebP?: boolean;
  /** Fallback placeholder image URL */
  fallbackSrc?: string;
  /** Show visual error indicator (default: true) */
  showErrorIndicator?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  webpSrc,
  sizes,
  responsive = false,
  autoWebP = true,
  fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='sans-serif' font-size='14'%3EImage%3C/text%3E%3C/svg%3E",
  showErrorIndicator = true,
  className = "",
  loading = "lazy",
  width,
  height,
  ...props 
}: OptimizedImageProps) => {
  const [webpError, setWebpError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [resolvedSrc, setResolvedSrc] = useState<string>("");

  // Resolve src from various formats (ES6 import object or string)
  useEffect(() => {
    let imgSrc = "";
    
    if (typeof src === "string") {
      imgSrc = src;
    } else if (src && typeof src === "object") {
      // Handle Vite ES6 imports: { default: "url" } or { src: "url" }
      imgSrc = src.default || src.src || String(src);
    } else {
      imgSrc = String(src);
    }
    
    setResolvedSrc(imgSrc);
  }, [src]);

  // Gera srcset para imagens responsivas (apenas se responsive=true)
  const generateSrcSet = (baseSrc: string): string => {
    if (!responsive || !baseSrc) return baseSrc;
    
    // Gera variações de tamanho (small, medium, large)
    const widths = [320, 640, 768, 1024, 1280, 1536];
    const srcSet = widths.map(w => `${baseSrc} ${w}w`).join(', ');
    return srcSet;
  };

  // Auto-detecta WebP: substitui extensão .jpg/.png/.jpeg por .webp
  const getAutoWebPSrc = (originalSrc: string): string | null => {
    if (!autoWebP || webpError || !originalSrc) return null;
    if (originalSrc.endsWith('.webp')) return null; // Já é WebP
    if (originalSrc.startsWith('data:')) return null; // Data URL
    
    const webpPath = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpPath !== originalSrc ? webpPath : null;
  };

  // Define sizes padrão se não fornecido
  const defaultSizes = sizes || "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

  // Determina qual WebP usar: fornecido manualmente ou auto-detectado
  const effectiveWebpSrc = webpSrc || getAutoWebPSrc(resolvedSrc);

  // Handler para erro no carregamento do WebP
  const handleWebPError = () => {
    setWebpError(true);
  };

  // Handler para erro geral de imagem
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageError(true);
    if (props.onError) {
      props.onError(e);
    }
  };

  // Se houver erro e mostrar indicador visual
  if (imageError && showErrorIndicator) {
    return (
      <div 
        className={`flex items-center justify-center bg-muted border border-border ${className}`}
        style={{ width: width || '100%', height: height || '100%' }}
        title={`Falha ao carregar: ${alt}`}
      >
        <svg 
          className="w-8 h-8 text-muted-foreground opacity-50" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  // Usa WebP se disponível ou se responsive=true
  if (effectiveWebpSrc && !webpError && resolvedSrc) {
    return (
      <picture>
        <source 
          srcSet={responsive ? generateSrcSet(effectiveWebpSrc) : effectiveWebpSrc} 
          type="image/webp"
          sizes={responsive ? defaultSizes : undefined}
          onError={handleWebPError}
        />
        <source 
          srcSet={responsive ? generateSrcSet(resolvedSrc) : resolvedSrc} 
          type={`image/${resolvedSrc.match(/\.(png|jpg|jpeg)$/i)?.[1] || 'jpeg'}`}
          sizes={responsive ? defaultSizes : undefined}
        />
        <img
          src={imageError ? fallbackSrc : resolvedSrc}
          alt={alt}
          className={className}
          loading={loading}
          width={width}
          height={height}
          decoding="async"
          onError={handleImageError}
          {...props}
        />
      </picture>
    );
  }
  
  // Fallback para imagem normal (sem WebP ou após erro)
  return (
    <img
      src={imageError ? fallbackSrc : resolvedSrc}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      decoding="async"
      onError={handleImageError}
      {...props}
    />
  );
};

export default OptimizedImage;
