import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  MapPin, 
  Phone, 
  CheckCircle2,
  Baby,
  Heart,
  Shield,
  Home
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

const TestePezinhoAmpliado = () => {
  const whatsappLink = "https://wa.me/5532991990239";
  const publishDate = "2025-12-08";
  const modifiedDate = "2025-12-08";

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Teste do Pezinho no SUS ou Particular? Entenda por que a versão Ampliada é a melhor escolha para o futuro do seu bebê",
    "description": "O Teste do Pezinho Básico cobre 6 doenças, mas o Ampliado do Labclin detecta mais de 50. Saiba a diferença e conheça nossa coleta humanizada em Rio Pomba e região.",
    "image": "https://www.labclinmg.com.br/images/blog/teste-pezinho-ampliado-labclin.webp",
    "datePublished": publishDate,
    "dateModified": modifiedDate,
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.labclinmg.com.br/blog/teste-do-pezinho-ampliado-sus-particular"
    },
    "keywords": "teste do pezinho, teste do pezinho ampliado, triagem neonatal, pezinho sus, pezinho particular, labclin rio pomba, teste da bochechinha"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual a diferença entre o Teste do Pezinho do SUS e o Ampliado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O teste básico do SUS rastreia cerca de 6 doenças principais (Fenilcetonúria, Hipotireoidismo Congênito, Anemia Falciforme, entre outras). Já o Teste do Pezinho Ampliado do Labclin detecta mais de 50 doenças, incluindo erros inatos do metabolismo e imunodeficiências graves."
        }
      },
      {
        "@type": "Question",
        "name": "Quando deve ser feito o Teste do Pezinho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Teste do Pezinho deve ser realizado idealmente entre o 3º e o 5º dia de vida do bebê. Este é o período ideal para garantir resultados precisos e permitir intervenção precoce caso necessário."
        }
      },
      {
        "@type": "Question",
        "name": "O Labclin faz coleta domiciliar do Teste do Pezinho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! O Labclin oferece o serviço de Coleta Domiciliar em Rio Pomba e região. A mesma segurança do laboratório, no conforto do quartinho do bebê. Agende pelo WhatsApp."
        }
      }
    ]
  };

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
        "name": "Saúde Infantil",
        "item": "https://www.labclinmg.com.br/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Teste do Pezinho e Genética",
        "item": "https://www.labclinmg.com.br/blog/teste-do-pezinho-ampliado-sus-particular"
      }
    ]
  };

  const unidades = [
    { cidade: "Rio Pomba", endereco: "Rua Floripes Maria de Jesus, 05, Centro" },
    { cidade: "Mercês", endereco: "Praça Dr. Castelões, 40, Centro" },
    { cidade: "Guarani", endereco: "Rua José Ladeira Pinto, 70, Bairro Sossego" },
    { cidade: "Silveirânia", endereco: "Rua Padre Cerqueira, 20, Centro" },
  ];

  return (
    <>
      <Helmet>
        <title>Teste do Pezinho Ampliado: SUS ou Particular? | Labclin Rio Pomba</title>
        <meta 
          name="description" 
          content="O Teste do Pezinho Básico cobre 6 doenças, mas o Ampliado do Labclin detecta mais de 50. Saiba a diferença e conheça nossa coleta humanizada em Rio Pomba e região." 
        />
        <meta 
          name="keywords" 
          content="teste do pezinho, teste do pezinho ampliado, triagem neonatal, pezinho sus, pezinho particular, labclin rio pomba, teste da bochechinha, coleta neonatal" 
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/teste-do-pezinho-ampliado-sus-particular" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Teste do Pezinho Ampliado: SUS ou Particular? | Labclin" />
        <meta property="og:description" content="O Teste do Pezinho Básico cobre 6 doenças, mas o Ampliado do Labclin detecta mais de 50. Saiba a diferença." />
        <meta property="og:image" content="https://www.labclinmg.com.br/images/blog/teste-pezinho-ampliado-labclin.webp" />
        <meta property="og:url" content="https://www.labclinmg.com.br/blog/teste-do-pezinho-ampliado-sus-particular" />
        <meta property="og:site_name" content="Labclin" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta property="article:section" content="Saúde Infantil" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teste do Pezinho Ampliado: SUS ou Particular?" />
        <meta name="twitter:description" content="O Teste do Pezinho Básico cobre 6 doenças, mas o Ampliado detecta mais de 50." />
        <meta name="twitter:image" content="https://www.labclinmg.com.br/images/blog/teste-pezinho-ampliado-labclin.webp" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(blogPostSchema)}
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
        
        <main id="main-content" className="flex-grow">
          <article className="pb-16">
            {/* Hero Section */}
            <header className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-12 md:py-16 px-4">
              <div className="container mx-auto max-w-4xl">
                {/* Breadcrumbs */}
                <Breadcrumb className="mb-6">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground">
                          Início
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-primary-foreground/60" />
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground">
                          Saúde Infantil
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-primary-foreground/60" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-primary-foreground font-medium">
                        Teste do Pezinho e Genética
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-6 transition-colors text-sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para o Blog
                </Link>
                
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    <Baby className="h-4 w-4" />
                    Saúde Infantil
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Teste do Pezinho no SUS ou Particular? Entenda por que a versão Ampliada é a melhor escolha para o futuro do seu bebê
                </h1>
                
                <p className="text-lg md:text-xl opacity-95 mb-6 leading-relaxed max-w-3xl">
                  O Teste do Pezinho Básico cobre 6 doenças, mas o Ampliado do Labclin detecta mais de 50. 
                  Saiba a diferença e conheça nossa coleta humanizada em Rio Pomba e região.
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    Por Labclin
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    Leitura de 5 min
                  </span>
                </div>
              </div>
            </header>

            {/* Hero Image - LCP Optimized */}
            <div className="container mx-auto max-w-4xl px-4 -mt-8 relative z-10">
              <figure className="rounded-xl overflow-hidden shadow-strong bg-muted">
                <div className="aspect-[16/9]">
                  <img
                    src="/images/blog/teste-pezinho-ampliado-labclin.webp"
                    alt="mãos de mãe segurando pezinho de recém-nascido teste do pezinho ampliado labclin"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </figure>
            </div>

            {/* Main Content */}
            <div className="container mx-auto max-w-4xl px-4 mt-12">
              <div className="prose prose-lg max-w-none">
                {/* Intro Paragraph */}
                <section className="mb-10">
                  <p className="text-lg text-foreground leading-relaxed">
                    A chegada de um bebê traz alegria, mas também muitas responsabilidades. Entre as primeiras 
                    providências, o <strong>Teste do Pezinho</strong> é, sem dúvida, uma das mais cruciais. Ele deve ser feito, 
                    idealmente, <strong>entre o 3º e o 5º dia de vida</strong>. Mas você sabia que existe uma grande diferença 
                    entre o exame oferecido na rede pública e o disponível na rede particular?
                  </p>
                </section>

                {/* SUS vs Labclin */}
                <section className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Shield className="h-7 w-7 text-primary" />
                    SUS vs. Labclin: Qual a diferença de proteção?
                  </h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    O teste básico oferecido gratuitamente (SUS) é uma triagem fundamental, mas limitada. 
                    Ele rastreia cerca de <strong>6 doenças principais</strong> (como Fenilcetonúria, Hipotireoidismo Congênito 
                    e Anemia Falciforme). Já o <strong>Teste do Pezinho Ampliado</strong>, realizado aqui no Labclin, 
                    utiliza tecnologia de ponta para analisar o metabolismo do bebê com muito mais profundidade.
                  </p>

                  {/* Highlight Box */}
                  <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-xl p-6 md:p-8 my-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                          Versão Ampliada (Master)
                        </h3>
                        <p className="text-green-700 dark:text-green-400 leading-relaxed">
                          Pode detectar <strong>mais de 50 doenças</strong>, incluindo erros inatos do metabolismo 
                          e imunodeficiências graves. O diagnóstico precoce permite tratamento imediato, 
                          <strong> evitando sequelas no desenvolvimento da criança</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Mãozinha Leve */}
                <section className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Heart className="h-7 w-7 text-red-500" />
                    Medo da dor? Conheça a "Mãozinha Leve" do Labclin
                  </h2>
                  <p className="text-foreground leading-relaxed mb-6">
                    Sabemos que o coração dos pais aperta ao imaginar o furinho no pé do bebê. 
                    Por isso, no Labclin, transformamos esse momento:
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Ambiente Acolhedor:</strong>
                        <span className="text-muted-foreground"> Nossas unidades não têm "cara de hospital".</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-foreground">Técnica Especializada:</strong>
                        <span className="text-muted-foreground"> Equipe treinada em coleta neonatal. Usamos lancetas especiais que minimizam o desconforto, tornando a coleta muitas vezes imperceptível para o sono do bebê.</span>
                      </div>
                    </li>
                  </ul>

                  {/* Secondary Image - Lazy Loaded */}
                  <figure className="rounded-xl overflow-hidden shadow-medium bg-muted my-8">
                    <div className="aspect-[16/10]">
                      <img
                        src="/images/blog/brinquedoteca-coleta-infantil-labclin.png"
                        alt="bebe dormindo tranquilo apos exame teste do pezinho com curativo fofo labclin"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <figcaption className="text-sm text-muted-foreground text-center py-3 px-4 bg-muted/50">
                      Espaço Kids do Labclin: ambiente acolhedor para a coleta infantil
                    </figcaption>
                  </figure>
                </section>

                {/* Teste da Bochechinha - Upsell */}
                <section className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Baby className="h-7 w-7 text-accent" />
                    Quer ainda mais proteção? Conheça o Teste da Bochechinha
                  </h2>
                  <p className="text-foreground leading-relaxed">
                    Para pais que buscam o máximo de segurança genética, o Labclin oferece o inovador 
                    <strong> Teste da Bochechinha</strong>. Diferente do pezinho, ele analisa o DNA do bebê através de uma 
                    coleta de saliva (swab), <strong>totalmente indolor</strong>. Ele complementa o Teste do Pezinho, 
                    podendo rastrear <strong>mais de 300 doenças tratáveis</strong>. Pergunte sobre o combo 
                    "Pezinho + Bochechinha" para nossa equipe.
                  </p>
                </section>

                {/* Coleta Domiciliar */}
                <section className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Home className="h-7 w-7 text-primary" />
                    Conforto Total: Coleta Domiciliar
                  </h2>
                  <p className="text-foreground leading-relaxed">
                    Não quer sair de casa com o recém-nascido? <strong>Nós vamos até você</strong>. O Labclin oferece o 
                    serviço de <Link to="/coleta-domiciliar" className="text-primary hover:underline font-medium">Coleta Domiciliar</Link> em 
                    Rio Pomba e região. A mesma segurança do laboratório, no conforto do quartinho do bebê.
                  </p>
                </section>

                {/* Endereços e CTA Final */}
                <section className="mt-12 pt-8 border-t border-border">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <MapPin className="h-7 w-7 text-primary" />
                    Onde realizar o Teste do Pezinho Ampliado?
                  </h2>
                  <p className="text-foreground leading-relaxed mb-8">
                    Garanta a proteção máxima para quem acabou de chegar ao mundo. 
                    Agende agora nas nossas unidades ou solicite o atendimento em casa.
                  </p>

                  {/* Lista de Endereços */}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {unidades.map((unidade) => (
                      <li 
                        key={unidade.cidade}
                        className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border"
                      >
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-foreground block">{unidade.cidade}:</strong>
                          <span className="text-muted-foreground text-sm">{unidade.endereco}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Principal */}
                  <div className="text-center">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="h-6 w-6" />
                      Falar com Biomédica no WhatsApp
                    </a>
                    <p className="text-sm text-muted-foreground mt-3">
                      Atendimento humanizado para você e seu bebê
                    </p>
                  </div>
                </section>

                {/* Cross-linking SEO */}
                <section className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
                  <h3 className="font-bold text-foreground mb-3">Leia também:</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog/sexagem-fetal-preco" className="text-primary hover:underline">
                        → Sexagem Fetal por R$ 140,00 em Rio Pomba e Região
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/coleta-infantil-sem-traumas" className="text-primary hover:underline">
                        → Coleta Infantil Humanizada: Espaço Kids e técnica Mãozinha Leve
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/coleta-domiciliar-agende" className="text-primary hover:underline">
                        → Coleta Domiciliar de Exames: Agende com Conforto e Segurança
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </article>
        </main>

        <Footer />
        <WhatsAppButton />

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-20 left-4 right-4 z-40 md:hidden">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-full shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Agendar Teste do Pezinho
          </a>
        </div>
      </div>
    </>
  );
};

export default TestePezinhoAmpliado;
