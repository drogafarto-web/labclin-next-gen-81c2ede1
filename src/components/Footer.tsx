import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img 
                src="/labclin-logo-stylized.png" 
                alt="Labclin - Laboratório de Análises Clínicas" 
                className="h-12 w-auto"
                loading="lazy"
                width="160"
                height="48"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Laboratório de análises clínicas com excelência e tradição na região de Rio Pomba.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/labclinmg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook - @labclinmg"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/labclinmg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram - @labclinmg"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: "/exames", label: "Exames" },
                { href: "/unidades", label: "Unidades" },
                { href: "/agendar", label: "Agendamento" },
                { href: "/coleta-domiciliar", label: "Coleta Domiciliar" },
                { href: "/resultados", label: "Resultados" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Rio Pomba, Mercês, Guarani e Silveirânia - MG
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+5532991990239"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    WhatsApp: (32) 99199-0239
                  </a>
                  <a
                    href="tel:+553235711599"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Fixo: (32) 3571-1599
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:llabclin3@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  llabclin3@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <strong>Rio Pomba:</strong> Seg-Sex 6:30-17:30, Sáb 7:00-11:00<br />
                  <strong>Mercês:</strong> Seg-Sex 6:45-11:45<br />
                  <strong>Silveirânia:</strong> Seg-Sex 7:00-11:00<br />
                  <strong>Guarani:</strong> Seg-Sex 6:45-15:30
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba novidades e dicas de saúde
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="w-full"
                aria-label="Email para newsletter"
              />
              <Button type="submit" variant="default" className="w-full">
                Inscrever
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-2">
              Ao se inscrever, você concorda com nossa{" "}
              <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Labclin. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/politica-de-privacidade"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                to="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
