
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF5D7] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#E195AB]" style={{ fontFamily: 'Fredoka, cursive' }}>
            {t('education.title')} ✨
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('education.subtitle')}
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-2xl w-full bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-[#E195AB]/20 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-[#E195AB] to-[#FFCCE1] rounded-2xl p-4 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#E195AB] mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
                    {t('education.university')}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-4 h-4 text-[#FFCCE1]" />
                      <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('education.degree')}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-[#FFCCE1]" />
                      <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('education.year')}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-[#FFCCE1]" />
                      <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('education.location')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-[#F2F9FF] to-[#FFCCE1]/30 rounded-2xl">
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t('education.description')} 💖
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
