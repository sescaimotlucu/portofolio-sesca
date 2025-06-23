
import { useState, useEffect } from "react";
import { Menu, X, Star, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
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
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Education", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#E195AB] hover:text-[#FFCCE1] transition-colors duration-200 font-medium"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {t(`nav.${item.toLowerCase()}`)}
              </button>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#E195AB] to-[#FFCCE1] text-white rounded-full hover:from-[#FFCCE1] hover:to-[#E195AB] transition-all duration-300 font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-[#E195AB] to-[#FFCCE1] text-white rounded-full text-sm"
            >
              <Globe className="w-3 h-3" />
              {language.toUpperCase()}
            </button>
            
            <button
              className="p-2 text-[#E195AB]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-[#FFF5D7]/95 rounded-b-2xl">
            {["About", "Education", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 px-4 text-[#E195AB] hover:text-[#FFCCE1] hover:bg-[#F2F9FF]/50 transition-all duration-200 rounded-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {t(`nav.${item.toLowerCase()}`)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
