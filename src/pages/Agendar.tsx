import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { CONTACTS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/config/constants";

const Agendar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Agendar Exame"
        description="Agende seus exames laboratoriais no Labclin de forma rápida e fácil. Atendimento em Rio Pomba, Mercês, Guarani e Silveirânia - MG."
        keywords="agendar exame, laboratório, análises clínicas, agendamento online"
        canonicalUrl="https://labclin.com.br/agendar"
      />
      <Header />

      <main id="main-content" className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Agende Seu Exame
              </h1>
              <p className="text-lg text-muted-foreground">
                Entre em contato pelo WhatsApp para agendamento rápido e sem complicações
              </p>
            </div>
          </div>
        </section>

        {/* Agendamento WhatsApp */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* WhatsApp CTA Principal */}
              <div className="mb-12">
                <div className="bg-card border border-border rounded-lg shadow-strong p-8">
                  <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
                    Agende sua Coleta Domiciliar
                  </h2>
                  <p className="text-center text-muted-foreground mb-8">
                    Escolha a forma mais prática para agendar:
                  </p>
                  
                  <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg border-2 border-green-500">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        ⚡ Agendamento Rápido via WhatsApp
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Fale diretamente com nossa equipe - mais rápido e sem formulários!
                      </p>
                      <a
                        href={getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.AGENDAMENTO)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          size="lg"
                          className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:scale-105 transition-transform text-lg"
                        >
                          <span className="mr-2">💬</span>
                          Agendar pelo WhatsApp Agora
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações de Contato */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-medium transition-all">
                  <div className="bg-gradient-hero rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Telefone
                  </h3>
                  <p className="text-muted-foreground">
                    {CONTACTS.WHATSAPP_DISPLAY}
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-medium transition-all">
                  <div className="bg-gradient-hero rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Horário
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Seg a Sex: 6h às 18h<br />
                    Sábado: 6h às 12h
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-medium transition-all">
                  <div className="bg-gradient-hero rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Unidades
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Rio Pomba, Mercês,<br />
                    Guarani e Silveirânia
                  </p>
                </div>
              </div>

              {/* Como Funciona */}
              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
                  Como Funciona o Agendamento
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Entre em Contato",
                      description: "Clique no botão acima e fale direto com nossa equipe via WhatsApp",
                    },
                    {
                      step: "2",
                      title: "Informe os Dados",
                      description: "Diga qual exame deseja fazer, unidade preferida e horário",
                    },
                    {
                      step: "3",
                      title: "Confirmação",
                      description: "Receba a confirmação e compareça no dia e horário agendados",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="text-center"
                    >
                      <div className="bg-gradient-hero text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para agendar?
            </h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Nossa equipe está pronta para atendê-lo. Entre em contato agora!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.AGENDAMENTO)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="shadow-strong hover:scale-105 transition-transform"
                >
                  Agendar pelo WhatsApp
                </Button>
              </a>
              <a href={`tel:${CONTACTS.PHONE_RIO_POMBA}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Ligar Agora
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Agendar;
