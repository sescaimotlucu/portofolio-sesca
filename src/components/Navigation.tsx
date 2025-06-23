
import { useState, useEffect } from "react";
import { Menu, X, Star } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-[#FFF5D7]/90 backdrop-blur-md shadow-lg shadow-[#E195AB]/20" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-[#E195AB] flex items-center gap-2" style={{ fontFamily: 'Fredoka, cursive' }}>
            <Star className="w-6 h-6 fill-[#E195AB]" />
            Fransiska
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["About", "Education", "Experience", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#E195AB] hover:text-[#FFCCE1] transition-colors duration-200 font-medium"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#E195AB]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-[#FFF5D7]/95 rounded-b-2xl">
            {["About", "Education", "Experience", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 px-4 text-[#E195AB] hover:text-[#FFCCE1] hover:bg-[#F2F9FF]/50 transition-all duration-200 rounded-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
