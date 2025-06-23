
import { Code, Palette, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS"
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-600" />,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, User Research"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Performance",
      description: "Optimization, SEO, Accessibility"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Passion Projects",
      description: "Open source, Community building"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 3+ years of experience creating digital solutions 
            that blend beautiful design with robust functionality. I love turning complex problems 
            into simple, elegant designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{skill.title}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Started as a curious student exploring web technologies, I've grown into a 
                full-stack developer who believes in the power of clean code and intuitive design.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me contributing to open source projects, 
                mentoring junior developers, or exploring the latest in web technologies.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop"
                alt="Working on projects"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
