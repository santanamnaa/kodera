import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] md:h-screen flex flex-col justify-center md:items-end items-center text-center md:text-right overflow-hidden px-4">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center backdrop-blur-sm" 
        style={{ 
          backgroundImage: "url('/images/home/WEB_BG.png')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-end items-center md:items-end h-full">
        <div className="w-full max-w-3xl md:text-right text-center py-24 md:py-0 hidden md:block">
          <h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold font-sans text-white mb-6"
          >
            Solusi Digital Cerdas Berbasis AI & Teknologi untuk Masa Depan yang Berkelanjutan
          </h1>
          
          <p 
            className="text-base sm:text-lg md:text-xl font-light font-sans text-gray-200 mb-8"
          >
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-sans font-light justify-center flex items-center bg-black text-white rounded hover:bg-neutral-800 transition"
            >
              Lihat Layanan
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-sans font-light justify-center flex items-center bg-white text-black border border-black rounded hover:bg-neutral-100 transition"
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
            <span className=" md:text-[20vw] font-extrabold uppercase text-white opacity-20 tracking-widest select-none mx-8">
              KODERA    KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA   KODERA  
            </span>
          </div>
        </div>
      </div>

      <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-light font-sans text-white mb-6">
        Solusi Digital Cerdas Berbasis AI & Teknologi untuk Masa Depan yang Berkelanjutan
      </h1>
    </section>
  );
};

export default HeroSection;