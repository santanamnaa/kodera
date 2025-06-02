import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background with diagonal overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/01-good.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-secondary transform rotate-45 translate-x-1/2 -translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/services" 
              className="btn btn-primary group"
            >
              {t('hero.cta')}
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact" 
              className="btn btn-outline"
            >
              {t('hero.secondary_cta')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <motion.span 
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;