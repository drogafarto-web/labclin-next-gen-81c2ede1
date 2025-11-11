import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import fachada from "@/assets/gallery/fachada-labclin.png";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/structuredData";

const Unidades = () => {
  const units = [
    {
      name: "Rio Pomba",
      address: "Rua Floripes Maria de Jesus, 05, loja 02 - Centro, Rio Pomba - MG",
      cep: "36180-000",
      phone: "(32) 3571-1599",
      whatsapp: "5532991990239",
      hours: {
        weekdays: "Segunda a Sexta: 6:30 às 17:30",
        saturday: "Sábado: 7:00 às 11:00",
        sunday: "Domingo e feriados: Fechado",
      },
      services: ["Exames de Rotina", "Exames Especializados", "Coleta Domiciliar", "Atendimento Infantil", "Resultados Online"],
      mapUrl: "https://www.google.com/maps?q=Rua+Floripes+Maria+de+Jesus,+05,+loja+02,+Centro,+Rio+Pomba+-+MG&output=embed",
    },
    {
      name: "Mercês",
      address: "Praça Dr. Castelões, 40 - Centro, Mercês - MG",
      cep: "36190-000",
      phone: "(32) 99967-1581",
      whatsapp: "5532999671581",
      hours: {
        weekdays: "Segunda a Sexta: 6:45 às 11:45",
        saturday: "Fechado",
        sunday: "Domingo e feriados: Fechado",
      },
      services: ["Exames de Rotina", "Coleta Domiciliar", "Resultados Online"],
      mapUrl: "https://www.google.com/maps?q=Praça+Dr.+Castelões,+40,+Centro,+Mercês+-+MG&output=embed",
    },
    {
      name: "Guarani",
      address: "Rua José Ladeira Pinto, 70 - Bairro Sossego, Guarani - MG",
      cep: "36160-000",
      phone: "(32) 99942-2574",
      whatsapp: "5532999422574",
      hours: {
        weekdays: "Segunda a Sexta: 6:45 às 15:30",
        saturday: "Fechado",
        sunday: "Domingo e feriados: Fechado",
      },
      services: ["Exames de Rotina", "Coleta Domiciliar", "Resultados Online"],
      mapUrl: "https://www.google.com/maps?q=Rua+José+Ladeira+Pinto,+70,+Bairro+Sossego,+Guarani+-+MG&output=embed",
    },
    {
      name: "Silveirânia",
      address: "Rua Padre Cerqueira, 20 - Centro, Silveirânia - MG",
      cep: "36185-000",
      phone: "(32) 99959-2154",
      whatsapp: "5532999592154",
      hours: {
        weekdays: "Segunda a Sexta: 7:00 às 11:00",
        saturday: "Fechado",
        sunday: "Domingo e feriados: Fechado",
      },
      services: ["Exames de Rotina", "Coleta Domiciliar", "Resultados Online"],
      mapUrl: "https://www.google.com/maps?q=Rua+Padre+Cerqueira,+20,+Centro,+Silveirânia+-+MG&output=embed",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Nossas Unidades"
        description="Labclin com 4 unidades em Rio Pomba, Mercês, Guarani e Silveirânia - MG. Exames de rotina, coleta domiciliar e resultados online."
        keywords="labclin unidades, laboratorio rio pomba, laboratorio merces, laboratorio guarani, laboratorio silverania"
        canonicalUrl="https://labclin.com.br/unidades"
        structuredData={generateLocalBusinessSchema()}
      />
      <Header />

      <main id="main-content" className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src={fachada}
              alt="Labclin Background" 
              className="w-full h-full object-cover"
              loading="lazy"
              width="1920"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nossas{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">
                  Unidades
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Estamos presentes em 4 cidades para melhor atendê-lo: Rio Pomba, Mercês, Guarani e Silveirânia
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
              Escolha a unidade mais próxima e agende agora pelo WhatsApp
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
