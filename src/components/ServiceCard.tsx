import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const ServiceCard = ({ icon: Icon, title, description, href }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/50">
      <CardContent className="p-6">
        <div className="flex flex-col h-full space-y-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          
          <p className="text-muted-foreground flex-grow">{description}</p>
          
          <Link to={href}>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto font-medium text-primary hover:text-primary-hover">
              Saiba mais
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
