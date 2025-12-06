import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, CheckCircle, Baby, Heart, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SexagemFetalPreco = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": "Sexagem Fetal por R$ 140,00 em Rio Pomba e Região: Descubra o Sexo do Bebê",
        "description": "Descubra o sexo do seu bebê a partir da 8ª semana por apenas R$ 140,00. Sexagem Fetal com 99% de precisão em Rio Pomba, Mercês, Guarani e Silveirânia. Sem jejum, sem pedido médico.",
        "image": "https://www.labclinmg.com.br/images/blog/preparo-exames-enhanced.jpg",
        "datePublished": "2025-02-05",
        "dateModified": "2025-02-05",
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
          "@id": "https://www.labclinmg.com.br/blog/sexagem-fetal-preco"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quanto custa a sexagem fetal no Labclin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No Labclin, a sexagem fetal custa R$ 140,00. É um dos menores preços da região, disponível em Rio Pomba, Mercês, Guarani e Silveirânia."
            }
          },
          {
            "@type": "Question",
            "name": "A partir de quantas semanas posso fazer sexagem fetal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A partir da 8ª semana de gestação. Nessa fase, já é possível detectar o cromossomo Y no sangue da mãe com 99% de precisão."
            }
          },
          {
            "@type": "Question",
            "name": "Precisa de jejum para sexagem fetal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não, não precisa de jejum para fazer a sexagem fetal. Você pode realizar o exame a qualquer momento do dia."
            }
          },
          {
            "@type": "Question",
            "name": "Precisa de pedido médico para sexagem fetal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não, você pode fazer o exame de sexagem fetal sem pedido médico no Labclin."
            }
          },
          {
            "@type": "Question",
            "name": "Sexagem fetal dá errado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A sexagem fetal tem precisão de 99% quando realizada a partir da 8ª semana de gestação. É um exame muito confiável que analisa o DNA fetal presente no sangue da mãe."
            }
          }
        ]
      }
    ]
  };

  const units = [
    {
      name: "Rio Pomba (Sede)",
      address: "Rua Floripes Maria de Jesus, 05 - Centro",
      phone: "(32) 99199-0239",
      whatsapp: "5532991990239",
      isNew: false,
    },
    {
      name: "Mercês",
      address: "Praça Dr. Castelões, 40 - Centro",
      phone: "(32) 99967-1581",
      whatsapp: "5532999671581",
      isNew: false,
      link: "/unidades/merces",
    },
    {
      name: "Guarani",
      address: "Rua José Ladeira Pinto, 70 - Bairro Sossego",
      phone: "(32) 99942-2574",
      whatsapp: "5532999422574",
      isNew: false,
      link: "/unidades/guarani",
    },
    {
      name: "Silveirânia",
      address: "Rua Padre Cerqueira, 20 - Centro",
      phone: "(32) 99959-2154",
      whatsapp: "5532999592154",
      isNew: true,
      link: "/unidades/silveirania",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sexagem Fetal por R$ 140,00 em Rio Pomba e Região | Labclin</title>
        <meta
          name="description"
          content="Descubra o sexo do seu bebê a partir da 8ª semana por apenas R$ 140,00. Sexagem Fetal com 99% de precisão em Rio Pomba, Mercês, Guarani e Silveirânia. Sem jejum, sem pedido médico."
        />
        <meta
          name="keywords"
          content="sexagem fetal preço, sexagem fetal rio pomba, exame sexo bebê, sexagem fetal R$ 140, laboratório silveirânia, sexagem fetal mercês, sexagem fetal guarani, sexagem fetal zona da mata"
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/sexagem-fetal-preco" />
        <meta property="og:title" content="Sexagem Fetal por R$ 140,00 em Rio Pomba e Região | Labclin" />
        <meta
          property="og:description"
          content="Descubra o sexo do seu bebê a partir da 8ª semana por apenas R$ 140,00. Sem jejum, sem pedido médico."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.labclinmg.com.br/blog/sexagem-fetal-preco" />
        <meta property="og:image" content="https://www.labclinmg.com.br/images/blog/preparo-exames-enhanced.jpg" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main id="main-content" className="flex-grow">
          {/* Article Header */}
          <article className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              {/* Breadcrumb */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o Blog
              </Link>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Baby className="h-4 w-4" />
                  Gestante
                </span>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>05 Fev 2025</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4" />
                  <span>5 min de leitura</span>
                </div>
              </div>

              {/* H1 Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Sexagem Fetal por <span className="text-primary">R$ 140,00</span> em Rio Pomba e Região: Descubra o Sexo do Bebê
              </h1>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>É menino ou menina?</strong> Essa é a pergunta que não sai da cabeça de toda mamãe e papai
                  desde o positivo do teste. A ansiedade é grande, mas a boa notícia é que você não precisa esperar
                  meses para saber!
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com a <strong>sexagem fetal</strong>, você descobre o sexo do bebê a partir da <strong>8ª semana de gestação</strong> —
                  e no Labclin, esse exame custa apenas <strong className="text-primary">R$ 140,00</strong>.
                </p>
              </div>

              {/* Price Highlight Card */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-8 my-10 text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-primary animate-pulse" />
                </div>
                <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Sexagem Fetal por apenas</p>
                <p className="text-5xl md:text-6xl font-bold text-primary mb-3">R$ 140,00</p>
                <p className="text-muted-foreground mb-4">Resultado em <strong>3 a 5 dias úteis</strong> • Sem jejum • Sem pedido médico</p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold"
                >
                  <a
                    href="https://wa.me/5532991990239?text=Olá! Gostaria de agendar sexagem fetal."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar pelo WhatsApp
                  </a>
                </Button>
              </div>

              {/* Content Sections */}
              <div className="prose prose-lg max-w-none">
                {/* How it works */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Sparkles className="h-7 w-7 text-primary" />
                  Menino ou Menina? Como funciona o exame
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A sexagem fetal é um exame simples e <strong>100% seguro</strong> para você e seu bebê. Funciona assim:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Coleta de sangue da mãe:</strong> Uma amostra simples do seu sangue é suficiente.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Análise do DNA fetal:</strong> Fragmentos do DNA do bebê circulam no sangue da gestante.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Detecção do cromossomo Y:</strong> Se encontrado, é menino! Se não, é menina!
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong>Precisão de 99%:</strong> Um dos exames mais confiáveis para descobrir o sexo.
                    </span>
                  </li>
                </ul>

                {/* When to do */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  A partir de quantas semanas posso fazer?
                </h2>
                <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    ✨ A partir da <span className="text-primary text-2xl">8ª semana</span> de gestação
                  </p>
                  <p className="text-muted-foreground">
                    Nessa fase, já existe DNA fetal suficiente no sangue da mãe para garantir
                    a <strong>precisão de 99%</strong> no resultado. Quanto mais avançada a gestação, maior a certeza!
                  </p>
                </div>

                {/* Price Section */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  Quanto custa a Sexagem Fetal no Labclin?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sabemos que a gestação vem com muitos gastos, e por isso oferecemos um dos <strong>melhores preços da região</strong>:
                </p>
                <div className="flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">R$ 140,00</p>
                    <p className="text-sm text-muted-foreground">Pagamento facilitado • Resultado online</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Resultado em 3 a 5 dias úteis</strong>, disponível online no nosso portal de resultados.
                  Acabou a ansiedade rapidinho! 💕
                </p>

                {/* Where to do */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <MapPin className="h-7 w-7 text-primary" />
                  Onde fazer em Rio Pomba, Mercês, Guarani e Silveirânia
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A sexagem fetal está disponível em <strong>todas as 4 unidades do Labclin</strong>.
                  Escolha a mais próxima de você:
                </p>

                <div className="grid gap-4 mb-8">
                  {units.map((unit) => (
                    <div
                      key={unit.name}
                      className={`border rounded-xl p-5 transition-all hover:shadow-md ${
                        unit.isNew ? "border-primary bg-primary/5" : "border-border bg-card"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-foreground text-lg">{unit.name}</h3>
                            {unit.isNew && (
                              <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
                                NOVA!
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {unit.address}
                          </p>
                          <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1">
                            <Phone className="h-4 w-4" />
                            {unit.phone}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            asChild
                            size="sm"
                            className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
                          >
                            <a
                              href={`https://wa.me/${unit.whatsapp}?text=Olá! Gostaria de agendar sexagem fetal.`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              WhatsApp
                            </a>
                          </Button>
                          {unit.link && (
                            <Button asChild size="sm" variant="outline">
                              <Link to={unit.link}>Ver Unidade</Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ Section */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  Tira-Dúvidas Rápido
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="border border-border rounded-xl p-5 bg-card">
                    <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Precisa de jejum?
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-primary">Não!</strong> Você pode fazer o exame a qualquer momento do dia,
                      sem precisar estar em jejum.
                    </p>
                  </div>

                  <div className="border border-border rounded-xl p-5 bg-card">
                    <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Precisa de pedido médico?
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-primary">Não!</strong> Você pode realizar a sexagem fetal por conta própria,
                      sem necessidade de prescrição médica.
                    </p>
                  </div>

                  <div className="border border-border rounded-xl p-5 bg-card">
                    <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      O resultado demora muito?
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-primary">Não!</strong> O resultado sai em <strong>3 a 5 dias úteis</strong> e
                      você pode acessar online pelo nosso{" "}
                      <Link to="/resultados" className="text-primary hover:underline">
                        portal de resultados
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="border border-border rounded-xl p-5 bg-card">
                    <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Sexagem fetal dá errado?
                    </p>
                    <p className="text-muted-foreground">
                      A sexagem fetal tem <strong className="text-primary">precisão de 99%</strong> quando realizada a partir
                      da 8ª semana. É um exame muito confiável que usa tecnologia avançada de análise de DNA.
                    </p>
                  </div>
                </div>

                {/* Internal Links */}
                <div className="bg-muted/30 border border-border rounded-xl p-6 my-8">
                  <p className="font-semibold text-foreground mb-3">📚 Leia também:</p>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog/sexagem-fetal-merces" className="text-primary hover:underline">
                        → Chá de Revelação: Sexagem Fetal confiável?
                      </Link>
                    </li>
                    <li>
                      <Link to="/exames" className="text-primary hover:underline">
                        → Conheça todos os nossos exames
                      </Link>
                    </li>
                    <li>
                      <Link to="/coleta-domiciliar" className="text-primary hover:underline">
                        → Coleta Domiciliar: fazemos na sua casa!
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 border-2 border-[#25D366] rounded-2xl p-8 mt-12 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Pronto para acabar com a curiosidade? 💕
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Agende sua sexagem fetal agora mesmo pelo WhatsApp. Atendimento rápido e humanizado em todas as nossas unidades.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold"
                  >
                    <a
                      href="https://wa.me/5532991990239?text=Olá! Gostaria de agendar sexagem fetal por R$ 140,00."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agendar pelo WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/coleta-domiciliar">Coleta Domiciliar</Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default SexagemFetalPreco;
