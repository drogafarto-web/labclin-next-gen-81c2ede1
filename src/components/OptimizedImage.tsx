import { useState } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
  /** Responsive image sizes for srcset */
  sizes?: string;
  /** Generate srcset automatically for responsive images */
  responsive?: boolean;
  /** Auto-detect and use WebP version if available (default: true) */
  autoWebP?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  webpSrc,
  sizes,
  responsive = false,
  autoWebP = true,
  className = "",
  loading = "lazy",
  width,
  height,
  ...props 
}: OptimizedImageProps) => {
  const [webpError, setWebpError] = useState(false);
  
  // Gera srcset para imagens responsivas (apenas se responsive=true)
  const generateSrcSet = (baseSrc: string): string => {
    if (!responsive) return baseSrc;
    
    // Gera variações de tamanho (small, medium, large)
    const widths = [320, 640, 768, 1024, 1280, 1536];
    const srcSet = widths.map(w => `${baseSrc} ${w}w`).join(', ');
    return srcSet;
  };

  // Auto-detecta WebP: substitui extensão .jpg/.png/.jpeg por .webp
  const getAutoWebPSrc = (originalSrc: string): string | null => {
    if (!autoWebP || webpError) return null;
    if (originalSrc.endsWith('.webp')) return null; // Já é WebP
    
    const webpPath = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpPath !== originalSrc ? webpPath : null;
  };

  // Define sizes padrão se não fornecido
  const defaultSizes = sizes || "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

  // Determina qual WebP usar: fornecido manualmente ou auto-detectado
  const effectiveWebpSrc = webpSrc || getAutoWebPSrc(src);

  // Handler para erro no carregamento do WebP
  const handleWebPError = () => {
    setWebpError(true);
  };

  // Usa WebP se disponível ou se responsive=true
  if (effectiveWebpSrc && !webpError) {
    return (
      <picture>
        <source 
          srcSet={responsive ? generateSrcSet(effectiveWebpSrc) : effectiveWebpSrc} 
          type="image/webp"
          sizes={responsive ? defaultSizes : undefined}
          onError={handleWebPError}
        />
        <source 
          srcSet={responsive ? generateSrcSet(src) : src} 
          type={`image/${src.match(/\.(png|jpg|jpeg)$/i)?.[1] || 'jpeg'}`}
          sizes={responsive ? defaultSizes : undefined}
        />
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          width={width}
          height={height}
          decoding="async"
          {...props}
        />
      </picture>
    );
  }
  
  // Fallback para imagem normal (sem WebP ou após erro)
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage;
