import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import freakbirdsLogo from "@/assets/freakbirds-logo.png";

const Footer = () => {
  // ✅ Sample working social media links
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578345685002" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/freakbirds_digital/" },
  ];

  return (
    <footer className="bg-[#031273] text-white relative overflow-hidden">
      {/* floating circles background */}
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
                className="h-28 w-auto transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <p className="text-primary-foreground/90 text-base leading-relaxed">
              Professional digital solutions for modern businesses. We deliver
              exceptional website development, mobile apps, and comprehensive
              digital services.
            </p>

            {/* ✅ Social Media Icons with round hover animation */}
            <div className="flex space-x-5">
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                  >
                    <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-110 transition-transform duration-300 ease-out blur-sm"></span>
                    <div className="relative bg-white/10 hover:bg-accent rounded-full p-2 transition-all duration-300 flex items-center justify-center">
                      <Icon
                        size={15}
                        className="text-white group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-slide-up [animation-delay:200ms]">
            <h3 className="text-xl font-semibold text-accent">Services</h3>
            <ul className="space-y-2 text-base">
              {[
                ["Website Development", "/services/web-development"],
                ["Mobile App Development", "/services/mobile-development"],
                ["E-commerce Development", "/services/ecommerce"],
                ["Bookkeeping & CA Support", "/services/bookkeeping"],
                ["LLM Training", "/services/llm-training"],
                ["Branding & Design", "/services/branding"],
              ].map(([name, link], idx) => (
                <li key={idx}>
                  <Link
                    to={link}
                    className="relative inline-block text-primary-foreground/80 hover:text-accent transition-colors group"
                  >
                    {name}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-slide-up [animation-delay:400ms]">
            <h3 className="text-xl font-semibold text-accent">Quick Links</h3>
            <ul className="space-y-2 text-base">
              {[
                ["About Us", "/about"],
                ["Portfolio", "/portfolio"],
                ["All Services", "/services"],
                ["Contact", "/contact"],
                ["Privacy Policy", "#"],
                ["Terms of Service", "#"],
              ].map(([name, link], idx) => (
                <li key={idx}>
                  <Link
                    to={link}
                    className="relative inline-block text-primary-foreground/80 hover:text-accent transition-colors group"
                  >
                    {name}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-slide-up [animation-delay:600ms]">
            <h3 className="text-xl font-semibold text-accent">Contact Info</h3>
            <div className="space-y-3 text-base">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent animate-pulse" />
                <span className="text-primary-foreground/80">
                  hello@freakbirds.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent animate-pulse" />
                <span className="text-primary-foreground/80">
                  +91 99524 91705
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-accent animate-pulse" />
                <span className="text-primary-foreground/80">
                  Global services, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-10 pt-8 flex flex-col md:flex-row items-center justify-between text-base text-primary-foreground/80 animate-fade-in [animation-delay:800ms]">
          <p>&copy; 2025 Freakbirds Digital. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed & Developed with ❤️ by Freakbirds Digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
