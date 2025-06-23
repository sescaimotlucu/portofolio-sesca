
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF5D7] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#E195AB]" style={{ fontFamily: 'Fredoka, cursive' }}>
            Education ✨
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            My academic journey in Information Systems
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
                    Universitas Katolik Soegijapranata
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-4 h-4 text-[#FFCCE1]" />
                      <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Bachelor of Information Systems
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-[#FFCCE1]" />
                      <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Class of 2022 - Present
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-[#FFCCE1]" />
                      <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Semarang, Indonesia
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-[#F2F9FF] to-[#FFCCE1]/30 rounded-2xl">
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Currently pursuing my bachelor's degree with focus on system development, 
                      database management, and modern web technologies. Active in campus 
                      organizations and always eager to learn new technologies! 💖
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
