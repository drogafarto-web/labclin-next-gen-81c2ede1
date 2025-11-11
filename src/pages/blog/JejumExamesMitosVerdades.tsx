import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import preparoImage from "@/assets/blog/preparo-exames-enhanced.jpg";

const JejumExamesMitosVerdades = () => {
  return (
    <>
      <Helmet>
        <title>Jejum para Exames: 5 Mitos e Verdades que Você Precisa Saber Antes da Coleta | Labclin</title>
        <meta
          name="description"
          content="Descubra a verdade sobre os requisitos de jejum para exames de sangue e desmistifique os principais mitos."
        />
        <meta
          name="keywords"
          content="jejum para exames, mitos e verdades, preparo para exames"
        />
        <link rel="canonical" href="https://labclin.com.br/blog/jejum-exames-mitos-e-verdades" />
        <meta property="og:title" content="Jejum para Exames: 5 Mitos e Verdades" />
        <meta property="og:description" content="Descubra a verdade sobre os requisitos de jejum para exames de sangue." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Jejum para Exames: 5 Mitos e Verdades que Você Precisa Saber Antes da Coleta",
            "description": "Descubra a verdade sobre os requisitos de jejum para exames de sangue e desmistifique os principais mitos.",
            "datePublished": "2025-01-22",
            "author": {
              "@type": "Organization",
              "name": "Labclin"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Labclin",
              "logo": {
                "@type": "ImageObject",
                "url": "https://labclin.com.br/logo.png"
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
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Preparação para Exames
                  </span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      22 Jan 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      5 min de leitura
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Jejum para Exames: 5 Mitos e Verdades que Você Precisa Saber Antes da Coleta
                </h1>

                <p className="text-xl text-muted-foreground">
                  Você sabia que nem todos os exames exigem jejum? Vamos esclarecer as dúvidas mais comuns sobre o preparo para exames e ajudar você a se preparar corretamente.
                </p>
              </header>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src={preparoImage}
                  alt="Preparo para exames laboratoriais"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Por que o Jejum é Necessário para Alguns Exames?</h2>
                <p>
                  Exames como o de glicemia e colesterol exigem jejum para garantir resultados precisos. O jejum evita que a alimentação interfira nos níveis de substâncias no sangue, permitindo uma avaliação mais fidedigna do seu estado de saúde.
                </p>
                <p>
                  Quando nos alimentamos, diversos componentes da comida são absorvidos e podem alterar temporariamente os valores de:
                </p>
                <ul>
                  <li>Glicose (açúcar no sangue)</li>
                  <li>Triglicerídeos e colesterol</li>
                  <li>Algumas enzimas hepáticas</li>
                  <li>Níveis de insulina</li>
                </ul>

                <h2>Exames Que Não Requerem Jejum</h2>
                <p>
                  Exames como o Hemograma e outros exames de rotina não exigem jejum, o que torna o preparo mais simples. Você pode realizar esses exames a qualquer hora do dia, sem a necessidade de estar em jejum.
                </p>
                <p>
                  Principais exames que dispensam jejum:
                </p>
                <ul>
                  <li>Hemograma completo</li>
                  <li>Tipagem sanguínea</li>
                  <li>Exames de urina</li>
                  <li>Hormônios tireoidianos (TSH, T3, T4)</li>
                  <li>PSA (antígeno prostático específico)</li>
                </ul>

                <h2>Os 5 Principais Mitos e Verdades</h2>

                <h3>1. "Preciso ficar 12 horas em jejum para qualquer exame"</h3>
                <p>
                  <strong>MITO!</strong> O tempo de jejum varia conforme o exame. Muitos exames requerem apenas 8 horas de jejum, e alguns não precisam de jejum algum. Sempre siga as orientações específicas do seu médico ou do laboratório.
                </p>

                <h3>2. "Posso beber água durante o jejum"</h3>
                <p>
                  <strong>VERDADE!</strong> A água é permitida e até recomendada durante o período de jejum. Manter-se hidratado facilita a coleta de sangue e não interfere nos resultados dos exames.
                </p>

                <h3>3. "Café sem açúcar pode durante o jejum"</h3>
                <p>
                  <strong>MITO!</strong> Mesmo sem açúcar, o café pode alterar alguns parâmetros dos exames. O ideal é consumir apenas água durante o período de jejum.
                </p>

                <h3>4. "Medicamentos quebram o jejum"</h3>
                <p>
                  <strong>DEPENDE!</strong> Medicamentos de uso contínuo geralmente devem ser mantidos, mas sempre informe ao laboratório sobre os medicamentos que você toma. Alguns podem precisar ser suspensos temporariamente.
                </p>

                <h3>5. "Jejum muito prolongado melhora os resultados"</h3>
                <p>
                  <strong>MITO!</strong> Jejum excessivo (mais de 14-16 horas) pode alterar os resultados e causar mal-estar. Respeite o tempo de jejum recomendado pelo laboratório.
                </p>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    💡 Dica Importante
                  </h3>
                  <p className="text-muted-foreground mb-0">
                    No Labclin, nossa equipe está sempre pronta para esclarecer suas dúvidas sobre o preparo para exames. Entre em contato conosco antes do exame se tiver qualquer dúvida!
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Confira todos os Exames e Seus Requisitos de Preparo
                    </h3>
                    <p className="text-muted-foreground">
                      Tire suas dúvidas e agende com segurança
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/exames">
                      <Button className="bg-gradient-hero">
                        Ver Exames
                      </Button>
                    </Link>
                    <Link to="/agendar">
                      <Button variant="outline">
                        Agendar Agora
                      </Button>
                    </Link>
                  </div>
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

export default JejumExamesMitosVerdades;
