import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, ArrowRight, Cpu, Database, Zap, Target, CheckCircle as CheckIcon } from "lucide-react";
import LLMImage from "@/assets/LLM.png";

type Feature = { icon: string; title: string; description: string };
type HowWeWorkStep = { icon: string; title: string; description: string };

const iconMap: { [key: string]: any } = { Cpu, Database, Zap, Target, CheckCircle };

const LLMTraining = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [services, setServices] = useState<string[]>([]);
  const [howWeWork, setHowWeWork] = useState<HowWeWorkStep[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services/llm-training/features")
      .then(res => res.json())
      .then(setFeatures);

    fetch("http://localhost:5000/api/services/llm-training/services-list")
      .then(res => res.json())
      .then(setServices);

    fetch("http://localhost:5000/api/services/llm-training/how-we-work")
      .then(res => res.json())
      .then(setHowWeWork);
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white overflow-hidden">
      
      {/* Background Animated Circles */}
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
            <img src={LLMImage} alt="LLM Training" className="rounded-2xl shadow-lg w-full max-w-xl lg:max-w-2xl animate-fade-in" />
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto lg:mx-0">
              <Brain className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">LLM Training & Development</h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-3xl">
              Custom AI language model training and development for specialized business needs. Transform your business with intelligent automation and AI-powered solutions.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={index} className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-lg flex flex-col items-center justify-start space-y-4 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm lg:text-base text-white/80">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services + AI Innovation Leaders */}
      <section className="py-20 bg-white/5 relative z-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
      <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>           
      <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
       </div>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Advanced AI Solutions</h2>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/80">{service}</span>
                </div>
              ))}
            </div>
          </div>
          {/* AI Innovation Leaders Box */}
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

      {/* How We Work */}
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
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center justify-center text-center h-full animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-accent" />
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Implement AI Solutions?</h2>
            <p className="text-lg lg:text-xl text-white/90">
              Let's explore how custom AI models can transform your business operations. 
              Contact us for a free AI consultation and strategy session.
            </p>
            <Button size="lg" className="bg-white text-accent hover:bg-white/90" asChild>
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
