import { CreditCard } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const convenio1 = "/images/convenios/convenio-1.png";
const convenio2 = "/images/convenios/convenio-2.png";
const convenio3 = "/images/convenios/convenio-3.png";
const convenio4 = "/images/convenios/convenio-4.png";
const convenio5 = "/images/convenios/convenio-5.png";
const convenio6 = "/images/convenios/convenio-6.png";
const convenio7 = "/images/convenios/convenio-7.png";
const convenio8 = "/images/convenios/convenio-8.png";

const visaLogo = "/images/payment/visa.png";
const mastercardLogo = "/images/payment/mastercard.png";
const eloLogo = "/images/payment/elo.png";
const banricomprasLogo = "/images/payment/banricompras.png";
const americanLogo = "/images/payment/american.jpg";
const hipercardLogo = "/images/payment/hipercard.png";
const pixLogo = "/images/payment/pix.png";

const ConveniosSection = () => {
  const convenios = [
    { logo: convenio1, alt: "Convênio 1" },
    { logo: convenio2, alt: "Convênio 2" },
    { logo: convenio3, alt: "Convênio 3" },
    { logo: convenio4, alt: "Convênio 4" },
    { logo: convenio5, alt: "Convênio 5" },
    { logo: convenio6, alt: "Convênio 6" },
    { logo: convenio7, alt: "Convênio 7" },
    { logo: convenio8, alt: "Convênio 8" },
  ];

  const paymentMethods = [
    { logo: visaLogo, alt: "Cartão Visa", width: "w-32" },
    { logo: mastercardLogo, alt: "Cartão Mastercard", width: "w-16" },
    { logo: eloLogo, alt: "Cartão Elo", width: "w-24" },
    { logo: banricomprasLogo, alt: "Cartão Banricompras", width: "w-12" },
    { logo: americanLogo, alt: "Cartão American Express", width: "w-14" },
    { logo: hipercardLogo, alt: "Cartão Hipercard", width: "w-24" },
    { logo: pixLogo, alt: "Pagamento via PIX", width: "w-32" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Convênios Atendidos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Convênios Atendidos
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Atendemos Particular, PAX Rio Pomba e Sindicato Rural.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {convenios.map((convenio, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-medium transition-all"
              >
                <OptimizedImage
                  src={convenio.logo}
                  alt={convenio.alt}
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                  width={120}
                  height={64}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Formas de Pagamento */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4">
            <CreditCard className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Pague seus exames com mais comodidade!
          </h2>
          <p className="text-muted-foreground mb-8">
            Aceitamos diversas formas de pagamento para sua conveniência
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 items-center max-w-3xl mx-auto">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-lg p-4 hover:shadow-medium transition-all h-16 flex items-center justify-center ${method.width}`}
              >
                <OptimizedImage
                  src={method.logo}
                  alt={method.alt}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                  width={100}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConveniosSection;
