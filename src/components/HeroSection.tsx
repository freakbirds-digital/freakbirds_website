import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  // Static hero data
  const heroData = {
    heading: "Transform Your Business with Digital Excellence",
    subheading:
      "We build cutting-edge websites, mobile applications, and e-commerce solutions that help businesses grow online. Our professional digital marketing, branding, and software development services deliver measurable results and trusted success.",
    buttons: [
      {
        text: "Explore Services",
        link: "/services",
        icon: "ArrowRight",
        style: "bg-accent hover:bg-accent/90 text-accent-foreground",
      },
      {
        text: "View Portfolio",
        link: "/portfolio",
        icon: "Play",
        style:
          "border-white text-[#031273] bg-white hover:bg-white hover:text-[#031273]",
      },
    ],
    stats: [
      { label: "Projects Delivered", value: "25+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Support Available", value: "24/7" },
    ],
    heroImage: {
      gradientFrom: "blue-100",
      gradientTo: "accent/20",
      floatingCircles: [
        { size: "w-8 h-8", color: "bg-accent", top: "-top-4", left: "-left-4", animate: "animate-pulse" },
        { size: "w-6 h-6", color: "bg-[#031273]", bottom: "-bottom-4", right: "-right-4", animate: "animate-pulse delay-300" },
        { size: "w-4 h-4", color: "bg-accent/60", top: "top-1/2", right: "-right-2", animate: "animate-pulse delay-700" }
      ]
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white overflow-hidden text-base">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-white/5 opacity-20"></div>
      <div className="absolute w-56 h-56 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
      <div className="absolute w-48 h-48 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
      <div className="absolute w-36 h-36 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-28 relative max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Transform Your Business with{' '}
                <span className="text-accent">Digital Excellence</span>
              </h1>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-md mx-auto lg:mx-0">
                {heroData.subheading}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              {heroData.buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  size="default"
                  className={`btn-hero ${btn.style} px-5 py-2 text-sm sm:text-base`}
                  asChild
                >
                  <Link to={btn.link} className="flex items-center justify-center gap-2">
                    {btn.icon === "ArrowRight" && <ArrowRight size={18} />}
                    {btn.icon === "Play" && <Play size={18} />}
                    <span>{btn.text}</span>
                  </Link>
                </Button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/25 max-w-sm mx-auto lg:mx-0">
              {heroData.stats.map((stat, idx) => (
                <div className="text-center" key={idx}>
                  <div className="text-lg sm:text-xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/75">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-scale-in flex justify-center lg:justify-end">
            <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-xl animate-zoom-in w-[90%] sm:w-[70%] md:w-[80%] lg:w-[85%]">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#031273] rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-accent rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-semibold text-[#031273] animate-pulse">
                      Digital Solutions
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 animate-fade-in">
                      <span className="inline-block animate-bounce">Innovation</span>
                      <span className="mx-1">•</span>
                      <span className="inline-block animate-bounce delay-200">Quality</span>
                      <span className="mx-1">•</span>
                      <span className="inline-block animate-bounce delay-400">Results</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating circles */}
              {heroData.heroImage.floatingCircles.map((circle, idx) => (
                <div
                  key={idx}
                  className={`absolute ${circle.top || ""} ${circle.left || ""} ${circle.bottom || ""} ${circle.right || ""} ${circle.size} ${circle.color} rounded-full ${circle.animate}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
