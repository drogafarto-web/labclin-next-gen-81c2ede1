import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/config/constants";
import { analytics } from "@/lib/analytics";

// Informações do profissional
const PROFESSIONAL_INFO = {
  name: "Bruno",
  title: "Bioquímico",
  greeting: "Olá! Sou o Bruno. Precisa de ajuda para agendar ou entender seus exames? Fale comigo!",
};

const WhatsAppChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProactiveBubble, setShowProactiveBubble] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);
  
  const whatsappUrl = getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.WIDGET_HUMANIZADO);

  // Timer e scroll para balão proativo
  useEffect(() => {
    if (bubbleDismissed) return;

    // Timer de 5 segundos
    const timer = setTimeout(() => {
      if (!bubbleDismissed && !isOpen) {
        setShowProactiveBubble(true);
      }
    }, 5000);

    // Detector de scroll 25%
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 25 && !bubbleDismissed && !isOpen) {
        setShowProactiveBubble(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bubbleDismissed, isOpen]);

  // Ocultar balão proativo quando popup abre
  useEffect(() => {
    if (isOpen) {
      setShowProactiveBubble(false);
    }
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    analytics.whatsappClick('chat_widget', CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.WIDGET_HUMANIZADO);
  };

  const handleDismissBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowProactiveBubble(false);
    setBubbleDismissed(true);
  };

  const handleBubbleClick = () => {
    setIsOpen(true);
    setShowProactiveBubble(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Balão Proativo - Apenas Desktop */}
      {showProactiveBubble && !isOpen && (
        <div 
          className="hidden md:block absolute bottom-20 right-0 w-72 bg-card border border-border rounded-xl p-3 shadow-lg animate-fade-in cursor-pointer"
          onClick={handleBubbleClick}
        >
          {/* Botão fechar balão */}
          <button 
            onClick={handleDismissBubble}
            className="absolute -top-2 -right-2 w-6 h-6 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors shadow-sm"
            aria-label="Fechar"
          >
            <X className="w-3 h-3 text-muted-foreground" />
          </button>
          
          <div className="flex items-start gap-3">
            <div className="relative flex-shrink-0">
              <img 
                src="/images/atendente-labclin.png" 
                alt={PROFESSIONAL_INFO.name}
                className="w-10 h-10 rounded-full object-cover object-top border border-border"
              />
              <span className="absolute -bottom-0.5 -left-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{PROFESSIONAL_INFO.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Olá! Ficou com alguma dúvida sobre os seus exames? Fale comigo!</p>
            </div>
          </div>
        </div>
      )}

      {/* Popup expandido */}
      {isOpen && (
        <div className="mb-4 w-80 bg-background rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-in relative">
          {/* Botão fechar */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Fechar chat"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Conteúdo principal */}
          <div className="p-5">
            <div className="flex items-start gap-4">
              {/* Foto com indicador online */}
              <div className="relative flex-shrink-0">
              <img 
                src="/images/atendente-labclin.png" 
                alt={PROFESSIONAL_INFO.name}
                className="w-16 h-16 rounded-full object-cover object-top border-2 border-border shadow-sm"
              />
                <span className="absolute bottom-0 left-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
              </div>
              
              {/* Texto */}
              <div className="flex-1 pt-1">
                <h4 className="font-semibold text-foreground text-lg">{PROFESSIONAL_INFO.name}</h4>
                <p className="text-sm text-primary font-medium">{PROFESSIONAL_INFO.title}</p>
              </div>
            </div>
            
            {/* Mensagem de boas-vindas */}
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              {PROFESSIONAL_INFO.greeting}
            </p>
          </div>
          
          {/* Botão CTA */}
          <div className="px-5 pb-5">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="block"
            >
              <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium h-11">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale Conosco
              </Button>
            </a>
          </div>
        </div>
      )}
      
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
        aria-label={isOpen ? "Fechar chat" : "Abrir chat do WhatsApp"}
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
        )}
        <div className="relative rounded-full h-16 w-16 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center">
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <MessageCircle className="h-7 w-7" />
          )}
        </div>
        
        {/* Tooltip (apenas quando fechado e sem balão proativo) */}
        {!isOpen && !showProactiveBubble && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            Fale conosco no WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-foreground" />
          </div>
        )}
      </button>
    </div>
  );
};

export default WhatsAppChatWidget;
