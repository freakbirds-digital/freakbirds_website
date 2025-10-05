import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import {
  Globe, Smartphone, ShoppingCart, Calculator, Brain, Palette,
  GraduationCap, FileText, ArrowRight, CheckCircle, Star, Users, Award
} from "lucide-react";
import axios from "axios";

type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  link: string;
  priority?: boolean;
};

type Testimonial = {
  name: string;
  company: string;
  rating: number;
  text: string;
};

const iconMap = { Globe, Smartphone, ShoppingCart, Calculator, Brain, Palette, GraduationCap, FileText };

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/home/services").then(res => setServices(res.data));
    axios.get("http://localhost:5000/api/home/testimonials").then(res => setTestimonials(res.data));
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />

     <section className="py-16 bg-background">
  <div className="container mx-auto px-6 lg:px-12 xl:px-20">
    <div className="mb-12 animate-fade-in">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center text-foreground">
        Our Professional Services
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
        We deliver tailored digital solutions designed to drive growth, enhance efficiency, 
        and build long-lasting trust with your customers. Our expertise ensures measurable 
        results and sustainable success for your business.
      </p>
    </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <ServiceCard {...service} icon={Icon} />
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/services" className="flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 animate-fade-in">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Why Choose Freakbirds Digital?
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine technical expertise with creative vision to deliver solutions that drive real business results.
              </p>

              <div className="space-y-3">
                {[
                  "Expert team with years of industry experience",
                  "Custom solutions tailored to your specific needs",
                  "Proven track record with 100+ successful projects",
                  "24/7 support and maintenance services",
                  "Competitive pricing with transparent billing",
                  "Latest technologies and best practices"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              {[
                { icon: Users, value: "30+", label: "Happy Clients" },
                { icon: Award, value: "2+", label: "Years Experience" },
                { icon: Star, value: "4.9/5", label: "Client Rating" },
                { icon: CheckCircle, value: "98%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="bg-card p-4 rounded-lg shadow-soft text-center">
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it – hear from our satisfied clients about their experience working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-soft animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3 italic text-sm">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#004aad] to-[#0073e6] text-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 text-center">
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-2xl lg:text-3xl font-bold drop-shadow">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90">
              Let's discuss your project and create something amazing together. Contact us today for a free consultation and quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-md shadow-lg transition-all"
                asChild
              >
                <Link to="/contact">Get Started Today</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-[#031273] font-semibold px-6 py-3 rounded-md shadow-lg transition-all"
                asChild
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;