import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Helmet } from "react-helmet";

const Contato = () => {
  const units = [
    {
      name: "Rio Pomba",
      address: "Rua Floripes Maria de Jesus, 05, loja 02 - Centro",
      city: "Rio Pomba - MG",
      cep: "36180-000",
      phone: "(32) 3571-1599",
      whatsapp: "5532991990239",
      whatsappDisplay: "(32) 99199-0239",
      hours: {
        weekdays: "Segunda a Sexta: 6:30 às 17:30",
        saturday: "Sábado: 7:00 às 11:00",
        sunday: "Domingo e feriados: Fechado",
      },
    },
    {
      name: "Mercês",
      address: "Praça Dr. Castelões, 40 - Centro",
      city: "Mercês - MG",
      cep: "36190-000",
      phone: "(32) 99967-1581",
      whatsapp: "5532999671581",
      whatsappDisplay: "(32) 99967-1581",
      hours: {
        weekdays: "Segunda a Sexta: 6:45 às 11:45",
        saturday: "Fechado",
        sunday: "Domingo e feriados: Fechado",
      },
    },
    {
      name: "Guarani",
      address: "Rua José Ladeira Pinto, 70 - Bairro Sossego",
      city: "Guarani - MG",
      cep: "36160-000",
      phone: "(32) 99942-2574",
      whatsapp: "5532999422574",
      whatsappDisplay: "(32) 99942-2574",
      hours: {
        weekdays: "Segunda a Sexta: 6:45 às 15:30",
        saturday: "Fechado",
        sunday: "Domingo e feriados: Fechado",
      },
    },
    {
      name: "Silveirânia",
      address: "Rua Padre Cerqueira, 20 - Centro",
      city: "Silveirânia - MG",
      cep: "36185-000",
      phone: "(32) 99959-2154",
      whatsapp: "5532999592154",
      whatsappDisplay: "(32) 99959-2154",
      hours: {
        weekdays: "Segunda a Sexta: 7:00 às 11:00",
        saturday: "Fechado",
        sunday: "Domingo e feriados: Fechado",
      },
    },
  ];

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
                      href="https://wa.me/5532991990239?text=Olá! Gostaria de mais informações."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="default" className="w-full">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        (32) 99199-0239
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
                    <a href="mailto:contato@labclinmg.com.br">
                      <Button variant="outline" className="w-full">
                        <Mail className="mr-2 h-4 w-4" />
                        contato@labclinmg.com.br
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
              {units.map((unit, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {unit.name}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-foreground">{unit.address}</p>
                          <p className="text-foreground">{unit.city}</p>
                          <p className="text-sm text-muted-foreground">CEP: {unit.cep}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <a
                          href={`tel:${unit.phone.replace(/\D/g, "")}`}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {unit.phone}
                        </a>
                      </div>

                      <div className="flex items-center space-x-3">
                        <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <a
                          href={`https://wa.me/${unit.whatsapp}?text=${encodeURIComponent(
                            `Olá! Gostaria de informações sobre a unidade ${unit.name}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {unit.whatsappDisplay}
                        </a>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <p className="text-foreground">{unit.hours.weekdays}</p>
                          <p className="text-foreground">{unit.hours.saturday}</p>
                          <p className="text-muted-foreground">{unit.hours.sunday}</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${unit.whatsapp}?text=${encodeURIComponent(
                        `Olá! Gostaria de agendar um exame na unidade ${unit.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="default" className="w-full">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Fale Conosco
                      </Button>
                    </a>
                  </CardContent>
                </Card>
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
                href="https://wa.me/5532991990239?text=Olá! Gostaria de agendar um exame."
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
