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
  // Se webpSrc não for fornecido, tenta gerar automaticamente
  const webpPath = webpSrc || src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  return (
    <picture>
      <source srcSet={webpPath} type="image/webp" />
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
};

export default OptimizedImage;
