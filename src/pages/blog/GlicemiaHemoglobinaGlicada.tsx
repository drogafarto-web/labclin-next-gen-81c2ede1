import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const GlicemiaHemoglobinaGlicada = () => {
  return (
    <>
      <Helmet>
        <title>Glicemia de Jejum vs. Hemoglobina Glicada: Qual a Diferença? | Labclin</title>
        <meta
          name="description"
          content="Qual exame é mais confiável para diabetes? Entenda a diferença entre a 'foto' do momento (glicemia) e o 'filme' dos últimos meses (HbA1c)."
        />
        <meta
          name="keywords"
          content="glicemia de jejum, hemoglobina glicada, HbA1c, diabetes, exame de glicose, laboratório Rio Pomba"
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/glicemia-jejum-hemoglobina-glicada-diferenca" />
        <meta property="og:title" content="Glicemia de Jejum vs. Hemoglobina Glicada: Qual a Diferença?" />
        <meta property="og:description" content="Entenda a diferença entre a 'foto' do momento e o 'filme' dos últimos meses no controle do diabetes." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Glicemia de Jejum vs. Hemoglobina Glicada: Qual a Diferença?",
            "description": "Entenda a diferença entre glicemia de jejum e hemoglobina glicada no controle do diabetes.",
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
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center gap-1">
                    <Droplet className="h-3 w-3" />
                    Diabetes
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
                  Glicemia de Jejum vs. Hemoglobina Glicada: Qual a Diferença?
                </h1>

                <p className="text-xl text-muted-foreground">
                  Qual exame é mais confiável? Entenda a diferença entre a "foto" do momento e o "filme" dos últimos meses no controle do diabetes.
                </p>
              </header>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="/images/blog/coleta-domiciliar-enhanced.jpg"
                  alt="Exame de glicemia e hemoglobina glicada"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Foto vs Filme: A Analogia Perfeita</h2>
                <p>
                  Imagine que você quer saber como está seu controle de açúcar no sangue. A <strong>Glicemia de Jejum</strong> é como tirar uma foto: mostra exatamente como está naquele momento. Já a <strong>Hemoglobina Glicada (HbA1c)</strong> é como assistir um filme: mostra a média dos últimos 2 a 3 meses.
                </p>

                <h2>O que é Glicemia de Jejum?</h2>
                <p>
                  A glicemia de jejum mede a quantidade de açúcar (glicose) no sangue após um período sem comer. É o exame mais comum para rastreio de diabetes.
                </p>
                <p>
                  <strong>Valores de referência:</strong>
                </p>
                <ul>
                  <li><strong>Normal:</strong> abaixo de 100 mg/dL</li>
                  <li><strong>Pré-diabetes:</strong> 100 a 125 mg/dL</li>
                  <li><strong>Diabetes:</strong> igual ou acima de 126 mg/dL (em duas ocasiões)</li>
                </ul>
                <p>
                  <strong>Limitação:</strong> pode variar conforme estresse, alimentação do dia anterior, exercícios ou até uma noite mal dormida.
                </p>

                <h2>O que é Hemoglobina Glicada (HbA1c)?</h2>
                <p>
                  A hemoglobina glicada mede a porcentagem de hemoglobina (proteína do sangue) que está "grudada" com glicose. Como as hemácias vivem cerca de 90-120 dias, esse exame reflete a média da glicemia nos últimos 2-3 meses.
                </p>
                <p>
                  <strong>Valores de referência:</strong>
                </p>
                <ul>
                  <li><strong>Normal:</strong> abaixo de 5,7%</li>
                  <li><strong>Pré-diabetes:</strong> 5,7% a 6,4%</li>
                  <li><strong>Diabetes:</strong> igual ou acima de 6,5%</li>
                </ul>
                <p>
                  <strong>Para diabéticos em tratamento:</strong> a meta geralmente é manter abaixo de 7%, mas pode variar conforme orientação médica.
                </p>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    💡 A HbA1c é o Padrão Ouro para Acompanhamento
                  </h3>
                  <p className="text-muted-foreground mb-0">
                    Para quem já tem diabetes, a hemoglobina glicada é o exame mais importante para avaliar se o tratamento está funcionando. Diferente da glicemia de jejum, ela não é afetada pelo que você comeu ontem ou pelo estresse do momento.
                  </p>
                </div>

                <h2>Comparativo: Glicemia vs HbA1c</h2>
                <table className="min-w-full border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Característica</th>
                      <th className="border border-border p-3 text-left">Glicemia de Jejum</th>
                      <th className="border border-border p-3 text-left">Hemoglobina Glicada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Período avaliado</td>
                      <td className="border border-border p-3">Momento da coleta</td>
                      <td className="border border-border p-3">Últimos 2-3 meses</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Jejum necessário</td>
                      <td className="border border-border p-3">Sim (8-12h)</td>
                      <td className="border border-border p-3">Não obrigatório</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Variação diária</td>
                      <td className="border border-border p-3">Alta</td>
                      <td className="border border-border p-3">Baixa</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Uso principal</td>
                      <td className="border border-border p-3">Rastreio inicial</td>
                      <td className="border border-border p-3">Acompanhamento</td>
                    </tr>
                  </tbody>
                </table>

                <h2>Qual Exame Devo Fazer?</h2>
                <p>
                  Na prática, os médicos costumam solicitar ambos os exames:
                </p>
                <ul>
                  <li><strong>Glicemia de Jejum:</strong> para rastreio inicial e check-ups anuais</li>
                  <li><strong>Hemoglobina Glicada:</strong> para diagnóstico definitivo e acompanhamento de diabéticos (a cada 3-6 meses)</li>
                </ul>

                <h2>Preparo para os Exames</h2>
                <p><strong>Glicemia de Jejum:</strong></p>
                <ul>
                  <li>Jejum de 8 a 12 horas</li>
                  <li>Água é permitida</li>
                  <li>Evitar exercícios intensos na véspera</li>
                </ul>
                <p><strong>Hemoglobina Glicada:</strong></p>
                <ul>
                  <li>Não requer jejum</li>
                  <li>Pode ser coletada a qualquer hora do dia</li>
                  <li>Medicamentos não interferem</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Agende seus Exames de Diabetes!
                    </h3>
                    <p className="text-muted-foreground">
                      Atendimento em Rio Pomba, Mercês, Guarani e Silveirânia
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <WhatsAppCTA
                      number="5532991990239"
                      message="Olá! Gostaria de agendar exame de glicemia e hemoglobina glicada."
                      text="Agendar no WhatsApp"
                      source="blog_diabetes"
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

export default GlicemiaHemoglobinaGlicada;
