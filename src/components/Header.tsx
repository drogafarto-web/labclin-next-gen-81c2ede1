import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início", ariaLabel: "Ir para página inicial" },
    { href: "/exames", label: "Exames", ariaLabel: "Ver lista de exames disponíveis" },
    { href: "/unidades", label: "Unidades", ariaLabel: "Encontrar unidades próximas" },
    { href: "/coleta-domiciliar", label: "Coleta Domiciliar", ariaLabel: "Agendar coleta domiciliar" },
    { href: "/resultados", label: "Resultados", ariaLabel: "Acessar resultados de exames", highlight: true },
    { href: "/blog", label: "Blog", ariaLabel: "Ler artigos sobre saúde" },
    { href: "/contato", label: "Contato", ariaLabel: "Entrar em contato conosco" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card shadow-soft" role="banner">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>
      
      {/* Top bar with logo and CTA */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between border-b border-border">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity" aria-label="Labclin - Página inicial">
            <img 
              src="/labclin-logo-stylized.png"
              alt="Labclin - Laboratório de Análises Clínicas" 
              className="h-16 w-auto drop-shadow-lg"
              loading="eager"
              width={200}
              height={64}
            />
          </Link>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Link to="/agendar">
              <Button variant="default" size="lg" className="uppercase font-bold">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Exame
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-accent/10 rounded-md transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex items-center justify-center h-12 space-x-6" role="navigation" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-semibold transition-all uppercase tracking-wide ${
                  link.highlight 
                    ? "text-secondary hover:text-secondary/80 font-bold" 
                    : "text-primary-foreground hover:text-primary-foreground/80"
                }`}
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary" id="mobile-navigation">
          <nav className="flex flex-col py-4 px-4 space-y-2" role="navigation" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 text-base font-semibold rounded transition-all uppercase ${
                  link.highlight
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    : "text-primary-foreground hover:bg-primary-hover"
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/agendar" className="px-4 pt-2" onClick={() => setIsMenuOpen(false)}>
              <Button variant="secondary" size="lg" className="w-full uppercase font-bold min-h-[48px]">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Exame
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
