import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  HelpingHand, 
  Package, 
  Headset 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <div 
      ref={ref} 
      className={`service-card ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <div className="text-secondary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-neutral">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      delay: 0
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      delay: 1
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: t('services.desktop.title'),
      description: t('services.desktop.description'),
      delay: 2
    },
    {
      icon: <HelpingHand className="w-8 h-8" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      delay: 3
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: t('services.products.title'),
      description: t('services.products.description'),
      delay: 4
    },
    {
      icon: <Headset className="w-8 h-8" />,
      title: t('services.support.title'),
      description: t('services.support.description'),
      delay: 5
    }
  ];
  
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={t('services.title')} 
          subtitle={t('services.subtitle')} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;