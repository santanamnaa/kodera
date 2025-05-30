import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const CtaSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <section 
      ref={ref}
      className="py-20 bg-cta-pattern bg-fixed bg-cover bg-center"
    >
      <div className="container mx-auto px-4 text-center">
        <div 
          className={`max-w-3xl mx-auto ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-700 ease-out`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('cta.subtitle')}
          </p>
          <Link 
            to="/contact" 
            className="btn btn-primary px-8 py-3 text-lg"
          >
            {t('cta.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;