import { useState, useRef } from "react";
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

const formSchema = z.object({
  chave: z.string()
    .trim()
    .min(1, { message: "Chave é obrigatória" }),
  senha: z.string()
    .trim()
    .min(1, { message: "Senha é obrigatória" }),
  tipo: z.enum(["PACIENTE", "MEDICO", "CONVENIO", "UNIDADE"], {
    required_error: "Selecione o tipo de acesso",
  }),
});

const DirectLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

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
      // Criar formulário oculto para POST
      const hiddenForm = document.createElement('form');
      hiddenForm.method = 'POST';
      hiddenForm.action = 'https://portal.worklabweb.com.br/resultados-on-line/000';
      hiddenForm.target = '_blank';
      
      // Adicionar campos
      const fields = {
        chave: values.chave,
        senha: values.senha,
        tipo: values.tipo,
      };
      
      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        hiddenForm.appendChild(input);
      });
      
      // Adicionar ao DOM, submeter e remover
      document.body.appendChild(hiddenForm);
      hiddenForm.submit();
      document.body.removeChild(hiddenForm);
      
      toast({
        title: "Acessando resultados",
        description: "Abrindo portal em nova janela...",
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
              Acessar Resultados
            </h2>
            <p className="text-lg text-muted-foreground">
              Digite seus dados de acesso para consultar seus exames
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl shadow-medium p-6 md:p-8">
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="chave"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Chave de Acesso</FormLabel>
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
                          className="grid grid-cols-2 md:grid-cols-4 gap-4"
                          disabled={isLoading}
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="PACIENTE" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Paciente
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="MEDICO" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Médico
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="CONVENIO" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Convênio
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="UNIDADE" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Unidade
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Acessando..." : "Acessar Resultados"}
                </Button>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="font-semibold text-foreground">Precisa de ajuda?</span>{" "}
                    Entre em contato através do WhatsApp (32) 99199-0239 ou ligue para (32) 3571-1599
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectLoginForm;
