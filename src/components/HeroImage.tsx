import { useState } from "react";

/**
 * HeroImage - Componente dedicado para a imagem principal do Hero (LCP)
 * 
 * Otimizado para performance máxima com:
 * - Picture element com múltiplos sources
 * - WebP como formato preferido
 * - Versões responsivas por tamanho de tela
 * - Fallback triplo: WebP → JPG menor → JPG original
 * - Loading eager + fetchPriority high para LCP
 */
const HeroImage = () => {
  const [imgError, setImgError] = useState(false);

  // Se todas as versões otimizadas falharem, usa o original diretamente
  if (imgError) {
    return (
      <img
        src="/hero-professionals.jpg"
        alt="Profissionais do Laboratório Labclin"
        className="w-full h-full object-cover"
        loading="eager"
        decoding="sync"
        width={600}
        height={400}
      />
    );
  }

  return (
    <picture>
      {/* WebP para navegadores modernos - por tamanho de tela */}
      <source
        type="image/webp"
        media="(max-width: 640px)"
        srcSet="/hero-professionals-480w.webp"
      />
      <source
        type="image/webp"
        media="(max-width: 1024px)"
        srcSet="/hero-professionals-768w.webp"
      />
      <source
        type="image/webp"
        srcSet="/hero-professionals.webp"
      />
      
      {/* JPG fallback para navegadores antigos ou se WebP falhar */}
      <source
        media="(max-width: 640px)"
        srcSet="/hero-professionals-480w.jpg"
      />
      <source
        media="(max-width: 1024px)"
        srcSet="/hero-professionals-768w.jpg"
      />
      
      {/* Fallback final - imagem original */}
      <img
        src="/hero-professionals.jpg"
        alt="Profissionais do Laboratório Labclin"
        className="w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        width={600}
        height={400}
        onError={() => setImgError(true)}
      />
    </picture>
  );
};

export default HeroImage;
