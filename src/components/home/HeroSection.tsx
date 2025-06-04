import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-end">
  {/* Background with overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center" 
    style={{ 
      backgroundImage: "url('/images/hero_bg.png')",
      backgroundAttachment: "fixed" 
    }}
  >
    <div className="absolute inset-0 bg-primary bg-opacity-10"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10 flex justify-end">
    <div className="max-w-3xl text-right">
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-light font-sans text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mitra Transformasi Digital Berbasis AI & Teknologi Informasi
      </motion.h1>
      
      <motion.p 
        className="text-xl font-light font-sans text-gray-200 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        AITISERVE menghadirkan solusi digital cerdas dan berkelanjutan melalui layanan konsultasi, pengembangan aplikasi, dan integrasi teknologi berbasis AI untuk masa depan yang lebih baik.
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap justify-end gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link 
          to="/services" 
          className="btn btn-primary px-8 py-3 flex items-center font-sans font-light"
        >
          Lihat Layanan
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
        
        <Link 
          to="/contact" 
          className="btn btn-outline px-8 py-3 font-sans font-light"
        >
          Hubungi Kami
        </Link>
      </motion.div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
    <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
      <span className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></span>
    </div>
  </div>

  {/* Scrolling AITISERVE text */}
  <div className="absolute left-0 right-0 flex justify-center pointer-events-none" style={{ top: '30%' }}>
    <div className="w-full overflow-hidden">
      <div className="whitespace-nowrap animate-scrollText">
        <span className="text-[20vw] font-extrabold uppercase text-white opacity-10 tracking-widest select-none mx-8">
          AITISERVE              AITISERVE
        </span>
      </div>
    </div>
  </div>
</section>
  );
};

export default HeroSection;