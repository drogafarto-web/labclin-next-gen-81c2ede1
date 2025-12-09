import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Clock, 
  MapPin, 
  Phone, 
  Baby, 
  Smartphone, 
  Heart,
  Activity,
  Truck,
  Navigation,
  Shield
} from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { LABCLIN_SOCIAL_LINKS, LABCLIN_PARENT_ORGANIZATION, UNIT_REVIEWS, generateReviewsArray } from "@/lib/structuredData";

const UnidadeGuarani = () => {
  // Check if currently open (Mon-Fri 06:45-15:30)
  const isOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours() + now.getMinutes() / 60;
    return day >= 1 && day <= 5 && hour >= 6.75 && hour <= 15.5;
  };

  const whatsappUrl = "https://wa.me/5532999422574?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20exame%20na%20unidade%20Guarani.";
  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Rua+José+Ladeira+Pinto,70,Guarani,MG";

  // Schema MedicalBusiness for Guarani
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.labclinmg.com.br/unidades/guarani",
    "name": "Labclin Guarani",
    "alternateName": "Labclin - Laboratório de Análises Clínicas Guarani",
    "description": "Laboratório de análises clínicas em Guarani MG. Exames de sangue, sexagem fetal, toxicológico e check-up completo com resultados online.",
    "url": "https://www.labclinmg.com.br/unidades/guarani",
    "telephone": "+55-32-99942-2574",
    "email": "contato@labclinmg.com.br",
    "image": "https://www.labclinmg.com.br/labclin-logo.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua José Ladeira Pinto, 70 - Bairro Sossego",
      "addressLocality": "Guarani",
      "addressRegion": "MG",
      "postalCode": "36160-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-21.3556",
      "longitude": "-43.0321"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:45",
        "closes": "15:30"
      }
    ],
    "medicalSpecialty": [
      "PathologySpecialty",
      "LaboratoryScience"
    ],
    "availableService": [
      { "@type": "MedicalTest", "name": "Análises Clínicas Completas" },
      { "@type": "MedicalTest", "name": "Sexagem Fetal" },
      { "@type": "MedicalTest", "name": "Teste do Pezinho" },
      { "@type": "MedicalTest", "name": "Exame Toxicológico para CNH" },
      { "@type": "MedicalTest", "name": "Exames Preventivos" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "280",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": generateReviewsArray(UNIT_REVIEWS.guarani),
    "sameAs": LABCLIN_SOCIAL_LINKS,
    "parentOrganization": LABCLIN_PARENT_ORGANIZATION
  };

  // Schema FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O Labclin Guarani aceita convênios?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, aceitamos Unimed, Fusex, IPSM, Promed e outros. Consulte-nos pelo WhatsApp para confirmar seu plano."
        }
      },
      {
        "@type": "Question",
        "name": "Até que horas posso fazer coleta em Guarani?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Realizamos coletas a partir das 06:45. Recomendamos chegar cedo para exames que exigem jejum."
        }
      },
      {
        "@type": "Question",
        "name": "Fazem Sexagem Fetal em Guarani?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, realizamos o exame de Sexagem Fetal aqui na unidade de Guarani. O resultado sai em poucos dias."
        }
      }
    ]
  };

  const services = [
    {
      icon: Activity,
      title: "Check-up Completo",
      description: "Monitore sua saúde com exames de rotina completos e preventivos."
    },
    {
      icon: Heart,
      title: "Exames Hormonais",
      description: "Tireoide, fertilidade, hormônios e muito mais."
    },
    {
      icon: Truck,
      title: "Toxicológico CNH",
      description: "Renove sua carteira sem sair de Guarani."
    },
    {
      icon: Baby,
      title: "Atendimento Infantil",
      description: "Coleta especializada e acolhedora para crianças."
    }
  ];

  const faqs = [
    {
      question: "O Labclin Guarani aceita convênios?",
      answer: "Sim, aceitamos Unimed, Fusex, IPSM, Promed e outros. Consulte-nos pelo WhatsApp para confirmar seu plano."
    },
    {
      question: "Até que horas posso fazer coleta em Guarani?",
      answer: "Realizamos coletas a partir das 06:45. Recomendamos chegar cedo para exames que exigem jejum."
    },
    {
      question: "Fazem Sexagem Fetal em Guarani?",
      answer: "Sim, realizamos o exame de Sexagem Fetal aqui na unidade de Guarani. O resultado sai em poucos dias."
    }
  ];

  return (
    <>
      <SEO
        title="Laboratório em Guarani MG | Labclin Exames e Check-up"
        description="Labclin Guarani: Seu laboratório de confiança no Bairro Sossego. Exames de sangue, sexagem fetal e toxicológico com resultados online. Atendimento Unimed e particulares."
        keywords="laboratório guarani mg, exames de sangue guarani, labclin guarani, sexagem fetal guarani, toxicológico cnh guarani, check-up guarani, análises clínicas guarani"
        canonicalUrl="https://www.labclinmg.com.br/unidades/guarani"
        structuredData={medicalBusinessSchema}
      />
      
      {/* Additional FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                Referência em Análises Clínicas
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Saúde e precisão para a família de{" "}
                <span className="text-primary">Guarani</span>.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Referência em análises clínicas na cidade. Atendimento humanizado e 
                resultados rápidos para você e quem você ama.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppCTA
                  number="5532999422574"
                  message="Olá, gostaria de agendar um exame na unidade Guarani."
                  text="Falar no WhatsApp"
                  animated
                  source="guarani_hero"
                  className="w-full sm:w-auto"
                />
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 min-h-[52px]"
                >
                  <a href="#mapa">
                    <MapPin className="mr-2 h-5 w-5" />
                    Ver Endereço
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="bg-primary-foreground/20 p-2 rounded-full">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Horário Estendido</p>
                  <p className="font-semibold">
                    Seg a Sex, 6:45 às 15:30
                    {isOpen() && (
                      <span className="ml-2 inline-flex items-center gap-1 text-xs bg-green-500 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        Aberto
                      </span>
                    )}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="bg-primary-foreground/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Endereço</p>
                  <p className="font-semibold">Rua José Ladeira Pinto, 70 (Sossego)</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="bg-primary-foreground/20 p-2 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Telefone/WhatsApp</p>
                  <a 
                    href="tel:+5532999422574" 
                    className="font-semibold hover:underline"
                  >
                    (32) 99942-2574
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nossos Serviços em Guarani
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Análises clínicas completas para toda a família, 
                com tecnologia de ponta e atendimento humanizado.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="mapa" className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5!2d-43.03!3d-21.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Jos%C3%A9%20Ladeira%20Pinto%2C%2070%20-%20Bairro%20Sossego%2C%20Guarani%20-%20MG!5e0!3m2!1spt-BR!2sbr"
                    className="w-full h-80 md:h-96 border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Labclin Guarani"
                  />
                </div>
              </div>
              
              <div className="order-1 md:order-2 animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Como Chegar
                </h2>
                <p className="text-muted-foreground mb-6">
                  <strong className="text-foreground">Localizado no Bairro Sossego, com fácil estacionamento.</strong>
                  <br /><br />
                  Estamos na <strong>Rua José Ladeira Pinto, 70</strong>, em uma região tranquila 
                  e de fácil acesso. Ambiente acolhedor para toda a família.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Endereço Completo</p>
                      <p className="text-sm text-muted-foreground">
                        Rua José Ladeira Pinto, 70 - Bairro Sossego<br />
                        Guarani - MG, CEP 36160-000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Horário de Funcionamento</p>
                      <p className="text-sm text-muted-foreground">
                        Segunda a Sexta: 06:45 às 15:30<br />
                        Sábado e Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button
                  asChild
                  className="mt-6 bg-primary hover:bg-primary/90"
                >
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 h-4 w-4" />
                    Traçar Rota no Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Perguntas Frequentes
                </h2>
                <p className="text-muted-foreground">
                  Tire suas dúvidas sobre a unidade Guarani
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-muted/30 rounded-lg border border-border/50 px-6"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-muted/30 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto animate-fade-in">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Sua Saúde em Boas Mãos</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pronto para cuidar da sua saúde em Guarani?
              </h2>
              <p className="text-muted-foreground mb-8">
                Agende seu exame pelo WhatsApp e tenha atendimento rápido e humanizado.
              </p>
              
              <WhatsAppCTA
                number="5532999422574"
                message="Olá, gostaria de agendar um exame na unidade Guarani."
                text="Falar no WhatsApp"
                source="guarani_cta"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default UnidadeGuarani;
