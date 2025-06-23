
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5D7] via-[#F2F9FF] to-[#FFCCE1]">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
