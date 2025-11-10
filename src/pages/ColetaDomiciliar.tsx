import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Clock, Home, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { coletaDomiciliarSchema, type ColetaDomiciliarFormData } from "@/lib/validators";
import { formatWhatsApp } from "@/utils/formatters";
import { sanitizeInput } from "@/utils/sanitizers";
import { useFormRateLimiter } from "@/hooks/useRateLimiter";
import { CONTACTS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/config/constants";

const ColetaDomiciliar = () => {
  const { toast } = useToast();
  const { checkLimit } = useFormRateLimiter(3, 60000);

  const form = useForm<ColetaDomiciliarFormData>({
    resolver: zodResolver(coletaDomiciliarSchema),
    defaultValues: {
      nome: "",
      whatsapp: "",
      endereco: "",
      data: "",
      horario: "",
      observacoes: "",
    },
  });

  const onSubmit = (data: ColetaDomiciliarFormData) => {
    if (!checkLimit((msg) => toast({ title: "Limite excedido", description: msg, variant: "destructive" }))) {
      return;
    }

    const sanitizedData = {
      ...data,
      nome: sanitizeInput(data.nome),
      endereco: sanitizeInput(data.endereco),
      observacoes: data.observacoes ? sanitizeInput(data.observacoes) : "",
    };

    const message = `*Agendamento de Coleta Domiciliar*\n\n` +
      `Nome: ${sanitizedData.nome}\n` +
      `WhatsApp: ${sanitizedData.whatsapp}\n` +
      `Endereço: ${sanitizedData.endereco}\n` +
      `Data: ${sanitizedData.data}\n` +
      `Horário: ${sanitizedData.horario}\n` +
      `Observações: ${sanitizedData.observacoes || "Nenhuma"}`;

    const whatsappUrl = getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, message);
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Sucesso!",
      description: "Você será redirecionado para o WhatsApp para confirmar seu agendamento.",
    });

    form.reset();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🏠 Coleta Domiciliar
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Seus exames no conforto de casa, com segurança e praticidade
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Como funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Agende",
                description: "Preencha o formulário e escolha data e horário",
              },
              {
                step: "2",
                title: "Confirmação",
                description: "Nossa equipe confirmará seu agendamento via WhatsApp",
              },
              {
                step: "3",
                title: "Coleta",
                description: "Profissional vai até você no horário combinado",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-hero text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-medium">
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

      {/* Formulário de Agendamento */}
      <section id="agendamento" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card border border-border rounded-lg shadow-strong p-8">
            <h2 className="text-3xl font-bold text-center mb-2 text-foreground">
              Agende sua Coleta Domiciliar
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Preencha o formulário abaixo e nossa equipe entrará em contato
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo *</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp *</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(32) 99999-9999"
                          {...field}
                          onChange={(e) => {
                            const formatted = formatWhatsApp(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endereco"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço Completo *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Rua, número, complemento, bairro, cidade"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="data"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data Preferida *</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="horario"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Horário Preferido *</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="observacoes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Observações</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Exames solicitados, jejum necessário, etc."
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-hero hover:opacity-90"
                  size="lg"
                >
                  Agendar Coleta
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios
                </p>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Quais exames podem ser feitos em casa?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                A maioria dos exames de sangue, urina e fezes podem ser coletados em domicílio. 
                Entre em contato para confirmar a disponibilidade do seu exame específico.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Qual é o valor da coleta domiciliar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O valor varia conforme a região e quantidade de exames. Entre em contato via 
                WhatsApp para solicitar um orçamento personalizado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Preciso estar em jejum?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Depende do tipo de exame. Nossa equipe informará todas as orientações de preparo 
                no momento da confirmação do agendamento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Como recebo os resultados?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Os resultados ficam disponíveis em nosso portal online e também podem ser 
                enviados por WhatsApp ou retirados em uma de nossas unidades.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Qual a área de atendimento?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Atendemos toda a região metropolitana. Consulte via WhatsApp se seu endereço 
                está na área de cobertura.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contato Final */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-lg mb-8 opacity-95">
            Entre em contato conosco pelo WhatsApp ou telefone
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.INFORMACOES)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="shadow-medium">
                📱 WhatsApp: {CONTACTS.WHATSAPP_DISPLAY}
              </Button>
            </a>
            <a href={`mailto:${CONTACTS.EMAIL_MAIN}`}>
              <Button variant="secondary" size="lg" className="shadow-medium">
                📧 {CONTACTS.EMAIL_MAIN}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ColetaDomiciliar;
