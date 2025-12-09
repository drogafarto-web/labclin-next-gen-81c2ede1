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
  CheckCircle,
} from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { generateBreadcrumbSchema, generateFAQSchema, LABCLIN_SOCIAL_LINKS, LABCLIN_PARENT_ORGANIZATION, UNIT_REVIEWS, generateReviewsArray } from "@/lib/structuredData";

// Unit data
const UNIT_DATA = {
  name: "Labclin Rio Pomba",
  address: "Rua Floripes Maria de Jesus, 05, loja 02 - Centro, Rio Pomba - MG",
  cep: "36180-000",
  phone: "(32) 3571-1599",
  whatsapp: "5532991990239",
  hours: {
    weekdays: "Segunda a Sexta: 06:30 às 17:30",
    saturday: "Sábado: 07:00 às 11:00",
    sunday: "Domingo: Fechado",
  },
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+Floripes+Maria+de+Jesus,+05,+Centro,+Rio+Pomba+-+MG",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5!2d-43.1667!3d-21.2750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE2JzMwLjAiUyA0M8KwMTAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr",
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
    question: "Preciso agendar exame em Rio Pomba?",
    answer:
      "Para a maioria dos exames de rotina, não é necessário agendar. O atendimento é por ordem de chegada. Para exames específicos como sexagem fetal, recomendamos entrar em contato antes.",
  },
  {
    question: "O Labclin Rio Pomba abre aos sábados?",
    answer:
      "Sim! A unidade de Rio Pomba é a única que funciona aos sábados, das 07:00 às 11:00, apenas para coletas.",
  },
  {
    question: "Aceitam convênios em Rio Pomba?",
    answer:
      "Sim, atendemos Unimed, Fusex, IPSM e particular com preços acessíveis. Consulte-nos para verificar a cobertura do seu plano.",
  },
  {
    question: "O laboratório faz coleta domiciliar em Rio Pomba?",
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

  // Monday to Friday (1-5), 6:30 to 17:30
  if (day >= 1 && day <= 5) {
    return currentTime >= 6.5 && currentTime <= 17.5;
  }
  // Saturday (6), 7:00 to 11:00
  if (day === 6) {
    return currentTime >= 7 && currentTime <= 11;
  }
  return false;
};

