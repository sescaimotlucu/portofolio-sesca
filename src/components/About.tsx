
import { Heart, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F9FF]/50 relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 text-[#FFCCE1] animate-pulse">
        <Star size={20} fill="currentColor" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#E195AB]" style={{ fontFamily: 'Fredoka, cursive' }}>
            {t('about.title')}
            <Sparkles className="inline-block ml-2 w-8 h-8 text-[#FFCCE1]" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/lovable-uploads/93b469d5-8241-421a-9618-f772c7fc2dc8.png"
                alt="Fransiska Portrait"
                className="w-80 h-80 rounded-full object-cover shadow-2xl shadow-[#E195AB]/30 ring-8 ring-[#FFCCE1]/50"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#E195AB] to-[#FFCCE1] rounded-full p-4 shadow-lg">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-[#E195AB]/20">
              <h3 className="text-2xl font-bold mb-4 text-[#E195AB]" style={{ fontFamily: 'Fredoka, cursive' }}>
                {t('about.subtitle')}
              </h3>
              <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <p className="leading-relaxed">
                  {t('about.birth')} <span className="text-[#E195AB] font-semibold">04 November 2004</span>, 
                  {t('about.description1')}
                </p>
                <p className="leading-relaxed">
                  {t('about.description2')}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#FFCCE1] to-[#F2F9FF] text-[#E195AB] rounded-full text-sm font-medium">
                    {t('about.creative')}
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#FFCCE1] to-[#F2F9FF] text-[#E195AB] rounded-full text-sm font-medium">
                    {t('about.solver')}
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#FFCCE1] to-[#F2F9FF] text-[#E195AB] rounded-full text-sm font-medium">
                    {t('about.team')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
