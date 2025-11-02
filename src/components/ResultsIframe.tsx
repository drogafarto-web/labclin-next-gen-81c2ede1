import { FileText } from "lucide-react";

const ResultsIframe = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4">
              <FileText className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Consulta de Laudos
            </h2>
            <p className="text-lg text-muted-foreground">
              Consulte seus resultados de exames aqui de forma rápida e segura
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl shadow-medium p-6 md:p-8">
            <div className="flex justify-center">
              <iframe
                src="https://worklabweb.com.br/frame.php?Cliente=000&i=1"
                name="I1"
                width="650"
                height="200"
                title="Consulta de Laudos Labclin"
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
    </section>
  );
};

export default ResultsIframe;
