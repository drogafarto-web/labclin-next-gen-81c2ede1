import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Lock, Download, Clock, Shield } from "lucide-react";

const Resultados = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirecionar para portal externo de resultados
    window.open("https://portal-resultados.labclinmg.com.br", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  <Lock className="mr-2 h-4 w-4" />
                  Acesso Seguro
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Resultados de Exames{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">
                  Online
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Acesse seus resultados de forma rápida, segura e conveniente, a qualquer hora e em qualquer lugar.
              </p>
            </div>

            {/* Access Form */}
            <div className="max-w-md mx-auto bg-card border border-border rounded-lg p-8 shadow-medium">
              <div className="text-center mb-6">
                <div className="bg-gradient-hero rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Portal de Resultados
                </h2>
                <p className="text-muted-foreground">
                  Entre com seus dados para acessar
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="senha">Senha</Label>
                  <Input
                    id="senha"
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Acessar Resultados
                </Button>
              </form>

              <div className="mt-6 text-center">
                <a
                  href="https://wa.me/553236422323?text=Preciso%20de%20ajuda%20para%20acessar%20meus%20resultados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Esqueceu sua senha? Fale conosco
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Benefícios do Acesso Online
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tenha controle total sobre seus exames com praticidade e segurança
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-hero rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Disponível 24/7
                </h3>
                <p className="text-muted-foreground">
                  Acesse seus resultados a qualquer hora, de qualquer lugar
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-hero rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  100% Seguro
                </h3>
                <p className="text-muted-foreground">
                  Seus dados protegidos com criptografia de ponta
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-hero rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Download className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Fácil Download
                </h3>
                <p className="text-muted-foreground">
                  Baixe e imprima seus resultados em PDF
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Como Acessar Seus Resultados
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-card border border-border rounded-lg p-6">
                  <div className="bg-gradient-hero rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Receba suas Credenciais
                    </h3>
                    <p className="text-muted-foreground">
                      Após realizar seu exame, você receberá por SMS ou WhatsApp suas credenciais de acesso (CPF e senha).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-card border border-border rounded-lg p-6">
                  <div className="bg-gradient-hero rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Acesse o Portal
                    </h3>
                    <p className="text-muted-foreground">
                      Entre no portal de resultados usando seu CPF e a senha fornecida.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-card border border-border rounded-lg p-6">
                  <div className="bg-gradient-hero rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Visualize e Baixe
                    </h3>
                    <p className="text-muted-foreground">
                      Visualize seus resultados online e faça o download em PDF para guardar ou compartilhar com seu médico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                <p className="text-foreground font-medium mb-2">
                  Precisa de ajuda?
                </p>
                <p className="text-muted-foreground mb-4">
                  Nossa equipe está disponível para auxiliá-lo
                </p>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://wa.me/553236422323?text=Preciso%20de%20ajuda%20com%20meus%20resultados"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com Suporte
                  </a>
                </Button>
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

export default Resultados;
