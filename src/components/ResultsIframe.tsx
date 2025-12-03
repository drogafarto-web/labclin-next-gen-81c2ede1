import { FileText, Shield, Clock, Download, Phone, MessageCircle, KeyRound, Lock, MousePointerClick, CheckCircle2 } from "lucide-react";

const ResultsIframe = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background" aria-labelledby="results-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Visual Premium */}
          <div className="text-center mb-10">
            {/* Badge de Segurança */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Acesso Seguro e Protegido</span>
            </div>
            
            {/* Ícone Principal com Glow */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <FileText className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            
            <h2 id="results-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Resultados de Exames{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                Online
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Acesse seus laudos de forma rápida, segura e totalmente online — disponível 24 horas
            </p>
          </div>

          {/* Container Principal do Iframe - Premium */}
          <div className="relative">
            {/* Decoração de Fundo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative bg-card/95 backdrop-blur-sm border-2 border-primary/20 rounded-2xl shadow-xl overflow-hidden">
              {/* Header do Card */}
              <div className="bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5 border-b border-border/50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Portal de Resultados
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span className="text-xs">Conexão Criptografada</span>
                  </div>
                </div>
              </div>
              
              {/* Área do Iframe */}
              <div className="p-6 md:p-8">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Borda Decorativa */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-500 to-primary rounded-lg opacity-20" />
                    <div className="relative bg-background rounded-lg p-1">
                      <iframe
                        src="https://worklabweb.com.br/frame.php?Cliente=386&i=1"
                        name="I1"
                        width="450"
                        height="135"
                        title="Acesso aos Resultados de Exames Labclin - Digite sua chave e senha"
                        className="w-full max-w-[450px] border-0 min-h-[160px] rounded"
                        marginWidth={0}
                        marginHeight={0}
                        frameBorder="no"
                        scrolling="no"
                        aria-describedby="results-help"
                        sandbox="allow-forms allow-scripts allow-same-origin"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Steps de Instrução Visual */}
                <div id="results-help" className="space-y-4">
                  <div className="bg-gradient-to-r from-muted/50 to-transparent rounded-xl p-5 border border-border/50">
                    <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Como acessar seus resultados:
                    </h3>
                    <div className="grid gap-3">
                      {/* Step 1 */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                          <KeyRound className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-sm text-muted-foreground">
                            Digite sua <span className="font-semibold text-foreground">chave de acesso</span> fornecida no momento da coleta
                          </p>
                        </div>
                      </div>
                      
                      {/* Step 2 */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                          <Lock className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-sm text-muted-foreground">
                            Insira sua <span className="font-semibold text-foreground">senha</span> fornecida no momento da coleta
                          </p>
                        </div>
                      </div>
                      
                      {/* Step 3 */}
                      <div className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                          <MousePointerClick className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-sm text-muted-foreground">
                            Clique em <span className="font-semibold text-foreground">"Consultar"</span> para visualizar seus laudos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards de Recursos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {/* Card 24/7 */}
            <div className="group bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Disponível 24/7</h4>
                  <p className="text-sm text-muted-foreground">Acesse a qualquer momento</p>
                </div>
              </div>
            </div>
            
            {/* Card Segurança */}
            <div className="group bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Seguro & Privado</h4>
                  <p className="text-sm text-muted-foreground">Dados protegidos (LGPD)</p>
                </div>
              </div>
            </div>
            
            {/* Card Download */}
            <div className="group bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Download className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Fácil Download</h4>
                  <p className="text-sm text-muted-foreground">Baixe em PDF</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Contato Premium */}
          <div className="mt-8 bg-gradient-to-r from-primary/5 via-card to-cyan-500/5 border border-primary/20 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <p className="text-sm font-medium text-foreground">Precisa de ajuda?</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href="https://wa.me/5532991990239" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-700 dark:text-green-400 rounded-lg transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-medium">(32) 99199-0239</span>
                </a>
                <a 
                  href="tel:+553235711599" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">(32) 3571-1599</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsIframe;
