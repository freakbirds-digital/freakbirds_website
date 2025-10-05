import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Zap,
  Target
} from "lucide-react";
import LLMImage from "@/assets/LLM.png";

const LLMTraining = () => {
  const features = [
    {
      icon: Cpu,
      title: "Custom Model Training",
      description: "Tailored AI models trained on your specific data and business requirements."
    },
    {
      icon: Database,
      title: "Data Processing", 
      description: "Advanced data preparation, cleaning, and optimization for model training."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fine-tuning and optimization to achieve maximum model accuracy and efficiency."
    },
    {
      icon: Target,
      title: "Domain Expertise",
      description: "Specialized models for your industry with deep understanding of business context."
    }
  ];

  const services = [
    "Custom LLM Development & Training",
    "Data Collection & Preprocessing", 
    "Model Fine-tuning & Optimization",
    "API Integration & Deployment",
    "Performance Monitoring & Analytics",
    "Chatbot & Virtual Assistant Development",
    "Natural Language Processing Solutions",
    "Content Generation Systems",
    "AI Model Consultation & Strategy",
    "Ongoing Model Maintenance & Updates"
  ];

  const howWeWork = [
    {
      title: "Discovery & Planning",
      description: "We analyze your business needs and define the AI solution roadmap.",
      icon: Target
    },
    {
      title: "Data Preparation",
      description: "Collect, clean, and structure data to ensure high-quality model training.",
      icon: Database
    },
    {
      title: "Model Development",
      description: "Build and train custom LLMs optimized for your use case.",
      icon: Cpu
    },
    {
      title: "Testing & Deployment",
      description: "Rigorous evaluation and deployment of AI models into your system.",
      icon: CheckCircle
    },
    {
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and fine-tuning to maintain peak performance.",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white overflow-hidden">
      {/* Animated background elements */}
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
          <div className="flex-1 flex justify-center lg:justify-start">
            <img 
              src={LLMImage} 
              alt="LLM Training" 
              className="rounded-2xl shadow-lg w-full max-w-xl lg:max-w-2xl animate-fade-in" 
            />
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto lg:mx-0">
              <Brain className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              LLM Training & Development
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-3xl">
              Custom AI language model training and development for specialized business needs. 
              Transform your business with intelligent automation and AI-powered solutions.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">AI & Machine Learning Expertise</h2>
            <p className="text-lg lg:text-xl max-w-3xl mx-auto">
              We create AI solutions that understand your business context and automate complex tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-lg flex flex-col items-center justify-start space-y-4 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm lg:text-base text-white/80">{feature.description}</p>
              </div>
            ))}
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
            <h2 className="text-3xl lg:text-4xl font-bold">Advanced AI Solutions</h2>
            <p className="text-lg lg:text-xl text-white/90">
              From custom language models to intelligent chatbots, we develop AI solutions 
              that automate complex tasks and enhance business operations.
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
              <Brain className="w-10 h-10 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold">AI Innovation Leaders</h3>
            <p className="text-white/80 leading-relaxed">
              Our AI specialists have developed custom language models achieving 95%+ 
              accuracy rates for various industry-specific applications.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center mt-6">
              <div>
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-white/80">AI Models Built</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-white/80">Avg. Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section with Icons */}
      <section className="py-20 relative z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {howWeWork.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center justify-center text-center h-full animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-white/80">{step.description}</p>
              </div>
            ))}
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Implement AI Solutions?</h2>
            <p className="text-lg lg:text-xl text-white/90">
              Let's explore how custom AI models can transform your business operations. 
              Contact us for a free AI consultation and strategy session.
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

export default LLMTraining;




