interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
  /** Responsive image sizes for srcset */
  sizes?: string;
  /** Generate srcset automatically for responsive images */
  responsive?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  webpSrc,
  sizes,
  responsive = false,
  className = "",
  loading = "lazy",
  width,
  height,
  ...props 
}: OptimizedImageProps) => {
  
  // Gera srcset para imagens responsivas (apenas se responsive=true)
  const generateSrcSet = (baseSrc: string): string => {
    if (!responsive) return baseSrc;
    
    // Gera variações de tamanho (small, medium, large)
    const widths = [320, 640, 768, 1024, 1280, 1536];
    const srcSet = widths.map(w => `${baseSrc} ${w}w`).join(', ');
    return srcSet;
  };

  // Define sizes padrão se não fornecido
  const defaultSizes = sizes || "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

  // Usa WebP se fornecido ou se responsive=true
  if (webpSrc || responsive) {
    return (
      <picture>
        {webpSrc && (
          <source 
            srcSet={responsive ? generateSrcSet(webpSrc) : webpSrc} 
            type="image/webp"
            sizes={responsive ? defaultSizes : undefined}
          />
        )}
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
  
  // Fallback para imagem normal
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
