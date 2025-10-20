import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom">
      <Card className="max-w-4xl mx-auto p-4 md:p-6 shadow-strong border-border">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2">🍪 Cookies e Privacidade</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para
              melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
              <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>{" "}
              e com o uso de cookies conforme nossa{" "}
              <Link to="/cookies" className="text-primary hover:underline">
                Política de Cookies
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              <Button onClick={acceptCookies} variant="default" size="sm">
                Aceitar Todos
              </Button>
              <Button onClick={rejectCookies} variant="outline" size="sm">
                Apenas Essenciais
              </Button>
            </div>
          </div>
          <button
            onClick={rejectCookies}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fechar banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;
