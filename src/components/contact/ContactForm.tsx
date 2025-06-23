
import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { sendWhatsAppMessage, createFallbackWhatsAppUrl } from "@/utils/whatsappService";

export const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const messageData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };

    try {
      await sendWhatsAppMessage(messageData);
      
      toast({
        title: "✅ Pesan Terkirim!",
        description: "Pesan Anda telah berhasil dikirim ke WhatsApp Fransiska.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
      
      const whatsappUrl = createFallbackWhatsAppUrl(messageData);
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
    <div className="lg:col-span-2">
      <Card className="bg-white/90 backdrop-blur-sm border border-[#E5E7EB] shadow-xl shadow-black/5 rounded-3xl">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-[#8B7D6B] mb-6 text-center" style={{ fontFamily: 'Fredoka, cursive' }}>
            {t('contact.form.title')} 💌
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
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
  );
};
