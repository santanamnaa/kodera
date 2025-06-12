import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/images/project/kodera-project-management.png',
    title: 'Manajemen Proyek Terpadu',
    report: '#',
    description: 'Kodera mengelola seluruh proses pengembangan website, mulai dari analisis kebutuhan hingga pengawasan timeline dan kualitas hasil.'
  },
  {
    image: '/images/project/kodera-quality-control.png',
    title: 'Jaminan Kualitas & Konsistensi',
    report: '#',
    description: 'Setiap hasil kerja developer dikurasi dan ditinjau oleh tim Kodera untuk memastikan standar teknis dan estetika terpenuhi.'
  },
  {
    image: '/images/project/kodera-consulting-support.png',
    title: 'Layanan Konsultatif & Dukungan',
    report: '#',
    description: 'Kodera menyediakan strategi digital dan pendampingan teknis berkelanjutan agar klien merasa didampingi secara profesional.'
  }
];

const ImageShowcaseSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const slide = slides[current];

  return (
    
    <section >
      <div className="min-h-[100px] bg-black" />
      <div className="w-full">
        <div className="w-full aspect-[4/3] md:aspect-[16/6] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.image}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start md:items-start px-4 md:pl-16 py-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h2 className="text-white text-3xl sm:text-3xl md:text-5xl font-light mb-2 md:mb-4 break-words max-w-full">{slide.title}</h2>
                <a
                  href={slide.report}
                  className="text-white text-base md:text-xl underline flex items-center mb-2 font-light"
                >
                  View full report <span className="ml-2 font-normal">↗</span>
                </a>
                <p className="text-white text-sm md:text-lg font-light max-w-xs md:max-w-md opacity-80">
                  {slide.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-2xl md:text-4xl opacity-80 hover:opacity-100 bg-black/40 rounded-full w-10 h-10 flex items-center justify-center z-10">{'<'}</button>
          <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-2xl md:text-4xl opacity-80 hover:opacity-100 bg-black/40 rounded-full w-10 h-10 flex items-center justify-center z-10">{'>'}</button>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection; 