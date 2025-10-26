import { CreditCard } from "lucide-react";

const ConveniosSection = () => {
  const convenios = [
    "Particular",
    "PAX Rio Pomba",
    "Sindicato Rural"
  ];

  const paymentMethods = [
    { name: "Visa", width: "w-24" },
    { name: "Mastercard", width: "w-16" },
    { name: "Elo", width: "w-20" },
    { name: "American Express", width: "w-14" },
    { name: "Hipercard", width: "w-20" },
    { name: "PIX", width: "w-24" }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Convênios Atendidos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Convênios Atendidos
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Atendemos Particular, PAX Rio Pomba e Sindicato Rural.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {convenios.map((convenio, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg px-8 py-6 hover:shadow-medium transition-all min-w-[180px]"
              >
                <p className="font-semibold text-foreground text-center">{convenio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formas de Pagamento */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4">
            <CreditCard className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Pague seus exames com mais comodidade!
          </h2>
          <p className="text-muted-foreground mb-8">
            Aceitamos diversas formas de pagamento para sua conveniência
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 items-center max-w-3xl mx-auto">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-lg p-4 hover:shadow-medium transition-all ${method.width} h-16 flex items-center justify-center`}
              >
                <span className="text-xs font-medium text-muted-foreground text-center">
                  {method.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConveniosSection;
