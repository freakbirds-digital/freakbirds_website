// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { ArrowRight, Play } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-[#031273] via-[#0528a5] to-[#0a3bce] text-white overflow-hidden">
//       {/* Background Overlay for subtle effect */}
//       <div className="absolute inset-0 bg-white/5 opacity-20"></div>
//       <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
//           <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
//           <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
      
//       <div className="container mx-auto px-4 py-20 lg:py-32 relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div className="space-y-8 animate-fade-in">
//             <div className="space-y-4">
//               <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//                 Transform Your Business with 
//                 <span className="text-accent block lg:inline lg:ml-3">
//                   Digital Excellence
//                 </span>
//               </h1>
//               <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
//                 We build cutting-edge websites, mobile applications, and e-commerce solutions that help businesses grow online. 
//                 Our professional digital marketing, branding, and software development services deliver measurable results and trusted success.
//               </p>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button 
//                 size="lg" 
//                 className="btn-hero bg-accent hover:bg-accent/90 text-accent-foreground"
//                 asChild
//               >
//                 <Link to="/services" className="flex items-center space-x-2">
//                   <span>Explore Services</span>
//                   <ArrowRight size={20} />
//                 </Link>
//               </Button>
              
//               <Button 
//                 size="lg" 
//                 variant="outline" 
//                 // className="btn-hero-outline border-white text-white hover:bg-white hover:text-[#031273]"
//                 className="btn-hero-outline border-white text-[#031273] bg-white hover:bg-white hover:text-[#031273]"
//                 asChild
//               >
//                 <Link to="/portfolio" className="flex items-center space-x-2">
//                   <Play size={20} />
//                   <span>View Portfolio</span>
//                 </Link>
//               </Button>
//             </div>
            
//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-accent">25+</div>
//                 <div className="text-sm text-white/80">Projects Delivered</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-accent">98%</div>
//                 <div className="text-sm text-white/80">Client Satisfaction</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-accent">24/7</div>
//                 <div className="text-sm text-white/80">Support Available</div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Content - Hero Image */}
//           <div className="relative animate-scale-in">
//             <div className="relative bg-white rounded-2xl p-8 shadow-strong animate-zoom-in" style={{ animationDelay: "500ms" }}>
//               <div className="aspect-square bg-gradient-to-br from-blue-100 to-accent/20 rounded-xl flex items-center justify-center">
//                 <div className="text-center space-y-4">
//                   <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto animate-bounce">
//                     <div className="w-12 h-12 bg-[#031273] rounded-full flex items-center justify-center">
//                       <div className="w-6 h-6 bg-accent rounded-full"></div>
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <h3 className="text-xl font-bold text-[#031273] animate-pulse">Digital Solutions</h3>
//                     <p className="text-gray-600 animate-fade-in" style={{ animationDelay: "700ms" }}>
//                       <span className="inline-block animate-bounce" style={{ animationDelay: "0ms" }}>Innovation</span>
//                       <span className="mx-2">•</span>
//                       <span className="inline-block animate-bounce" style={{ animationDelay: "200ms" }}>Quality</span>
//                       <span className="mx-2">•</span>
//                       <span className="inline-block animate-bounce" style={{ animationDelay: "400ms" }}>Results</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               {/* Floating Elements */}
//               <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
//               <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#031273] rounded-full animate-pulse delay-300"></div>
//               <div className="absolute top-1/2 -right-2 w-4 h-4 bg-accent/60 rounded-full animate-pulse delay-700"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const [heroData, setHeroData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/hero")
      .then((res) => res.json())
      .then((data) => setHeroData(data))
      .catch((err) => console.error("Hero fetch error:", err));
  }, []);

  if (!heroData) return null;

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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
                Transform Your Business with
                <span className="text-accent ml-2">Digital Excellence</span>
              </h1>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-md mx-auto lg:mx-0">
                {heroData.subheading}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              {heroData.buttons.map((btn: any, idx: number) => (
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
              {heroData.stats.map((stat: any, idx: number) => (
                <div className="text-center" key={idx}>
                  <div className="text-lg sm:text-xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/75">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-scale-in flex justify-center lg:justify-end">
            <div
              className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-xl animate-zoom-in w-[90%] sm:w-[70%] md:w-[80%] lg:w-[85%]"
              style={{ animationDelay: "500ms" }}
            >
              <div
                className={`aspect-square bg-gradient-to-br from-${heroData.heroImage.gradientFrom} to-${heroData.heroImage.gradientTo} rounded-xl flex items-center justify-center`}
              >
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
                    <p
                      className="text-xs sm:text-sm text-gray-600 animate-fade-in"
                      style={{ animationDelay: "700ms" }}
                    >
                      <span className="inline-block animate-bounce">Innovation</span>
                      <span className="mx-1">•</span>
                      <span className="inline-block animate-bounce" style={{ animationDelay: "200ms" }}>
                        Quality
                      </span>
                      <span className="mx-1">•</span>
                      <span className="inline-block animate-bounce" style={{ animationDelay: "400ms" }}>
                        Results
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating circles */}
              {heroData.heroImage.floatingCircles.map((circle: any, idx: number) => (
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

