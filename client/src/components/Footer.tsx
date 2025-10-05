import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import freakbirdsLogo from "@/assets/freakbirds-logo.png";

const Footer = () => {
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/footer")
      .then(res => res.json())
      .then(data => setFooterData(data))
      .catch(err => console.error(err));
  }, []);

  if (!footerData) return null;

  return (
    <footer className="bg-[#031273] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-accent/20 rounded-full animate-move-circle"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-accent/15 rounded-full animate-move-reverse"></div>
        <div className="absolute top-16 right-24 w-14 h-14 bg-accent/20 rounded-full animate-move-diagonal"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-accent/10 rounded-full animate-move-circle"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-accent/10 rounded-full animate-move-diagonal"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={freakbirdsLogo} 
                alt="Freakbirds Digital" 
                className="h-16 md:h-28 w-auto transition-transform duration-500 hover:scale-105" 
              />
            </Link>
            <p className="text-sm md:text-base text-primary-foreground/90 leading-relaxed">
              Professional digital solutions for modern businesses. We deliver exceptional website development, mobile apps, and comprehensive digital services.
            </p>
            <div className="flex space-x-4 md:space-x-5">
              <a href={footerData.socials.facebook}><Facebook size={18} /></a>
              <a href={footerData.socials.twitter}><Twitter size={18} /></a>
              <a href={footerData.socials.linkedin}><Linkedin size={18} /></a>
              <a href={footerData.socials.instagram}><Instagram size={18} /></a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-slide-up [animation-delay:200ms]">
            <h3 className="text-lg md:text-xl font-semibold text-accent">Services</h3>
            <ul className="space-y-2 text-sm md:text-base">
              {footerData.services.map((service: any, idx: number) => (
                <li key={idx}>
                  <Link to={service.link} className="relative inline-block text-primary-foreground/80 hover:text-accent transition-colors group">
                    {service.name}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slide-up [animation-delay:400ms]">
            <h3 className="text-lg md:text-xl font-semibold text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              {footerData.quickLinks.map((link: any, idx: number) => (
                <li key={idx}>
                  <Link to={link.link} className="relative inline-block text-primary-foreground/80 hover:text-accent transition-colors group">
                    {link.name}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-slide-up [animation-delay:600ms]">
            <h3 className="text-lg md:text-xl font-semibold text-accent">Contact Info</h3>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent animate-pulse" />
                <span>{footerData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent animate-pulse" />
                <span>{footerData.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-accent animate-pulse" />
                <span>{footerData.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm md:text-base text-primary-foreground/80 animate-fade-in [animation-delay:800ms]">
          <p>{footerData.copyright}</p>
          <p className="mt-2 md:mt-0">{footerData.designer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
