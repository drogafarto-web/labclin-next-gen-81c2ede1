import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";

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
      mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+Floripes+Maria+de+Jesus,+05,+loja+02,+Centro,+Rio+Pomba+-+MG",
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
      mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Praça+Dr.+Castelões,+40,+Centro,+Mercês+-+MG",
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
      mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+José+Ladeira+Pinto,+70,+Bairro+Sossego,+Guarani+-+MG",
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
      mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rua+Padre+Cerqueira,+20,+Centro,+Silveirânia+-+MG",
    },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Início", url: "https://www.labclinmg.com.br" },
    { name: "Unidades", url: "https://www.labclinmg.com.br/unidades" }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema(),
      breadcrumbSchema
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Nossas Unidades em MG - Encontre o Labclin Mais Próximo"
        description="Labclin presente em 4 cidades de Minas Gerais: Rio Pomba, Mercês, Guarani e Silveirânia. Exames de rotina, coleta domiciliar e resultados online disponíveis."
        keywords="labclin unidades, laboratório rio pomba mg, laboratório mercês mg, laboratório guarani mg, laboratório silveirânia mg, análises clínicas minas gerais, exames laboratoriais zona da mata"
        canonicalUrl="https://www.labclinmg.com.br/unidades"
        structuredData={combinedSchema}
      />
      <Header />

      <main id="main-content" className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <OptimizedImage 
              src="/images/gallery/fachada-labclin.png"
              alt="Fachada do Labclin"
              className="w-full h-full object-cover"
              aria-hidden={true}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Encontre a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">
                  Unidade Labclin
                </span>{" "}
                Mais Próxima
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Presentes em <strong className="text-foreground">4 cidades da Zona da Mata de Minas Gerais</strong>: Rio Pomba, Mercês, Guarani e Silveirânia
              </p>
            </div>
          </div>
        </section>

        {/* Units */}
        <section className="py-16" aria-labelledby="units-heading">
          <div className="container mx-auto px-4">
            <h2 id="units-heading" className="sr-only">Lista de unidades do Labclin</h2>
            <div className="space-y-12">
              {units.map((unit, index) => (
                <article key={index} className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow" aria-labelledby={`unit-${index}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Map Placeholder - Replaces heavy iframe */}
                    <div className="h-80 lg:h-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-muted order-2 lg:order-1 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                          <MapPin className="h-10 w-10 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-2">Labclin {unit.name}</h4>
                        <p className="text-muted-foreground mb-4 text-sm">{unit.address}</p>
                        <a
                          href={unit.mapsDirectionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center"
                        >
                          <Button variant="outline" size="sm">
                            <Navigation className="mr-2 h-4 w-4" />
                            Ver no Google Maps
                          </Button>
                        </a>
                      </div>
                    </div>

                    {/* Info */}
                    <CardContent className="p-6 md:p-8 order-1 lg:order-2">
                      <h3 id={`unit-${index}`} className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                        Labclin - {unit.name}
                      </h3>

                      <div className="space-y-5 mb-8">
                        <address className="not-italic">
                          <div className="flex items-start space-x-3">
                            <MapPin className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <div>
                              <p className="text-base md:text-lg text-foreground font-medium">{unit.address}</p>
                              <p className="text-sm text-muted-foreground mt-1">CEP: {unit.cep}</p>
                            </div>
                          </div>
                        </address>

                        <div className="flex items-center space-x-3">
                          <Phone className="h-6 w-6 text-primary flex-shrink-0" aria-hidden="true" />
                          <div>
                            <p className="text-sm text-muted-foreground">Telefone:</p>
                            <a
                              href={`tel:${unit.phone.replace(/\D/g, "")}`}
                              className="text-base md:text-lg text-foreground hover:text-primary transition-colors font-medium"
                              aria-label={`Ligar para ${unit.phone}`}
                            >
                              {unit.phone}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Clock className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <div>
                            <p className="text-sm text-muted-foreground mb-2">Horário de Funcionamento:</p>
                            <div className="space-y-1">
                              <p className="text-base text-foreground font-medium">{unit.hours.weekdays}</p>
                              <p className="text-base text-foreground font-medium">{unit.hours.saturday}</p>
                              <p className="text-base text-muted-foreground">{unit.hours.sunday}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Serviços Disponíveis:</h4>
                        <ul className="flex flex-wrap gap-2" role="list">
                          {unit.services.map((service, idx) => (
                            <li key={idx}>
                              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm md:text-base font-medium rounded-full border border-primary/20">
                                {service}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={unit.mapsDirectionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          aria-label={`Ver rotas no Google Maps para ${unit.name}`}
                        >
                          <Button variant="outline" size="lg" className="w-full min-h-[48px]">
                            <Navigation className="mr-2 h-5 w-5" aria-hidden="true" />
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
                          aria-label={`Falar no WhatsApp com a unidade ${unit.name}`}
                        >
                          <Button variant="default" size="lg" className="w-full min-h-[48px]">
                            Fale Conosco via WhatsApp
                          </Button>
                        </a>
                      </div>

                      {/* Link to individual pages */}
                      {(unit.name === "Mercês" || unit.name === "Silveirânia" || unit.name === "Guarani") && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <Link
                            to={
                              unit.name === "Mercês" 
                                ? "/unidades/merces" 
                                : unit.name === "Silveirânia"
                                  ? "/unidades/silveirania"
                                  : "/unidades/guarani"
                            }
                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                            Ver página completa da unidade
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </article>
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
      <WhatsAppChatWidget />
    </div>
  );
};

export default Unidades;