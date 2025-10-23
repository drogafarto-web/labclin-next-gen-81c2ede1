import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";
import pncqLogo from "@/assets/pncq-logo.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                ✓ Laboratório Certificado
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Laboratório de Análises Clínicas em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-hero">
                Rio Pomba
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Exames de rotina, especializados e coleta domiciliar. Resultados rápidos e precisos com
              equipe altamente qualificada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/agendar" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Exame
                </Button>
              </Link>
              <Link to="/resultados" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full">
                  Ver Resultados Online
                </Button>
              </Link>
              <Link to="/unidades" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  <MapPin className="mr-2 h-5 w-5" />
                  Ver Unidades
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">58+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">5M+</div>
                <div className="text-sm text-muted-foreground">Exames Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Unidades</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Laboratório Labclin - Ambiente moderno e equipado"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-medium p-4 border border-border max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <img 
                    src={pncqLogo} 
                    alt="PNCQ - Programa Nacional de Controle de Qualidade" 
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Certificado PNCQ</div>
                  <div className="text-sm text-muted-foreground">Qualidade Garantida</div>
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
