import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Clock, Shield, Download } from "lucide-react";

const Resultados = () => {


  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Resultados de Exames Online"
        description="Acesse seus resultados de exames online de forma rápida, segura e conveniente. Disponível 24/7 com criptografia de ponta."
        keywords="resultados exames online, laboratorio resultados, acesso resultados labclin"
        canonicalUrl="https://labclin.com.br/resultados"
      />
      <Header />
      
      <main id="main-content" className="flex-grow">
        {/* Hero Section with Iframe */}
        <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Resultados de Exames{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">
                  Online
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Acesse seus resultados de forma rápida, segura e conveniente, a qualquer hora e em qualquer lugar.
              </p>
            </div>

            {/* Worklab Iframe Card */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-2xl shadow-strong overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-hero px-6 py-4">
                  <h2 className="text-xl font-semibold text-primary-foreground text-center">
                    Portal de Acesso aos Resultados
                  </h2>
                </div>
                
                {/* Iframe Container */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4">
                    <iframe
                      src="https://worklabweb.com.br/frame.php?Cliente=000&i=1"
                      name="I1"
                      width="650"
                      height="200"
                      title="Portal de Resultados Labclin"
                      className="w-full max-w-[650px] border-0"
                      scrolling="auto"
                    />
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      <span className="font-semibold text-foreground">Precisa de ajuda?</span> Entre em contato através do WhatsApp (32) 99199-0239 ou ligue para (32) 3571-1599
                    </p>
                  </div>
                </div>
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

        {/* Help Section */}
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
                      Após realizar seu exame, você receberá suas credenciais de acesso (chave e senha).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-card border border-border rounded-lg p-6">
                  <div className="bg-gradient-hero rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Selecione o Tipo de Acesso
                    </h3>
                    <p className="text-muted-foreground">
                      Escolha entre Paciente, Médico, Convênio ou Unidade conforme suas credenciais.
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
                      Visualize seus resultados online e faça o download em PDF.
                    </p>
                  </div>
                </div>
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
