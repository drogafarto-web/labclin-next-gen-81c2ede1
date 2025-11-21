import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const fachadaLabclin = "/images/gallery/fachada-labclin.png";
const brinquedoteca = "/images/gallery/brinquedoteca.png";
const recepcaoPlantas = "/images/gallery/recepcao-plantas.png";
const equipamentoLab = "/images/gallery/equipamento-lab.png";
const profissionalRetrato = "/images/gallery/profissional-retrato.png";
const equipeEntrada = "/images/gallery/equipe-entrada.png";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | { default?: string; src?: string } | null>(null);

  const galleryImages = [
    {
      src: fachadaLabclin,
      alt: "Fachada do Labclin - Laboratório de Análises Clínicas em Rio Pomba",
      title: "Nossa Fachada",
      description: "Unidade moderna e acessível",
    },
    {
      src: brinquedoteca,
      alt: "Brinquedoteca do Labclin - Espaço infantil colorido",
      title: "Brinquedoteca",
      description: "Conforto para as crianças",
    },
    {
      src: recepcaoPlantas,
      alt: "Recepção do Labclin - Ambiente acolhedor com decoração moderna",
      title: "Ambiente Acolhedor",
      description: "Espaço pensado no seu bem-estar",
    },
    {
      src: equipamentoLab,
      alt: "Equipamentos de laboratório modernos do Labclin",
      title: "Tecnologia de Ponta",
      description: "Equipamentos de última geração",
    },
    {
      src: profissionalRetrato,
      alt: "Profissional biomédico do Labclin",
      title: "Equipe Qualificada",
      description: "Profissionais especializados",
    },
    {
      src: equipeEntrada,
      alt: "Equipe do Labclin na entrada da unidade - Atendimento humanizado",
      title: "Atendimento Humanizado",
      description: "Nossa equipe sempre pronta para ajudar",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça Nossas Instalações
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ambiente moderno, acolhedor e equipado com tecnologia de ponta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {image.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="h-6 w-6" />
            </button>
            
            {selectedImage && (
              <div className="relative rounded-lg overflow-hidden">
                <OptimizedImage
                  src={selectedImage}
                  alt="Visualização ampliada"
                  className="w-full h-auto max-h-[85vh] object-contain"
                  loading="eager"
                  width={1200}
                  height={900}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
