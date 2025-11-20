import { FileText } from "lucide-react";

const ResultsIframe = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="results-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4" aria-hidden="true">
              <FileText className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 id="results-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resultados de Exames e Análises Clínicas Online
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Acesse seus laudos de forma rápida, segura e totalmente online
            </p>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex justify-center mb-6">
              <iframe
                src="https://worklabweb.com.br/frame.php?Cliente=386&i=1"
                name="I1"
                width="450"
                height="135"
                title="Acesso aos Resultados de Exames Labclin - Digite sua chave e senha"
                className="w-full max-w-[450px] border-0 min-h-[160px]"
                marginWidth={0}
                marginHeight={0}
                frameBorder="no"
                scrolling="no"
                aria-describedby="results-help"
              />
            </div>
            
            <div id="results-help" className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Como acessar seus resultados:
                </h3>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Digite sua <strong className="text-foreground">chave de acesso</strong> (fornecida no momento da coleta)</li>
                  <li>Insira sua <strong className="text-foreground">senha</strong> (geralmente sua data de nascimento)</li>
                  <li>Clique em "Consultar" para visualizar seus laudos</li>
                </ol>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="font-semibold text-foreground">Precisa de ajuda?</span><br />
                  WhatsApp: <a href="https://wa.me/5532991990239" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">(32) 99199-0239</a> ou 
                  Telefone: <a href="tel:+553235711599" className="text-primary hover:underline font-medium">(32) 3571-1599</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsIframe;
