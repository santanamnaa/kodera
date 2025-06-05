import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ImageShowcaseSection from '../components/home/ImageShowcaseSection';
import ServicesSection from '../components/home/ServicesSection';
import CtaSection from '../components/home/CtaSection';
import AboutUsSection from '../components/home/AboutUsSection';
import BlogSection from '../components/home/BlogSection';
import FaqSection from '../components/home/FaqSection';
import VisionMissionSection from '../components/home/VisionMissionSection';
import CoreTechSection from '../components/home/CoreTechSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'AITI - Innovative Technology Services';
  }, []);

  return (
    <>
      <HeroSection />
      {/* <DirectorGreetingSection /> */}
      <div className="min-h-[100px] bg-black" />
      {/* <AboutSection /> */}
      <div className="min-h-[100px] bg-black" />
      <ImageShowcaseSection />
      <div className="min-h-[180px] bg-black" />
      <ServicesSection />
      <div className="min-h-[180px] bg-gray-100" />
      <CoreTechSection />
      <div className="min-h-[180px] bg-gray-100" />
      <AboutUsSection />
      <div className="min-h-[180px] bg-gray-100" />
      <VisionMissionSection />
      <div className="min-h-[140px] bg-gray-100" />
      <BlogSection />
      <div className="min-h-[180px] bg-gray-100" />
      <div className="min-h-[180px] bg-black" />
      <FaqSection />
      <div className="min-h-[100px] bg-black" />
      <CtaSection />
      <div className="min-h-[100px] bg-black" />
    </>
  );
};

export default HomePage;