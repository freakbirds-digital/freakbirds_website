import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  CheckCircle,
  ArrowRight,
  Apple,
  Settings,
  Code,
  Zap,
  Users,
  Star,
} from "lucide-react";
import mobileImage from "@/assets/mobile.png";

// Map icon string from backend to actual lucide-react component
const iconMapping: Record<string, any> = { Apple, Settings, Code, Zap };

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ServicesData {
  hero: {
    title: string;
    subtitle: string;
  };
  features: Feature[];
  services: string[];
}

const MobileDevelopment = () => {
  const [data, setData] = useState<ServicesData | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/services/mobile-development")
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white py-24">
        <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
        <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
        <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>

        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold">{data.hero.title}</h1>
            <p className="text-xl leading-relaxed">{data.hero.subtitle}</p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center animate-scale-in">
            <img
              src={mobileImage}
              alt="Mobile Development Illustration"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mobile development expertise ensures your app is not only visually stunning but also performs flawlessly across all devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((feature, index) => {
              const Icon = iconMapping[feature.icon];
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-card shadow-soft animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile App Process Section */}
      <section className="py-20 bg-primary/5 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground animate-fade-in">
            Our Mobile App Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
            We follow a structured process and use modern technologies to turn your app idea into a high-performing, beautiful mobile application.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="p-6 rounded-lg bg-card shadow-soft text-center animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">1. Ideation & Planning</h3>
              <p className="text-muted-foreground text-sm">
                We understand your goals, define app features, and create a roadmap for development.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card shadow-soft text-center animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">2. UI/UX Design</h3>
              <p className="text-muted-foreground text-sm">
                Our designers craft intuitive interfaces and interactive prototypes that engage users.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card shadow-soft text-center animate-slide-up" style={{ animationDelay: "300ms" }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">3. Development & Testing</h3>
              <p className="text-muted-foreground text-sm">
                Using the latest technologies, we build, test, and optimize your app for performance and stability.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card shadow-soft text-center animate-slide-up" style={{ animationDelay: "400ms" }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">4. Launch & Maintenance</h3>
              <p className="text-muted-foreground text-sm">
                We launch your app to the App Store & Google Play, and provide updates, analytics, and ongoing support.
              </p>
            </div>
          </div>

          <div className="mt-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link to="/contact" className="flex items-center justify-center space-x-2">
                <span>Discuss Your Project</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Comprehensive Mobile Services
              </h2>
              <p className="text-xl text-muted-foreground">
                From concept to launch, we provide a full suite of mobile development services to ensure your app succeeds in the market.
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

            {/* Team Info */}
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium animate-scale-in">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Expert Mobile Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our skilled team has delivered 50+ apps across industries, ensuring high performance, intuitive design, and satisfied users.
                </p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                  <span className="ml-2 text-muted-foreground">4.9/5 Client Rating</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Bring Your App Idea to Life?
            </h2>
            <p className="text-xl text-white/90">
              Let's create a mobile app that engages users, drives growth, and exceeds expectations. Reach out today for a free consultation.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link to="/contact" className="flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MobileDevelopment;
