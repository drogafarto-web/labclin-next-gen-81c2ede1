import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";


const ColetaDomiciliarAgende = () => {
  return (
    <>
      <Helmet>
        <title>Coleta Domiciliar de Exames: Agende com Conforto e Segurança no Labclin</title>
        <meta
          name="description"
          content="Saiba como agendar a coleta domiciliar de exames com segurança e comodidade. Realize seus exames no conforto da sua casa com o Labclin."
        />
        <meta
          name="keywords"
          content="coleta domiciliar, agendamento de exames, exames em casa"
        />
        <link rel="canonical" href="https://labclin.com.br/blog/coleta-domiciliar-agende" />
        <meta property="og:title" content="Coleta Domiciliar de Exames: Agende com Conforto e Segurança" />
        <meta property="og:description" content="Realize seus exames no conforto da sua casa com o Labclin." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Coleta Domiciliar de Exames: Agende com Conforto e Segurança no Labclin",
            "description": "Saiba como agendar a coleta domiciliar de exames com segurança e comodidade.",
            "datePublished": "2025-01-24",
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
                    Serviços de Conveniência
                  </span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      24 Jan 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      4 min de leitura
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Coleta Domiciliar de Exames: Agende com Conforto e Segurança no Labclin
                </h1>

                <p className="text-xl text-muted-foreground">
                  A coleta domiciliar é a opção ideal para quem busca conforto e segurança. Agende agora mesmo a coleta de exames no Labclin, no horário e local de sua preferência.
                </p>
              </header>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="/images/blog/coleta-domiciliar-enhanced.jpg"
                  alt="Profissional realizando coleta domiciliar de exames"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Como Funciona a Coleta Domiciliar?</h2>
                <p>
                  O processo é simples e rápido. Nossa equipe vai até sua casa para realizar a coleta de exames com a mesma qualidade e segurança que oferecemos em nossas unidades. Todo o procedimento segue rigorosos protocolos de biossegurança.
                </p>
                <p>
                  Veja como é fácil:
                </p>
                <ol>
                  <li>Entre em contato conosco por WhatsApp ou telefone</li>
                  <li>Informe os exames solicitados pelo seu médico</li>
                  <li>Escolha o melhor horário e dia para você</li>
                  <li>Nossa equipe chega no horário agendado</li>
                  <li>Coleta realizada com conforto e segurança</li>
                  <li>Resultados disponíveis online em até 24 horas</li>
                </ol>

                <h2>Vantagens da Coleta Domiciliar</h2>
                <p>
                  Com a coleta domiciliar, você economiza tempo, evita deslocamentos e faz seus exames com mais conforto e privacidade. Este serviço é especialmente útil para:
                </p>
                <ul>
                  <li><strong>Idosos:</strong> Evita o deslocamento e possíveis quedas</li>
                  <li><strong>Pessoas com mobilidade reduzida:</strong> Maior conforto e acessibilidade</li>
                  <li><strong>Mães com bebês:</strong> Não precisa sair de casa com crianças pequenas</li>
                  <li><strong>Profissionais ocupados:</strong> Flexibilidade de horário sem comprometer a rotina</li>
                  <li><strong>Pacientes acamados:</strong> Atendimento especializado no conforto do lar</li>
                </ul>

                <h2>Segurança e Qualidade Garantidas</h2>
                <p>
                  No Labclin, todos os profissionais que realizam coleta domiciliar são devidamente capacitados e seguem rígidos protocolos de biossegurança:
                </p>
                <ul>
                  <li>Uso de EPIs (Equipamentos de Proteção Individual)</li>
                  <li>Material descartável e esterilizado</li>
                  <li>Transporte adequado das amostras</li>
                  <li>Mesma qualidade das coletas realizadas nas unidades</li>
                  <li>Profissionais experientes e certificados</li>
                </ul>

                <h2>Áreas Atendidas</h2>
                <p>
                  Oferecemos coleta domiciliar nas seguintes cidades:
                </p>
                <ul>
                  <li>Rio Pomba e região</li>
                  <li>Mercês</li>
                  <li>Guarani</li>
                  <li>Silveirânia</li>
                </ul>

                <div className="bg-gradient-subtle border border-border rounded-lg p-6 my-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    💡 Dica Importante
                  </h3>
                  <p className="text-muted-foreground mb-0">
                    Para coletas domiciliares, recomendamos agendar com pelo menos 24 horas de antecedência para garantir a disponibilidade no horário desejado. Entre em contato conosco para verificar valores e condições!
                  </p>
                </div>

                <h2>Como Agendar</h2>
                <p>
                  Agendar sua coleta domiciliar é muito simples:
                </p>
                <ul>
                  <li><strong>WhatsApp:</strong> Envie uma mensagem para (32) 99199-0239</li>
                  <li><strong>Telefone Rio Pomba:</strong> (32) 3571-1599</li>
                  <li><strong>Unidade Mercês:</strong> (32) 99967-1581</li>
                  <li><strong>Unidade Guarani:</strong> (32) 99942-2574</li>
                  <li><strong>Unidade Silveirânia:</strong> (32) 99959-2154</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Agende sua Coleta Domiciliar Agora
                    </h3>
                    <p className="text-muted-foreground">
                      Conforto, segurança e praticidade para você
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/coleta-domiciliar">
                      <Button className="bg-gradient-hero">
                        Solicitar Coleta
                      </Button>
                    </Link>
                    <a 
                      href="https://wa.me/5532991990239?text=Olá! Gostaria de agendar uma coleta domiciliar."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        WhatsApp
                      </Button>
                    </a>
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

export default ColetaDomiciliarAgende;
