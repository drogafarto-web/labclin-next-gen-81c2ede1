import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import SEO from "@/components/SEO";
import UnitCard from "@/components/cards/UnitCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { UNITS, CONTACTS, WHATSAPP_MESSAGES } from "@/config/constants";
import { generateLocalBusinessSchema } from "@/lib/structuredData";

const Contato = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Contato"
        description="Entre em contato com o Labclin. Telefones e WhatsApp de todas as nossas unidades em Rio Pomba, Mercês, Guarani e Silveirânia."
        keywords="contato labclin, telefone labclin, whatsapp labclin, laboratorio rio pomba contato"
        canonicalUrl="https://www.labclinmg.com.br/contato"
        structuredData={generateLocalBusinessSchema()}
      />
      <Header />

      <main id="main-content" className="flex-grow">
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
                    <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#25D366]" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground mb-4">
                      Atendimento rápido e personalizado
                    </p>
                    <WhatsAppCTA
                      number={CONTACTS.WHATSAPP_MAIN}
                      message={WHATSAPP_MESSAGES.INFORMACOES}
                      text={CONTACTS.WHATSAPP_DISPLAY}
                      source="contato_card"
                      className="w-full"
                    />
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
              <WhatsAppCTA
                number={CONTACTS.WHATSAPP_MAIN}
                message={WHATSAPP_MESSAGES.AGENDAR_EXAME}
                text="Agendar pelo WhatsApp"
                source="contato_cta"
                animated
              />
              <a href="/agendar">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary min-h-[52px]"
                >
                  Agendar Online
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppChatWidget />
    </div>
  );
};

export default Contato;
