import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import fachada from "@/assets/gallery/fachada-labclin.png";
import brinquedoteca from "@/assets/gallery/brinquedoteca.png";
import equipe from "@/assets/gallery/equipe-entrada.png";
import profissional from "@/assets/gallery/profissional-retrato.png";
import equipamento from "@/assets/gallery/equipamento-lab.png";
import recepcaoplantas from "@/assets/gallery/recepcao-plantas.png";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: fachada,
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
      src: recepcaoplantas,
      alt: "Recepção do Labclin - Ambiente acolhedor com decoração moderna",
      title: "Ambiente Acolhedor",
      description: "Espaço pensado no seu bem-estar",
    },
    {
      src: equipamento,
      alt: "Equipamentos de laboratório modernos do Labclin",
      title: "Tecnologia de Ponta",
      description: "Equipamentos de última geração",
    },
    {
      src: equipe,
      alt: "Equipe do Labclin - Profissionais qualificados e atenciosos",
      title: "Nossa Equipe",
      description: "Profissionais dedicados à sua saúde",
    },
    {
      src: profissional,
      alt: "Profissional do Labclin - Atendimento humanizado",
      title: "Atendimento Humanizado",
      description: "Cuidado e atenção em cada detalhe",
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conheça Nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Espaços
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ambientes modernos, acolhedores e preparados para oferecer a melhor experiência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-medium hover:shadow-strong transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-primary-foreground font-medium">Ver mais</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 border-0 bg-transparent">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 rounded-full bg-black/50 backdrop-blur-sm p-2 hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          
          {selectedImage && (
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={selectedImage}
                alt="Visualização ampliada"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GallerySection;
