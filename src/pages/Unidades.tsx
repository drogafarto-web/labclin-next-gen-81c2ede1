import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const Unidades = () => {
  const units = [
    {
      name: "Rio Pomba",
      address: "Rua Dr. José Luiz de Mesquita, 270 - Centro, Rio Pomba - MG",
      cep: "36180-000",
      phone: "(32) 3571-8959",
      whatsapp: "5532988547380",
      hours: {
        weekdays: "Segunda a Sexta: 7h às 17h",
        saturday: "Sábado: 7h às 11h",
        sunday: "Domingo e feriados: Fechado",
      },
      services: ["Exames de Rotina", "Exames Especializados", "Coleta Domiciliar", "Atendimento Infantil", "Resultados Online"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.8!2d-43.1811!3d-21.2725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE2JzIxLjAiUyA0M8KwMTAnNTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr",
    },
    {
      name: "Mercês",
      address: "Praça São Sebastião, s/n - Centro, Mercês - MG",
      cep: "36496-000",
      phone: "(32) 3571-8959",
      whatsapp: "5532988547380",
      hours: {
        weekdays: "Segunda a Sexta: 7h às 16h",
        saturday: "Sábado: 7h às 11h",
        sunday: "Domingo e feriados: Fechado",
      },
      services: ["Exames de Rotina", "Coleta Domiciliar", "Resultados Online"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.8!2d-43.2!3d-21.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE2JzQ4LjAiUyA0M8KwMTInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr",
    },
    {
      name: "Silverânia",
      address: "Rua Principal - Centro, Silverânia - MG",
      cep: "36497-000",
      phone: "(32) 3571-8959",
      whatsapp: "5532988547380",
      hours: {
        weekdays: "Segunda a Sexta: 7h às 16h",
        saturday: "Sábado: 7h às 11h",
        sunday: "Domingo e feriados: Fechado",
      },
      services: ["Exames de Rotina", "Coleta Domiciliar", "Resultados Online"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.8!2d-43.15!3d-21.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzM2LjAiUyA0M8KwMDknMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr",
    },
    {
      name: "Guarani",
      address: "Rua Principal - Centro, Guarani - MG",
      cep: "36160-000",
      phone: "(32) 3571-8959",
      whatsapp: "5532988547380",
      hours: {
        weekdays: "Segunda a Sexta: 7h às 16h",
        saturday: "Sábado: 7h às 11h",
        sunday: "Domingo e feriados: Fechado",
      },
      services: ["Exames de Rotina", "Coleta Domiciliar", "Resultados Online"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.8!2d-43.05!3d-21.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDIxJzAwLjAiUyA0M8KwMDMnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Nossas Unidades
              </h1>
              <p className="text-lg text-muted-foreground">
                Estamos presentes em 4 cidades para melhor atendê-lo: Rio Pomba, Mercês, Silverânia e Guarani
              </p>
            </div>
          </div>
        </section>

        {/* Units */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {units.map((unit, index) => (
                <Card key={index} className="overflow-hidden border-border">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Map */}
                    <div className="h-64 lg:h-auto bg-muted">
                      <iframe
                        src={unit.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Mapa ${unit.name}`}
                      />
                    </div>

                    {/* Info */}
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold text-foreground mb-4">{unit.name}</h2>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-foreground">{unit.address}</p>
                            <p className="text-sm text-muted-foreground">CEP: {unit.cep}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                          <a
                            href={`tel:${unit.phone.replace(/\D/g, "")}`}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {unit.phone}
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

                      <div className="mb-6">
                        <h3 className="font-semibold text-foreground mb-2">Serviços disponíveis:</h3>
                        <div className="flex flex-wrap gap-2">
                          {unit.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                            unit.address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" className="w-full">
                            <Navigation className="mr-2 h-4 w-4" />
                            Como Chegar
                          </Button>
                        </a>
                        <a
                          href={`https://wa.me/${unit.whatsapp}?text=${encodeURIComponent(
                            `Olá! Gostaria de informações sobre a unidade ${unit.name}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="default" className="w-full">
                            Fale Conosco
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pronto para agendar seu exame?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Escolha a unidade mais próxima e agende agora mesmo
            </p>
            <a href="/agendar">
              <Button variant="hero" size="lg">
                Agendar Agora
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Unidades;
