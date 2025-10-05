import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, link }: ServiceCardProps) => {
  return (
    <div className="relative service-card group h-full flex flex-col justify-between p-6 rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Moving Ball Animations */}
      <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-[hsl(var(--accent))] opacity-70 animate-move-diagonal"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-blue-400 opacity-60 animate-move-reverse"></div>

      {/* Top Section */}
      <div>
        <div className="flex items-center space-x-4 mb-6">
          {/* 🔵 Blue icon */}
          <div className="p-3 rounded-lg bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--accent))" }}></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section - Always aligned */}
      <Button 
        className="w-full font-semibold transition-all duration-300 group-hover:scale-105"
        style={{ backgroundColor: "hsl(var(--accent))", color: "hsl(var(--accent-foreground))" }}
        asChild
      >
        <Link to={link} className="flex items-center justify-center space-x-2">
          <span>Learn More</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
