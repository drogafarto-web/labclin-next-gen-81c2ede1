import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const UreiaCreatininaRins = () => {
  return (
    <>
      <Helmet>
        <title>Ureia e Creatinina: O que dizem sobre seus Rins? | Labclin</title>
        <meta
          name="description"
          content="Entenda os principais marcadores da função renal. Saiba a diferença entre ureia e creatinina e como prevenir doenças silenciosas dos rins."
        />
        <meta
          name="keywords"
          content="ureia, creatinina, função renal, rins, exame de rins, doença renal, laboratório Rio Pomba"
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/ureia-creatinina-rins" />
        <meta property="og:title" content="Ureia e Creatinina: O que dizem sobre seus Rins?" />
        <meta property="og:description" content="Entenda os principais marcadores da função renal e previna doenças silenciosas." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Ureia e Creatinina: O que dizem sobre seus Rins?",
            "description": "Entenda os principais marcadores da função renal e previna doenças silenciosas dos rins.",
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
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center gap-1">
                    <Droplet className="h-3 w-3" />
                    Saúde Renal
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
                  Ureia e Creatinina: O que dizem sobre seus Rins?
                </h1>

                <p className="text-xl text-muted-foreground">
                  Entenda os principais marcadores da função renal e previna doenças silenciosas que podem comprometer sua qualidade de vida.
                </p>
              </header>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="/images/blog/exame-creatinina-ureia-funcao-renal-labclin.jpg"
                  alt="Ilustração 3D de rins representando exame de função renal no Labclin"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Por que a Saúde Renal é tão Importante?</h2>
                <p>
                  Os rins são órgãos vitais responsáveis por filtrar o sangue, eliminar toxinas e regular líquidos e minerais no corpo. A doença renal crônica atinge cerca de 10% da população mundial e, na maioria dos casos, é silenciosa até estágios avançados.
                </p>

                <h2>O que é Creatinina?</h2>
                <p>
                  A creatinina é um resíduo produzido pelos músculos e eliminado exclusivamente pelos rins. Por isso, é o <strong>marcador mais confiável</strong> da função renal. Quando os rins não filtram adequadamente, a creatinina se acumula no sangue.
                </p>
                <p>
                  <strong>Valores de referência:</strong>
                </p>
                <ul>
                  <li>Homens: 0,7 a 1,3 mg/dL</li>
                  <li>Mulheres: 0,6 a 1,1 mg/dL</li>
                </ul>

                <h2>O que é Ureia?</h2>
                <p>
                  A ureia é um resíduo do metabolismo das proteínas, produzida no fígado e eliminada pelos rins. Ela ajuda na avaliação renal, mas é menos específica que a creatinina porque pode variar conforme a dieta (consumo de proteínas) e hidratação.
                </p>
                <p>
                  <strong>Valores de referência:</strong>
                </p>
                <ul>
                  <li>Normal: 15 a 40 mg/dL</li>
                </ul>

                <h2>Creatinina vs Ureia: Qual é mais confiável?</h2>
                <p>
                  A <strong>creatinina é mais confiável</strong> porque:
                </p>
                <ul>
                  <li>Não varia significativamente com a dieta</li>
                  <li>É eliminada apenas pelos rins</li>
                  <li>Permite calcular a Taxa de Filtração Glomerular (TFG)</li>
                </ul>
                <p>
                  A ureia é um exame complementar. Quando ambas estão elevadas, a suspeita de problema renal é maior.
                </p>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    ⚠️ Sinais de Alerta para Problemas Renais
                  </h3>
                  <ul className="text-muted-foreground mb-0 space-y-1">
                    <li>Urina com espuma persistente</li>
                    <li>Inchaço nas pernas, tornozelos ou ao redor dos olhos</li>
                    <li>Pressão alta de difícil controle</li>
                    <li>Urina com sangue ou cor escura</li>
                    <li>Cansaço e fraqueza inexplicáveis</li>
                    <li>Dor lombar persistente</li>
                  </ul>
                </div>

                <h2>Quem Deve Monitorar a Função Renal?</h2>
                <p>
                  Alguns grupos têm maior risco de desenvolver doença renal e devem fazer exames regularmente:
                </p>
                <ul>
                  <li><strong>Diabéticos:</strong> o diabetes é a principal causa de doença renal crônica</li>
                  <li><strong>Hipertensos:</strong> a pressão alta danifica os vasos renais</li>
                  <li><strong>Idosos:</strong> a função renal diminui naturalmente com a idade</li>
                  <li><strong>Histórico familiar:</strong> de doença renal ou hemodiálise</li>
                  <li><strong>Uso crônico de medicamentos:</strong> anti-inflamatórios, por exemplo</li>
                </ul>

                <h2>Preparo para o Exame</h2>
                <ul>
                  <li>Jejum de 4 a 8 horas (conforme orientação)</li>
                  <li>Evitar exercícios intensos nas 24 horas anteriores (pode elevar creatinina temporariamente)</li>
                  <li>Manter hidratação normal</li>
                  <li>Informar medicamentos em uso</li>
                </ul>

                <h2>Clearance de Creatinina: O Exame Completo</h2>
                <p>
                  Para uma avaliação mais precisa, o médico pode solicitar o Clearance de Creatinina, que combina a dosagem no sangue com a coleta de urina de 24 horas. Isso permite calcular exatamente quanto os rins estão filtrando.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Agende seu Exame de Função Renal!
                    </h3>
                    <p className="text-muted-foreground">
                      Atendimento em Rio Pomba, Mercês, Guarani e Silveirânia
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <WhatsAppCTA
                      number="5532991990239"
                      message="Olá! Gostaria de agendar um exame de função renal (ureia e creatinina)."
                      text="Agendar no WhatsApp"
                      source="blog_rins"
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

export default UreiaCreatininaRins;
