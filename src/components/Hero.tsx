
import { ArrowDown, Download, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-[#FFCCE1] animate-pulse">
        <Sparkles size={24} />
      </div>
      <div className="absolute top-32 right-20 text-[#E195AB] animate-bounce">
        <Heart size={20} fill="currentColor" />
      </div>
      <div className="absolute bottom-40 left-20 text-[#FFCCE1] animate-pulse">
        <Sparkles size={16} />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img
                src="/lovable-uploads/d5ac0e49-c77a-4228-90d9-bc165110b9ed.png"
                alt="Fransiska"
                className="w-80 h-96 object-cover rounded-3xl shadow-2xl shadow-[#E195AB]/30 ring-4 ring-[#FFCCE1]/50"
              />
              <div className="absolute -top-4 -right-4 bg-[#E195AB] rounded-full p-3 shadow-lg">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-4" style={{ fontFamily: 'Fredoka, cursive' }}>
                <span className="text-[#E195AB] block leading-none">PORT</span>
                <span className="text-transparent bg-gradient-to-r from-[#E195AB] to-[#FFCCE1] bg-clip-text block leading-none -mt-4">FOLIO</span>
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl text-[#E195AB] mb-8 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('hero.greeting')} <span className="font-bold text-[#E195AB]">Fransiska</span>, 
              <br />
              {t('hero.description')} ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#E195AB] to-[#FFCCE1] hover:from-[#FFCCE1] hover:to-[#E195AB] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-[#E195AB]/30 hover:shadow-xl hover:shadow-[#FFCCE1]/40 transition-all duration-300 transform hover:-translate-y-1"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Download className="w-5 h-5 mr-2" />
                {t('hero.download')}
              </Button>
            </div>
            
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-[#E195AB] hover:text-[#FFCCE1] transition-colors duration-200 flex flex-col items-center gap-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="text-sm">{t('hero.scroll')}</span>
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
