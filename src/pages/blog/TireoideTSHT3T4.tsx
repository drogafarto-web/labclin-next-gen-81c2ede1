import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const TireoideTSHT3T4 = () => {
  return (
    <>
      <Helmet>
        <title>TSH Alto ou Baixo? Entenda os Exames T3, T4 e TSH | Labclin</title>
        <meta
          name="description"
          content="Cansaço ou agitação? Entenda como o TSH regula sua tireoide, a diferença entre hipotireoidismo e hipertireoidismo e o que os exames T3 e T4 dizem."
        />
        <meta
          name="keywords"
          content="TSH, T3, T4, tireoide, hipotireoidismo, hipertireoidismo, exame de tireoide, laboratório Rio Pomba"
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/tsh-t3-t4-tireoide" />
        <meta property="og:title" content="TSH Alto ou Baixo? Entenda os Exames T3, T4 e TSH" />
        <meta property="og:description" content="Cansaço ou agitação? Entenda como o TSH regula sua tireoide e o que os exames dizem." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "TSH Alto ou Baixo? Entenda os Exames T3, T4 e TSH",
            "description": "Entenda como o TSH regula sua tireoide e a diferença entre hipotireoidismo e hipertireoidismo.",
            "datePublished": "2025-12-12",
            "author": {
              "@type": "Organization",
              "name": "Labclin"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Labclin",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.labclinmg.com.br/labclin-logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow">
          <article className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o blog
              </Link>

              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center gap-1">
                    <Activity className="h-3 w-3" />
                    Tireoide
                  </span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      12 Dez 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      5 min de leitura
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  TSH Alto ou Baixo? Entenda os Exames T3, T4 e TSH
                </h1>

                <p className="text-xl text-muted-foreground">
                  Cansaço ou agitação? Entenda como o TSH regula sua tireoide e o que os exames dizem sobre sua saúde.
                </p>
              </header>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="/images/blog/exame-tireoide-tsh-t3-t4-labclin.jpg"
                  alt="Tubo de coleta para exame de tireoide TSH T3 T4 no Labclin"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>O que é o TSH e qual sua função?</h2>
                <p>
                  O TSH (Hormônio Estimulante da Tireoide) é produzido pela hipófise e funciona como o "gerente" da tireoide. Ele regula a produção dos hormônios T3 e T4, que controlam o metabolismo do corpo inteiro.
                </p>
                <p>
                  Pense no TSH como um termostato: quando os níveis de T3 e T4 estão baixos, o TSH sobe para estimular a tireoide. Quando estão altos, o TSH diminui.
                </p>

                <h2>TSH Alto: Hipotireoidismo</h2>
                <p>
                  Quando o TSH está alto, significa que a tireoide está trabalhando devagar (hipotireoidismo). Sintomas comuns incluem:
                </p>
                <ul>
                  <li>Cansaço e fadiga constante</li>
                  <li>Ganho de peso inexplicável</li>
                  <li>Pele seca e cabelos quebradiços</li>
                  <li>Sensação de frio excessivo</li>
                  <li>Constipação intestinal</li>
                  <li>Dificuldade de concentração</li>
                  <li>Depressão</li>
                </ul>

                <h2>TSH Baixo: Hipertireoidismo</h2>
                <p>
                  Quando o TSH está baixo, a tireoide está acelerada (hipertireoidismo). Os sintomas incluem:
                </p>
                <ul>
                  <li>Agitação e nervosismo</li>
                  <li>Perda de peso mesmo comendo bem</li>
                  <li>Taquicardia (coração acelerado)</li>
                  <li>Tremores nas mãos</li>
                  <li>Sensação de calor excessivo</li>
                  <li>Insônia</li>
                  <li>Diarreia frequente</li>
                </ul>

                <h2>O Papel do T3 e T4</h2>
                <p>
                  O <strong>T4 (Tiroxina)</strong> é o principal hormônio produzido pela tireoide, mas é menos ativo. Ele é convertido em <strong>T3 (Triiodotironina)</strong>, que é a forma ativa que age nas células.
                </p>
                <p>
                  Em geral, o médico solicita T4 Livre (a fração ativa) junto com o TSH para uma avaliação completa. O T3 pode ser solicitado em casos específicos.
                </p>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    💡 Valores de Referência
                  </h3>
                  <ul className="text-muted-foreground mb-0 space-y-1">
                    <li><strong>TSH:</strong> 0,4 a 4,0 mUI/L</li>
                    <li><strong>T4 Livre:</strong> 0,8 a 1,8 ng/dL</li>
                    <li><strong>T3:</strong> 80 a 200 ng/dL</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 mb-0">
                    *Valores podem variar conforme o laboratório. Sempre compare com a referência do seu laudo.
                  </p>
                </div>

                <h2>Quando Fazer o Exame de Tireoide?</h2>
                <ul>
                  <li>Sintomas de cansaço ou agitação inexplicáveis</li>
                  <li>Alterações de peso sem mudança de hábitos</li>
                  <li>Histórico familiar de doenças da tireoide</li>
                  <li>Gestantes (rastreio obrigatório)</li>
                  <li>Mulheres acima de 35 anos (a cada 5 anos)</li>
                  <li>Acompanhamento de tratamento com levotiroxina</li>
                </ul>

                <h2>Preparo para o Exame</h2>
                <p>
                  O exame de TSH, T3 e T4 geralmente não exige jejum obrigatório. Porém, recomenda-se:
                </p>
                <ul>
                  <li>Manter medicamentos de tireoide no horário habitual</li>
                  <li>Informar ao laboratório sobre suplementos com biotina (pode interferir)</li>
                  <li>Preferir coleta pela manhã para padronização</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Agende seu Exame de Tireoide Agora!
                    </h3>
                    <p className="text-muted-foreground">
                      Atendimento em Rio Pomba, Mercês, Guarani e Silveirânia
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <WhatsAppCTA
                      number="5532991990239"
                      message="Olá! Gostaria de agendar um exame de tireoide (TSH, T3, T4)."
                      text="Agendar no WhatsApp"
                      source="blog_tireoide"
                    />
                    <Link to="/coleta-domiciliar">
                      <Button variant="outline">
                        Coleta Domiciliar
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer />
        <WhatsAppChatWidget />
      </div>
    </>
  );
};

export default TireoideTSHT3T4;
