import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OptimizedImage from "@/components/OptimizedImage";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Clock, 
  Calendar, 
  User, 
  CheckCircle2, 
  Shield, 
  Beaker, 
  ChevronRight,
  MapPin,
  Award,
  Phone,
  Car
} from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import HighConversionCTABanner from "@/components/HighConversionCTABanner";

const ExameToxicologicoCNH = () => {
  const [activeSection, setActiveSection] = useState("");

  // Table of Contents sections
  const tocSections = [
    { id: "normativa", title: "O que diz a Nova Normativa?" },
    { id: "preco", title: "Por que apenas R$ 100,00?" },
    { id: "coleta", title: "Como funciona a coleta?" },
    { id: "faq", title: "Perguntas Frequentes" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Structured Data - BlogPosting
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Nova Lei da CNH 2025: Exame Toxicológico para Primeira Habilitação e Renovação no Labclin",
    "description": "Exame toxicológico para primeira habilitação CNH por R$ 100,00. Nova normativa 2025, laudo rápido para RENACH. Laboratório credenciado em Rio Pomba, Mercês, Guarani e Silveirânia.",
    "image": "https://www.labclinmg.com.br/images/blog/exame-toxicologico-cnh-labclin.webp",
    "author": {
      "@type": "Organization",
      "name": "Labclin",
      "url": "https://www.labclinmg.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Labclin",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.labclinmg.com.br/labclin-logo.png"
      }
    },
    "datePublished": "2025-12-07",
    "dateModified": "2025-12-07",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.labclinmg.com.br/blog/exame-toxicologico-primeira-habilitacao-preco"
    }
  };

  // Structured Data - FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Preciso de jejum para o exame toxicológico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não, não é necessário jejum para realizar o exame toxicológico. O procedimento utiliza amostra de cabelo ou pelo, não sendo necessário nenhum preparo especial."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo demora o resultado do exame toxicológico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O laudo é liberado rapidamente e enviado diretamente para o sistema do Detran (RENACH). Em média, o resultado fica disponível em até 5 dias úteis."
        }
      },
      {
        "@type": "Question",
        "name": "Onde fazer exame toxicológico barato?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No Labclin, o exame toxicológico para CNH tem valor fixo de R$ 100,00 - um dos menores preços da região. Atendemos em Rio Pomba, Mercês, Guarani e Silveirânia."
        }
      },
      {
        "@type": "Question",
        "name": "O exame toxicológico dói?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não, o exame é totalmente indolor. A coleta é feita através de uma pequena amostra de cabelo ou pelo, sem agulhas ou procedimentos invasivos."
        }
      }
    ]
  };

  // Structured Data - Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Exame Toxicológico para CNH - Primeira Habilitação e Renovação",
    "description": "Exame toxicológico obrigatório para CNH categorias C, D e E. Coleta de cabelo, janela de detecção de 90 dias, laudo para RENACH.",
    "image": "https://www.labclinmg.com.br/images/blog/exame-toxicologico-cnh-labclin.webp",
    "brand": {
      "@type": "Brand",
      "name": "Labclin"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.labclinmg.com.br/blog/exame-toxicologico-primeira-habilitacao-preco",
      "priceCurrency": "BRL",
      "price": "100.00",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Labclin"
      }
    }
  };

  // Structured Data - Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.labclinmg.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.labclinmg.com.br/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Exame Toxicológico Primeira Habilitação Preço",
        "item": "https://www.labclinmg.com.br/blog/exame-toxicologico-primeira-habilitacao-preco"
      }
    ]
  };

  const whatsappLink = "https://wa.me/553236121500?text=Ol%C3%A1!%20Quero%20agendar%20o%20exame%20toxicol%C3%B3gico%20por%20R%24%20100%2C00";

  return (
    <>
      <Helmet>
        <title>Exame Toxicológico Primeira Habilitação Preço R$ 100 | Nova Lei CNH 2025 | Labclin</title>
        <meta 
          name="description" 
          content="Exame toxicológico para primeira habilitação CNH por apenas R$ 100,00. Nova normativa 2025, laudo rápido para RENACH. Agende no Labclin - Rio Pomba, Mercês, Guarani e Silveirânia." 
        />
        <meta 
          name="keywords" 
          content="exame toxicológico primeira habilitação preço, toxicológico CNH 2025, exame toxicológico R$ 100, toxicológico barato, exame toxicológico Rio Pomba, toxicológico renovação CNH" 
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/exame-toxicologico-primeira-habilitacao-preco" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.labclinmg.com.br/blog/exame-toxicologico-primeira-habilitacao-preco" />
        <meta property="og:title" content="Exame Toxicológico Primeira Habilitação - R$ 100,00 | Labclin" />
        <meta property="og:description" content="Exame toxicológico para CNH por R$ 100,00. Nova lei 2025, laudo rápido para RENACH. Laboratório credenciado." />
        <meta property="og:image" content="https://www.labclinmg.com.br/images/blog/exame-toxicologico-cnh-labclin.webp" />
        <meta property="og:site_name" content="Labclin" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exame Toxicológico R$ 100,00 | Nova Lei CNH 2025" />
        <meta name="twitter:description" content="Primeira habilitação e renovação. Laudo rápido para RENACH." />
        <meta name="twitter:image" content="https://www.labclinmg.com.br/images/blog/exame-toxicologico-cnh-labclin.webp" />
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main id="main-content" className="flex-grow">
          <article className="pb-16" itemScope itemType="https://schema.org/BlogPosting">
            {/* Article Header */}
            <header className="bg-gradient-to-b from-primary/5 to-background pt-8 pb-12 px-4">
              <div className="container mx-auto max-w-4xl">
                {/* Breadcrumbs */}
                <nav aria-label="Navegação estrutural" className="mb-6">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                            Home
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <ChevronRight className="h-4 w-4" />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                            Blog
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <ChevronRight className="h-4 w-4" />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-foreground font-medium">
                          Exame Toxicológico
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </nav>

                {/* Category Badge */}
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  CNH & Habilitação
                </span>

                {/* H1 Title */}
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
                  itemProp="headline"
                >
                  Nova Lei da CNH 2025: Exame Toxicológico para Primeira Habilitação e Renovação no Labclin
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-8">
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    <span itemProp="author">Por Labclin</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>Leitura de 4 min</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <time itemProp="dateModified" dateTime="2025-12-07">
                      Atualizado em Dezembro 2025
                    </time>
                  </span>
                </div>

                {/* Featured Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <OptimizedImage
                    src="/images/blog/exame-toxicologico-cnh-labclin.webp"
                    alt="Jovem sorridente segurando chave de carro após realizar exame toxicológico no Labclin - CNH primeira habilitação"
                    className="w-full aspect-[16/9]"
                    imgClassName="object-cover object-top"
                    showSkeleton={true}
                    priority={true}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <span className="text-white/90 text-sm">
                      Exame toxicológico rápido e indolor para sua CNH
                    </span>
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content Area */}
            <div className="container mx-auto max-w-6xl px-4">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
                {/* Article Body */}
                <div className="order-2 lg:order-1">
                  {/* Lead Paragraph - Featured Snippet Target */}
                  <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-10" role="note">
                    <p className="text-lg leading-relaxed text-foreground font-serif">
                      Com a <strong>nova normativa de trânsito de 2025</strong>, a exigência do <strong>exame toxicológico</strong> foi 
                      atualizada. O procedimento é <strong>obrigatório para categorias C, D e E</strong>, e agora possui novas 
                      diretrizes para <strong>primeira habilitação</strong>. No <strong>Labclin</strong>, realizamos o exame com 
                      laudo rápido para o <strong>RENACH</strong> por um <strong className="text-primary">preço social de R$ 100,00</strong>.
                    </p>
                  </div>

                  {/* Mobile Table of Contents */}
                  <nav className="lg:hidden bg-card border border-border rounded-lg p-4 mb-10" aria-label="Índice do artigo">
                    <h2 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">📑</span> Índice
                    </h2>
                    <ul className="space-y-2">
                      {tocSections.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                          >
                            <ChevronRight className="h-3 w-3" />
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Section 1: Normativa */}
                  <section id="normativa" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Shield className="h-7 w-7 text-primary flex-shrink-0" />
                      O que diz a Nova Normativa sobre o Toxicológico na Primeira Habilitação?
                    </h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground font-serif leading-relaxed space-y-4">
                      <p>
                        A <strong>Lei Federal 14.071/2020</strong>, com atualizações vigentes em 2025, estabelece que o 
                        <strong> exame toxicológico é obrigatório</strong> para condutores das categorias C, D e E. Esta 
                        exigência visa aumentar a <strong>segurança no trânsito</strong>, identificando o uso de substâncias 
                        psicoativas que possam comprometer a capacidade de dirigir.
                      </p>
                      <p>
                        Para a <strong>primeira habilitação</strong>, o candidato que pretende obter a CNH nestas categorias 
                        deve realizar o exame <strong>antes de iniciar o processo no Detran</strong>. O laudo é enviado 
                        diretamente ao sistema <strong>RENACH</strong> (Registro Nacional de Carteira de Habilitação).
                      </p>
                      <p>
                        O exame possui uma <strong>janela de detecção de 90 dias</strong>, analisando o histórico de uso 
                        de substâncias como anfetaminas, cocaína, maconha, opiáceos e fenciclidina.
                      </p>
                    </div>
                  </section>

                  {/* Section 2: Preço */}
                  <section id="preco" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <span className="text-2xl">💰</span>
                      Preço do Exame Toxicológico: Por que o Labclin cobra apenas R$ 100,00?
                    </h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground font-serif leading-relaxed space-y-4">
                      <p>
                        Enquanto o mercado cobra valores que podem ultrapassar <strong>R$ 200,00 a R$ 350,00</strong> pelo 
                        exame toxicológico, o <strong>Labclin pratica o preço social de R$ 100,00</strong>. Esta é uma 
                        condição especial para apoiar novos motoristas e profissionais que precisam renovar sua habilitação.
                      </p>
                      <p>
                        Nosso compromisso é democratizar o acesso a exames de qualidade. Com <strong>mais de 58 anos de 
                        experiência</strong>, o Labclin é credenciado pelo Detran e utiliza laboratórios de referência 
                        certificados pelo INMETRO para análise das amostras.
                      </p>
                    </div>

                    {/* Price Highlight Box */}
                    <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 mt-6">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Preço do Exame Toxicológico</p>
                          <p className="text-4xl font-bold text-primary">R$ 100,00</p>
                          <p className="text-sm text-muted-foreground mt-1">Valor único, sem taxas extras</p>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            Laudo válido para RENACH
                          </p>
                          <p className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            Laboratório credenciado Detran
                          </p>
                          <p className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            Resultado em até 5 dias úteis
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* High Conversion CTA - Mid Article */}
                  <HighConversionCTABanner
                    headline="CNH VENCENDO? LAUDO RÁPIDO E CONFIÁVEL PARA SEU EXAME TOXICOLÓGICO!"
                    subtext="Exame Toxicológico para CNH categorias C, D e E por apenas **R$ 100,00**. Agende agora e evite multas!"
                    buttonText="AGENDAR MEU EXAME TOXICOLÓGICO"
                    whatsappNumber="553236121500"
                    whatsappMessage="Olá, gostaria de agendar o Exame Toxicológico por R$ 100,00 como vi no blog."
                    icon={Car}
                    source="blog_toxicologico_cta_mid"
                    variant="compact"
                  />

                  {/* Section 3: Como funciona a coleta */}
                  <section id="coleta" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Beaker className="h-7 w-7 text-primary flex-shrink-0" />
                      Como funciona a coleta? (Janela de Detecção)
                    </h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground font-serif leading-relaxed space-y-4">
                      <p>
                        O exame toxicológico utiliza uma <strong>pequena amostra de cabelo ou pelo</strong> para análise. 
                        A coleta é <strong>rápida, simples e totalmente indolor</strong> — não utiliza agulhas ou 
                        procedimentos invasivos.
                      </p>
                      <p>
                        A amostra coletada permite identificar o uso de substâncias psicoativas em uma 
                        <strong> janela de detecção de 90 dias</strong> (aproximadamente 3 meses). Esta característica 
                        torna o exame de cabelo mais eficaz que testes de urina para detecção de uso prolongado.
                      </p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      <div className="bg-card border border-border rounded-lg p-5 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold text-primary">1</span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">Agendamento</h4>
                        <p className="text-sm text-muted-foreground">Via WhatsApp ou presencial</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-5 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold text-primary">2</span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">Coleta</h4>
                        <p className="text-sm text-muted-foreground">Pequena amostra de cabelo (indolor)</p>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-5 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold text-primary">3</span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">Resultado</h4>
                        <p className="text-sm text-muted-foreground">Laudo enviado ao RENACH</p>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: FAQ */}
                  <section id="faq" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <span className="text-2xl">❓</span>
                      Perguntas Frequentes sobre o Exame Toxicológico
                    </h2>

                    <div className="space-y-4">
                      <details className="group bg-card border border-border rounded-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-foreground hover:bg-muted/50 transition-colors">
                          Preciso de jejum para o exame toxicológico?
                          <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-5 pb-5 text-muted-foreground font-serif">
                          <strong>Não, não é necessário jejum</strong> para realizar o exame toxicológico. O procedimento 
                          utiliza amostra de cabelo ou pelo, não sendo necessário nenhum preparo especial. Você pode 
                          comer e beber normalmente antes do exame.
                        </div>
                      </details>

                      <details className="group bg-card border border-border rounded-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-foreground hover:bg-muted/50 transition-colors">
                          Quanto tempo demora o resultado do exame toxicológico?
                          <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-5 pb-5 text-muted-foreground font-serif">
                          O laudo é liberado <strong>rapidamente</strong> e enviado diretamente para o sistema do 
                          Detran (RENACH). Em média, o resultado fica disponível em <strong>até 5 dias úteis</strong>, 
                          podendo variar de acordo com o laboratório de análise.
                        </div>
                      </details>

                      <details className="group bg-card border border-border rounded-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-foreground hover:bg-muted/50 transition-colors">
                          Onde fazer exame toxicológico barato?
                          <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-5 pb-5 text-muted-foreground font-serif">
                          No <strong>Labclin</strong>, o exame toxicológico para CNH tem valor fixo de 
                          <strong className="text-primary"> R$ 100,00</strong> — um dos menores preços da região. 
                          Atendemos em <strong>Rio Pomba, Mercês, Guarani e Silveirânia</strong>. Somos credenciados 
                          pelo Detran com laudo válido para o RENACH.
                        </div>
                      </details>

                      <details className="group bg-card border border-border rounded-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-foreground hover:bg-muted/50 transition-colors">
                          O exame toxicológico dói?
                          <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-5 pb-5 text-muted-foreground font-serif">
                          <strong>Não, o exame é totalmente indolor</strong>. A coleta é feita através de uma pequena 
                          amostra de cabelo ou pelo, sem agulhas ou procedimentos invasivos. O processo leva apenas 
                          alguns minutos.
                        </div>
                      </details>

                      <details className="group bg-card border border-border rounded-lg overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-foreground hover:bg-muted/50 transition-colors">
                          Quais categorias de CNH precisam do exame toxicológico?
                          <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-5 pb-5 text-muted-foreground font-serif">
                          O exame toxicológico é obrigatório para condutores das categorias <strong>C, D e E</strong> 
                          (motoristas profissionais de caminhões e ônibus). É exigido tanto para <strong>primeira 
                          habilitação</strong> quanto para <strong>renovação</strong> ou <strong>adição</strong> 
                          dessas categorias.
                        </div>
                      </details>
                    </div>
                  </section>

                  {/* Author/Labclin Info (Mobile) */}
                  <aside className="lg:hidden bg-card border border-border rounded-xl p-6 mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">Sobre o Labclin</h3>
                        <p className="text-sm text-muted-foreground">58+ anos de experiência</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Laboratório credenciado pelo Detran com unidades em Rio Pomba, Mercês, Guarani e Silveirânia. 
                      Oferecemos exame toxicológico para CNH com o melhor custo-benefício da região.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">PNCQ</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">Credenciado Detran</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">INMETRO</span>
                    </div>
                  </aside>

                  {/* High Conversion CTA - Bottom Article */}
                  <HighConversionCTABanner
                    headline="PRIMEIRA HABILITAÇÃO OU RENOVAÇÃO? GARANTA SEU EXAME TOXICOLÓGICO AGORA!"
                    subtext="Exame Toxicológico para CNH 2025 por apenas **R$ 100,00**. Laudo válido para RENACH em até 5 dias úteis!"
                    buttonText="AGENDAR MEU EXAME TOXICOLÓGICO"
                    whatsappNumber="553236121500"
                    whatsappMessage="Olá, gostaria de agendar o Exame Toxicológico por R$ 100,00 como vi no blog."
                    icon={Car}
                    source="blog_toxicologico_cta_bottom"
                  />
                </div>

                {/* Sidebar (Desktop) */}
                <aside className="order-1 lg:order-2 hidden lg:block">
                  <div className="sticky top-24 space-y-6">
                    {/* Table of Contents */}
                    <nav className="bg-card border border-border rounded-xl p-5" aria-label="Índice do artigo">
                      <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-primary">📑</span> Índice
                      </h2>
                      <ul className="space-y-3">
                        {tocSections.map((section) => (
                          <li key={section.id}>
                            <a
                              href={`#${section.id}`}
                              className={`flex items-center gap-2 text-sm transition-colors ${
                                activeSection === section.id
                                  ? "text-primary font-semibold"
                                  : "text-muted-foreground hover:text-primary"
                              }`}
                            >
                              <ChevronRight className={`h-3 w-3 transition-transform ${
                                activeSection === section.id ? "rotate-90" : ""
                              }`} />
                              {section.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    {/* Authority Card */}
                    <div className="bg-card border border-border rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">Sobre o Labclin</h3>
                          <p className="text-xs text-muted-foreground">58+ anos de experiência</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        Laboratório credenciado pelo Detran com unidades em Rio Pomba, Mercês, Guarani e Silveirânia.
                      </p>
                      <div className="flex flex-wrap gap-1.5 text-xs mb-4">
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">PNCQ</span>
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">Detran</span>
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">INMETRO</span>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          4 unidades na região
                        </p>
                      </div>
                    </div>

                    {/* Sticky CTA */}
                    <WhatsAppCTA
                      number="553236121500"
                      message="Olá! Quero agendar o exame toxicológico por R$ 100,00"
                      text="Agendar por R$ 100"
                      source="blog_toxicologico_sidebar"
                      className="w-full"
                    />
                  </div>
                </aside>
              </div>
            </div>
          </article>
        </main>

        <Footer />
        <WhatsAppButton />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-20 left-4 right-4 lg:hidden z-40">
          <WhatsAppCTA
            number="553236121500"
            message="Olá! Quero agendar o exame toxicológico por R$ 100,00"
            text="Agendar Toxicológico por R$ 100"
            source="blog_toxicologico_mobile"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default ExameToxicologicoCNH;
