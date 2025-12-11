import { Home, Car, LucideIcon } from "lucide-react";
import { analytics } from "@/lib/analytics";

interface ServiceCard {
  title: string;
  icon: LucideIcon;
  description: string;
  price: string;
  buttonText: string;
  whatsappMessage: string;
}

interface DualServiceCTABannerProps {
  headline?: string;
  whatsappNumber?: string;
  services?: [ServiceCard, ServiceCard];
  source?: string;
  variant?: "default" | "compact";
}

// WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Default services configuration
const defaultServices: [ServiceCard, ServiceCard] = [
  {
    title: "Labclin em Casa",
    icon: Home,
    description: "Exames sem sair do seu lar, com todo o cuidado e conforto. Nossa equipe vai até você, ideal para idosos, gestantes ou quem valoriza comodidade.",
    price: "R$ 50",
    buttonText: "SOLICITAR COLETA EM CASA",
    whatsappMessage: "Olá, gostaria de agendar a modalidade Labclin em Casa (R$ 50,00)."
  },
  {
    title: "Labclin Leva & Traz",
    icon: Car,
    description: "Oferecemos transporte do paciente: buscamos, levamos ao laboratório, aguardamos a coleta e levamos em casa – tudo com segurança e atenção. Apoio ideal para pacientes com mobilidade reduzida.",
    price: "R$ 30",
    buttonText: "SOLICITAR LEVA & TRAZ",
    whatsappMessage: "Olá, gostaria de agendar a modalidade Labclin Leva & Traz (R$ 30,00)."
  }
];

const DualServiceCTABanner = ({
  headline = "ESCOLHA A OPÇÃO DE COLETA MAIS CONFORTÁVEL PARA VOCÊ",
  whatsappNumber = "5532991990239",
  services = defaultServices,
  source = "dual_service_cta",
  variant = "default"
}: DualServiceCTABannerProps) => {
  
  const handleWhatsAppClick = (service: ServiceCard, serviceIndex: number) => {
    const encodedMessage = encodeURIComponent(service.whatsappMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    analytics.whatsappClick(
      `${source}_${serviceIndex === 0 ? 'em_casa' : 'leva_traz'}`,
      whatsappNumber,
      service.whatsappMessage
    );
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const paddingClass = variant === "compact" ? "py-8 px-4 md:px-6" : "py-10 px-4 md:px-8";
  const headlineClass = variant === "compact" 
    ? "text-xl md:text-2xl" 
    : "text-2xl md:text-3xl";

  return (
    <section 
      className={`bg-[#005691] rounded-xl shadow-lg ${paddingClass} my-8`}
      aria-labelledby="dual-service-headline"
    >
      <h2 
        id="dual-service-headline"
        className={`text-white font-bold ${headlineClass} text-center mb-8`}
      >
        {headline}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col transition-transform duration-200 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-[#005691]/10 p-4 rounded-full">
                  <IconComponent className="h-12 w-12 text-[#005691]" aria-hidden="true" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#005691] text-center mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center text-sm leading-relaxed flex-grow mb-4">
                {service.description}
              </p>

              {/* Price */}
              <div className="text-center mb-5">
                <span className="text-sm text-gray-500">Custo acessível:</span>
                <p className="text-2xl font-bold text-[#005691]">{service.price}</p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleWhatsAppClick(service, index)}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 shadow-md"
                aria-label={`${service.buttonText} via WhatsApp`}
              >
                <WhatsAppIcon className="h-5 w-5" />
                {service.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DualServiceCTABanner;
