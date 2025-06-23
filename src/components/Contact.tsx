import { Mail, Phone, MapPin, Send, Heart, Instagram, Linkedin, Github, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

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

  const handleFonteApiSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const whatsappMessage = `🌟 *Pesan Baru dari Portfolio Website* 🌟

📝 *Nama:* ${name}
📧 *Email:* ${email}
💬 *Subjek:* ${subject}

📋 *Pesan:*
${message}

✨ _Dikirim otomatis dari website portfolio Fransiska_`;

    try {
      console.log("Sending message via Fonte API...");
      
      const response = await fetch('https://api.fonte.com.br/chat/sendText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer pUHPiTDPi4aeGQo9Q4PW'
        },
        body: JSON.stringify({
          phone: "6282115575219",
          message: whatsappMessage
        })
      });

      const result = await response.json();
      console.log("Fonte API response:", result);

      if (response.ok) {
        toast({
          title: "✅ Pesan Terkirim!",
          description: "Pesan Anda telah berhasil dikirim ke WhatsApp Fransiska.",
        });
        
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
      
      // Fallback to manual WhatsApp link
      const fallbackMessage = `Halo Fransiska! 

Nama: ${name}
Email: ${email}
Subjek: ${subject}

Pesan:
${message}

Terima kasih!`;

      const whatsappUrl = `https://wa.me/6282115575219?text=${encodeURIComponent(fallbackMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "📱 Membuka WhatsApp",
        description: "Pesan telah disiapkan, silakan kirim melalui WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8F9FA] to-[#FEFEFE] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#8B7D6B]" style={{ fontFamily: 'Fredoka, cursive' }}>
            {t('contact.title')} 💕
          </h2>
          <p className="text-xl text-[#6B7280]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
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

            {/* Social Links */}
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
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/90 backdrop-blur-sm border border-[#E5E7EB] shadow-xl shadow-black/5 rounded-3xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#8B7D6B] mb-6 text-center" style={{ fontFamily: 'Fredoka, cursive' }}>
                  {t('contact.form.title')} 💌
                </h3>
                <form className="space-y-6" onSubmit={handleFonteApiSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#8B7D6B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('contact.form.name')} *
                      </label>
                      <Input
                        name="name"
                        placeholder={t('contact.form.name.placeholder')}
                        className="border-[#D1D5DB] focus:border-[#8B7D6B] focus:ring-[#8B7D6B] rounded-xl bg-white"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#8B7D6B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder={t('contact.form.email.placeholder')}
                        className="border-[#D1D5DB] focus:border-[#8B7D6B] focus:ring-[#8B7D6B] rounded-xl bg-white"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#8B7D6B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t('contact.form.subject')} *
                    </label>
                    <Input
                      name="subject"
                      placeholder={t('contact.form.subject.placeholder')}
                      className="border-[#D1D5DB] focus:border-[#8B7D6B] focus:ring-[#8B7D6B] rounded-xl bg-white"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#8B7D6B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t('contact.form.message')} *
                    </label>
                    <Textarea
                      name="message"
                      placeholder={t('contact.form.message.placeholder')}
                      rows={6}
                      className="border-[#D1D5DB] focus:border-[#8B7D6B] focus:ring-[#8B7D6B] resize-none rounded-xl bg-white"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#8B7D6B] to-[#A0937D] hover:from-[#A0937D] hover:to-[#B8A491] text-white py-4 rounded-xl font-semibold shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {isLoading ? 'Mengirim...' : 'Kirim ke WhatsApp'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[#E5E7EB] text-center">
          <p className="text-[#6B7280] flex items-center justify-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © 2024 Fransiska. {t('contact.footer')} 
            <Heart className="w-4 h-4 text-[#8B7D6B] fill-[#8B7D6B]" />
            {t('contact.footer.tech')}
          </p>
        </div>
      </div>
    </section>
  );
};
