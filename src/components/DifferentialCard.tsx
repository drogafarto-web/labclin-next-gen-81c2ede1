import { LucideIcon } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

interface DifferentialCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

const DifferentialCard = ({
  icon: Icon,
  title,
  description,
  image,
}: DifferentialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-medium transition-all group">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <OptimizedImage
            src={image}
            alt={title}
            className="w-full h-full"
            imgClassName="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            width={400}
            height={192}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>
      )}
      
      <div className="p-6">
        <div className="bg-gradient-hero rounded-lg p-3 w-fit mb-4">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default DifferentialCard;
