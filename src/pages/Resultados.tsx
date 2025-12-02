import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import ResultsIframe from "@/components/ResultsIframe";

const Resultados = () => {


  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Resultados de Exames Online"
        description="Acesse seus resultados de exames online de forma rápida, segura e conveniente. Disponível 24/7 com criptografia de ponta."
        keywords="resultados exames online, laboratorio resultados, acesso resultados labclin"
        canonicalUrl="https://www.labclinmg.com.br/resultados"
      />
      <Header />
      
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-muted/30 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Resultados de Exames{" "}
                <span className="text-transparent bg-clip-text bg-gradient-hero">
                  Online
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Acesse seus resultados de forma rápida, segura e conveniente, a qualquer hora e em qualquer lugar.
              </p>
            </div>
          </div>
        </section>

        {/* Iframe de Resultados */}
        <ResultsIframe />

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
