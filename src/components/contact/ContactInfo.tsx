
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactInfo = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: t('contact.email'),
      info: "fransiska@example.com",
      link: "mailto:fransiska@example.com",
      color: "from-[#8B7D6B] to-[#A0937D]"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "WhatsApp",
      info: "+62 821-1557-5219",
      link: "https://wa.me/6282115575219",
      color: "from-[#A0937D] to-[#B8A491]"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: t('contact.location'),
      info: "Semarang, Indonesia",
      link: "#",
      color: "from-[#B8A491] to-[#8B7D6B]"
    }
  ];

  return (
    <div className="space-y-6">
      {contactInfo.map((item, index) => (
        <Card key={index} className="bg-white/90 backdrop-blur-sm border border-[#E5E7EB] shadow-lg shadow-black/5 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl shadow-lg`}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[#8B7D6B] mb-1" style={{ fontFamily: 'Fredoka, cursive' }}>
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B7280] hover:text-[#8B7D6B] transition-colors duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.info}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
