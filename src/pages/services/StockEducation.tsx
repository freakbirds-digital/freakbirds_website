import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  PieChart,
  BookOpen,
  Award,
  Target,
  Cpu,
  Zap,
  PieChart as WorkPieChart
} from "lucide-react";
import StockImage from "@/assets/Stock.png";

const StockEducation = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Trading Strategies",
      description: "Learn proven trading strategies for different market conditions and risk levels."
    },
    {
      icon: PieChart,
      title: "Portfolio Management", 
      description: "Master the art of portfolio diversification and risk management techniques."
    },
    {
      icon: BookOpen,
      title: "Market Analysis",
      description: "Technical and fundamental analysis skills to make informed investment decisions."
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Industry-recognized certification courses to advance your trading career."
    }
  ];

  const services = [
    "Stock Market Fundamentals Course",
    "Technical Analysis Training", 
    "Fundamental Analysis Workshop",
    "Risk Management Strategies",
    "Portfolio Building & Diversification",
    "Options & Derivatives Trading",
    "Commodity Market Education",
    "Forex Trading Basics",
    "Investment Psychology Training",
    "Live Market Mentorship"
  ];

  const howWeWork = [
    {
      title: "Learning Assessment",
      description: "We evaluate your current knowledge and tailor courses to fit your learning pace.",
      icon: Target
    },
    {
      title: "Customized Curriculum",
      description: "Create a structured plan combining theory, practical exercises, and live trading.",
      icon: Cpu
    },
    {
      title: "Interactive Training",
      description: "Hands-on lessons with real market scenarios, analysis tools, and case studies.",
      icon: PieChart
    },
    {
      title: "Mentorship & Support",
      description: "Ongoing guidance and Q&A sessions to ensure you apply knowledge effectively.",
      icon: Zap
    },
    {
      title: "Certification & Growth",
      description: "Complete courses with recognized certification and support for your trading career.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
      <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>

{/* Hero Section */}
<section className="py-20 relative z-10">
  <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
        </div>
  <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Image */}
    <div className="flex-1 flex justify-center lg:justify-start">
      <img 
        src={StockImage} 
        alt="Stock Education" 
        className="rounded-2xl shadow-lg w-3/4 max-w-md lg:max-w-lg animate-fade-in" 
      />
    </div>

    {/* Text */}
    <div className="flex-1 space-y-6 text-center lg:text-left">
      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto lg:mx-0">
        <GraduationCap className="w-10 h-10 text-accent-foreground" />
      </div>
      <h1 className="text-4xl lg:text-6xl font-bold">
        Stock Market Education
      </h1>
      <p className="text-lg lg:text-xl leading-relaxed max-w-3xl">
        Comprehensive courses and mentorship to help you learn trading, analysis, and portfolio management. Build confidence and grow your investment skills with practical guidance.
      </p>
      <Button 
        size="lg" 
        className="bg-accent hover:bg-accent/90 text-accent-foreground"
        asChild
      >
        <Link to="/contact">Start Your Learning Journey</Link>
      </Button>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Expert Financial Education</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Learn from experienced traders and financial experts who have successfully navigated various markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-lg flex flex-col items-center justify-start space-y-4 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Comprehensive Trading Courses</h2>
            <p className="text-lg text-white/90">
              From fundamentals to advanced strategies, our courses cover everything to help you become a skilled trader.
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
              <Award className="w-10 h-10 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Proven Results</h3>
            <p className="text-white/80 leading-relaxed">
              Our students have achieved an average 85% profitability rate through structured courses and mentorship.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center mt-6">
              <div>
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-white/80">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-white/80">Success Rate</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Learning?</h2>
            <p className="text-lg text-white/90">
              Join thousands of successful traders who started their journey with our expert guidance.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-accent hover:bg-white/90"
              asChild
            >
              <Link to="/contact" className="flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StockEducation;






