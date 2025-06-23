
import { ExternalLink, Github, Code, Palette, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Sistem Penilaian Guru Nusput",
      description: "Sistem evaluasi kinerja guru dengan fitur penilaian multi-aspek dan laporan otomatis",
      descriptionEn: "Teacher evaluation system with multi-aspect assessment features and automated reporting",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      tech: ["PHP", "Laravel", "MySQL", "Chart.js"],
      color: "from-[#FFE4E1] to-[#FFF0F5]"
    },
    {
      title: "Sistem Pengingat Kandri",
      description: "Aplikasi pengingat cerdas untuk kegiatan dan jadwal penting dengan notifikasi real-time",
      descriptionEn: "Smart reminder application for important activities and schedules with real-time notifications",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["JavaScript", "Node.js", "MongoDB", "WebPush"],
      color: "from-[#F0F8FF] to-[#E6F3FF]"
    },
    {
      title: "Sistem Absensi Karyawan PT Ngupoyo",
      description: "Sistem manajemen kehadiran karyawan dengan fitur tracking lokasi dan laporan komprehensif",
      descriptionEn: "Employee attendance management system with location tracking and comprehensive reporting",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      tech: ["Laravel", "PHP", "MySQL", "GPS API"],
      color: "from-[#FFF5EE] to-[#FFEEE6]"
    },
    {
      title: "E-Tourism Kalimantan Barat",
      description: "Platform wisata digital untuk promosi destinasi dan budaya Kalimantan Barat",
      descriptionEn: "Digital tourism platform for promoting West Kalimantan destinations and culture",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
      tech: ["Vue.js", "Laravel", "MySQL", "Maps API"],
      color: "from-[#F5FFFA] to-[#F0FFF0]"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FEFEFE] to-[#F8F9FA] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#8B7D6B]" style={{ fontFamily: 'Fredoka, cursive' }}>
            {t('projects.title')} 💻
          </h2>
          <p className="text-xl text-[#6B7280]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border border-[#E5E7EB] shadow-lg shadow-black/5 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#8B7D6B] mb-3" style={{ fontFamily: 'Fredoka, cursive' }}>
                  {project.title}
                </h3>
                
                <p className="text-[#6B7280] mb-4 leading-relaxed text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-[#F3F4F6] to-[#E5E7EB] text-[#8B7D6B] rounded-full text-xs font-medium border border-[#D1D5DB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-black/5 max-w-3xl mx-auto border border-[#E5E7EB]">
            <div className="flex justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#8B7D6B] to-[#A0937D] rounded-full p-4 shadow-lg mb-3 inline-block">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-[#6B7280]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Clean Code
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#A0937D] to-[#B8A491] rounded-full p-4 shadow-lg mb-3 inline-block">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-[#6B7280]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Beautiful UI
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#B8A491] to-[#8B7D6B] rounded-full p-4 shadow-lg mb-3 inline-block">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-[#6B7280]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Solid Backend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
