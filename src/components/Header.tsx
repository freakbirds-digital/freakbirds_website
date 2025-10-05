import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Import the logo as a module
import freakbirdsLogo from "@/assets/freakbirds-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Static site data
  const siteData = {
    title: "Freakbirds Digital",
    logoUrl: freakbirdsLogo, // Use imported logo here
    navItems: [
      { name: "Smart Solutions", path: "/" },
      { name: "What We Do", path: "/services" },
      { name: "Who We Are", path: "/about" },
      { name: "Our Work", path: "/portfolio" },
      { name: "Work With Us", path: "/contact" },
    ],
    cta: {
      text: "Get Quote",
      link: "/contact",
    },
  };

  return (
    <header className="bg-[#031273] text-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={siteData.logoUrl}
                alt={siteData.title}
                className="h-20 md:h-28 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-8 lg:space-x-12 text-base lg:text-lg font-medium">
            {siteData.navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-yellow-400 font-semibold"
                    : "text-white/90 hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden md:flex justify-end flex-shrink-0">
            <Button
              variant="outline"
              className="bg-transparent border-yellow-400 text-yellow-400 text-lg px-6 py-2 hover:bg-yellow-400 hover:text-[#031273] rounded-md"
              asChild
            >
              <Link to={siteData.cta.link}>{siteData.cta.text}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed top-20 left-0 w-full bg-[#02105c] border-t border-white/10 shadow-xl transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-5 invisible"
          }`}
        >
          <nav className="flex flex-col space-y-2 py-4 px-4 sm:px-6">
            {siteData.navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-3 rounded-md text-base sm:text-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-yellow-400 text-[#031273] font-semibold"
                    : "text-white/90 hover:bg-yellow-400 hover:text-[#031273]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3">
              <Button
                variant="outline"
                className="w-full border-yellow-400 text-yellow-400 text-base hover:bg-yellow-400 hover:text-[#031273] rounded-md transition-all duration-300"
                asChild
              >
                <Link
                  to={siteData.cta.link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {siteData.cta.text}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
