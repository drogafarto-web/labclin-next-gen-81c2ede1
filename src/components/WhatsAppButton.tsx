import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/config/constants";

const WhatsAppButton = () => {
  const whatsappUrl = getWhatsAppUrl(CONTACTS.WHATSAPP_MAIN, WHATSAPP_MESSAGES.AGENDAR_EXAME);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group animate-fade-in"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
      
      <Button
        size="lg"
        className="relative rounded-full h-16 w-16 p-0 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.6)] transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 animate-pulse" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Fale conosco no WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-foreground" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
