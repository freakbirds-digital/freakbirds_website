import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  CheckCircle, 
  ArrowRight,
  CreditCard,
  Package,
  BarChart3,
  Shield
} from "lucide-react";
import ecommerceImage from "@/assets/e-commerces.png";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface EcommerceData {
  hero: { title: string; subtitle: string };
  features: Feature[];
  services: string[];
  workSteps: { step: string; description: string }[];
}

const iconMapping: Record<string, any> = { CreditCard, Package, BarChart3, Shield };

const EcommerceDevelopment = () => {
  const [data, setData] = useState<EcommerceData | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/services/ecommerce")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white overflow-hidden py-20">
        <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
        <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
        <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <ShoppingCart className="w-10 h-10 text-accent-foreground" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">{data.hero.title}</h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">{data.hero.subtitle}</p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link to="/contact">Tell Us About Your Project</Link>
              </Button>
            </div>
            <div className="flex-1 animate-scale-in">
              <img src={ecommerceImage} alt="E-commerce Development" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">E-commerce Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create comprehensive e-commerce platforms that provide seamless shopping experiences 
              and powerful tools to grow your online business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((feature, index) => {
              const Icon = iconMapping[feature.icon];
              return (
                <div key={index} className="text-center p-6 rounded-lg bg-card shadow-soft animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Complete E-commerce Services</h2>
              <p className="text-xl text-muted-foreground">
                From concept to launch and beyond, we provide end-to-end e-commerce development 
                services to help you succeed in the competitive online marketplace.
              </p>
              
              <div className="space-y-3">
                {data.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium animate-scale-in">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <ShoppingCart className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Proven E-commerce Success</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We've helped businesses increase online sales by an average of 150% with our 
                  custom e-commerce solutions and optimization strategies.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">10+</div>
                    <div className="text-sm text-muted-foreground">Stores Built</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">150%</div>
                    <div className="text-sm text-muted-foreground">Avg. Sales Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground animate-fade-in">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up">
            Our structured approach ensures your e-commerce platform is built efficiently, securely, and designed to convert visitors into customers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {data.workSteps.map((step, index) => (
              <div key={index} className="p-6 bg-card rounded-lg shadow-soft animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.step}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Launch Your Online Store?</h2>
            <p className="text-xl text-primary-foreground/90">
              Let's build an e-commerce platform that drives sales and grows your business. Contact us for a free consultation and strategy session.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/contact" className="flex items-center justify-center space-x-2">
                <span>Tell Us About Your Project</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDevelopment;
