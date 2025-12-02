import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  publishDate: string;
}

const BlogCard = ({ slug, title, excerpt, image, category, readTime, publishDate }: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="group block">
      <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 border-border hover:border-primary/50 h-full">
        <div className="aspect-video overflow-hidden bg-muted">
          <OptimizedImage
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            enableWebP={false}
            width={400}
            height={225}
          />
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {publishDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readTime}
              </span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
