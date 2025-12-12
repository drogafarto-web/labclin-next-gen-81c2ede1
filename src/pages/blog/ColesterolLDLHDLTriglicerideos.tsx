import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const ColesterolLDLHDLTriglicerideos = () => {
  return (
    <>
      <Helmet>
        <title>Colesterol Alto: O Guia Completo para Entender LDL, HDL e Triglicerídeos | Labclin</title>
        <meta
          name="description"
          content="Descubra a diferença entre colesterol ruim (LDL), bom (HDL) e triglicerídeos. Saiba como interpretar seus exames e manter a saúde do coração."
        />
        <meta
          name="keywords"
          content="colesterol alto, LDL, HDL, triglicerídeos, exame de colesterol, saúde do coração, laboratório Rio Pomba"
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/colesterol-ldl-hdl-triglicerideos" />
        <meta property="og:title" content="Colesterol Alto: O Guia Completo LDL, HDL e Triglicerídeos" />
        <meta property="og:description" content="Descubra a diferença entre colesterol ruim, bom e triglicerídeos e saiba como interpretar seus exames." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Colesterol Alto: O Guia Completo para Entender LDL, HDL e Triglicerídeos",
            "description": "Descubra a diferença entre colesterol ruim (LDL), bom (HDL) e triglicerídeos.",
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
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    Saúde do Coração
                  </span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      12 Dez 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      6 min de leitura
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Colesterol Alto: O Guia Completo para Entender LDL, HDL e Triglicerídeos
                </h1>

                <p className="text-xl text-muted-foreground">
                  Descubra a diferença entre colesterol ruim, bom e triglicerídeos e saiba como interpretar seus exames de forma simples e clara.
                </p>
              </header>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="/images/blog/hemograma-enhanced.jpg"
                  alt="Exame de colesterol sendo realizado em laboratório"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>O que é Colesterol e por que é importante?</h2>
                <p>
                  O colesterol é uma substância gordurosa essencial para o funcionamento do corpo. Ele participa da formação de membranas celulares, produção de hormônios e vitamina D. No entanto, em excesso, pode se acumular nas artérias e causar problemas cardiovasculares graves.
                </p>

                <h2>LDL: O "Colesterol Ruim"</h2>
                <p>
                  O LDL (Low Density Lipoprotein) é conhecido como "colesterol ruim" porque, quando em excesso, deposita-se nas paredes das artérias formando placas de gordura. Isso pode levar à aterosclerose, aumentando o risco de infarto e AVC.
                </p>
                <p>
                  <strong>Valores de referência do LDL:</strong>
                </p>
                <ul>
                  <li>Ótimo: abaixo de 100 mg/dL</li>
                  <li>Desejável: 100 a 129 mg/dL</li>
                  <li>Limítrofe: 130 a 159 mg/dL</li>
                  <li>Alto: 160 a 189 mg/dL</li>
                  <li>Muito alto: acima de 190 mg/dL</li>
                </ul>

                <h2>HDL: O "Colesterol Bom"</h2>
                <p>
                  O HDL (High Density Lipoprotein) é chamado de "colesterol bom" porque remove o excesso de colesterol das artérias e o transporta de volta ao fígado para ser eliminado. Quanto maior o HDL, melhor para a saúde cardiovascular.
                </p>
                <p>
                  <strong>Valores de referência do HDL:</strong>
                </p>
                <ul>
                  <li>Desejável para homens: acima de 40 mg/dL</li>
                  <li>Desejável para mulheres: acima de 50 mg/dL</li>
                  <li>Ótimo: acima de 60 mg/dL</li>
                </ul>

                <h2>Triglicerídeos: A Reserva de Energia</h2>
                <p>
                  Os triglicerídeos são a principal forma de armazenamento de gordura no corpo. Níveis elevados estão associados a maior risco de doenças cardíacas, especialmente quando combinados com LDL alto e HDL baixo.
                </p>
                <p>
                  <strong>Valores de referência:</strong>
                </p>
                <ul>
                  <li>Normal: abaixo de 150 mg/dL</li>
                  <li>Limítrofe: 150 a 199 mg/dL</li>
                  <li>Alto: 200 a 499 mg/dL</li>
                  <li>Muito alto: acima de 500 mg/dL</li>
                </ul>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    💡 O Colesterol Alto é Silencioso!
                  </h3>
                  <p className="text-muted-foreground mb-0">
                    O colesterol alto não apresenta sintomas visíveis. A única forma de saber seus níveis é através de exames de sangue regulares. No Labclin, você pode realizar seu perfil lipídico completo com resultado em até 24 horas.
                  </p>
                </div>

                <h2>Como se Preparar para o Exame de Colesterol?</h2>
                <p>
                  Para garantir resultados precisos:
                </p>
                <ul>
                  <li>Jejum de 12 horas (água é permitida)</li>
                  <li>Evite bebidas alcoólicas nas 72 horas anteriores</li>
                  <li>Mantenha sua dieta habitual nos dias que antecedem o exame</li>
                  <li>Informe ao laboratório sobre medicamentos em uso</li>
                </ul>

                <h2>Quem Deve Fazer o Exame Regularmente?</h2>
                <ul>
                  <li>Adultos acima de 20 anos (a cada 5 anos)</li>
                  <li>Pessoas com histórico familiar de doenças cardíacas</li>
                  <li>Diabéticos e hipertensos (anualmente)</li>
                  <li>Fumantes e pessoas com sobrepeso</li>
                  <li>Pessoas em tratamento com estatinas</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Agende seu Exame de Colesterol Agora!
                    </h3>
                    <p className="text-muted-foreground">
                      Atendimento em Rio Pomba, Mercês, Guarani e Silveirânia
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <WhatsAppCTA
                      number="5532991990239"
                      message="Olá! Gostaria de agendar um exame de colesterol (perfil lipídico)."
                      text="Agendar no WhatsApp"
                      source="blog_colesterol"
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

export default ColesterolLDLHDLTriglicerideos;
