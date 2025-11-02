import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import labclinLogo from "@/assets/labclin-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/exames", label: "Exames" },
    { href: "/unidades", label: "Unidades" },
    { href: "/coleta-domiciliar", label: "Coleta Domiciliar" },
    { href: "/resultados", label: "Resultados" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card shadow-soft">
      {/* Top bar with logo and CTA */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between border-b border-border">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={labclinLogo} 
              alt="Labclin - Laboratório de Análises Clínicas" 
              className="h-14 w-auto"
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
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex items-center justify-center h-12 space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-all uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary">
          <nav className="flex flex-col py-4 px-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-hover rounded transition-all uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/agendar" className="px-4 pt-2" onClick={() => setIsMenuOpen(false)}>
              <Button variant="secondary" className="w-full uppercase font-bold">
                <Calendar className="mr-2 h-4 w-4" />
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