const UnidadeRioPomba = () => {
  const isOpen = useMemo(() => isUnitOpen(), []);

  // Generate structured data
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Labclin Rio Pomba",
    description:
      "Laboratório de análises clínicas em Rio Pomba, MG. Sede principal do Labclin com mais de 58 anos de tradição. Exames de sangue, sexagem fetal, toxicológico para CNH e muito mais.",
    url: "https://www.labclinmg.com.br/unidades/rio-pomba",
    telephone: "+55-32-3571-1599",
    priceRange: "$$",
    image: "https://www.labclinmg.com.br/images/gallery/fachada-labclin.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Floripes Maria de Jesus, 05, loja 02 - Centro",
      addressLocality: "Rio Pomba",
      addressRegion: "MG",
      postalCode: "36180-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -21.275,
      longitude: -43.1667,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "07:00",
        closes: "11:00",
      },
    ],
    medicalSpecialty: ["Clinical Laboratory", "Blood Testing", "Fetal Gender Testing"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1"
    },
    review: generateReviewsArray(UNIT_REVIEWS.rioPomba),
    sameAs: LABCLIN_SOCIAL_LINKS,
    parentOrganization: LABCLIN_PARENT_ORGANIZATION
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "https://www.labclinmg.com.br" },
    { name: "Unidades", url: "https://www.labclinmg.com.br/unidades" },
    { name: "Rio Pomba", url: "https://www.labclinmg.com.br/unidades/rio-pomba" },
  ]);

  const faqSchema = generateFAQSchema(FAQS);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [medicalBusinessSchema, breadcrumbSchema, faqSchema],
  };

  const whatsappLink = `https://wa.me/${UNIT_DATA.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de agendar um exame na unidade de Rio Pomba."
  )}`;

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Laboratório em Rio Pomba MG | Exames de Sangue Labclin"
        description="Sede do Labclin em Rio Pomba com 58+ anos de tradição. Único da rede aberto aos sábados. Coleta de sangue, sexagem fetal e toxicológico. Resultados online."
        keywords="laboratório rio pomba mg, exames de sangue rio pomba, labclin rio pomba, sexagem fetal rio pomba, toxicológico cnh rio pomba, análises clínicas rio pomba"
        canonicalUrl="https://www.labclinmg.com.br/unidades/rio-pomba"
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
                <span className="text-foreground font-medium" itemProp="name">Rio Pomba</span>
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
              {/* Badge for Saturday opening */}
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-secondary/20 text-secondary border-2 border-secondary/40 mb-6">
                ✓ Única unidade aberta aos sábados
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Sede do Labclin em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">Rio Pomba</span>{" "}
                há mais de 58 anos
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nossa matriz com tradição e excelência em análises clínicas.
                Atendimento humanizado de segunda a sábado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppCTA
                  number={UNIT_DATA.whatsapp}
                  message="Olá! Gostaria de agendar um exame na unidade de Rio Pomba."
                  text="Agendar no WhatsApp"
                  animated
                  source="riopomba_hero"
                  className="w-full sm:w-auto"
                />
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
                  <p className="text-xs text-muted-foreground">Seg-Sex: 06:30-17:30 | Sáb: 07:00-11:00</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-medium text-foreground">Rua Floripes Maria de Jesus, 05</p>
                  <p className="text-xs text-muted-foreground">Centro, Rio Pomba - MG</p>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${UNIT_DATA.phone.replace(/\D/g, "")}`}
                className="flex items-center justify-center sm:justify-end gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                aria-label="Ligar para (32) 3571-1599"
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
                Nossos Serviços em Rio Pomba
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sede completa com ampla gama de exames laboratoriais, tecnologia de ponta e resultados rápidos
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
                {["Coleta de Sangue", "Exames de Urina", "Exames de Fezes", "Teste do Pezinho", "Hemograma Completo", "VeinViewer"].map(
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
                Estamos localizados no centro de Rio Pomba, com fácil acesso e estacionamento próximo
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Map Embed */}
              <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5!2d-43.1667!3d-21.2750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUnVhIEZsb3JpcGVzIE1hcmlhIGRlIEplc3VzLCAwNSwgUmlvIFBvbWJh!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                  className="w-full h-80 lg:h-96 border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Labclin Rio Pomba"
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
                      <p className="text-lg text-foreground font-medium">Rua Floripes Maria de Jesus, 05, loja 02</p>
                      <p>Centro, Rio Pomba - MG</p>
                      <p>CEP: 36180-000</p>
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
                        <span className="text-foreground font-medium">06:30 às 17:30</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Sábado:</span>
                        <span className="text-secondary font-medium">07:00 às 11:00 ✓</span>
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
                      Abrir no Google Maps
                    </Button>
                  </a>
                  <div className="flex-1">
                    <WhatsAppCTA
                      number={UNIT_DATA.whatsapp}
                      message="Olá! Gostaria de agendar um exame na unidade de Rio Pomba."
                      text="Agendar Exame"
                      source="riopomba_map"
                      className="w-full"
                    />
                  </div>
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
                Dúvidas Frequentes sobre Rio Pomba
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Respostas para as perguntas mais comuns sobre nossa unidade
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {FAQS.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Other Units CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Conheça Nossas Outras Unidades
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Além de Rio Pomba, estamos presentes em mais 3 cidades da Zona da Mata Mineira
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/unidades/merces">
                <Button variant="outline" size="lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  Mercês
                </Button>
              </Link>
              <Link to="/unidades/guarani">
                <Button variant="outline" size="lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  Guarani
                </Button>
              </Link>
              <Link to="/unidades/silveirania">
                <Button variant="outline" size="lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  Silveirânia
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Agende Seu Exame em Rio Pomba
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Atendimento de segunda a sábado. Resultados online e equipe pronta para cuidar de você.
            </p>
            <WhatsAppCTA
              number={UNIT_DATA.whatsapp}
              message="Olá! Gostaria de agendar um exame na unidade de Rio Pomba."
              text="Agendar pelo WhatsApp"
              source="riopomba_cta"
            />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default UnidadeRioPomba;
