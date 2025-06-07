import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] md:h-screen flex flex-col justify-center md:items-end items-center text-center md:text-right overflow-hidden px-4">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/images/hero_bg.png')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-end items-center md:items-end h-full">
        <div className="w-full max-w-3xl md:text-right text-center py-24 md:py-0 hidden md:block">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold font-sans text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Solusi Digital Cerdas Berbasis AI & Teknologi untuk Masa Depan yang Berkelanjutan
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl font-light font-sans text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/services" 
              className="btn btn-primary px-8 py-3 flex items-center font-sans font-light justify-center"
            >
              Lihat Layanan
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              to="/contact" 
              className="btn btn-outline px-8 py-3 font-sans font-light justify-center"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        </div>
      </div>


      {/* Scrolling AITISERVE text */}
      <div
        className="absolute left-0 right-0 flex justify-center pointer-events-none z-0"
        style={{ top: window.innerWidth < 768 ? '45%' : '30%' }}
      >
        <div className="w-full overflow-hidden">
          <div className="whitespace-nowrap animate-scrollText">
            <span className="text-[24vw] md:text-[20vw] font-extrabold uppercase text-white opacity-10 tracking-widest select-none mx-8">
              AITISERVE              AITISERVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;