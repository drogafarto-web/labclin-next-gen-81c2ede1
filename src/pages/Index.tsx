import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import TestimonialCard from "@/components/TestimonialCard";
import DifferentialCard from "@/components/DifferentialCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import ExamResultsForm from "@/components/ExamResultsForm";
import ConveniosSection from "@/components/ConveniosSection";
import GallerySection from "@/components/GallerySection";
import { Microscope, Home, Stethoscope, FileText, MapPin, Calendar, Heart, Users, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      image: "https://images.unsplash.com/photo-1579154204845-e59ad8c3bf0f?w=800&auto=format&fit=crop",
      category: "Exames",
      readTime: "5 min",
      publishDate: "15 Jan 2025",
    },
    {
      slug: "como-preparar-exames-sangue",
      title: "Guia completo: como preparar-se para exames de sangue",
      excerpt: "Saiba tudo sobre jejum, hidratação e cuidados necessários antes de fazer exames laboratoriais.",
      image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&auto=format&fit=crop",
      category: "Preparo",
      readTime: "7 min",
      publishDate: "10 Jan 2025",
    },
    {
      slug: "coleta-domiciliar-vantagens",
      title: "Coleta domiciliar: vantagens e quando pedir",
      excerpt: "Descubra os benefícios da coleta domiciliar e em quais situações ela é mais recomendada.",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&auto=format&fit=crop",
      category: "Serviços",
      readTime: "4 min",
      publishDate: "5 Jan 2025",
    },
  ];

  const units = [
    {
      name: "Rio Pomba",
      address: "Rua Principal, 123 - Centro",
      phone: "(32) 3642-2323",
    },
    {
      name: "Mercês",
      address: "Av. Central, 456 - Centro",
      phone: "(32) 3642-2323",
    },
    {
      name: "Guarani",
      address: "Praça da Matriz, 789 - Centro",
      phone: "(32) 3642-2323",
    },
  ];

  const differentials = [
    {
      icon: Home,
      title: "Coleta Domiciliar: Conforto e Praticidade no Seu Lar",
      description: "Realizamos a coleta de exames na sua casa ou empresa, com toda segurança e profissionalismo. Ideal para idosos, crianças e pessoas com mobilidade reduzida.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
    },
    {
      icon: Heart,
      title: "Atendimento Infantil Especializado",
      description: "Equipe treinada para atender crianças com cuidado e carinho, tornando a experiência menos estressante para os pequenos e seus pais.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop",
    },
    {
      icon: Users,
      title: "Acessibilidade e Inclusão",
      description: "Unidades adaptadas para pessoas com deficiência ou mobilidade reduzida, garantindo atendimento digno para todos.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop",
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Exam Results Form Section */}
        <ExamResultsForm />

        {/* Differentials Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Por Que Escolher o{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">
                  Labclin?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos Serviços
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                Estamos presentes em 3 cidades para melhor atendê-lo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Depoimentos reais de quem confia no Labclin para cuidar da saúde
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

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
              Agende seu exame agora mesmo ou entre em contato conosco
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agendar">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Exame
                </Button>
              </Link>
              <Link to="/contato">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default Index;
