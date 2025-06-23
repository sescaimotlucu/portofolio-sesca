import { Mail, Phone, MapPin, Send, Heart, Instagram, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: t('contact.email'),
      info: "fransiska@example.com",
      link: "mailto:fransiska@example.com",
      color: "from-[#E195AB] to-[#FFCCE1]"
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: t('contact.phone'),
      info: "+62 xxx-xxxx-xxxx",
      link: "tel:+62xxxxxxxxx",
      color: "from-[#FFCCE1] to-[#F2F9FF]"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: t('contact.location'),
      info: "Semarang, Indonesia",
      link: "#",
      color: "from-[#F2F9FF] to-[#E195AB]"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      link: "#"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn", 
      link: "#"
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F9FF]/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#E195AB]" style={{ fontFamily: 'Fredoka, cursive' }}>
            {t('contact.title')} 💕
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg shadow-[#E195AB]/20 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#E195AB] mb-1" style={{ fontFamily: 'Fredoka, cursive' }}>
                        {item.title}
                      </h3>
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-[#E195AB] transition-colors duration-200"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {item.info}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg shadow-[#E195AB]/20 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#E195AB] mb-4 text-center" style={{ fontFamily: 'Fredoka, cursive' }}>
                  {t('contact.follow')} ✨
                </h3>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="p-3 bg-gradient-to-r from-[#E195AB] to-[#FFCCE1] rounded-full text-white hover:from-[#FFCCE1] hover:to-[#E195AB] transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-[#E195AB]/20 rounded-3xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#E195AB] mb-6 text-center" style={{ fontFamily: 'Fredoka, cursive' }}>
                  {t('contact.form.title')} 💌
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#E195AB] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('contact.form.name')} *
                      </label>
                      <Input
                        placeholder={t('contact.form.name.placeholder')}
                        className="border-[#FFCCE1] focus:border-[#E195AB] focus:ring-[#E195AB] rounded-xl"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#E195AB] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder={t('contact.form.email.placeholder')}
                        className="border-[#FFCCE1] focus:border-[#E195AB] focus:ring-[#E195AB] rounded-xl"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#E195AB] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t('contact.form.subject')} *
                    </label>
                    <Input
                      placeholder={t('contact.form.subject.placeholder')}
                      className="border-[#FFCCE1] focus:border-[#E195AB] focus:ring-[#E195AB] rounded-xl"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#E195AB] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t('contact.form.message')} *
                    </label>
                    <Textarea
                      placeholder={t('contact.form.message.placeholder')}
                      rows={6}
                      className="border-[#FFCCE1] focus:border-[#E195AB] focus:ring-[#E195AB] resize-none rounded-xl"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#E195AB] to-[#FFCCE1] hover:from-[#FFCCE1] hover:to-[#E195AB] text-white py-4 rounded-xl font-semibold shadow-lg shadow-[#E195AB]/30 hover:shadow-xl hover:shadow-[#FFCCE1]/40 transition-all duration-300 transform hover:-translate-y-1"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.form.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[#FFCCE1] text-center">
          <p className="text-gray-600 flex items-center justify-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © 2024 Fransiska. {t('contact.footer')} 
            <Heart className="w-4 h-4 text-[#E195AB] fill-[#E195AB]" />
            {t('contact.footer.tech')}
          </p>
        </div>
      </div>
    </section>
  );
};
