import { useMemo } from "react";
import { Link } from "react-router-dom";
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
  Microscope,
  Truck,
  Smartphone,
  ChevronRight,
  Navigation,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { generateBreadcrumbSchema, generateFAQSchema, LABCLIN_SOCIAL_LINKS, LABCLIN_PARENT_ORGANIZATION, UNIT_REVIEWS, generateReviewsArray } from "@/lib/structuredData";

// Unit data
const UNIT_DATA = {
  name: "Labclin Mercês",
  address: "Praça Dr. Castelões, 40 - Centro, Mercês - MG",
  cep: "36190-000",
  phone: "(32) 99967-1581",
  whatsapp: "5532999671581",
  hours: {
    weekdays: "Segunda a Sexta: 06:45 às 11:45",
    saturday: "Sábado: Fechado",
    sunday: "Domingo: Fechado",
  },
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Praça+Dr.+Castelões,+40,+Centro,+Mercês+-+MG",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5!2d-43.3333!3d-21.1944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzQwLjAiUyA0M8KwMjAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr",
};

const SERVICES = [
  {
    icon: Baby,
    title: "Sexagem Fetal",
    description: "Descubra o sexo do bebê a partir da 8ª semana de gestação",
  },
  {
    icon: Microscope,
    title: "Exames de Rotina",
    description: "Check-up completo com hemograma, glicemia e muito mais",
  },
  {
    icon: Truck,
    title: "Toxicológico CNH",
    description: "Para renovação e primeira habilitação de motoristas",
  },
  {
    icon: Smartphone,
    title: "Resultados Online",
    description: "Acesse seus resultados sem sair de casa, 24 horas por dia",
  },
];

const FAQS = [
  {
    question: "Preciso agendar exame em Mercês?",
    answer:
      "Para a maioria dos exames de rotina, não é necessário agendar. O atendimento é por ordem de chegada das 06:45 às 11:45, de segunda a sexta-feira.",
  },
  {
    question: "Aceitam convênios em Mercês?",
    answer:
      "Sim, atendemos Unimed, Fusex, IPSM e particular com preços acessíveis. Consulte-nos para verificar a cobertura do seu plano.",
  },
  {
    question: "O laboratório faz coleta domiciliar em Mercês?",
    answer:
      "Sim, oferecemos coleta domiciliar para pacientes que não podem se deslocar até a unidade. Entre em contato pelo WhatsApp para agendar.",
  },
  {
    question: "Quanto tempo demora para sair o resultado dos exames?",
    answer:
      "O prazo varia conforme o tipo de exame. Exames de rotina como hemograma ficam prontos no mesmo dia. Exames mais complexos podem levar de 2 a 7 dias úteis.",
  },
];

// Helper to check if unit is currently open
const isUnitOpen = (): boolean => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;

  // Monday to Friday (1-5), 6:45 to 11:45
  if (day >= 1 && day <= 5) {
    return currentTime >= 6.75 && currentTime <= 11.75;
  }
  return false;
};

