import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import teamImg from "@/assets/enchanted-office.png"; // use your uploaded image

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients, treating their success as our own and building lasting partnerships.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Quality is non-negotiable. We maintain the highest standards in every project, no matter the size or complexity.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "We deliver on time, every time. Our clients trust us to meet deadlines and exceed expectations consistently.",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Company Founded",
      description:
        "Started with a vision to provide exceptional digital solutions for businesses of all sizes.",
    },
    {
      year: "2024",
      title: "Service Expansion",
      description:
        "Expanded our services to include AI/ML solutions and comprehensive business support services.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Recognized as a leading digital solutions provider with award-winning projects.",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description:
        "Expanding our reach to serve clients worldwide with innovative digital solutions.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with animated background */}
      <section className="bg-[#031273] text-white py-20 relative overflow-hidden">
        {/* Animated floating balls */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>

        <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold">
              About Freakbirds Digital
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              We're a passionate team of digital experts dedicated to
              transforming businesses through innovative technology solutions
              and exceptional service.
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 text-[#031273] hover:bg-yellow-300"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Right Image */}
          <div className="animate-scale-in relative z-10">
            <img
              src={teamImg}
              alt="Freakbirds Team"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

{/* Mission & Vision */}
<section className="py-20 bg-background relative overflow-hidden">
  {/* Animated Background Balls */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-72 h-72 bg-yellow-400/20 rounded-full top-10 left-10 animate-move-diagonal"></div>
    <div className="absolute w-56 h-56 bg-primary/10 rounded-full bottom-20 right-20 animate-move-circle"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6 animate-slide-up">
      <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        To empower businesses with <span className="text-accent font-semibold">innovative digital solutions</span> 
        that fuel growth, improve efficiency, and create lasting customer trust. 
        We aim to turn ambitious ideas into measurable results.
      </p>
    </div>
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        To be a <span className="text-accent font-semibold">global leader in digital transformation</span>, 
        helping businesses of all sizes thrive in the digital-first world with 
        cutting-edge technology, creativity, and excellence.
      </p>
    </div>
  </div>
</section>

      {/* Core Values */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-soft text-center animate-scale-in hover:scale-105 transition-transform"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Journey
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-1/2 px-4">
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <h3 className="text-xl font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                      <span className="text-yellow-500 font-bold">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Why Choose Freakbirds Digital?
              </h2>
              <p className="text-xl text-muted-foreground">
                We're more than just a service provider - we're your strategic
                partner in digital transformation and business growth.
              </p>

              <div className="space-y-4">
                {[
                  "Proven track record with 100+ successful projects",
                  "Expert team with diverse skills and experience",
                  "Custom solutions tailored to your specific needs",
                  "Transparent communication and project management",
                  "Ongoing support and maintenance services",
                  "Competitive pricing with excellent ROI",
                  "Latest technologies and industry best practices",
                  "100% client satisfaction guarantee",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="btn-hero" asChild>
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              <div className="bg-card p-6 rounded-lg shadow-soft text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft text-center">
                <div className="text-3xl font-bold text-accent mb-2">2+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft text-center">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90">
              Let's discuss how we can help transform your business with our
              comprehensive digital solutions. Contact us today for a free
              consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-[#031273] font-semibold px-6 py-3 rounded-md shadow-lg transition-all"
                asChild
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;




