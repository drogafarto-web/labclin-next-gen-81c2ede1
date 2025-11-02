import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

// Schema de validação com zod para segurança
const formSchema = z.object({
  chave: z.string()
    .trim()
    .min(1, { message: "Chave é obrigatória" })
    .max(50, { message: "Chave deve ter no máximo 50 caracteres" }),
  senha: z.string()
    .trim()
    .min(1, { message: "Senha é obrigatória" })
    .max(50, { message: "Senha deve ter no máximo 50 caracteres" }),
  tipo: z.enum(["PACIENTE", "MEDICO", "CONVENIO", "UNIDADE"], {
    required_error: "Selecione o tipo de acesso",
  }),
});

const ExamResultsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      chave: "",
      senha: "",
      tipo: "PACIENTE",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      // Encoding seguro dos parâmetros para URL
      const params = new URLSearchParams({
        Cliente: "000",
        chave: encodeURIComponent(values.chave),
        senha: encodeURIComponent(values.senha),
        tipo: values.tipo,
      });

      // Redirecionamento para o sistema de resultados
      const url = `https://worklabweb.com.br/frame.php?${params.toString()}`;
      window.open(url, "_blank");
      
      toast({
        title: "Redirecionando...",
        description: "Abrindo seus resultados em uma nova janela.",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível acessar os resultados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4">
              <FileText className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resultados de Exames
            </h2>
            <p className="text-lg text-muted-foreground">
              Consulte seus resultados de forma rápida e segura
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl shadow-medium p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="chave"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Chave</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Digite sua chave"
                            {...field}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="senha"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Digite sua senha"
                            {...field}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="tipo"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Tipo de Acesso</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-4"
                          disabled={isLoading}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="PACIENTE" id="paciente" />
                            <label htmlFor="paciente" className="text-sm font-medium cursor-pointer">
                              Paciente
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="MEDICO" id="medico" />
                            <label htmlFor="medico" className="text-sm font-medium cursor-pointer">
                              Médico
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="CONVENIO" id="convenio" />
                            <label htmlFor="convenio" className="text-sm font-medium cursor-pointer">
                              Convênio
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="UNIDADE" id="unidade" />
                            <label htmlFor="unidade" className="text-sm font-medium cursor-pointer">
                              Unidade
                            </label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Acessando..." : "Acessar Resultados"}
                </Button>
              </form>
            </Form>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground text-center">
                <span className="font-semibold text-foreground">Precisa de ajuda?</span> Entre em contato através do WhatsApp (32) 99199-0239 ou ligue para (32) 3571-1599
              </p>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Disponível 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Acesse seus resultados a qualquer hora, de qualquer lugar
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Seguro e Confiável</h3>
              <p className="text-sm text-muted-foreground">
                Seus dados são protegidos com tecnologia de ponta
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Fácil Download</h3>
              <p className="text-sm text-muted-foreground">
                Baixe e imprima seus laudos com facilidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamResultsForm;
