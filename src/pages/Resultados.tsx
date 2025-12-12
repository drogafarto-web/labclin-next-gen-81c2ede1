import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ResultsIframe from "@/components/ResultsIframe";
import { Shield, FileCheck, Download, User, Stethoscope, Building, Building2 } from "lucide-react";

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
        {/* Hero Section Premium */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-cyan-500/5 py-16 md:py-24">
          {/* Elementos Decorativos */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge Portal */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm mb-8">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Portal do Paciente</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Resultados de Exames{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-primary bg-[length:200%_auto] animate-gradient">
                    Online
                  </span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Acesse seus resultados de forma rápida, segura e conveniente, a qualquer hora e em qualquer lugar.
              </p>
              
              {/* Indicadores de Confiança */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Sistema Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Dados Protegidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-primary" />
                  <span>Laudos Verificados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Iframe de Resultados */}
        <ResultsIframe />

        {/* Seção Como Acessar - Redesenhada */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Como Acessar Seus Resultados
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Siga os passos abaixo para visualizar e baixar seus laudos de exames
                </p>
              </div>

              {/* Steps Visuais */}
              <div className="relative">
                {/* Linha de Conexão - Desktop */}
                <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-200px)] h-1 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-green-500/20 rounded-full" />
                
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  {/* Step 1 */}
                  <div className="relative group">
                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                      {/* Número */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                          <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-primary-foreground">1</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Ícone */}
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <FileCheck className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-foreground text-center mb-2">
                        Receba suas Credenciais
                      </h3>
                      <p className="text-sm text-muted-foreground text-center">
                        Após realizar seu exame, você receberá suas credenciais de acesso (chave e senha).
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative group">
                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-cyan-500/30 hover:shadow-xl transition-all duration-300 h-full">
                      {/* Número */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                          <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white">2</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Ícones de Tipo de Acesso */}
                      <div className="flex justify-center gap-2 mb-4">
                        <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center" title="Paciente">
                          <User className="h-5 w-5 text-cyan-600" />
                        </div>
                        <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center" title="Médico">
                          <Stethoscope className="h-5 w-5 text-cyan-600" />
                        </div>
                        <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center" title="Convênio">
                          <Building className="h-5 w-5 text-cyan-600" />
                        </div>
                        <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center" title="Unidade">
                          <Building2 className="h-5 w-5 text-cyan-600" />
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-foreground text-center mb-2">
                        Selecione o Tipo de Acesso
                      </h3>
                      <p className="text-sm text-muted-foreground text-center">
                        Escolha entre Paciente, Médico, Convênio ou Unidade conforme suas credenciais.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative group">
                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-green-500/30 hover:shadow-xl transition-all duration-300 h-full">
                      {/* Número */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                          <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white">3</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Ícone */}
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                          <Download className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-foreground text-center mb-2">
                        Visualize e Baixe
                      </h3>
                      <p className="text-sm text-muted-foreground text-center">
                        Visualize seus resultados online e faça o download em PDF.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resultados;
