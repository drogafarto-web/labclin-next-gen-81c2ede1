import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import { checkupFormSchema, type CheckupFormData } from "@/lib/validators";
import { formatWhatsApp } from "@/utils/formatters";
import { sanitizeInput } from "@/utils/sanitizers";
import { useFormRateLimiter } from "@/hooks/useRateLimiter";
import { CONTACTS, getWhatsAppUrl } from "@/config/constants";

const CheckupForm = () => {
  const [step, setStep] = useState<"initial" | "details" | "results">("initial");
  const [recommendations, setRecommendations] = useState<any>(null);
  const { checkLimit } = useFormRateLimiter(3, 60000);

  const form = useForm<CheckupFormData>({
    resolver: zodResolver(checkupFormSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      age: undefined,
      sexo: undefined,
      condicoes: [],
    },
  });

  const handleGenerateCheckup = () => {
    const { name, whatsapp, age } = form.getValues();
    
    if (!name || !whatsapp || !age) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const result = checkupFormSchema.pick({ name: true, whatsapp: true, age: true }).safeParse({
      name: sanitizeInput(name),
      whatsapp,
      age,
    });

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      const firstError = Object.values(errors)[0]?.[0];
      toast.error(firstError || "Erro na validação dos dados.");
      return;
    }

    setStep("details");
  };

  const handleGenerateRecommendations = () => {
    const { sexo } = form.getValues();
    
    if (!sexo) {
      toast.error("Por favor, selecione o sexo.");
      return;
    }

    const formData = form.getValues();
    
    // Gerar recomendações baseadas nos dados
    const recs = {
      economico: ["Hemograma Completo", "Glicose em Jejum", "Colesterol Total", "Creatinina", "Urina Tipo 1", "TSH"],
      normal: ["Hemograma Completo", "Glicose em Jejum", "Colesterol Total e Frações", "Triglicerídeos", "Creatinina e Ureia", "Ácido Úrico", "Urina Tipo 1", "TGO/TGP", "TSH", "Fezes"],
      avancado: [
        "Todos os exames do Perfil Normal",
        "Vitamina D",
        "Ferritina",
        "Cálcio",
        "Gama GT",
        "Eletroforese",
        formData.sexo === "Masculino" && formData.age.includes("50+") ? "PSA" : "",
        formData.sexo === "Feminino" && formData.age.includes("40+") ? "Mamografia" : "",
        "Ultrassom Abdominal",
        "Marcadores Tumorais"
      ].filter(Boolean),
    };

    setRecommendations(recs);
    setStep("results");
  };

  const onSubmit = (data: CheckupFormData) => {
    if (!checkLimit((msg) => toast.error(msg))) {
      return;
    }

    const sanitizedData = {
      ...data,
      name: sanitizeInput(data.name),
    };

    const condicoesText = sanitizedData.condicoes?.length 
      ? sanitizedData.condicoes.join(", ") 
      : "Nenhuma";

    const mensagem = `Olá Labclin! 👋\n\nGostaria de receber uma proposta de checkup personalizado:\n\n👤 Nome: ${sanitizedData.name}\n📱 WhatsApp: ${sanitizedData.whatsapp}\n🎂 Faixa Etária: ${sanitizedData.age}\n⚧️ Sexo: ${sanitizedData.sexo || "Não informado"}\n🏥 Condições: ${condicoesText}\n\nTenho interesse nos perfis sugeridos e aguardo orçamento com desconto especial! 🎁`;

    const urlWhatsApp = getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, mensagem);
    
    console.log('WhatsApp URL do Checkup:', urlWhatsApp);

    toast.success("Redirecionando para o WhatsApp do Labclin...");
    window.open(urlWhatsApp, "_blank");

    setTimeout(() => {
      handleReset();
    }, 2000);
  };

  const handleReset = () => {
    setStep("initial");
    form.reset();
    setRecommendations(null);
  };

  return (
    <div className="bg-background rounded-2xl shadow-lg max-w-2xl mx-auto p-8 md:p-12 border border-border">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Check-up Personalizado com IA</h2>
        <p className="text-muted-foreground">Descubra os exames ideais para seu perfil</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* ETAPA 1: Campos Iniciais */}
          {step === "initial" && (
            <div className="space-y-6 animate-fade-in">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu nome"
                        {...field}
                        className="border-2 focus:border-foreground"
                      />
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
                    <FormLabel>WhatsApp (com DDD)</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="(32) 99999-9999"
                        {...field}
                        onChange={(e) => {
                          const formatted = formatWhatsApp(e.target.value);
                          field.onChange(formatted);
                        }}
                        className="border-2 focus:border-foreground"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Faixa Etária</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-2 focus:border-foreground">
                          <SelectValue placeholder="Selecione sua faixa etária" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="18-25">18 a 25 anos</SelectItem>
                        <SelectItem value="26-35">26 a 35 anos</SelectItem>
                        <SelectItem value="36-45">36 a 45 anos</SelectItem>
                        <SelectItem value="46-55">46 a 55 anos</SelectItem>
                        <SelectItem value="56-65">56 a 65 anos</SelectItem>
                        <SelectItem value="65+">Acima de 65 anos</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                onClick={handleGenerateCheckup}
                className="w-full h-12 text-base font-bold bg-foreground text-background hover:bg-foreground/90 gap-2 mt-8"
                type="button"
              >
                <Sparkles className="h-5 w-5" />
                Gerar Check-up
              </Button>
            </div>
          )}

          {/* ETAPA 2: Detalhes Adicionais */}
          {step === "details" && (
            <div className="space-y-6 animate-fade-in">
              <FormField
                control={form.control}
                name="sexo"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Sexo</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2 flex-1 p-4 rounded-lg border-2 border-border has-[:checked]:border-foreground has-[:checked]:bg-muted transition-all">
                          <RadioGroupItem value="Masculino" id="male" />
                          <FormLabel htmlFor="male" className="cursor-pointer font-medium flex-1">
                            Masculino
                          </FormLabel>
                        </div>
                        <div className="flex items-center space-x-2 flex-1 p-4 rounded-lg border-2 border-border has-[:checked]:border-foreground has-[:checked]:bg-muted transition-all">
                          <RadioGroupItem value="Feminino" id="female" />
                          <FormLabel htmlFor="female" className="cursor-pointer font-medium flex-1">
                            Feminino
                          </FormLabel>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="condicoes"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Condições de Saúde (opcional)</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { id: "diabetes", label: "Diabetes" },
                        { id: "hipertensao", label: "Hipertensão" },
                        { id: "colesterol", label: "Colesterol Alto" },
                        { id: "obesidade", label: "Obesidade" },
                        { id: "historico", label: "Histórico Familiar" },
                        { id: "nenhuma", label: "Nenhuma" },
                      ].map((condicao) => (
                        <FormField
                          key={condicao.id}
                          control={form.control}
                          name="condicoes"
                          render={({ field }) => (
                            <FormItem
                              key={condicao.id}
                              className="flex items-center space-x-3 p-3 rounded-lg border-2 border-border has-[:checked]:border-foreground has-[:checked]:bg-muted transition-all cursor-pointer"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(condicao.label)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, condicao.label])
                                      : field.onChange(
                                          field.value?.filter((value) => value !== condicao.label)
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="cursor-pointer font-medium flex-1 text-sm">
                                {condicao.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex gap-3 mt-8">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex-1 h-12 font-semibold border-2"
                  type="button"
                >
                  Voltar
                </Button>
                <Button
                  onClick={handleGenerateRecommendations}
                  className="flex-1 h-12 text-base font-bold bg-foreground text-background hover:bg-foreground/90 gap-2"
                  type="button"
                >
                  <Sparkles className="h-5 w-5" />
                  Gerar Recomendações
                </Button>
              </div>
            </div>
          )}

          {/* ETAPA 3: Resultados e Resumo */}
          {step === "results" && recommendations && (
            <div className="space-y-6 animate-fade-in">
              {/* Resumo das Informações */}
              <div className="bg-muted/50 rounded-xl p-6 border-2 border-border">
                <h3 className="font-bold text-lg mb-4">Seu Perfil</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Nome:</span> {form.getValues("name")}</p>
                  <p><span className="font-semibold">WhatsApp:</span> {form.getValues("whatsapp")}</p>
                  <p><span className="font-semibold">Faixa Etária:</span> {form.getValues("age")} anos</p>
                  <p><span className="font-semibold">Sexo:</span> {form.getValues("sexo")}</p>
                  {form.getValues("condicoes")?.length > 0 && (
                    <p><span className="font-semibold">Condições:</span> {form.getValues("condicoes")?.join(", ")}</p>
                  )}
                </div>
              </div>

              {/* Recomendações de Checkup */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-center">Perfis de Check-up Recomendados</h3>

                <div className="bg-gradient-to-br from-muted/30 to-background border-2 border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center font-bold text-foreground">E</div>
                    <h4 className="font-bold text-base">Perfil Econômico</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Ideal para prevenção básica</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    {recommendations.economico.map((exam: string, i: number) => (
                      <li key={i}>{exam}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-muted/30 to-background border-2 border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center font-bold text-foreground">N</div>
                    <h4 className="font-bold text-base">Perfil Normal</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Triagem metabólica completa</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    {recommendations.normal.map((exam: string, i: number) => (
                      <li key={i}>{exam}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-muted/30 to-background border-2 border-border rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center font-bold text-foreground">A</div>
                    <h4 className="font-bold text-base">Perfil Avançado</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Acompanhamento detalhado completo</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    {recommendations.avancado.map((exam: string, i: number) => (
                      <li key={i}>{exam}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex-1 h-12 font-semibold border-2"
                  type="button"
                >
                  Refazer
                </Button>
                <Button
                  type="submit"
                  className="flex-1 h-12 text-base font-bold bg-[#D4AF37] text-black hover:bg-[#B8961F] gap-2"
                >
                  Enviar ao Labclin + Desconto
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default CheckupForm;
