import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ImageShowcaseSection from '../components/home/ImageShowcaseSection';
import ServicesSection from '../components/home/ServicesSection';
import CtaSection from '../components/home/CtaSection';
import AboutUsSection from '../components/home/AboutUsSection';
import AboutSection from '../components/home/AboutSection';
import BlogSection from '../components/home/BlogSection';
import FaqSection from '../components/home/FaqSection';
import VisionMissionSection from '../components/home/VisionMissionSection';
import CoreTechSection from '../components/home/CoreTechSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'AITI - Innovative Technology Services';
  }, []);

const homeFaqs = [
  {
    question: 'Apa itu Kodera?',
    answer: 'Kodera adalah agensi pengembangan website yang membantu klien terhubung dengan developer profesional melalui manajemen proyek yang terstruktur dan efisien.',
  },
  {
    question: 'Bagaimana cara memulai proyek di Kodera?',
    answer: 'Klien dapat menghubungi kami melalui website atau WhatsApp. Tim Kodera kemudian akan melakukan analisis kebutuhan dan memberikan proposal penawaran resmi.',
  },
  {
    question: 'Apakah Kodera hanya membuat website?',
    answer: 'Fokus utama Kodera adalah pengembangan website, tetapi kami juga menyediakan layanan konsultasi digital dan dukungan teknis berkelanjutan.',
  },
  {
    question: 'Apakah saya bisa memilih developer sendiri?',
    answer: 'Kodera akan memilih developer yang paling sesuai dengan kebutuhan proyek Anda, namun kami terbuka untuk mendiskusikan preferensi tim jika ada.',
  },
];

  return (
    <>
      <HeroSection />
      {/* <DirectorGreetingSection /> */}
      <div className="min-h-[180px] bg-black" />
      <AboutSection />
      <div className="min-h-[180px] bg-black" />
      <ImageShowcaseSection />
      <div className="min-h-[180px] bg-black" />
      <ServicesSection />
      <div className="min-h-[180px] bg-black" />
      <CoreTechSection />
      <div className="min-h-[180px] bg-black" />
      <VisionMissionSection />
      <div className="min-h-[140px] bg-black" />
      <div className="min-h-[140px] bg-gray-100" />
      <div className="min-h-[180px] bg-gray-100" />
      <AboutUsSection />
      <div className="min-h-[180px] bg-gray-100" />
      <BlogSection />
      <div className="min-h-[180px] bg-gray-100" />
      <div className="min-h-[180px] bg-black" />
      <FaqSection faqs={homeFaqs} />
      <div className="min-h-[100px] bg-black" />
      <CtaSection />
      <div className="min-h-[100px] bg-black" />
    </>
  );
};

export default HomePage;