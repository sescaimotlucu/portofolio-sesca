
import { Instagram, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const SocialLinks = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      link: "https://instagram.com/sesc.a11"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn", 
      link: "#"
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      link: "https://github.com/sescaimotlucu"
    }
  ];

  return (
    <Card className="bg-white/90 backdrop-blur-sm border border-[#E5E7EB] shadow-lg shadow-black/5 rounded-2xl">
      <CardContent className="p-6">
        <h3 className="font-semibold text-[#8B7D6B] mb-4 text-center" style={{ fontFamily: 'Fredoka, cursive' }}>
          {t('contact.follow')} ✨
        </h3>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-[#8B7D6B] to-[#A0937D] rounded-full text-white hover:from-[#A0937D] hover:to-[#B8A491] transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
