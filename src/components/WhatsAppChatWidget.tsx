import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/config/constants";
import { analytics } from "@/lib/analytics";

const WhatsAppChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.AGENDAR_EXAME);

  const handleWhatsAppClick = () => {
    analytics.whatsappClick('chat_widget', CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.AGENDAR_EXAME);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup expandido */}
      {isOpen && (
        <div className="mb-4 w-80 bg-background rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-in">
          {/* Header verde com foto */}
          <div className="flex items-center gap-3 p-4 bg-[#25D366]">
            <div className="relative flex-shrink-0">
              <img 
                src="/images/atendente-labclin.png" 
                alt="Atendente Labclin"
                className="w-14 h-14 rounded-full object-cover border-2 border-white"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex-1 text-white">
              <h4 className="font-semibold">Labclin</h4>
              <p className="text-sm opacity-90">Atendimento ao Cliente</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Mensagem de boas-vindas */}
          <div className="p-4">
            <div className="bg-muted rounded-lg p-3 text-foreground text-sm leading-relaxed">
              Olá! 👋 Ficou com alguma dúvida sobre nossos exames ou serviços? 
              Fale comigo pelo WhatsApp!
            </div>
          </div>
          
          {/* Botão CTA */}
          <div className="p-4 pt-0">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="block"
            >
              <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium">
                <MessageCircle className="mr-2 h-5 w-5" />
                Iniciar Conversa
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
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
        )}
        <div className="relative rounded-full h-16 w-16 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center">
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <MessageCircle className="h-7 w-7" />
          )}
        </div>
        
        {/* Tooltip (apenas quando fechado) */}
        {!isOpen && (
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
