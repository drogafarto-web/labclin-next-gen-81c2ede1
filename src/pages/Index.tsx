import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import TestimonialCard from "@/components/TestimonialCard";
import DifferentialCard from "@/components/DifferentialCard";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import CookieBanner from "@/components/CookieBanner";
import ResultsIframe from "@/components/ResultsIframe";
import ConveniosSection from "@/components/ConveniosSection";
import GallerySection from "@/components/GallerySection";
import CheckupForm from "@/components/CheckupForm";
import FAQSection from "@/components/FAQSection";
import SEO from "@/components/SEO";
import { Microscope, Home, Stethoscope, FileText, MapPin, Calendar, Heart, Users, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { generateOrganizationWithDepartments } from "@/lib/structuredData";

// Public paths for images (better for caching and CDN)
const hemogramaImg = "/images/blog/hemograma-enhanced.jpg";
const preparoExamesImg = "/images/blog/preparo-exames-enhanced.jpg";
const coletaBlogImg = "/images/blog/coleta-domiciliar-enhanced.jpg";
const coletaCarImg = "/images/coleta-domiciliar-carro.png";
const atendimentoInfantilImg = "/images/differentials/atendimento-infantil-enhanced.jpg";
const acessibilidadeImg = "/images/differentials/acessibilidade-enhanced.jpg";

const Index = () => {
  const services = [
    {
      icon: Microscope,
      title: "Exames de Rotina",
      description: "Hemograma, glicemia, colesterol e outros exames essenciais para sua saúde.",
      href: "/exames",
    },
    {
      icon: Stethoscope,
      title: "Exames Especializados",
      description: "Testes específicos com tecnologia de ponta e equipe qualificada.",
      href: "/exames",
    },
    {
      icon: Home,
      title: "Coleta Domiciliar",
      description: "Comodidade e segurança com coleta em sua casa ou empresa.",
      href: "/coleta-domiciliar",
    },
    {
      icon: FileText,
      title: "Resultados Online",
      description: "Acesse seus resultados de forma rápida e segura pela internet.",
      href: "/resultados",
    },
  ];

  const blogPosts = [
    {
      slug: "o-que-e-hemograma",
      title: "O que é um hemograma e quando pedir?",
      excerpt: "Entenda como funciona o exame de sangue mais comum e quando ele é indicado pelos médicos.",
      image: hemogramaImg,
      category: "Exames",
      readTime: "5 min",
      publishDate: "15 Jan 2025",
    },
    {
      slug: "como-preparar-exames-sangue",
      title: "Guia completo: como preparar-se para exames de sangue",
      excerpt: "Saiba tudo sobre jejum, hidratação e cuidados necessários antes de fazer exames laboratoriais.",
      image: preparoExamesImg,
      category: "Preparo",
      readTime: "7 min",
      publishDate: "10 Jan 2025",
    },
    {
      slug: "coleta-domiciliar-vantagens",
      title: "Coleta domiciliar: vantagens e quando pedir",
      excerpt: "Descubra os benefícios da coleta domiciliar e em quais situações ela é mais recomendada.",
      image: coletaBlogImg,
      category: "Serviços",
      readTime: "4 min",
      publishDate: "5 Jan 2025",
    },
  ];

  const units = [
    {
      name: "Rio Pomba",
      address: "Rua Floripes Maria de Jesus, 05, loja 02 - Centro",
      phone: "(32) 99199-0239",
    },
    {
      name: "Mercês",
      address: "Praça Dr. Castelões, 40 - Centro",
      phone: "(32) 99199-0239",
    },
    {
      name: "Guarani",
      address: "Rua José Ladeira Pinto, 70 - Bairro Sossego",
      phone: "(32) 99199-0239",
    },
    {
      name: "Silveirânia",
      address: "Rua Padre Cerqueira, 20 - Centro",
      phone: "(32) 99199-0239",
    },
  ];

  const differentials = [
    {
      icon: Home,
      title: "Coleta Domiciliar: Conforto e Praticidade no Seu Lar",
      description: "Realizamos a coleta de exames na sua casa ou empresa, com toda segurança e profissionalismo. Ideal para idosos, crianças e pessoas com mobilidade reduzida.",
      image: coletaCarImg,
    },
    {
      icon: Heart,
      title: "Atendimento Infantil Especializado",
      description: "Equipe treinada para atender crianças com cuidado e carinho, tornando a experiência menos estressante para os pequenos e seus pais.",
      image: atendimentoInfantilImg,
    },
    {
      icon: Users,
      title: "Acessibilidade e Inclusão",
      description: "Unidades adaptadas para pessoas com deficiência ou mobilidade reduzida, garantindo atendimento digno para todos.",
      image: acessibilidadeImg,
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      city: "Rio Pomba - MG",
      rating: 5,
      text: "Atendimento excelente! A coleta domiciliar foi muito prática e os resultados saíram rapidamente. Recomendo!",
      service: "Coleta Domiciliar",
    },
    {
      name: "João Santos",
      city: "Mercês - MG",
      rating: 5,
      text: "Equipe muito atenciosa com meu filho. Ele ficou tranquilo durante toda a coleta. Parabéns pelo profissionalismo!",
      service: "Atendimento Infantil",
    },
    {
      name: "Ana Paula",
      city: "Guarani - MG",
      rating: 5,
      text: "Laboratório de confiança, com equipamentos modernos e resultados precisos. Sempre faço meus exames aqui!",
      service: "Exames de Rotina",
    },
  ];

  const certifications = [
    { name: "ANVISA", description: "Certificado pela Agência Nacional de Vigilância Sanitária" },
    { name: "CRBM", description: "Conselho Regional de Biomedicina" },
    { name: "LGPD", description: "Adequado à Lei Geral de Proteção de Dados" },
  ];

  // Generate Organization schema with departments
  const organizationSchema = generateOrganizationWithDepartments();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      {
        "@type": "WebSite",
        "name": "Labclin: Rio Pomba, Mercês, Guarani e Silveirânia",
        "url": "https://www.labclinmg.com.br",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.labclinmg.com.br/exames?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "MedicalBusiness",
        "name": "Labclin - Laboratório de Análises Clínicas",
        "description": "Laboratório de análises clínicas com 58+ anos de experiência em Rio Pomba, Mercês, Guarani e Silveirânia - MG. Exames de rotina, especializados e coleta domiciliar.",
        "url": "https://www.labclinmg.com.br",
        "logo": "https://www.labclinmg.com.br/labclin-logo.png",
        "image": "https://www.labclinmg.com.br/og-image.jpg",
        "telephone": "+55-32-99199-0239",
        "email": "llabclin3@gmail.com",
        "priceRange": "$$",
        "openingHours": "Mo-Fr 06:30-17:30, Sa 07:00-11:00",
        "areaServed": ["Rio Pomba", "Mercês", "Guarani", "Silveirânia"],
        "medicalSpecialty": "Clinical Laboratory",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "500"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Maria Silva" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Atendimento excelente! A coleta domiciliar foi muito prática e os resultados saíram rapidamente. Recomendo!",
            "datePublished": "2025-01-15"
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "João Santos" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Equipe muito atenciosa com meu filho. Ele ficou tranquilo durante toda a coleta. Parabéns pelo profissionalismo!",
            "datePublished": "2025-01-10"
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ana Paula" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Laboratório de confiança, com equipamentos modernos e resultados precisos. Sempre faço meus exames aqui!",
            "datePublished": "2025-01-05"
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Labclin: Rio Pomba, Mercês, Guarani e Silveirânia | Análises Clínicas"
        description="Labclin: Excelência em Análises Clínicas em Rio Pomba, Mercês, Guarani e Silveirânia. Agende seu exame, acesse resultados online e faça seu Check-up com I.A. Atendimento humanizado e qualidade certificada."
        keywords="laboratório rio pomba, análises clínicas mercês, exames guarani, silveirânia, hemograma, coleta domiciliar, sexagem fetal, toxicológico cnh"
        canonicalUrl="https://www.labclinmg.com.br"
        structuredData={structuredData}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Exam Results Form Section */}
        <ResultsIframe />

        {/* AI Checkup Section */}
        <section id="checkup-form" className="py-20 md:py-32 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Faça um Checkup com I.A.
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Responda algumas perguntas e receba recomendações personalizadas de exames
              </p>
            </div>
            <CheckupForm />
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-black text-foreground mb-6">
                Por Que Escolher o{" "}
                <span className="text-primary">
                  Labclin?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                Nossos diferenciais fazem toda a diferença no cuidado com sua saúde
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentials.map((differential, index) => (
                <DifferentialCard key={index} {...differential} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-black text-foreground mb-6">
                Nossos Serviços
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                Oferecemos uma ampla gama de exames e serviços para cuidar da sua saúde
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* Convênios Section */}
        <ConveniosSection />

        {/* Certifications Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Certificações e Qualidade
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nosso compromisso com a excelência é reconhecido pelos principais órgãos reguladores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-primary/20 rounded-lg p-6 text-center hover:shadow-medium transition-all"
                >
                  <div className="bg-gradient-hero rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Units Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossas Unidades
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos presentes em 4 cidades para melhor atendê-lo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {units.map((unit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all"
                >
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{unit.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{unit.address}</p>
                      <p className="text-sm text-primary font-medium">{unit.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/unidades">
                <Button variant="outline" size="lg">
                  Ver Todas as Unidades
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-black text-foreground mb-6">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                Depoimentos reais de quem confia no Labclin para cuidar da saúde
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Blog Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Blog da Saúde
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fique por dentro das novidades e dicas de saúde
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  Ver Todos os Artigos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para cuidar da sua saúde?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Agende agora pelo WhatsApp seu exame ou faça um checkup personalizado com I.A.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#checkup-form" className="w-full sm:w-auto">
                <Button size="lg" className="w-full">
                  🤖 Faça um Checkup com I.A.
                </Button>
              </a>
              <Link to="/agendar" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Exame
                </Button>
              </Link>
              <Link to="/contato" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppChatWidget />
      <CookieBanner />
    </div>
  );
};

export default Index;