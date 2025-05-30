import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatsSection from '../components/home/StatsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'AITI - Innovative Technology Services';
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;