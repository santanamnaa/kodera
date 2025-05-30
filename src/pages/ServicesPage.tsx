import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  HelpingHand, 
  Package, 
  Headset, 
  Check 
} from 'lucide-react';
import CtaSection from '../components/home/CtaSection';

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  isReversed?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  features, 
  image, 
  isReversed = false 
}) => {
  return (
    <section id={id} className="py-20 border-b border-gray-200 last:border-0 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
          <div className="w-full lg:w-1/2">
            <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <div className="text-secondary">{icon}</div>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
            <p className="text-neutral mb-6">{description}</p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-1" />
                  <p className="text-neutral-dark">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.title = 'Services - AITI Solutions';
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [location]);

  const services = [
    {
      id: 'web',
      title: t('services.web.title'),
      description: t('services.web.description'),
      icon: <Globe className="w-8 h-8" />,
      features: [
        t('services.web.features.0'),
        t('services.web.features.1'),
        t('services.web.features.2'),
        t('services.web.features.3'),
        t('services.web.features.4'),
        t('services.web.features.5')
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'mobile',
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        t('services.mobile.features.0'),
        t('services.mobile.features.1'),
        t('services.mobile.features.2'),
        t('services.mobile.features.3'),
        t('services.mobile.features.4'),
        t('services.mobile.features.5')
      ],
      image: '/images/imagehere.png',
      isReversed: true
    },
    {
      id: 'desktop',
      title: t('services.desktop.title'),
      description: t('services.desktop.description'),
      icon: <Monitor className="w-8 h-8" />,
      features: [
        t('services.desktop.features.0'),
        t('services.desktop.features.1'),
        t('services.desktop.features.2'),
        t('services.desktop.features.3'),
        t('services.desktop.features.4'),
        t('services.desktop.features.5')
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'consulting',
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      icon: <HelpingHand className="w-8 h-8" />,
      features: [
        t('services.consulting.features.0'),
        t('services.consulting.features.1'),
        t('services.consulting.features.2'),
        t('services.consulting.features.3'),
        t('services.consulting.features.4'),
        t('services.consulting.features.5')
      ],
      image: '/images/imagehere.png',
      isReversed: true
    },
    {
      id: 'products',
      title: t('services.products.title'),
      description: t('services.products.description'),
      icon: <Package className="w-8 h-8" />,
      features: [
        t('services.products.features.0'),
        t('services.products.features.1'),
        t('services.products.features.2'),
        t('services.products.features.3'),
        t('services.products.features.4'),
        t('services.products.features.5')
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'support',
      title: t('services.support.title'),
      description: t('services.support.description'),
      icon: <Headset className="w-8 h-8" />,
      features: [
        t('services.support.features.0'),
        t('services.support.features.1'),
        t('services.support.features.2'),
        t('services.support.features.3'),
        t('services.support.features.4'),
        t('services.support.features.5')
      ],
      image: '/images/imagehere.png',
      isReversed: true
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <div className="py-12">
        {services.map((service) => (
          <ServiceSection
            key={service.id}
            {...service}
          />
        ))}
      </div>

      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default ServicesPage;
