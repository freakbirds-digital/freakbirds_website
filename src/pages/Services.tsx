import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Calculator, 
  Brain, 
  Palette,
  GraduationCap,
  FileText,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import businessImage from "@/assets/business-3d.png"; // ✅ Replace with your actual image path

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX", "CMS Integration", "E-commerce Ready"],
      link: "/services/web-development",
      priority: true
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications for iOS and Android devices with stunning user interfaces.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications", "Offline Support", "Cloud Integration"],
      link: "/services/mobile-development",
      priority: true
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description: "Complete e-commerce solutions with payment integration, inventory management, and analytics dashboard.",
      features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics", "Multi-vendor Support", "Mobile Commerce"],
      link: "/services/ecommerce",
      priority: true
    },
    {
      icon: Calculator,
      title: "Bookkeeping & CA Support",
      description: "Professional accounting services and chartered accountant support to keep your finances organized and compliant.",
      features: ["Financial Records", "Tax Preparation", "Compliance", "Consultation", "Monthly Reports", "Audit Support"],
      link: "/services/bookkeeping"
    },
    {
      icon: Brain,
      title: "LLM Training & Development",
      description: "Custom AI language model training and development for specialized business needs and applications.",
      features: ["Custom Models", "Training Data", "API Integration", "Deployment", "Fine-tuning", "Performance Optimization"],
      link: "/services/llm-training"
    },
    {
      icon: Palette,
      title: "Branding & Graphic Design",
      description: "Complete brand identity and graphic design services to create a memorable and professional brand presence.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets", "Print Design", "Social Media Graphics"],
      link: "/services/branding"
    },
    {
      icon: GraduationCap,
      title: "Stock Market Education",
      description: "Comprehensive education and training programs for stock market investment and trading strategies.",
      features: ["Trading Strategies", "Market Analysis", "Risk Management", "Portfolio Building", "Technical Analysis", "Fundamental Analysis"],
      link: "/services/stock-education"
    },
    {
      icon: FileText,
      title: "Immigration Document Support",
      description: "Professional assistance with immigration paperwork, documentation processes, and application support.",
      features: ["Document Preparation", "Application Support", "Compliance Check", "Consultation", "Status Tracking", "Expert Guidance"],
      link: "/services/immigration"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements."
    },
    {
      step: "02", 
      title: "Design & Development",
      description: "Our team creates stunning designs and develops robust solutions using cutting-edge technologies."
    },
    {
      step: "03",
      title: "Testing & Launch",
      description: "Thorough testing ensures quality before launch, followed by ongoing support and maintenance."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Left */}
      <section className="bg-gradient-to-r from-[#031273] via-[#1e3a8a] to-[#2563eb] text-white py-20 relative overflow-hidden">
        {/* animated subtle grid background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 animate-pulse"></div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side Image with animated background */}
          <div className="relative flex justify-center animate-fade-in-left">
            {/* 🔵 Animated glowing blobs */}
            <div className="absolute -top-12 -left-12 w-72 h-72 bg-accent/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-2xl animate-[spin_20s_linear_infinite]"></div>

            {/* Main Image */}
            <img 
              src={businessImage} 
              alt="Professional Digital Services" 
              className="w-full max-w-lg relative z-10 rounded-2xl shadow-2xl animate-scale-in"
            />
          </div>

          {/* Right side Content */}
          <div className="space-y-6 text-center lg:text-left animate-fade-in-right">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Professional Digital Services
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              From cutting-edge websites and mobile apps to comprehensive business solutions, 
              we deliver professional digital services that drive growth and success.
            </p>
            <Button 
              size="lg" 
              className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-black font-semibold shadow-lg"
              asChild
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Our Complete Service Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From digital development to business support services, we provide end-to-end 
              solutions to help your business succeed in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and client satisfaction at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Why Our Services Stand Out
              </h2>
              <p className="text-xl text-muted-foreground">
                We combine industry expertise with innovative approaches to deliver 
                solutions that exceed expectations and drive business growth.
              </p>
              
              <div className="space-y-4">
                {[
                  "Custom solutions tailored to your specific business needs",
                  "Expert team with years of industry experience",
                  "Latest technologies and industry best practices",
                  "Transparent communication throughout the project",
                  "Ongoing support and maintenance services",
                  "Competitive pricing with no hidden costs",
                  "Quick turnaround times without compromising quality",
                  "100% satisfaction guarantee on all services"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium animate-scale-in">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Quality Guarantee</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We stand behind our work with a 100% satisfaction guarantee. 
                  If you're not completely satisfied with our services, we'll work 
                  with you to make it right.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link to="/services/vision-mission">Our Vision & Mission</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#004aad] to-[#0073e6] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Let's discuss your project requirements and create a custom solution 
              that fits your budget and timeline. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get Free Quote</span>
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-transparent hover:bg-white hover:text-[#031273] font-semibold px-6 py-3 rounded-md shadow-lg transition-all"
                asChild
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;





