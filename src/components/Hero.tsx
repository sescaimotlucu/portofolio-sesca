
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
            alt="Siska"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 shadow-2xl ring-4 ring-white/50"
          />
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Hi, I'm Siska
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Creative developer and designer passionate about building beautiful, 
          functional digital experiences that make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-purple-50 hover:border-purple-300">
              <Github size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-purple-50 hover:border-purple-300">
              <Linkedin size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-purple-50 hover:border-purple-300">
              <Mail size={20} />
            </Button>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-purple-600 hover:text-purple-800 transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};
