import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [siteData, setSiteData] = useState<any>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    fetch("http://localhost:5000/api/site") // adjust URL if needed
      .then((res) => res.json())
      .then((data) => {
        setSiteData(data);
        if (data?.title) document.title = data.title;
      })
      .catch((err) => console.error("Header fetch error:", err));
  }, []);

  if (!siteData) return null;

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
                className="h-28 w-auto"
              />
            </Link>
          </div>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-8 lg:space-x-12 text-base lg:text-lg font-medium">
            {siteData.navItems.map((item: any) => (
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
              className="bg-transparent border-accent text-accent text-lg px-6 py-2 hover:bg-accent hover:text-accent-foreground rounded-md"
              asChild
            >
              <Link to={siteData.cta.link}>{siteData.cta.text}</Link>
            </Button>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- Mobile Navigation Menu --- */}
        <div
          className={`md:hidden fixed top-20 left-0 w-full bg-[#02105c] border-t border-white/10 shadow-xl transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-5 invisible"
          }`}
        >
          <nav className="flex flex-col space-y-2 py-4 px-4 sm:px-6">
            {siteData.navItems.map((item: any) => (
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

