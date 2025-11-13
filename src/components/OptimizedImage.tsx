interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  webpSrc?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  webpSrc,
  className = "",
  loading = "lazy",
  ...props 
}: OptimizedImageProps) => {
  // Só usa WebP se for explicitamente fornecido
  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <source srcSet={src} type={`image/${src.match(/\.(png|jpg|jpeg)$/i)?.[1] || 'jpeg'}`} />
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          {...props}
        />
      </picture>
    );
  }
  
  // Fallback para imagem normal se não houver WebP
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      {...props}
    />
  );
};

export default OptimizedImage;
