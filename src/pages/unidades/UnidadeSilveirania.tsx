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
  FileCheck,
  Sparkles,
  Navigation,
  MessageCircle
} from "lucide-react";

const UnidadeSilveirania = () => {
  // Check if currently open (Mon-Fri 07:00-11:00)
  const isOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours() + now.getMinutes() / 60;
    return day >= 1 && day <= 5 && hour >= 7 && hour <= 11;
  };

  const whatsappUrl = "https://wa.me/5532999592154?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20exame%20na%20unidade%20Silveirânia.";
  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Rua+Padre+Cerqueira,20,Silveirânia,MG";

  // Schema MedicalBusiness for Silveirânia
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.labclinmg.com.br/unidades/silveirania",
    "name": "Labclin Silveirânia",
    "alternateName": "Labclin - Laboratório de Análises Clínicas Silveirânia",
    "description": "Posto de coleta Labclin em Silveirânia. Exames de sangue, sexagem fetal, toxicológico e mais com resultados online.",
    "url": "https://www.labclinmg.com.br/unidades/silveirania",
    "telephone": "+55-32-99959-2154",
    "email": "contato@labclinmg.com.br",
    "image": "https://www.labclinmg.com.br/labclin-logo.png",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Padre Cerqueira, 20 - Centro",
      "addressLocality": "Silveirânia",
      "addressRegion": "MG",
      "postalCode": "36185-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-21.2456",
      "longitude": "-43.2145"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "11:00"
      }
    ],
    "medicalSpecialty": [
      "PathologySpecialty",
      "LaboratoryScience"
    ],
    "availableService": [
      { "@type": "MedicalTest", "name": "Coleta de Sangue" },
      { "@type": "MedicalTest", "name": "Exames de Urina e Fezes" },
      { "@type": "MedicalTest", "name": "Sexagem Fetal" },
      { "@type": "MedicalTest", "name": "Teste do Pezinho" },
      { "@type": "MedicalTest", "name": "Exame Toxicológico para CNH" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  // Schema FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual o horário de coleta em Silveirânia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Funcionamos de segunda a sexta, das 07:00 às 11:00 da manhã."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso buscar o resultado impresso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não é necessário. Você pode acessar seus resultados pelo nosso site ou WhatsApp, com total segurança."
        }
      },
      {
        "@type": "Question",
        "name": "Fazem exame toxicológico para CNH?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, realizamos a coleta para renovação de CNH em Silveirânia."
        }
      }
    ]
  };

  const services = [
    {
      icon: Heart,
      title: "Coleta Infantil",
      description: "Carinho e paciência com as crianças em um ambiente acolhedor."
    },
    {
      icon: Baby,
      title: "Sexagem Fetal",
      description: "Descubra o sexo do bebê com poucas semanas de gestação."
    },
    {
      icon: Smartphone,
      title: "Resultados Online",
      description: "Pegue o resultado pelo celular, sem voltar ao posto."
    },
    {
      icon: FileCheck,
      title: "Convênios",
      description: "Consulte nossa lista de atendimento: Unimed, Fusex, IPSM e mais."
    }
  ];

  const faqs = [
    {
      question: "Qual o horário de coleta em Silveirânia?",
      answer: "Funcionamos de segunda a sexta, das 07:00 às 11:00 da manhã."
    },
    {
      question: "Preciso buscar o resultado impresso?",
      answer: "Não é necessário. Você pode acessar seus resultados pelo nosso site ou WhatsApp, com total segurança."
    },
    {
      question: "Fazem exame toxicológico para CNH?",
      answer: "Sim, realizamos a coleta para renovação de CNH em Silveirânia."
    }
  ];

  return (
    <>
      <SEO
        title="Laboratório em Silveirânia MG | Labclin Exames de Sangue"
        description="O Labclin chegou em Silveirânia! Realize seus exames de sangue, sexagem fetal e preventivos no Centro. Resultados online e coleta humanizada."
        keywords="laboratório silveirânia mg, exames de sangue silveirânia, labclin silveirânia, sexagem fetal silveirânia, toxicológico cnh silveirânia, posto de coleta silveirânia"
        canonicalUrl="https://www.labclinmg.com.br/unidades/silveirania"
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
              {/* New Unit Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                <Sparkles className="w-4 h-4" />
                Nova Unidade em Silveirânia
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Exames de qualidade{" "}
                <span className="text-primary">sem sair de Silveirânia</span>.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                O padrão de qualidade Labclin agora perto da sua casa. 
                Coletas rápidas e resultados pela internet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Agendar no WhatsApp
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <a href="#mapa">
                    <MapPin className="mr-2 h-5 w-5" />
                    Localização
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
                  <p className="text-sm opacity-90">Coletas</p>
                  <p className="font-semibold">
                    Seg a Sex, 07h às 11h
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
                  <p className="font-semibold">Rua Padre Cerqueira, 20 (Centro)</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="bg-primary-foreground/20 p-2 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Telefone/WhatsApp</p>
                  <a 
                    href="tel:+5532999592154" 
                    className="font-semibold hover:underline"
                  >
                    (32) 99959-2154
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
                Nossos Serviços em Silveirânia
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Agora você não precisa viajar para realizar seus exames. 
                Tudo perto de você, no centro da cidade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5!2d-43.21!3d-21.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Padre%20Cerqueira%2C%2020%20-%20Centro%2C%20Silveir%C3%A2nia%20-%20MG!5e0!3m2!1spt-BR!2sbr"
                    className="w-full h-80 md:h-96 border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Labclin Silveirânia"
                  />
                </div>
              </div>
              
              <div className="order-1 md:order-2 animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Como Chegar
                </h2>
                <p className="text-muted-foreground mb-6">
                  <strong className="text-foreground">Fácil acesso no centro da cidade.</strong>
                  <br /><br />
                  Estamos na <strong>Rua Padre Cerqueira, 20</strong>, no coração de Silveirânia. 
                  Próximo à praça central, com estacionamento fácil nas imediações.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Endereço Completo</p>
                      <p className="text-sm text-muted-foreground">
                        Rua Padre Cerqueira, 20 - Centro<br />
                        Silveirânia - MG, CEP 36185-000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Horário de Funcionamento</p>
                      <p className="text-sm text-muted-foreground">
                        Segunda a Sexta: 07:00 às 11:00<br />
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
                  Tire suas dúvidas sobre a unidade Silveirânia
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
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Nova Unidade</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pronto para cuidar da sua saúde em Silveirânia?
              </h2>
              <p className="text-muted-foreground mb-8">
                Agende seu exame pelo WhatsApp e tenha atendimento rápido e humanizado.
              </p>
              
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default UnidadeSilveirania;
