import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  city: string;
  avatar?: string;
  rating: number;
  text: string;
  service?: string;
}

const TestimonialCard = ({
  name,
  city,
  avatar,
  rating,
  text,
  service,
}: TestimonialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all">
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-gradient-hero rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground font-semibold text-lg">
          {avatar || name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{city}</p>
        </div>
      </div>
      
      <div className="flex space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground mb-3 italic">"{text}"</p>
      
      {service && (
        <div className="text-sm text-primary font-medium">
          Serviço: {service}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
