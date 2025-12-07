import { useState } from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X, Calendar, ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UNIT_LINKS = [
  { href: "/unidades/rio-pomba", label: "Rio Pomba" },
  { href: "/unidades/merces", label: "Mercês" },
  { href: "/unidades/guarani", label: "Guarani" },
  { href: "/unidades/silveirania", label: "Silveirânia" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início", ariaLabel: "Ir para página inicial" },
    { href: "/exames", label: "Exames", ariaLabel: "Ver lista de exames disponíveis" },
    { href: "/coleta-domiciliar", label: "Coleta Domiciliar", ariaLabel: "Agendar coleta domiciliar" },
    { href: "/resultados", label: "Resultados", ariaLabel: "Acessar resultados de exames", highlight: true },
    { href: "/duvidas-frequentes", label: "Dúvidas Frequentes", ariaLabel: "Central de ajuda e dúvidas frequentes" },
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
              src="/labclin-logo.png"
              alt="Labclin - Laboratório de Análises Clínicas" 
              className="h-14 w-auto"
              loading="eager"
              width={180}
              height={56}
            />
          </Link>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/agendar"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "uppercase font-bold")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Exame
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
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold transition-all uppercase tracking-wide text-primary-foreground hover:text-primary-foreground/80"
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Unidades Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-semibold transition-all uppercase tracking-wide text-primary-foreground hover:text-primary-foreground/80 flex items-center gap-1 outline-none">
                Unidades
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border border-border shadow-lg z-50">
                {UNIT_LINKS.map((unit) => (
                  <DropdownMenuItem key={unit.href} asChild>
                    <Link
                      to={unit.href}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      {unit.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link
                    to="/unidades"
                    className="flex items-center gap-2 cursor-pointer border-t border-border mt-1 pt-2 font-semibold text-primary"
                  >
                    Ver todas as unidades
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(2).map((link) => (
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
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-3 text-base font-semibold rounded transition-all uppercase text-primary-foreground hover:bg-primary-hover"
                onClick={() => setIsMenuOpen(false)}
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Units Section */}
            <div className="px-4 py-2">
              <p className="text-xs font-bold uppercase text-primary-foreground/70 mb-2">Unidades</p>
              <div className="grid grid-cols-2 gap-2">
                {UNIT_LINKS.map((unit) => (
                  <Link
                    key={unit.href}
                    to={unit.href}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MapPin className="h-3 w-3" />
                    {unit.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/unidades"
                className="block mt-2 text-xs font-semibold text-secondary hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Ver todas →
              </Link>
            </div>

            {navLinks.slice(2).map((link) => (
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
            <Link 
              to="/agendar" 
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full uppercase font-bold min-h-[48px] px-4 pt-2")}
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Exame
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
