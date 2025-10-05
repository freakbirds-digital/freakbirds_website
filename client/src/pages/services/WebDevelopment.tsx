import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, ArrowRight, Code, Smartphone, Search, 
  Zap, Shield, Palette, Database 
} from "lucide-react";

import WebImage from "@/assets/Web.png";

const iconMap: Record<string, any> = {
  Globe, ArrowRight, Code, Smartphone, Search, Zap, Shield, Palette, Database
};

const WebDevelopment = () => {
  const [features, setFeatures] = useState<any[]>([]);
  const [technologies, setTechnologies] = useState<any[]>([]);
  const [process, setProcess] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services/web-development")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data.features);
        setTechnologies(data.technologies);
        setProcess(data.process);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="min-h-screen">
      {/* ✅ Hero Section (same as before, no change) */}
      <section className="relative bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white overflow-hidden py-20">
        {/* background animation */}
        <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
        <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
        <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-12 h-12 text-yellow-400" />
                <h1 className="text-4xl lg:text-6xl font-bold">Web Development</h1>
              </div>
              <p className="text-xl text-white/90 leading-relaxed">
                Custom websites and web applications built with cutting-edge technologies 
                to deliver exceptional user experiences and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button 
                  size="lg" variant="outline" 
                  className="btn-hero-outline border-white text-[#031273] bg-white hover:bg-white hover:text-[#031273]"
                  asChild
                >
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src={WebImage} alt="Web Development" className="w-full max-w-md rounded-xl shadow-lg animate-fade-in" />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with creative design to deliver websites 
              that not only look great but also help your business grow. 
              Our focus is always on performance, security, and user satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, idx) => {
              const Icon = iconMap[f.icon] || Code;
              return (
                <div key={idx} className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 animate-slide-up">
                  <Icon className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{f.title}</h3>
                  <p className="text-muted-foreground">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ Technologies Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stay current with the latest technologies to ensure your website is built with the best tools available.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const Icon = iconMap[tech.icon] || Code;
              return (
                <div key={index} className="flex flex-col items-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium animate-scale-in transition">
                  <Icon className="w-10 h-10 text-accent mb-3" />
                  <span className="text-foreground font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ Process Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our process ensures transparency, quality, and timely delivery for every project.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 h-full transform -translate-x-1/2"></div>
            <div className="space-y-16 md:space-y-24">
              {process.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center md:items-start ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} animate-slide-up`}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 text-black font-bold text-xl shadow-lg z-10">{step.step}</div>
                  <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-1/2 top-1/2"></div>
                  <div className={`mt-6 md:mt-0 md:w-5/12 p-6 bg-card rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 ${idx % 2 === 0 ? "md:ml-10" : "md:mr-10"}`}>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CTA Section (same as before) */}
      <section className="py-20 bg-gradient-to-r from-[#004aad] to-[#0073e6] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Build Your Website?</h2>
            <p className="text-xl text-primary-foreground/90">Let's discuss your project and create a website that drives results for your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black" asChild>
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-[#031273] font-semibold px-6 py-3 rounded-md shadow-lg transition-all" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
