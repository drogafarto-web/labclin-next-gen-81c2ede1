import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Shield, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const LabclinPrecisaoQualidade = () => {
  return (
    <>
      <Helmet>
        <title>Por Dentro do Labclin: Precisão e Qualidade que Você Pode Confiar | Labclin</title>
        <meta
          name="description"
          content="Conheça os bastidores do Labclin: certificações, controle de qualidade, equipamentos de ponta e a equipe que garante a segurança do seu laudo."
        />
        <meta
          name="keywords"
          content="Labclin, qualidade laboratorial, PNCQ, controle de qualidade, laboratório certificado, Rio Pomba"
        />
        <link rel="canonical" href="https://www.labclinmg.com.br/blog/labclin-precisao-qualidade" />
        <meta property="og:title" content="Por Dentro do Labclin: Precisão e Qualidade" />
        <meta property="og:description" content="Conheça os bastidores do Labclin e como garantimos a segurança do seu laudo." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Por Dentro do Labclin: Precisão e Qualidade que Você Pode Confiar",
            "description": "Conheça os bastidores do Labclin: certificações, controle de qualidade e a equipe que garante a segurança do seu laudo.",
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
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    Institucional
                  </span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      12 Dez 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      4 min de leitura
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Por Dentro do Labclin: Precisão e Qualidade que Você Pode Confiar
                </h1>

                <p className="text-xl text-muted-foreground">
                  Conheça os bastidores do nosso laboratório e descubra como nossas certificações, equipamentos e equipe garantem a segurança do seu laudo.
                </p>
              </header>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="/images/faq/recepcao-laboratorio-rio-pomba.jpg"
                  alt="Recepção do Labclin em Rio Pomba"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Nossa Missão: Resultados Confiáveis para sua Saúde</h2>
                <p>
                  No Labclin, entendemos que um exame laboratorial não é apenas um número em um papel. Por trás de cada resultado está uma decisão médica importante que pode mudar a vida de um paciente. Por isso, investimos continuamente em qualidade, tecnologia e capacitação.
                </p>

                <h2>Controle de Qualidade Rigoroso</h2>
                <p>
                  Nosso laboratório possui um sistema de controle de qualidade em duas frentes:
                </p>
                
                <h3>Controle Interno</h3>
                <ul>
                  <li>Calibração diária de todos os equipamentos</li>
                  <li>Uso de amostras-controle certificadas</li>
                  <li>Monitoramento estatístico contínuo dos resultados</li>
                  <li>Procedimentos operacionais padronizados (POPs)</li>
                </ul>

                <h3>Controle Externo (PNCQ)</h3>
                <p>
                  Participamos do <strong>Programa Nacional de Controle de Qualidade (PNCQ)</strong>, o mais respeitado programa de proficiência laboratorial do Brasil. Mensalmente, analisamos amostras-cegas enviadas pelo programa e nossos resultados são comparados com laboratórios de referência de todo o país.
                </p>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground mb-0">
                      Certificação PNCQ
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-0">
                    O Labclin é certificado pelo PNCQ, atestando que nossos resultados estão dentro dos padrões de excelência exigidos nacionalmente. Essa certificação é renovada anualmente mediante desempenho satisfatório em todos os ensaios.
                  </p>
                </div>

                <h2>Tecnologia de Ponta</h2>
                <p>
                  Investimos em equipamentos modernos e automatizados que garantem:
                </p>
                <ul>
                  <li><strong>Maior precisão:</strong> menor interferência humana nos processos analíticos</li>
                  <li><strong>Rapidez:</strong> resultados em menor tempo de espera</li>
                  <li><strong>Rastreabilidade:</strong> cada amostra é codificada e rastreável em todas as etapas</li>
                  <li><strong>Menor volume de amostra:</strong> especialmente importante para coletas pediátricas</li>
                </ul>

                <h2>Rastreabilidade Total</h2>
                <p>
                  Desde o momento da coleta até a liberação do resultado, cada etapa é registrada:
                </p>
                <ul>
                  <li>Identificação única por código de barras</li>
                  <li>Registro de temperatura de armazenamento</li>
                  <li>Horário de cada processamento</li>
                  <li>Identificação do profissional responsável</li>
                  <li>Liberação técnica por biomédico ou farmacêutico</li>
                </ul>

                <h2>Equipe Qualificada</h2>
                <p>
                  Nossa equipe é formada por profissionais capacitados e em constante atualização:
                </p>
                <ul>
                  <li>Biomédicos e farmacêuticos bioquímicos</li>
                  <li>Técnicos de laboratório certificados</li>
                  <li>Recepcionistas treinadas em atendimento humanizado</li>
                  <li>Treinamentos periódicos em boas práticas laboratoriais</li>
                </ul>

                <h2>Humanização no Atendimento</h2>
                <p>
                  Tecnologia sem humanização não é suficiente. No Labclin, você encontra:
                </p>
                <ul>
                  <li>Atendimento acolhedor e sem pressa</li>
                  <li>Espaço Kids para coleta infantil tranquila</li>
                  <li>Técnica "Mãozinha Leve" para crianças</li>
                  <li>Coleta domiciliar para quem não pode se deslocar</li>
                  <li>Resultados online para sua comodidade</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">+15 anos</h4>
                    <p className="text-sm text-muted-foreground">de experiência</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">4 unidades</h4>
                    <p className="text-sm text-muted-foreground">na região</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">PNCQ</h4>
                    <p className="text-sm text-muted-foreground">certificado</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Agende seu Exame no Labclin!
                    </h3>
                    <p className="text-muted-foreground">
                      Rio Pomba, Mercês, Guarani e Silveirânia
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <WhatsAppCTA
                      number="5532991990239"
                      message="Olá! Gostaria de agendar meus exames no Labclin."
                      text="Agendar no WhatsApp"
                      source="blog_institucional"
                    />
                    <Link to="/unidades">
                      <Button variant="outline">
                        Nossas Unidades
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

export default LabclinPrecisaoQualidade;
