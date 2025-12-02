import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";


const HemogramaCompletoGuiaDefinitivo = () => {
  return (
    <>
      <Helmet>
        <title>Hemograma Completo: O Guia Definitivo para Entender Seu Exame de Sangue | Labclin</title>
        <meta
          name="description"
          content="Entenda o exame de sangue Hemograma Completo e a importância desse teste para a sua saúde."
        />
        <meta
          name="keywords"
          content="hemograma completo, exame de sangue, análises clínicas"
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/hemograma-completo-guia-definitivo" />
        <meta property="og:title" content="Hemograma Completo: O Guia Definitivo" />
        <meta property="og:description" content="Entenda o exame de sangue Hemograma Completo e a importância desse teste para a sua saúde." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Hemograma Completo: O Guia Definitivo para Entender Seu Exame de Sangue",
            "description": "Entenda o exame de sangue Hemograma Completo e a importância desse teste para a sua saúde.",
            "datePublished": "2025-01-20",
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
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Exames de Rotina
                  </span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      20 Jan 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      6 min de leitura
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Hemograma Completo: O Guia Definitivo para Entender Seu Exame de Sangue
                </h1>

                <p className="text-xl text-muted-foreground">
                  O hemograma completo é um dos exames mais solicitados, ajudando a detectar condições como anemia e infecções. Neste guia, explicamos como ele funciona e o que você pode esperar.
                </p>
              </header>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="/images/blog/hemograma-enhanced.jpg"
                  alt="Exame de hemograma completo sendo realizado em laboratório"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>O que é o Hemograma Completo?</h2>
                <p>
                  O Hemograma Completo é um exame que avalia os componentes do sangue, como glóbulos vermelhos, glóbulos brancos e plaquetas. Ele ajuda a diagnosticar diversas condições médicas, desde infecções simples até doenças mais complexas.
                </p>
                <p>
                  Este exame é fundamental para:
                </p>
                <ul>
                  <li>Detectar anemias de diversos tipos</li>
                  <li>Identificar processos infecciosos e inflamatórios</li>
                  <li>Avaliar a capacidade de coagulação do sangue</li>
                  <li>Monitorar tratamentos médicos</li>
                  <li>Realizar check-ups preventivos</li>
                </ul>

                <h2>Como se Preparar para o Exame de Hemograma?</h2>
                <p>
                  Geralmente, o hemograma não exige preparo específico, mas é importante estar em jejum de pelo menos 4 horas para garantir a precisão dos resultados. Isso porque a alimentação pode interferir em alguns parâmetros avaliados no exame.
                </p>
                <p>
                  Outras recomendações importantes:
                </p>
                <ul>
                  <li>Hidrate-se bem antes do exame</li>
                  <li>Evite exercícios físicos intensos nas 24 horas anteriores</li>
                  <li>Informe ao laboratório sobre medicamentos em uso</li>
                  <li>Mantenha uma rotina de sono adequada na véspera</li>
                </ul>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    💡 Dica Importante
                  </h3>
                  <p className="text-muted-foreground mb-0">
                    No Labclin, oferecemos atendimento rápido e resultados em até 24 horas. Além disso, você pode optar pela coleta domiciliar para maior comodidade!
                  </p>
                </div>

                <h2>Entendendo os Resultados</h2>
                <p>
                  O hemograma completo é dividido em três partes principais:
                </p>

                <h3>Série Vermelha (Eritrograma)</h3>
                <p>
                  Avalia hemácias, hemoglobina e hematócrito. Alterações podem indicar anemia, desidratação ou outros problemas relacionados ao transporte de oxigênio.
                </p>

                <h3>Série Branca (Leucograma)</h3>
                <p>
                  Analisa os leucócitos (células de defesa). Valores alterados podem sugerir infecções, processos inflamatórios ou problemas no sistema imunológico.
                </p>

                <h3>Plaquetas</h3>
                <p>
                  Responsáveis pela coagulação sanguínea. Valores fora do normal podem indicar risco de sangramentos ou tromboses.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Agende seu Hemograma Completo Agora!
                    </h3>
                    <p className="text-muted-foreground">
                      Atendimento em Rio Pomba, Mercês, Guarani e Silveirânia
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/agendar">
                      <Button className="bg-gradient-hero">
                        Agendar Exame
                      </Button>
                    </Link>
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
        <WhatsAppButton />
      </div>
    </>
  );
};

export default HemogramaCompletoGuiaDefinitivo;
