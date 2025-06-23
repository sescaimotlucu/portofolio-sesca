
import { Briefcase, Users, Mic, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "Internal Liaison Officer & MC",
      organization: "HMPPSI (Himpunan Mahasiswa Program Studi Sistem Informasi)",
      period: "2022 - 2023",
      type: "Organization",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "from-[#E195AB] to-[#FFCCE1]",
      description: "Led internal communications and served as Master of Ceremony for various campus events. Developed leadership and public speaking skills while fostering student community engagement."
    },
    {
      title: "Intern",
      organization: "PT Ngupoyo Lestari Mulya",
      period: "January 2025 - April 2025",
      type: "Internship",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      color: "from-[#FFCCE1] to-[#F2F9FF]",
      description: "Upcoming internship opportunity to apply theoretical knowledge in real-world business environment and gain hands-on experience in information systems implementation."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F9FF]/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#E195AB]" style={{ fontFamily: 'Fredoka, cursive' }}>
            Experience 💼
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            My journey in organizations and professional development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-[#E195AB]/20 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`bg-gradient-to-r ${exp.color} rounded-2xl p-4 shadow-lg flex-shrink-0 w-fit h-fit`}>
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#E195AB] mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-gray-700 font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {exp.organization}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-[#FFCCE1]" />
                          <span className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {exp.period}
                          </span>
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-[#FFCCE1] to-[#F2F9FF] text-[#E195AB] rounded-full text-sm font-medium w-fit">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
