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
      question: 'What services does your company offer?',
      answer: 'We provide end-to-end telecom services, ensuring optimal network performance, reliability, and innovation. Our expertise covers: Engineering Consulting, Drive & Field Testing, Benchmarking & Performance Analysis, Network Deployment & Implementation, Optimization & Managed Services and Future-Proof Solutions',
    },
    {
      question: 'Who do you work with?',
      answer: 'We collaborate with telecom operators, infrastructure providers, and other industry stakeholders, offering tailored solutions to meet their specific needs and challenges.',
    },
    {
      question: 'Why should I choose your company?',
      answer: 'AITISERVE combines expertise in AI and IT to deliver relevant, efficient, and impactful digital solutions. We have a track record in national-scale projects, supported by an experienced professional team, and a value- and innovation-based approach.',
    },
    {
      question: 'How do your services benefit my business?',
      answer: 'Our services help increase operational efficiency, accelerate digital transformation, and strengthen business competitiveness through the application of advanced technology tailored to your needs.',
    },
  ];

  return (
    <>
      <HeroSection />
      {/* <DirectorGreetingSection /> */}
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