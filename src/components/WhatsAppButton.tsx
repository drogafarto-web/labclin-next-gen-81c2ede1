import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "553236422323"; // Replace with actual WhatsApp number
  const message = "Olá! Gostaria de agendar um exame.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 shadow-strong hover:shadow-strong hover:scale-110 transition-all"
      aria-label="Fale conosco no WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 p-0 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-strong"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
