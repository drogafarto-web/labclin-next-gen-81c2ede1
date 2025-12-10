import { Link } from "react-router-dom";
import { FileText, MapPin, Building2, Microscope, Instagram, Facebook, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import SEO from "@/components/SEO";
import { CONTACTS, SOCIAL_MEDIA, SITE_CONFIG } from "@/config/constants";
import labclinLogo from "@/assets/labclin-logo.png";
import pncqLogo from "@/assets/pncq-logo.png";

const Bio = () => {
  return (
    <>
      <SEO
        title="Link na Bio Oficial"
        description="Acesso rápido a resultados de exames, agendamento pelo WhatsApp e unidades do Laboratório Clínico Labclin."
        canonicalUrl={`${SITE_CONFIG.baseUrl}/bio`}
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-green-500/5 flex flex-col items-center pt-8 sm:pt-12 pb-8 px-4">
        <div className="w-full max-w-md space-y-5 bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-soft border border-white/60">
          {/* Logo e Frase */}
          <div className="text-center space-y-4">
            <img
              src={labclinLogo}
              alt="Labclin - Laboratório de Análises Clínicas"
              className="h-20 mx-auto drop-shadow-md"
            />
            <p className="text-muted-foreground text-base px-4 leading-relaxed">
              <span className="text-foreground font-bold">Sua saúde em primeiro lugar.</span>
              <br />
              <span className="text-sm">Resultados rápidos e confiáveis.</span>
            </p>

            {/* Badge PNCQ */}
            <div className="inline-flex items-center gap-2 bg-white shadow-soft border border-primary/20 rounded-full px-4 py-2.5">
              <img
                src={pncqLogo}
                alt="Certificação PNCQ - Programa Nacional de Controle de Qualidade"
                className="h-7 w-auto"
              />
              <span className="text-sm font-semibold text-primary flex items-center gap-1">
                <Award className="h-4 w-4" />
                Certificado PNCQ
              </span>
            </div>
          </div>

          {/* CTAs de Alta Prioridade */}
          <div className="space-y-3">
            {/* CTA PRINCIPAL - WhatsApp */}
            <WhatsAppCTA
              number={CONTACTS.WHATSAPP_MAIN}
              message="Olá! Vim pelo Instagram e gostaria de agendar um exame."
              text="Agendar Exame pelo WhatsApp"
              source="bio_instagram"
              animated={true}
              size="lg"
              className="w-full min-h-[60px] text-lg font-bold shadow-lg"
            />

            {/* CTA SECUNDÁRIO - Resultados */}
            <Link to="/resultados" className="block">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full min-h-[52px] text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white/50 backdrop-blur-sm shadow-soft transition-all duration-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                Acessar Resultados de Exames
              </Button>
            </Link>
          </div>

          {/* CTAs de Média Prioridade */}
          <div className="space-y-3">
            <Link to="/unidades" className="block">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full min-h-[52px] justify-start text-left bg-white shadow-soft hover:shadow-md border-muted hover:border-primary/30 transition-all duration-300"
              >
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <span className="font-medium">Unidades e Horários</span>
              </Button>
            </Link>

            <Link to="/#convenios" className="block">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full min-h-[52px] justify-start text-left bg-white shadow-soft hover:shadow-md border-muted hover:border-primary/30 transition-all duration-300"
              >
                <Building2 className="mr-3 h-5 w-5 text-primary" />
                <span className="font-medium">Convênios Atendidos</span>
              </Button>
            </Link>

            <Link to="/exames" className="block">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full min-h-[52px] justify-start text-left bg-white shadow-soft hover:shadow-md border-muted hover:border-primary/30 transition-all duration-300"
              >
                <Microscope className="mr-3 h-5 w-5 text-primary" />
                <span className="font-medium">Exames Realizados</span>
              </Button>
            </Link>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center gap-6 pt-4">
            <a
              href={SOCIAL_MEDIA.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram do Labclin"
            >
              <Instagram className="h-7 w-7" />
            </a>
            <a
              href={SOCIAL_MEDIA.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook do Labclin"
            >
              <Facebook className="h-7 w-7" />
            </a>
          </div>

          {/* Link para Site Completo */}
          <div className="text-center pt-2">
            <a
              href={SITE_CONFIG.baseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
              Visite nosso site completo
            </a>
          </div>

          {/* Rodapé Discreto */}
          <p className="text-center text-xs text-muted-foreground/60 pt-4">
            © {new Date().getFullYear()} Labclin - Todos os direitos reservados
          </p>
        </div>
      </div>
    </>
  );
};

export default Bio;
