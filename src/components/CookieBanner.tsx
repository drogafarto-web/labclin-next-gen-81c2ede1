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
    <div 
      className="fixed bottom-4 right-4 z-50 max-w-sm animate-in slide-in-from-bottom-5"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <Card className="p-4 shadow-xl border-2 border-border bg-card/95 backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 text-2xl" aria-hidden="true">🍪</div>
          <div className="flex-1 min-w-0">
            <h3 id="cookie-banner-title" className="font-semibold text-sm text-foreground mb-1">
              Cookies
            </h3>
            <p id="cookie-banner-description" className="text-xs text-muted-foreground mb-3 line-clamp-3">
              Usamos cookies essenciais e analíticos. Veja nossa{" "}
              <Link to="/politica-de-cookies" className="text-primary hover:underline font-medium">
                Política de Cookies
              </Link>
              .
            </p>
            <div className="flex gap-2">
              <Button 
                onClick={acceptCookies} 
                variant="default" 
                size="sm"
                className="text-xs h-8"
              >
                Aceitar
              </Button>
              <Button 
                onClick={rejectCookies} 
                variant="ghost" 
                size="sm"
                className="text-xs h-8"
              >
                Recusar
              </Button>
            </div>
          </div>
          <button
            onClick={rejectCookies}
            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Fechar banner de cookies"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;
