import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OptimizedImage from "@/components/OptimizedImage";
import { 
  ChevronRight, 
  Clock, 
  Calendar, 
  AlertTriangle, 
  MapPin, 
  MessageCircle,
  Baby,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const TesteGravidezBetaHCG = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll tracking for TOC
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introducao", "teste-farmacia", "exame-sangue", "quantitativo", "onde-fazer", "faq"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const whatsappNumber = "5532988847713";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar o exame Beta HCG (teste de gravidez) no Labclin."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Structured Data - BlogPosting
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Teste de Farmácia ou de Sangue (Beta HCG): Qual é o mais confiável para confirmar a gravidez?",
    "description": "Compare o teste de gravidez de farmácia com o exame de sangue Beta HCG. Entenda a diferença de precisão, riscos de falso negativo e por que o laboratório é o padrão-ouro.",
    "image": "https://www.labclinmg.com.br/images/blog/diferenca-teste-gravidez-farmacia-sangue-beta-hcg-labclin-rio-pomba.webp",
    "author": {
      "@type": "Organization",
      "name": "Labclin Laboratório de Análises Clínicas",
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
    "datePublished": "2025-12-08",
    "dateModified": "2025-12-08",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.labclinmg.com.br/blog/teste-gravidez-farmacia-ou-sangue-beta-hcg"
    }
  };

  // Structured Data - FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Preciso de jejum para fazer o Beta HCG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não, o exame Beta HCG não exige jejum. Você pode fazer a coleta a qualquer momento do dia, alimentada normalmente."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo demora o resultado do Beta HCG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No Labclin, o resultado do Beta HCG fica pronto geralmente no mesmo dia ou em até 24 horas, dependendo do horário da coleta."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso de pedido médico para fazer o exame de gravidez?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não é obrigatório. Você pode realizar o exame Beta HCG no Labclin por conta própria, sem necessidade de prescrição médica."
        }
      }
    ]
  };

  // Structured Data - BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.labclinmg.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dúvidas Frequentes",
        "item": "https://www.labclinmg.com.br/duvidas-frequentes"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Teste de Gravidez (Beta HCG)",
        "item": "https://www.labclinmg.com.br/blog/teste-gravidez-farmacia-ou-sangue-beta-hcg"
      }
    ]
  };

  const tocItems = [
    { id: "introducao", label: "Introdução" },
    { id: "teste-farmacia", label: "Teste de Farmácia" },
    { id: "exame-sangue", label: "Exame de Sangue" },
    { id: "quantitativo", label: "Beta HCG Quantitativo" },
    { id: "onde-fazer", label: "Onde Fazer" },
    { id: "faq", label: "Perguntas Frequentes" },
  ];

  const unidades = [
    { cidade: "Rio Pomba", endereco: "Rua Floripes Maria de Jesus, 05, Centro" },
    { cidade: "Mercês", endereco: "Praça Dr. Castelões, 40, Centro" },
    { cidade: "Guarani", endereco: "Rua José Ladeira Pinto, 70, Bairro Sossego" },
    { cidade: "Silveirânia", endereco: "Rua Padre Cerqueira, 20, Centro" },
  ];

  return (
    <>
      <Helmet>
        <title>Teste de Gravidez: Farmácia ou Sangue (Beta HCG)? Qual é mais confiável? | Labclin</title>
        <meta 
          name="description" 
          content="Compare o teste de gravidez de farmácia com o exame de sangue Beta HCG. Entenda a diferença de precisão, riscos de falso negativo e por que o laboratório é o padrão-ouro." 
        />
        <meta 
          name="keywords" 
          content="teste de gravidez, beta hcg, exame de sangue gravidez, teste farmácia gravidez, falso negativo gravidez, beta hcg quantitativo, laboratório Rio Pomba" 
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/teste-gravidez-farmacia-ou-sangue-beta-hcg" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Teste de Gravidez: Farmácia ou Sangue (Beta HCG)? Qual é mais confiável?" />
        <meta property="og:description" content="Compare o teste de gravidez de farmácia com o exame de sangue Beta HCG. Entenda a diferença de precisão e por que o laboratório é o padrão-ouro." />
        <meta property="og:image" content="https://www.labclinmg.com.br/images/blog/diferenca-teste-gravidez-farmacia-sangue-beta-hcg-labclin-rio-pomba.webp" />
        <meta property="og:url" content="https://www.labclinmg.com.br/blog/teste-gravidez-farmacia-ou-sangue-beta-hcg" />
        <meta property="og:type" content="article" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teste de Gravidez: Farmácia ou Sangue (Beta HCG)?" />
        <meta name="twitter:description" content="Compare o teste de farmácia com o exame Beta HCG e entenda qual é mais confiável." />
        <meta name="twitter:image" content="https://www.labclinmg.com.br/images/blog/diferenca-teste-gravidez-farmacia-sangue-beta-hcg-labclin-rio-pomba.webp" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-grow">
          {/* Breadcrumbs */}
          <div className="bg-muted/50 border-b border-border">
            <div className="container mx-auto max-w-6xl px-4 py-3">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Início</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/duvidas-frequentes">Dúvidas Frequentes</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Teste de Gravidez (Beta HCG)</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <article className="py-8 md:py-12">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Table of Contents - Desktop Sidebar */}
                <aside className="hidden lg:block lg:col-span-3">
                  <nav className="sticky top-24 bg-card border border-border rounded-xl p-5 shadow-soft">
                    <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">
                      Índice
                    </h3>
                    <ul className="space-y-2">
                      {tocItems.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full text-left text-sm py-2 px-3 rounded-lg transition-all ${
                              activeSection === item.id
                                ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>

                    {/* Sidebar CTA */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="bg-gradient-subtle rounded-lg p-4 text-center">
                        <Baby className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground mb-3">
                          Confirme sua gravidez com precisão
                        </p>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Agendar Beta HCG
                        </a>
                      </div>
                    </div>
                  </nav>
                </aside>

                {/* Main Content */}
                <div className="lg:col-span-9">
                  {/* Article Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                      Teste de Farmácia ou de Sangue (Beta HCG): Qual é o mais confiável para confirmar a gravidez?
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-6">
                      <span className="flex items-center gap-1.5">
                        <span className="font-medium text-primary">Por Labclin</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        Leitura de 4 min
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        Dezembro 2025
                      </span>
                    </div>

                    {/* Hero Image - Priority Loading */}
                    <figure className="rounded-xl overflow-hidden border border-border shadow-soft">
                      <OptimizedImage
                        src="/images/blog/diferenca-teste-gravidez-farmacia-sangue-beta-hcg-labclin-rio-pomba.webp"
                        alt="Comparação entre teste de gravidez de farmácia e exame de sangue Beta HCG no Labclin Rio Pomba"
                        className="w-full aspect-[16/9] object-cover"
                        priority={true}
                        showSkeleton={true}
                      />
                    </figure>
                  </header>

                  {/* Mobile TOC */}
                  <nav className="lg:hidden mb-8 bg-muted/50 rounded-xl p-4 border border-border">
                    <h3 className="font-bold text-foreground mb-3 text-sm">📖 Neste artigo:</h3>
                    <div className="flex flex-wrap gap-2">
                      {tocItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="text-xs bg-card border border-border px-3 py-1.5 rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </nav>

                  {/* Article Body */}
                  <div className="prose prose-lg max-w-none">
                    
                    {/* Introduction */}
                    <section id="introducao" className="mb-12">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Você está com a <strong>menstruação atrasada</strong>, sente o corpo diferente e a primeira atitude é correr na farmácia. Mas aí surge a dúvida: <em>"Será que esse teste de caixinha é confiável mesmo?"</em> ou <em>"Deu negativo, mas ainda acho que estou grávida"</em>. Se você está passando por isso, saiba que não está sozinha. Vamos explicar a <strong>diferença técnica entre os dois métodos</strong> e por que o exame de laboratório é considerado o <strong>"padrão-ouro"</strong> da medicina.
                      </p>
                    </section>

                    {/* Section: Teste de Farmácia */}
                    <section id="teste-farmacia" className="mb-12">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        O Teste de Farmácia é confiável?
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Sim, os testes de farmácia evoluíram muito, mas eles têm uma <strong>limitação biológica importante: a sensibilidade</strong>. O teste de farmácia detecta o hormônio <strong>HCG na urina</strong>. Para que o hormônio apareça na urina, ele precisa estar em uma <strong>concentração muito alta</strong> no corpo.
                      </p>

                      {/* Alert List */}
                      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-6">
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-amber-800 dark:text-amber-200">O Risco:</span>
                              <span className="text-amber-700 dark:text-amber-300 ml-1">
                                Se você estiver bem no início da gestação (poucos dias de atraso), pode não haver hormônio suficiente na urina para "pintar" a listrinha.
                              </span>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-amber-800 dark:text-amber-200">O Resultado:</span>
                              <span className="text-amber-700 dark:text-amber-300 ml-1">
                                Isso gera o famoso <strong>"Falso Negativo"</strong>. Você está grávida, mas o teste diz que não.
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Body Image 1 - Lazy Loading */}
                      <figure className="my-8">
                        <div className="rounded-xl overflow-hidden border border-border shadow-soft">
                          <OptimizedImage
                            src="/images/blog/duvida-teste-gravidez-farmacia-falso-negativo-labclin.webp"
                            alt="Mulher com dúvida sobre resultado do teste de gravidez de farmácia - risco de falso negativo"
                            className="w-full aspect-[4/3] object-cover"
                            priority={false}
                            showSkeleton={true}
                          />
                        </div>
                        <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                          A dúvida é comum: falsos negativos ocorrem com frequência em testes de urina.
                        </figcaption>
                      </figure>
                    </section>

                    {/* Section: Exame de Sangue */}
                    <section id="exame-sangue" className="mb-12">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Por que o Exame de Sangue (Beta HCG) é superior?
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Diferente da urina, o <strong>hormônio da gravidez circula primeiro e em maior quantidade no sangue</strong>. No Labclin, realizamos o exame <strong>Beta HCG (Gonadotrofina Coriônica Humana)</strong>, que consegue detectar a gravidez muito mais cedo — às vezes até <strong>antes do atraso menstrual</strong>, dependendo do ciclo da mulher.
                      </p>

                      {/* Comparison Table */}
                      <div className="overflow-x-auto my-8">
                        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-soft">
                          <thead>
                            <tr className="bg-primary text-primary-foreground">
                              <th className="text-left py-4 px-4 font-semibold">Característica</th>
                              <th className="text-left py-4 px-4 font-semibold">Teste de Farmácia (Urina)</th>
                              <th className="text-left py-4 px-4 font-semibold">Exame de Sangue (Labclin)</th>
                            </tr>
                          </thead>
                          <tbody className="bg-card">
                            <tr className="border-b border-border">
                              <td className="py-4 px-4 font-medium text-foreground">Material</td>
                              <td className="py-4 px-4 text-muted-foreground">Urina</td>
                              <td className="py-4 px-4 text-muted-foreground">Sangue</td>
                            </tr>
                            <tr className="border-b border-border bg-muted/30">
                              <td className="py-4 px-4 font-medium text-foreground">Precisão</td>
                              <td className="py-4 px-4 text-muted-foreground">Alta (apenas após atraso)</td>
                              <td className="py-4 px-4 text-primary font-medium">Altíssima (detecta desde o início)</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-4 px-4 font-medium text-foreground">Risco de Erro</td>
                              <td className="py-4 px-4 text-amber-600 dark:text-amber-400">Comum (Falso Negativo)</td>
                              <td className="py-4 px-4 text-green-600 dark:text-green-400 font-medium">Raríssimo</td>
                            </tr>
                            <tr>
                              <td className="py-4 px-4 font-medium text-foreground">Tipo de Resposta</td>
                              <td className="py-4 px-4 text-muted-foreground">Apenas "Sim" ou "Não"</td>
                              <td className="py-4 px-4 text-primary font-medium">Diz a quantidade de hormônio (Quantitativo)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Body Image 2 */}
                      <figure className="my-8">
                        <div className="rounded-xl overflow-hidden border border-border shadow-soft">
                          <OptimizedImage
                            src="/images/blog/resultado-teste-gravidez-farmacia-vs-exame-sangue-labclin.webp"
                            alt="Comparação visual entre resultado do teste de farmácia e exame de sangue Beta HCG"
                            className="w-full aspect-[16/9] object-cover"
                            priority={false}
                            showSkeleton={true}
                          />
                        </div>
                        <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                          O exame de sangue oferece precisão e informações quantitativas sobre a gestação.
                        </figcaption>
                      </figure>
                    </section>

                    {/* Section: Quantitativo */}
                    <section id="quantitativo" className="mb-12">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Beta HCG Quantitativo: Acompanhando a evolução
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        Outra grande vantagem do laboratório é o <strong>Beta HCG Quantitativo</strong>. Ele não diz apenas "positivo". Ele mostra <strong>um número</strong>. Isso é vital para o médico, pois o número indica <strong>de quantas semanas você está</strong> e <strong>se a gestação está evoluindo bem</strong>. Um teste de farmácia nunca te dará essa informação de saúde.
                      </p>
                    </section>

                    {/* CTA Box - Mid Content */}
                    <div className="my-12 bg-gradient-hero rounded-xl p-8 text-center text-primary-foreground shadow-medium">
                      <h3 className="text-2xl font-bold mb-3">
                        Tire suas dúvidas agora!
                      </h3>
                      <p className="text-primary-foreground/90 mb-6 max-w-md mx-auto">
                        Agende seu exame Beta HCG pelo WhatsApp. Rápido, sem pedido médico e com resultado confiável.
                      </p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Agendar Beta HCG
                      </a>
                    </div>

                    {/* Section: Onde Fazer */}
                    <section id="onde-fazer" className="mb-12">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Onde fazer o Beta HCG em Rio Pomba e Região?
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Não fique na angústia da incerteza. Se o teste de farmácia deixou dúvidas ou se você quer a <strong>confirmação definitiva</strong> para começar seu pré-natal, venha ao <strong>Labclin</strong>. O exame é rápido, <strong>não precisa de pedido médico obrigatório</strong> e você tem o suporte de uma equipe biomédica experiente.
                      </p>

                      {/* Addresses List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {unidades.map((unidade) => (
                          <div
                            key={unidade.cidade}
                            className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                          >
                            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-foreground">{unidade.cidade}:</span>
                              <p className="text-sm text-muted-foreground">{unidade.endereco}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" className="mb-12">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                        Perguntas Frequentes
                      </h2>

                      <div className="space-y-3">
                        <details className="group bg-card border border-border rounded-xl overflow-hidden">
                          <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-foreground hover:bg-muted/50 transition-colors">
                            <span>Preciso de jejum para fazer o Beta HCG?</span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                          </summary>
                          <div className="px-5 pb-5 text-muted-foreground">
                            <strong>Não</strong>, o exame Beta HCG não exige jejum. Você pode fazer a coleta a qualquer momento do dia, alimentada normalmente.
                          </div>
                        </details>

                        <details className="group bg-card border border-border rounded-xl overflow-hidden">
                          <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-foreground hover:bg-muted/50 transition-colors">
                            <span>Quanto tempo demora o resultado do Beta HCG?</span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                          </summary>
                          <div className="px-5 pb-5 text-muted-foreground">
                            No Labclin, o resultado do Beta HCG fica pronto geralmente <strong>no mesmo dia</strong> ou em até 24 horas, dependendo do horário da coleta.
                          </div>
                        </details>

                        <details className="group bg-card border border-border rounded-xl overflow-hidden">
                          <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-foreground hover:bg-muted/50 transition-colors">
                            <span>Preciso de pedido médico para fazer o exame de gravidez?</span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                          </summary>
                          <div className="px-5 pb-5 text-muted-foreground">
                            <strong>Não é obrigatório</strong>. Você pode realizar o exame Beta HCG no Labclin por conta própria, sem necessidade de prescrição médica.
                          </div>
                        </details>
                      </div>
                    </section>

                    {/* Internal Link - SEO Cross-linking */}
                    <section className="mb-12">
                      <Link
                        to="/blog/sexagem-fetal-preco"
                        className="group block bg-gradient-subtle border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 rounded-full p-3">
                            <Baby className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground mb-1">Próximo passo:</p>
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              Deu positivo? Parabéns! Conheça nosso exame de Sexagem Fetal
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Descubra o sexo do bebê a partir da 8ª semana por R$ 140,00
                            </p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sticky CTA - Mobile */}
          <div className="lg:hidden fixed bottom-20 left-4 right-4 z-40">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar Beta HCG e Tirar Dúvidas
            </a>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default TesteGravidezBetaHCG;
