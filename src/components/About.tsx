
import { Heart, Sparkles, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F9FF]/50 relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 text-[#FFCCE1] animate-pulse">
        <Star size={20} fill="currentColor" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#E195AB]" style={{ fontFamily: 'Fredoka, cursive' }}>
            Hello, I'm Fransiska! 
            <Sparkles className="inline-block ml-2 w-8 h-8 text-[#FFCCE1]" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=350&h=350&fit=crop&crop=face"
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
                About Me
              </h3>
              <div className="space-y-4 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <p className="leading-relaxed">
                  Born on <span className="text-[#E195AB] font-semibold">November 4, 2004</span>, 
                  I'm a passionate Information Systems student who believes in creating 
                  beautiful and functional digital experiences.
                </p>
                <p className="leading-relaxed">
                  I love combining creativity with technology to build solutions that not only work well 
                  but also bring joy to users. My journey in tech is driven by curiosity and 
                  a desire to make the digital world a more beautiful place! ✨
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#FFCCE1] to-[#F2F9FF] text-[#E195AB] rounded-full text-sm font-medium">
                    Creative Coder
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#FFCCE1] to-[#F2F9FF] text-[#E195AB] rounded-full text-sm font-medium">
                    Problem Solver
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#FFCCE1] to-[#F2F9FF] text-[#E195AB] rounded-full text-sm font-medium">
                    Team Player
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
