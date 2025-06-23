
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactInfo } from "./contact/ContactInfo";
import { SocialLinks } from "./contact/SocialLinks";
import { ContactForm } from "./contact/ContactForm";

export const Contact = () => {
  const { t } = useLanguage();

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
          <div className="space-y-6">
            <ContactInfo />
            <SocialLinks />
          </div>
          <ContactForm />
        </div>

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
