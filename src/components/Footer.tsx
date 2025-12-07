import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const UNITS = [
  {
    city: "Rio Pomba",
    address: "Rua Floripes Maria de Jesus, 05, loja 02 - Centro",
    cep: "36180-000",
    phone: "(32) 3571-1599",
    whatsapp: "5532991990239",
    hours: "Seg-Sex 6:30-17:30, Sáb 7:00-11:00",
    href: "/unidades/rio-pomba",
  },
  {
    city: "Mercês",
    address: "Praça Dr. Castelões, 40 - Centro",
    cep: "36190-000",
    phone: "(32) 99967-1581",
    whatsapp: "5532999671581",
    hours: "Seg-Sex 6:45-11:45",
    href: "/unidades/merces",
  },
  {
    city: "Guarani",
    address: "Rua José Ladeira Pinto, 70 - Bairro Sossego",
    cep: "36160-000",
    phone: "(32) 99199-0239",
    whatsapp: "5532991990239",
    hours: "Seg-Sex 6:45-15:30",
    href: "/unidades/guarani",
  },
  {
    city: "Silveirânia",
    address: "Rua Padre Cerqueira, 20 - Centro",
    cep: "36245-000",
    phone: "(32) 99199-0239",
    whatsapp: "5532991990239",
    hours: "Seg-Sex 7:00-11:00",
    href: "/unidades/silveirania",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Grid - 4 Unit Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {UNITS.map((unit) => (
            <div key={unit.city}>
              <Link to={unit.href} className="group">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                  {unit.city}
                </h3>
              </Link>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>{unit.address}</p>
                <p>CEP: {unit.cep}</p>
                <a
                  href={`tel:${unit.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {unit.phone}
                </a>
                <p className="flex items-start gap-2 text-xs">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  {unit.hours}
                </p>
              </address>
            </div>
          ))}
        </div>

        {/* Secondary Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-border">
          {/* About */}
          <div>
            <div className="mb-4">
              <img 
                src="/labclin-logo.png" 
                alt="Labclin - Laboratório de Análises Clínicas" 
                className="h-12 w-auto"
                loading="lazy"
                width="160"
                height="48"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Laboratório de análises clínicas com excelência e tradição há mais de 58 anos na Zona da Mata Mineira.
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
                { href: "/unidades", label: "Todas as Unidades" },
                { href: "/agendar", label: "Agendamento" },
                { href: "/coleta-domiciliar", label: "Coleta Domiciliar" },
                { href: "/resultados", label: "Resultados Online" },
                { href: "/duvidas-frequentes", label: "Dúvidas Frequentes" },
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

          {/* Contact / WhatsApp */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Fale Conosco</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Central de atendimento via WhatsApp
            </p>
            <a
              href="https://wa.me/5532991990239?text=Ol%C3%A1%20Labclin!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors w-full justify-center mb-4"
            >
              <Phone className="h-4 w-4" />
              WhatsApp: (32) 99199-0239
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href="mailto:llabclin3@gmail.com"
                className="hover:text-primary transition-colors"
              >
                llabclin3@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Regional Pride Statement */}
        <div className="py-6 border-t border-border text-center">
          <p className="text-sm font-medium text-foreground">
            🏆 Atendendo a <span className="text-primary font-bold">Zona da Mata Mineira</span> com orgulho há mais de 58 anos.
          </p>
        </div>

        {/* Copyright Row */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Labclin. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/politica-de-privacidade"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-de-uso"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                to="/politica-de-cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
