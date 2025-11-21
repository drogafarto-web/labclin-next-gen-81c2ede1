import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import OptimizedImage from "@/components/OptimizedImage";
import heroProfessionals from "@/assets/hero-professionals.jpg";
import pncqLogo from "@/assets/pncq-logo.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded text-sm font-bold bg-secondary/20 text-secondary border-2 border-secondary/40 uppercase tracking-wide">
                ✓ Laboratório Certificado
              </span>
            </div>
            
            <h1 className="font-black text-foreground leading-tight">
              Check-ups Personalizados{" "}
              <span className="text-primary">
                para sua Saúde
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-xl font-medium">
              Escolha o check-up ideal para monitorar sua saúde e agende agora pelo WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                to="/agendar" 
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:w-auto uppercase font-bold text-base shadow-strong")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agende seu Exame
              </Link>
              <Link 
                to="/resultados" 
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto font-semibold border-2")}
              >
                Visualizar Resultados
              </Link>
            </div>

            {/* Trust indicators - Enhanced */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-border/40">
              <div className="group relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent mb-2 animate-pulse-slow">
                    58+
                  </div>
                  <div className="text-xs md:text-sm font-bold text-foreground/70 uppercase tracking-wider leading-tight">
                    Anos de Experiência
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-secondary to-secondary/70 bg-clip-text text-transparent mb-2 animate-pulse-slow">
                    5M+
                  </div>
                  <div className="text-xs md:text-sm font-bold text-foreground/70 uppercase tracking-wider leading-tight">
                    Exames Realizados
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-accent to-accent/70 bg-clip-text text-transparent mb-2 animate-pulse-slow">
                    4
                  </div>
                  <div className="text-xs md:text-sm font-bold text-foreground/70 uppercase tracking-wider leading-tight">
                    Unidades
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Grid Block */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* Top left - Wine block */}
              <div className="bg-primary rounded-lg shadow-strong flex items-center justify-center">
                <div className="text-center text-primary-foreground p-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.96-6-4.69-6-9V8.3l6-3.11 6 3.11V11c0 4.31-2.14 8.04-6 9z"/>
                    </svg>
                  </div>
                  <p className="font-bold text-lg">Qualidade Certificada</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-strong">
                <img
                  src={heroProfessionals}
                  alt="Profissionais do Laboratório Labclin"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={400}
                  height={500}
                />
              </div>
              
              {/* Bottom left - PNCQ Badge */}
              <div className="bg-card rounded-lg shadow-strong flex items-center justify-center border-4 border-secondary p-6">
                <img
                  src={pncqLogo}
                  alt="PNCQ - Programa Nacional de Controle de Qualidade"
                  className="w-full h-auto object-contain"
                  loading="eager"
                  width={200}
                  height={200}
                />
              </div>
              
              {/* Bottom right - Green/Cyan accent block */}
              <div className="bg-secondary rounded-lg shadow-strong flex items-center justify-center">
                <div className="text-center text-secondary-foreground p-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-secondary-foreground/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="font-bold text-lg">Resultados Precisos</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
