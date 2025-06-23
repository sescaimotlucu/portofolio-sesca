
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navigation
    'nav.about': 'Tentang',
    'nav.education': 'Pendidikan',
    'nav.experience': 'Pengalaman',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',
    
    // Hero
    'hero.greeting': 'Halo! Saya',
    'hero.description': 'seorang mahasiswa Sistem Informasi dengan passion untuk menciptakan pengalaman digital yang indah',
    'hero.download': 'Unduh CV',
    'hero.scroll': 'Scroll & jelajahi',
    
    // About
    'about.title': 'Halo, Saya Fransiska!',
    'about.subtitle': 'Tentang Saya',
    'about.birth': 'Lahir pada',
    'about.description1': 'seorang mahasiswa Sistem Informasi yang passionate dalam menciptakan pengalaman digital yang indah dan fungsional.',
    'about.description2': 'Saya suka menggabungkan kreativitas dengan teknologi untuk membangun solusi yang tidak hanya berfungsi dengan baik tetapi juga memberikan kegembiraan bagi pengguna. Perjalanan saya di bidang teknologi didorong oleh rasa ingin tahu dan keinginan untuk membuat dunia digital menjadi tempat yang lebih indah!',
    'about.creative': 'Programmer Kreatif',
    'about.solver': 'Pemecah Masalah',
    'about.team': 'Team Player',
    
    // Education
    'education.title': 'Pendidikan',
    'education.subtitle': 'Perjalanan akademis saya di bidang Sistem Informasi',
    'education.university': 'Universitas Katolik Soegijapranata',
    'education.degree': 'Sarjana Sistem Informasi',
    'education.year': 'Angkatan 2022 - Sekarang',
    'education.location': 'Semarang, Indonesia',
    'education.description': 'Saat ini sedang menempuh gelar sarjana dengan fokus pada pengembangan sistem, manajemen database, dan teknologi web modern. Aktif dalam organisasi kampus dan selalu antusias mempelajari teknologi baru!',
    
    // Experience
    'experience.title': 'Pengalaman',
    'experience.subtitle': 'Perjalanan saya dalam organisasi dan pengembangan profesional',
    'experience.officer': 'Internal Liaison Officer & MC',
    'experience.hmppsi': 'HMPPSI (Himpunan Mahasiswa Program Studi Sistem Informasi)',
    'experience.intern': 'Magang',
    'experience.company': 'PT Ngupoyo Lestari Mulya',
    'experience.organization': 'Organisasi',
    'experience.internship': 'Magang',
    'experience.desc1': 'Memimpin komunikasi internal dan berperan sebagai Master of Ceremony untuk berbagai acara kampus. Mengembangkan kemampuan kepemimpinan dan public speaking sambil memupuk keterlibatan komunitas mahasiswa.',
    'experience.desc2': 'Kesempatan magang yang akan datang untuk menerapkan pengetahuan teoritis dalam lingkungan bisnis nyata dan mendapatkan pengalaman langsung dalam implementasi sistem informasi.',
    
    // Skills
    'skills.title': 'Keahlian & Kemampuan',
    'skills.subtitle': 'Alat dan talenta yang saya bawa ke setiap proyek',
    'skills.communication': 'Komunikasi',
    'skills.programming': 'Pemrograman',
    'skills.design': 'Desain & UI/UX',
    'skills.database': 'Database & Sistem',
    'skills.learning': 'Selalu Belajar!',
    'skills.learning.desc': 'Saya percaya pada pertumbuhan berkelanjutan dan selalu antusias mempelajari teknologi baru, meningkatkan keterampilan yang ada, dan mengambil tantangan baru. Dunia teknologi terus berkembang, dan saya senang menjadi bagian dari perjalanan itu!',
    
    // Projects
    'projects.title': 'Proyek Terbaru',
    'projects.subtitle': 'Beberapa karya yang telah saya buat',
    'projects.view': 'Lihat Proyek',
    'projects.demo': 'Demo',
    'projects.code': 'Kode',
    
    // Contact
    'contact.title': "Mari Terhubung!",
    'contact.subtitle': 'Saya selalu senang berkolaborasi dalam proyek baru dan menjalin koneksi baru!',
    'contact.email': 'Email',
    'contact.phone': 'Telepon',
    'contact.location': 'Lokasi',
    'contact.follow': 'Ikuti Saya!',
    'contact.form.title': 'Kirim pesan untuk saya!',
    'contact.form.name': 'Nama',
    'contact.form.name.placeholder': 'Nama indah Anda',
    'contact.form.email.placeholder': 'email.anda@contoh.com',
    'contact.form.subject': 'Subjek',
    'contact.form.subject.placeholder': 'Apa yang ingin Anda bicarakan?',
    'contact.form.message': 'Pesan',
    'contact.form.message.placeholder': 'Ceritakan tentang ide, proyek Anda, atau sapa saja!',
    'contact.form.send': 'Kirim Pesan dengan Cinta',
    'contact.footer': 'Dibuat dengan',
    'contact.footer.tech': 'menggunakan React dan Tailwind CSS.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello! I\'m',
    'hero.description': 'an Information Systems student with a passion for creating beautiful digital experiences',
    'hero.download': 'Download CV',
    'hero.scroll': 'Scroll & explore',
    
    // About
    'about.title': 'Hello, I\'m Fransiska!',
    'about.subtitle': 'About Me',
    'about.birth': 'Born on',
    'about.description1': 'a passionate Information Systems student who believes in creating beautiful and functional digital experiences.',
    'about.description2': 'I love combining creativity with technology to build solutions that not only work well but also bring joy to users. My journey in tech is driven by curiosity and a desire to make the digital world a more beautiful place!',
    'about.creative': 'Creative Coder',
    'about.solver': 'Problem Solver',
    'about.team': 'Team Player',
    
    // Education
    'education.title': 'Education',
    'education.subtitle': 'My academic journey in Information Systems',
    'education.university': 'Universitas Katolik Soegijapranata',
    'education.degree': 'Bachelor of Information Systems',
    'education.year': 'Class of 2022 - Present',
    'education.location': 'Semarang, Indonesia',
    'education.description': 'Currently pursuing my bachelor\'s degree with focus on system development, database management, and modern web technologies. Active in campus organizations and always eager to learn new technologies!',
    
    // Experience
    'experience.title': 'Experience',
    'experience.subtitle': 'My journey in organizations and professional development',
    'experience.officer': 'Internal Liaison Officer & MC',
    'experience.hmppsi': 'HMPPSI (Himpunan Mahasiswa Program Studi Sistem Informasi)',
    'experience.intern': 'Intern',
    'experience.company': 'PT Ngupoyo Lestari Mulya',
    'experience.organization': 'Organization',
    'experience.internship': 'Internship',
    'experience.desc1': 'Led internal communications and served as Master of Ceremony for various campus events. Developed leadership and public speaking skills while fostering student community engagement.',
    'experience.desc2': 'Upcoming internship opportunity to apply theoretical knowledge in real-world business environment and gain hands-on experience in information systems implementation.',
    
    // Skills
    'skills.title': 'Skills & Abilities',
    'skills.subtitle': 'The tools and talents I bring to every project',
    'skills.communication': 'Communication',
    'skills.programming': 'Programming',
    'skills.design': 'Design & UI/UX',
    'skills.database': 'Database & Systems',
    'skills.learning': 'Always Learning!',
    'skills.learning.desc': 'I believe in continuous growth and am always excited to learn new technologies, improve my existing skills, and take on new challenges. The world of technology is constantly evolving, and I love being part of that journey!',
    
    // Projects
    'projects.title': 'Recent Projects',
    'projects.subtitle': 'Some of the work I\'ve been creating',
    'projects.view': 'View Project',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    
    // Contact
    'contact.title': "Let's Connect!",
    'contact.subtitle': 'I\'m always excited to collaborate on new projects and make new connections!',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.follow': 'Follow Me!',
    'contact.form.title': 'Send me a message!',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your lovely name',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'What would you like to talk about?',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell me about your ideas, projects, or just say hello!',
    'contact.form.send': 'Send Message with Love',
    'contact.footer': 'Made with',
    'contact.footer.tech': 'using React and Tailwind CSS.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
