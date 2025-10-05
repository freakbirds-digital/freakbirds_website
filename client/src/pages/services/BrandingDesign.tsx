import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  CheckCircle, 
  ArrowRight,
  Brush,
  Image,
  Layout,
  Sparkles,
  Target,
  Zap
} from "lucide-react";
import DesignImage from "@/assets/Design.png";

// Icon mapping (backend string → actual Lucide icon)
const iconMap: any = { Palette, CheckCircle, ArrowRight, Brush, Image, Layout, Sparkles, Target, Zap };

const BrandingDesign = () => {
  const [features, setFeatures] = useState<any[]>([]);
  const [services, setServices] = useState<string[]>([]);
  const [howWeWork, setHowWeWork] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services/branding-design")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data.features);
        setServices(data.services);
        setHowWeWork(data.howWeWork);
      })
      .catch((err) => console.error("Error fetching branding data:", err));
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
      <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
      <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <img 
              src={DesignImage} 
              alt="Branding Design" 
              className="rounded-2xl shadow-lg w-full max-w-xl lg:max-w-2xl animate-fade-in" 
            />
          </div>
          {/* Right - Text */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto lg:mx-0">
              <Palette className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Branding & Graphic Design
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-3xl">
              Create a memorable and professional brand presence with our comprehensive branding 
              and graphic design services that make your business stand out.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link to="/contact">Tell Us About Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Creative Design Solutions</h2>
            <p className="text-lg lg:text-xl max-w-3xl mx-auto">
              We create visually stunning designs that communicate your brand message effectively 
              and leave a lasting impression on your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-lg flex flex-col items-center space-y-4 animate-slide-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    {Icon && <Icon className="w-8 h-8 text-accent" />}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm lg:text-base text-white/80">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/5 relative z-10">
      <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Complete Brand Experience</h2>
            <p className="text-lg lg:text-xl text-white/90">
              From concept to execution, we create cohesive brand experiences that resonate 
              with your target audience and drive business growth.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/80">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Creative Excellence</h3>
            <p className="text-white/80 leading-relaxed">
              Our award-winning design team has created memorable brand identities for 300+ 
              businesses across various industries with exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center mt-6">
              <div>
                <div className="text-2xl font-bold text-accent">30+</div>
                <div className="text-sm text-white/80">Brands Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">8+</div>
                <div className="text-sm text-white/80">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 relative z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {howWeWork.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center text-center animate-slide-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                    {Icon && <Icon className="w-6 h-6 text-accent" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-white/80">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white relative z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Build Your Brand?</h2>
            <p className="text-lg lg:text-xl text-white/90">
              Let's create a powerful brand identity that sets you apart from the competition. 
              Contact us for a free brand consultation and design quote.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-accent hover:bg-white/90"
              asChild
            >
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

export default BrandingDesign;
