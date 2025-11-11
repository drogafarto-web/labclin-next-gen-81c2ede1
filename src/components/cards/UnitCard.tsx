import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

interface UnitCardProps {
  name: string;
  address: string;
  city: string;
  cep: string;
  phone: string;
  whatsapp: string;
  whatsappDisplay: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

/**
 * Componente reutilizável para exibir informações de uma unidade
 */
const UnitCard = ({ name, address, city, cep, phone, whatsapp, whatsappDisplay, hours }: UnitCardProps) => {
  return (
    <Card className="border-border hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          {name}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-foreground">{address}</p>
              <p className="text-foreground">{city}</p>
              <p className="text-sm text-muted-foreground">CEP: {cep}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {phone}
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                `Olá! Gostaria de informações sobre a unidade ${name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {whatsappDisplay}
            </a>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="text-foreground">{hours.weekdays}</p>
              <p className="text-foreground">{hours.saturday}</p>
              <p className="text-muted-foreground">{hours.sunday}</p>
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
            `Olá! Gostaria de agendar um exame na unidade ${name}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button variant="default" className="w-full">
            <MessageCircle className="mr-2 h-4 w-4" />
            Fale Conosco
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default UnitCard;
