import { Home, Shield, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACTS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/config/constants";

const ColetaDomiciliar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Coleta Domiciliar de Exames"
        description="Serviço de coleta domiciliar de exames em Rio Pomba, Mercês, Guarani e Silveirânia. Exames no conforto de casa com segurança e praticidade. Agende pelo WhatsApp."
        keywords="coleta domiciliar, exames em casa, coleta residencial, laboratorio domicilio, coleta domiciliar rio pomba"
        canonicalUrl="https://www.labclinmg.com.br/coleta-domiciliar"
      />
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Coleta Domiciliar: Conforto e Praticidade no Seu Lar
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-95">
                  Seus exames no conforto de casa, com segurança e praticidade. Nossa equipe vai até você!
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollToSection("agendamento")}
                  className="shadow-strong hover:scale-105 transition-transform"
                >
                  Agendar Agora
                </Button>
              </div>
              <div className="relative h-64 md:h-96">
                <OptimizedImage
                  src="/images/coleta-domiciliar-carro.png"
                  alt="Carro da Labclin para coleta domiciliar em frente à unidade, oferecendo serviço de exames no conforto de casa"
                  className="w-full h-full rounded-lg shadow-strong"
                  imgClassName="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Por que escolher nossa Coleta Domiciliar?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Home,
                  title: "Conforto",
                  description: "Realize seus exames sem sair de casa",
                },
                {
                  icon: Shield,
                  title: "Segurança",
                  description: "Profissionais treinados e equipamentos certificados",
                },
                {
                  icon: Clock,
                  title: "Praticidade",
                  description: "Agendamento flexível no horário que preferir",
                },
                {
                  icon: CheckCircle,
                  title: "Qualidade",
                  description: "Mesma excelência do laboratório",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-medium transition-all"
                >
                  <div className="bg-gradient-hero rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Como Funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Agendamento",
                  description: "Entre em contato via WhatsApp e informe seus dados e exames desejados",
                },
                {
                  step: "2",
                  title: "Confirmação",
                  description: "Nossa equipe confirma data, horário e endereço para a coleta",
                },
                {
                  step: "3",
                  title: "Coleta",
                  description: "Profissional vai até você no horário combinado com todos os equipamentos",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-medium transition-all"
                >
                  <div className="bg-gradient-hero text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços de Comodidade */}
        <section className="py-16 bg-gradient-to-br from-accent via-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Labclin Comodidade
            </h2>
            <p className="text-lg md:text-xl mb-12 opacity-95 max-w-3xl mx-auto">
              Dois serviços inovadores pensados para facilitar sua rotina de saúde, seja em casa ou com transporte seguro até o laboratório.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Labclin em Casa */}
              <div className="bg-card text-foreground rounded-2xl shadow-strong p-8 hover:shadow-elegant transition-all hover:scale-[1.02]">
                <div className="text-6xl mb-4">🏡</div>
                <h3 className="text-2xl font-bold mb-3 text-accent">
                  Labclin em Casa
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Exames sem sair do seu lar, com todo o cuidado e conforto. Nossa equipe vai até você, 
                  ideal para idosos, gestantes ou quem valoriza comodidade.
                </p>
                <p className="text-accent text-xl font-bold mb-2">
                  Custo acessível: R$ 50
                </p>
                <p className="text-sm text-muted-foreground">
                  Disponível em Rio Pomba, Mercês, Guarani e Silveirânia.
                </p>
              </div>

              {/* Labclin Leva & Traz */}
              <div className="bg-card text-foreground rounded-2xl shadow-strong p-8 hover:shadow-elegant transition-all hover:scale-[1.02]">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  Labclin Leva & Traz
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Oferecemos transporte do paciente: buscamos, levamos ao laboratório, aguardamos a coleta 
                  e levamos em casa – tudo com segurança e atenção.
                </p>
                <p className="text-primary text-xl font-bold mb-2">
                  Custo acessível: R$ 30
                </p>
                <p className="text-sm text-muted-foreground">
                  Apoio ideal para pacientes com mobilidade reduzida.
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.COLETA_DOMICILIAR)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="shadow-strong hover:scale-105 transition-transform text-lg px-10"
              >
                Agende Agora pelo WhatsApp
              </Button>
            </a>
          </div>
        </section>

        {/* Seção de Agendamento */}
        <section id="agendamento" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-card border border-border rounded-lg shadow-strong p-8">
              <h2 className="text-3xl font-bold text-center mb-2 text-foreground">
                Agende sua Coleta Domiciliar
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Fale diretamente com nossa equipe pelo WhatsApp
              </p>
              
              {/* WhatsApp Direto */}
              <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg border-2 border-green-500">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    ⚡ Agendamento Rápido via WhatsApp
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Fale diretamente com nossa equipe - mais rápido e sem formulários!
                  </p>
                  <a
                    href={getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.COLETA_DOMICILIAR)}
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
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Quais exames podem ser feitos em casa?
                </AccordionTrigger>
                <AccordionContent>
                  A maioria dos exames laboratoriais pode ser realizada em domicílio, incluindo exames de sangue, urina, fezes e alguns exames específicos. Entre em contato para confirmar a disponibilidade do seu exame.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Qual é o horário de atendimento?
                </AccordionTrigger>
                <AccordionContent>
                  Nosso serviço de coleta domiciliar funciona de segunda a sábado, com horários flexíveis. Entre em contato para agendar no horário mais conveniente para você.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Preciso de preparo especial?
                </AccordionTrigger>
                <AccordionContent>
                  O preparo depende dos exames solicitados. Nossa equipe fornecerá todas as orientações necessárias no momento do agendamento, incluindo jejum e cuidados específicos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Como funciona o pagamento?
                </AccordionTrigger>
                <AccordionContent>
                  Aceitamos dinheiro, cartão de crédito/débito e PIX. O pagamento pode ser realizado no momento da coleta com o profissional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Atende convênios?
                </AccordionTrigger>
                <AccordionContent>
                  Sim, atendemos diversos convênios. Consulte-nos sobre seu plano específico e a cobertura para coleta domiciliar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Quanto tempo leva para receber os resultados?
                </AccordionTrigger>
                <AccordionContent>
                  O prazo varia de acordo com o tipo de exame, mas geralmente os resultados ficam disponíveis online em 24 a 48 horas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para cuidar da sua saúde com comodidade?
            </h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Nossa equipe está pronta para atendê-lo no conforto de sua casa. Entre em contato agora!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.COLETA_DOMICILIAR)}
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
      <WhatsAppChatWidget />
    </div>
  );
};

export default ColetaDomiciliar;
