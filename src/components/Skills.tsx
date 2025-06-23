
import { Code, MessageCircle, Palette, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Communication",
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      color: "from-[#E195AB] to-[#FFCCE1]",
      skills: ["Public Speaking", "Team Leadership", "Event Management", "Cross-cultural Communication"]
    },
    {
      title: "Programming",
      icon: <Code className="w-8 h-8 text-white" />,
      color: "from-[#FFCCE1] to-[#F2F9FF]",
      skills: ["PHP", "JavaScript", "CSS", "HTML", "Laravel Framework"]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-8 h-8 text-white" />,
      color: "from-[#F2F9FF] to-[#E195AB]",
      skills: ["User Interface Design", "User Experience", "Responsive Design", "Color Theory"]
    },
    {
      title: "Database & Systems",
      icon: <Database className="w-8 h-8 text-white" />,
      color: "from-[#FFCCE1] to-[#E195AB]",
      skills: ["Database Design", "System Analysis", "Data Management", "Information Architecture"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF5D7] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#E195AB]" style={{ fontFamily: 'Fredoka, cursive' }}>
            Skills & Abilities ⭐
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            The tools and talents I bring to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-[#E195AB]/20 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#E195AB]" style={{ fontFamily: 'Fredoka, cursive' }}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-3 bg-gradient-to-r from-[#F2F9FF] to-[#FFCCE1]/30 rounded-xl text-gray-700 hover:from-[#FFCCE1]/50 hover:to-[#F2F9FF] transition-all duration-200 cursor-default"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-[#E195AB]/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#E195AB] mb-4" style={{ fontFamily: 'Fredoka, cursive' }}>
              Always Learning! 🌟
            </h3>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              I believe in continuous growth and am always excited to learn new technologies, 
              improve my existing skills, and take on new challenges. The world of technology 
              is constantly evolving, and I love being part of that journey! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
