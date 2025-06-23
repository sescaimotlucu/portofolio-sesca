
import { ExternalLink, Github, Code, Palette, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Modern dashboard untuk manajemen toko online dengan fitur analitik real-time",
      descriptionEn: "Modern dashboard for online store management with real-time analytics features",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tech: ["Laravel", "PHP", "MySQL", "Chart.js"],
      demo: "#",
      code: "#",
      color: "from-[#E195AB] to-[#FFCCE1]"
    },
    {
      title: "Student Information System",
      description: "Sistem informasi mahasiswa dengan fitur manajemen data akademik lengkap",
      descriptionEn: "Student information system with complete academic data management features",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
      tech: ["PHP", "JavaScript", "CSS", "MySQL"],
      demo: "#",
      code: "#",
      color: "from-[#FFCCE1] to-[#F2F9FF]"
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio responsif dengan desain modern dan animasi smooth",
      descriptionEn: "Responsive portfolio website with modern design and smooth animations",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
      tech: ["HTML", "CSS", "JavaScript", "Responsive"],
      demo: "#",
      code: "#",
      color: "from-[#F2F9FF] to-[#E195AB]"
    },
    {
      title: "Event Management App",
      description: "Aplikasi manajemen event kampus dengan fitur registrasi dan tracking",
      descriptionEn: "Campus event management app with registration and tracking features",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop",
      tech: ["Laravel", "Vue.js", "MySQL", "API"],
      demo: "#",
      code: "#",
      color: "from-[#FFCCE1] to-[#E195AB]"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF5D7] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#E195AB]" style={{ fontFamily: 'Fredoka, cursive' }}>
            {t('projects.title')} 💻
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-[#E195AB]/20 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#E195AB] mb-3" style={{ fontFamily: 'Fredoka, cursive' }}>
                  {project.title}
                </h3>
                
                <p className="text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-[#FFCCE1] to-[#F2F9FF] text-[#E195AB] rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#E195AB] to-[#FFCCE1] hover:from-[#FFCCE1] hover:to-[#E195AB] text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('projects.demo')}
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#E195AB] text-[#E195AB] hover:bg-[#E195AB] hover:text-white rounded-full text-sm font-semibold transition-all duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t('projects.code')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-[#E195AB]/20 max-w-3xl mx-auto">
            <div className="flex justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#E195AB] to-[#FFCCE1] rounded-full p-4 shadow-lg mb-3 inline-block">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Clean Code
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#FFCCE1] to-[#F2F9FF] rounded-full p-4 shadow-lg mb-3 inline-block">
                  <Palette className="w-6 h-6 text-[#E195AB]" />
                </div>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Beautiful UI
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#F2F9FF] to-[#E195AB] rounded-full p-4 shadow-lg mb-3 inline-block">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
