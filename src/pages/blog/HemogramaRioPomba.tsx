import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OptimizedImage from "@/components/OptimizedImage";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HemogramaRioPomba = () => {
  return (
    <>
      <Helmet>
        <title>O que é um hemograma e quando pedir? | Labclin Rio Pomba</title>
        <meta
          name="description"
          content="Entenda como funciona o hemograma, o exame de sangue mais comum. Saiba quando é indicado e sua importância no diagnóstico. Labclin Rio Pomba, Mercês, Guarani e Silveirânia."
        />
        <meta
          name="keywords"
          content="hemograma, exame de sangue, hemograma completo, Rio Pomba, laboratório, análises clínicas, eritrograma, leucograma, plaquetas"
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/hemograma-rio-pomba" />
        <meta property="og:title" content="O que é um hemograma e quando pedir?" />
        <meta property="og:description" content="Guia completo sobre hemograma - o exame de sangue mais solicitado" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "O que é um hemograma e quando pedir?",
            "description": "Entenda como funciona o exame de sangue mais comum, quando ele é indicado e por que o hemograma é importante no diagnóstico de várias doenças.",
            "datePublished": "2025-01-15",
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

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Exames
                  </span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      15 Jan 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      5 min de leitura
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  O que é um hemograma e quando pedir?
                </h1>

                <p className="text-xl text-muted-foreground">
                  Entenda como funciona o exame de sangue mais comum, quando ele é indicado e por que 
                  o hemograma é importante no diagnóstico de várias doenças.
                </p>
              </header>

              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden mb-8">
                <OptimizedImage
                  src="/images/blog/hemograma-enhanced.jpg"
                  alt="Profissional realizando exame de hemograma em laboratório"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <h2>O que é o hemograma?</h2>
                <p>
                  O hemograma é um dos exames laboratoriais mais solicitados pelos médicos e consiste na 
                  análise detalhada dos componentes do sangue. Este exame fornece informações valiosas sobre 
                  a saúde geral do paciente, podendo identificar diversas condições médicas, desde anemias 
                  até infecções e doenças mais graves.
                </p>

                <h2>O que o hemograma avalia?</h2>
                <p>O hemograma completo analisa três principais componentes sanguíneos:</p>
                
                <h3>1. Eritrograma (Série Vermelha)</h3>
                <p>
                  Avalia os glóbulos vermelhos (hemácias), hemoglobina e hematócrito. Essas células são 
                  responsáveis pelo transporte de oxigênio no organismo. Alterações podem indicar anemia, 
                  desidratação ou problemas na medula óssea.
                </p>

                <h3>2. Leucograma (Série Branca)</h3>
                <p>
                  Analisa os glóbulos brancos (leucócitos), que são as células de defesa do organismo. 
                  O exame diferencia os tipos de leucócitos: neutrófilos, linfócitos, monócitos, eosinófilos 
                  e basófilos. Alterações podem sugerir infecções, alergias, inflamações ou doenças do sistema imune.
                </p>

                <h3>3. Plaquetas</h3>
                <p>
                  Avalia a quantidade de plaquetas, células responsáveis pela coagulação sanguínea. 
                  Valores alterados podem indicar problemas de coagulação, risco aumentado de sangramentos 
                  ou tromboses.
                </p>

                <h2>Quando o hemograma é indicado?</h2>
                <p>O médico pode solicitar um hemograma em diversas situações:</p>
                <ul>
                  <li>Check-up de rotina e exames preventivos</li>
                  <li>Investigação de sintomas como cansaço, fraqueza e palidez</li>
                  <li>Suspeita de infecções ou processos inflamatórios</li>
                  <li>Acompanhamento de tratamentos médicos</li>
                  <li>Avaliação pré-operatória</li>
                  <li>Monitoramento de doenças crônicas</li>
                </ul>

                <h2>Como se preparar para o hemograma?</h2>
                <p>
                  Na maioria dos casos, o hemograma não requer jejum, mas é importante seguir as orientações 
                  específicas do seu médico. No Labclin, oferecemos:
                </p>
                <ul>
                  <li>Atendimento rápido e sem filas</li>
                  <li>Profissionais qualificados e equipamentos modernos</li>
                  <li>Resultados online em até 24 horas</li>
                  <li>Opção de coleta domiciliar para sua comodidade</li>
                </ul>

                <h2>Resultados: quando se preocupar?</h2>
                <p>
                  Apenas o médico que solicitou o exame está capacitado para interpretar corretamente os 
                  resultados do hemograma, considerando seu histórico clínico e sintomas. Valores fora do 
                  padrão não significam necessariamente uma doença grave, mas devem sempre ser avaliados 
                  por um profissional de saúde.
                </p>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    💡 Dica Importante
                  </h3>
                  <p className="text-muted-foreground mb-0">
                    Nunca se automedique ou tire conclusões precipitadas baseando-se apenas nos valores do 
                    hemograma. Consulte sempre seu médico para a interpretação adequada dos resultados.
                  </p>
                </div>
              </div>

              {/* Share and CTA */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Precisa fazer um hemograma?
                    </h3>
                    <p className="text-muted-foreground">
                      Agende seu exame no Labclin Rio Pomba
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/agendar">
                      <Button className="bg-gradient-hero">
                        Agendar Agora
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

export default HemogramaRioPomba;