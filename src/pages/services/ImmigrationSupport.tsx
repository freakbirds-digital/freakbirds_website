import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Users,
  Clock,
  Shield
} from "lucide-react";
import ImmigrationImage from "@/assets/immigration.png";

const ImmigrationSupport = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Preparation",
      description: "Expert assistance with preparing and organizing all required immigration documents."
    },
    {
      icon: Globe,
      title: "Global Coverage", 
      description: "Support for immigration processes to multiple countries and visa categories."
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Professional guidance from immigration specialists with years of experience."
    },
    {
      icon: Clock,
      title: "Timely Processing",
      description: "Efficient handling of applications with regular status updates and follow-ups."
    }
  ];

  const services = [
    "Document Review & Preparation",
    "Application Form Assistance", 
    "Visa Category Assessment",
    "Supporting Document Collection",
    "Application Submission Support",
    "Status Tracking & Updates",
    "Interview Preparation",
    "Appeal & Reapplication Services",
    "Family Reunification Support",
    "Business Immigration Consultation"
  ];

  const howWeWork = [
    {
      icon: FileText,
      title: "Initial Consultation",
      description: "We analyze your immigration needs and guide you on the suitable visa type and process."
    },
    {
      icon: Globe,
      title: "Document Collection",
      description: "Assist you in gathering and organizing all required documents for submission."
    },
    {
      icon: Users,
      title: "Application Submission",
      description: "Prepare and submit the application accurately to reduce delays or errors."
    },
    {
      icon: Clock,
      title: "Follow-up & Tracking",
      description: "Regularly track your application and provide updates until final approval."
    },
    {
      icon: Shield,
      title: "Support & Guidance",
      description: "Offer ongoing support for interviews, appeals, or any additional requirements."
    }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white overflow-hidden">
      {/* Animated Background Circles */}
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
          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <img 
              src={ImmigrationImage} 
              alt="Immigration Support" 
              className="rounded-2xl shadow-lg w-3/4 max-w-md lg:max-w-lg animate-fade-in" 
            />
          </div>

          {/* Text */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto lg:mx-0">
              <FileText className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Immigration Document Support
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-3xl">
              Professional assistance with immigration paperwork, documentation processes, and 
              application support to simplify complex immigration requirements and increase approval chances.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link to="/contact">Get Started Today</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Core Services</h2>
            <p className="text-lg lg:text-xl max-w-3xl mx-auto">
              We provide end-to-end immigration support to ensure your applications are accurate, complete, and submitted on time.
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
      <section className="py-20 bg-white/10 relative z-10">
       <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Complete Immigration Assistance</h2>
            <p className="text-lg lg:text-xl text-white/90">
              From consultation to submission, we simplify the immigration process and provide guidance every step of the way.
            </p>
            <div className="space-y-3">
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
              <Shield className="w-10 h-10 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Trusted Immigration Partner</h3>
            <p className="text-white/80 leading-relaxed">
              Successfully assisted 500+ clients with a 90% approval rate across visa categories.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center mt-6">
              <div>
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Clients Helped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">90%</div>
                <div className="text-sm text-white/80">Approval Rate</div>
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
            {howWeWork.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center justify-center text-center h-full animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Start Your Immigration Journey Today</h2>
            <p className="text-lg lg:text-xl text-white/90">
              Let our experts guide you through the process and improve your approval chances.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-accent hover:bg-white/90"
              asChild
            >
              <Link to="/contact" className="flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImmigrationSupport;