const UnidadeMerces = () => {
  const isOpen = useMemo(() => isUnitOpen(), []);

  // Generate structured data
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Labclin Mercês",
    description:
      "Laboratório de análises clínicas em Mercês, MG. Exames de sangue, sexagem fetal, toxicológico para CNH e muito mais.",
    url: "https://www.labclinmg.com.br/unidades/merces",
    telephone: "+55-32-99967-1581",
    priceRange: "$$",
    image: "https://www.labclinmg.com.br/images/gallery/fachada-labclin.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Dr. Castelões, 40 - Centro",
      addressLocality: "Mercês",
      addressRegion: "MG",
      postalCode: "36190-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -21.1944,
      longitude: -43.3333,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:45",
        closes: "11:45",
      },
    ],
    medicalSpecialty: ["Clinical Laboratory", "Blood Testing", "Fetal Gender Testing"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1"
    },
    review: generateReviewsArray(UNIT_REVIEWS.merces),
    sameAs: LABCLIN_SOCIAL_LINKS,
    parentOrganization: LABCLIN_PARENT_ORGANIZATION
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "https://www.labclinmg.com.br" },
    { name: "Unidades", url: "https://www.labclinmg.com.br/unidades" },
    { name: "Mercês", url: "https://www.labclinmg.com.br/unidades/merces" },
  ]);

  const faqSchema = generateFAQSchema(FAQS);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [medicalBusinessSchema, breadcrumbSchema, faqSchema],
  };

  const whatsappLink = `https://wa.me/${UNIT_DATA.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de agendar um exame na unidade de Mercês."
  )}`;

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Laboratório em Mercês - Exames de Sangue e Check-up | LabClin"
        description="Realize seus exames no Labclin Mercês. Coleta de sangue, sexagem fetal e toxicológico na Praça Dr. Castelões. Resultados online e atendimento humanizado."
        keywords="laboratório mercês mg, exames de sangue mercês, labclin mercês, sexagem fetal mercês, toxicológico cnh mercês, análises clínicas mercês"
        canonicalUrl="https://www.labclinmg.com.br/unidades/merces"
        structuredData={combinedSchema}
      />
      <Header />

      <main id="main-content" className="flex-grow">
        {/* Breadcrumb */}
        <nav className="bg-muted/50 py-3" aria-label="Breadcrumb">
          <div className="container mx-auto px-4">
            <ol className="flex items-center text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" className="hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">Início</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <ChevronRight className="h-4 w-4 mx-2" aria-hidden="true" />
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/unidades" className="hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">Unidades</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <ChevronRight className="h-4 w-4 mx-2" aria-hidden="true" />
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" aria-current="page">
                <span className="text-foreground font-medium" itemProp="name">Mercês</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.2),transparent_50%)]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Exames Laboratoriais em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">Mercês</span>{" "}
                com Qualidade e Confiança
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Sua saúde em primeiro lugar no LabClin Mercês.
                Atendimento humanizado no coração da cidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto min-h-[52px] text-base">
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Agendar no WhatsApp
                  </Button>
                </a>
                <a href="#mapa">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto min-h-[52px] text-base">
                    <MapPin className="mr-2 h-5 w-5" aria-hidden="true" />
                    Ver no Mapa
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-card border-y border-border py-6 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Status / Hours */}
              <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className={`p-2 rounded-full ${isOpen ? "bg-green-100" : "bg-amber-100"}`}>
                  <Clock className={`h-5 w-5 ${isOpen ? "text-green-600" : "text-amber-600"}`} aria-hidden="true" />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${isOpen ? "text-green-600" : "text-amber-600"}`}>
                    {isOpen ? "Aberto Agora" : "Fechado"}
                  </p>
                  <p className="text-xs text-muted-foreground">Seg-Sex: 06:45 - 11:45</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-medium text-foreground">Praça Dr. Castelões, 40</p>
                  <p className="text-xs text-muted-foreground">Centro, Mercês - MG</p>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${UNIT_DATA.phone.replace(/\D/g, "")}`}
                className="flex items-center justify-center sm:justify-end gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                aria-label="Ligar para (32) 99967-1581"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {UNIT_DATA.phone}
                  </p>
                  <p className="text-xs text-muted-foreground">Clique para ligar</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Serviços em Mercês
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferecemos uma ampla gama de exames laboratoriais com tecnologia de ponta e resultados rápidos
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Services */}
            <div className="mt-10 text-center">
              <p className="text-muted-foreground mb-4">Também realizamos:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Coleta de Sangue", "Exames de Urina", "Exames de Fezes", "Teste do Pezinho", "Hemograma Completo"].map(
                  (service, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-sm text-foreground"
                    >
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" aria-hidden="true" />
                      {service}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="mapa" className="py-16 bg-muted/30" aria-labelledby="location-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="location-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Como Chegar
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estamos localizados na Praça Dr. Castelões, no centro de Mercês, com fácil acesso
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Map Embed */}
              <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5!2d-43.334!3d-21.1944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUHJhw6dhIERyLiBDYXN0ZWzDtWVzLCA0MCwgTWVyY8Oqcw!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                  className="w-full h-80 lg:h-96 border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Labclin Mercês"
                ></iframe>
              </div>

              {/* Location Info */}
              <div className="space-y-6">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      <MapPin className="h-6 w-6 mr-2 text-primary" aria-hidden="true" />
                      Endereço Completo
                    </h3>
                    <address className="not-italic space-y-2 text-muted-foreground">
                      <p className="text-lg text-foreground font-medium">Praça Dr. Castelões, 40</p>
                      <p>Centro, Mercês - MG</p>
                      <p>CEP: 36190-000</p>
                    </address>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      <Clock className="h-6 w-6 mr-2 text-primary" aria-hidden="true" />
                      Horário de Funcionamento
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="flex justify-between">
                        <span>Segunda a Sexta:</span>
                        <span className="text-foreground font-medium">06:45 às 11:45</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Sábado:</span>
                        <span>Fechado</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Domingo:</span>
                        <span>Fechado</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={UNIT_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="lg" className="w-full min-h-[48px]">
                      <Navigation className="mr-2 h-5 w-5" aria-hidden="true" />
                      Traçar Rota
                    </Button>
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="default" size="lg" className="w-full min-h-[48px]">
                      <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                      Falar no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tire suas dúvidas sobre o Labclin Mercês
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {FAQS.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left text-foreground font-medium hover:text-primary hover:no-underline py-4">
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
        <section className="py-16 bg-gradient-to-br from-primary/5 via-muted/30 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para cuidar da sua saúde em Mercês?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agende seus exames agora mesmo ou venha nos visitar na Praça Dr. Castelões
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="min-h-[52px] text-base">
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Agendar pelo WhatsApp
                </Button>
              </a>
              <Link to="/resultados">
                <Button variant="outline" size="lg" className="min-h-[52px] text-base">
                  <Smartphone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Ver Resultados Online
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default UnidadeMerces;
