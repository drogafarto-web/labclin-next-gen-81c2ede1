import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import UnitCard from "@/components/cards/UnitCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { Helmet } from "react-helmet";
import { UNITS, CONTACTS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/config/constants";

const Contato = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Contato - Labclin | Entre em Contato com Nossas Unidades</title>
        <meta
          name="description"
          content="Entre em contato com o Labclin. Telefones e WhatsApp de todas as nossas unidades em Rio Pomba, Mercês, Guarani e Silveirânia."
        />
        <meta
          name="keywords"
          content="contato labclin, telefone labclin, whatsapp labclin, laboratorio rio pomba contato"
        />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Entre em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">
                  Contato
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Estamos prontos para atendê-lo em nossas 4 unidades
              </p>
            </div>
          </div>
        </section>

        {/* Informações de Contato Geral */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-4">
                      Atendimento rápido e personalizado
                    </p>
                    <a
                      href={getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.INFORMACOES)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="default" className="w-full">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {CONTACTS.WHATSAPP_DISPLAY}
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">E-mail</h3>
                    <p className="text-muted-foreground mb-4">
                      Envie sua mensagem ou dúvida
                    </p>
                    <a href={`mailto:${CONTACTS.EMAIL_CONTACT}`}>
                      <Button variant="outline" className="w-full">
                        <Mail className="mr-2 h-4 w-4" />
                        {CONTACTS.EMAIL_CONTACT}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Unidades */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Nossas Unidades
              </h2>
              <p className="text-lg text-muted-foreground">
                Escolha a unidade mais próxima de você
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {UNITS.map((unit, index) => (
                <UnitCard key={index} {...unit} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para agendar seu exame?
            </h2>
            <p className="text-lg mb-8 opacity-95">
              Entre em contato agora mesmo e agende agora pelo WhatsApp seu atendimento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.AGENDAR_EXAME)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
              <a href="/agendar">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Agendar Online
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

export default Contato;
