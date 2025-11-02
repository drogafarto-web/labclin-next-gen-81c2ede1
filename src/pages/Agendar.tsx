import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Agendar = () => {
  const { toast } = useToast();
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, aceite a política de privacidade para continuar.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Agendamento solicitado!",
      description: "Entraremos em contato em breve para confirmar seu horário.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Agende Seu Exame
              </h1>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo *</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Digite seu nome"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="seu@email.com"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="unit">Unidade *</Label>
                          <Select name="unit" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione a unidade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="rio-pomba">Rio Pomba</SelectItem>
                              <SelectItem value="merces">Mercês</SelectItem>
                              <SelectItem value="guarani">Guarani</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="exam">Exame</Label>
                          <Select name="exam">
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o exame" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hemograma">Hemograma Completo</SelectItem>
                              <SelectItem value="glicemia">Glicemia de Jejum</SelectItem>
                              <SelectItem value="colesterol">Colesterol Total e Frações</SelectItem>
                              <SelectItem value="tsh">TSH e T4 Livre</SelectItem>
                              <SelectItem value="outros">Outros</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="date">Data Preferencial</Label>
                          <Input id="date" name="date" type="date" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="time">Horário Preferencial</Label>
                          <Input id="time" name="time" type="time" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Observações</Label>
                        <Textarea
                          id="notes"
                          name="notes"
                          placeholder="Alguma informação adicional?"
                          rows={4}
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          checked={consent}
                          onCheckedChange={(checked) => setConsent(checked as boolean)}
                        />
                        <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                          Concordo com a{" "}
                          <a
                            href="/politica-de-privacidade"
                            className="text-primary hover:underline"
                            target="_blank"
                          >
                            Política de Privacidade
                          </a>{" "}
                          e autorizo o uso dos meus dados para agendamento
                        </Label>
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        Solicitar Agendamento
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      Horários de Atendimento
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Segunda a Sexta: 6h às 18h</p>
                      <p>Sábado: 6h às 12h</p>
                      <p className="text-foreground font-medium pt-2">
                        Domingo e feriados: Fechado
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-primary" />
                      Contato
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p className="text-muted-foreground">
                        WhatsApp:{" "}
                        <a href="tel:+5532991990239" className="text-primary hover:underline">
                          (32) 99199-0239
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        Telefone Fixo:{" "}
                        <a href="tel:+553235711599" className="text-primary hover:underline">
                          (32) 3571-1599
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        E-mail:{" "}
                        <a
                          href="mailto:contato@labclinmg.com.br"
                          className="text-primary hover:underline"
                        >
                          contato@labclinmg.com.br
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-hero text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Precisa de coleta em casa?</h3>
                    <p className="text-sm mb-4 opacity-90">
                      Oferecemos serviço de coleta domiciliar para sua comodidade
                    </p>
                    <a href="/coleta-domiciliar">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                      >
                        Solicitar Coleta
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
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
