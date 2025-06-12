import React from 'react';
import { Link } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';

const CtaSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <section 
      ref={ref}
      className="py-20 bg-cover bg-center bg-black"
    >
      <div className="container mx-auto px-4 text-center">
        <div 
          className={`max-w-3xl mx-auto ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-700 ease-out`}
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            Siap Bangun Website Profesional Bersama Kodera?
          </h2>
          <p className="text-xl font-light text-gray-300 mb-8">
            Hubungi tim Kodera hari ini untuk mulai merancang website yang sesuai dengan kebutuhan dan identitas bisnis Anda.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-3 text-lg font-light bg-white text-black border border-black rounded hover:bg-neutral-100 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;