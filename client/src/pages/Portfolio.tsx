import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  ShoppingCart,
  Brain,
  Palette,
  Star,
  ArrowRight,
} from "lucide-react";

import girlImage from "@/assets/Girl.png";
import manImage from "@/assets/Men.png";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  client: string;
  year: string;
  rating: number;
  liveUrl: string;
  githubUrl: string;
}

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: "all", name: "All Projects", icon: Globe },
    { id: "web", name: "Web Development", icon: Globe },
    { id: "mobile", name: "Mobile Apps", icon: Smartphone },
    { id: "ecommerce", name: "E-commerce", icon: ShoppingCart },
    { id: "ai", name: "AI/ML", icon: Brain },
    { id: "branding", name: "Branding", icon: Palette },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/portfolio");
        const data = await res.json();
        setProjects(data.projects);
        setTestimonials(data.testimonials);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching portfolio:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-foreground">
        Loading Portfolio...
      </div>
    );

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#031273] via-[#1e3a8a] to-[#2563eb] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-yellow-400/30 rounded-full top-10 left-10 animate-move-diagonal"></div>
          <div className="absolute w-64 h-64 bg-white/10 rounded-full bottom-20 right-20 animate-move-reverse"></div>
          <div className="absolute w-48 h-48 bg-yellow-500/20 rounded-full top-1/3 left-1/2 animate-move-circle"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-3 items-center gap-10">
          {/* Left - Girl */}
          <div className="flex justify-center md:justify-start animate-fade-in-left">
            <img src={girlImage} alt="Team Girl" className="w-60 md:w-80 drop-shadow-2xl" />
          </div>

          {/* Center - Content */}
          <div className="text-center md:text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold">Our Portfolio</h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Explore our successful projects and see how we’ve helped businesses
              transform their digital presence with{" "}
              <span className="text-yellow-400 font-semibold">innovation</span> and{" "}
              <span className="text-yellow-400 font-semibold">creativity</span>.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                size="lg"
                className="w-48 bg-yellow-400 hover:bg-yellow-500 text-[#031273] font-semibold px-6 py-3 rounded-xl shadow-lg transition-all"
                asChild
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>

          {/* Right - Man */}
          <div className="flex justify-center md:justify-end animate-fade-in-right">
            <img src={manImage} alt="Team Man" className="w-60 md:w-80 drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="flex items-center gap-2 min-w-[160px] justify-center py-3 rounded-lg shadow transition-all"
              >
                <category.icon size={16} />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-slide-up flex flex-col"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={`http://localhost:5000${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{project.client}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-[#031273] px-2 py-1 rounded text-xs font-semibold">
                    {project.year}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-600 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-[#031273] text-white hover:bg-[#041d99] min-h-[44px]"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" /> View Live
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="min-h-[44px]" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-primary/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-spin-slow" />
          <div className="absolute top-1/3 -right-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-bounce-slow" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's what our clients have to say about working with us on these projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-soft animate-slide-up relative z-10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#004aad] to-[#0073e6] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-ping" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-spin-slow" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join our portfolio of successful projects. Let's discuss how we can help you
              achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-[#031273] font-semibold px-6 py-3 rounded-md shadow-lg transition-all"
                asChild
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
