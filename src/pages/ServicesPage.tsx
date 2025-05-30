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
    document.title = 'Services - Boomerang IT Solutions';
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
      description: 'We create stunning, responsive web applications that provide exceptional user experiences. Our web development team combines modern design principles with cutting-edge technology to build solutions that drive business growth.',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'Responsive web design that works on all devices',
        'Custom web application development',
        'E-commerce platforms and solutions',
        'Content management systems (CMS)',
        'Progressive Web Apps (PWAs)',
        'Web portal development'
      ],
      image: 'public/images/imagehere.png'
    },
    {
      id: 'mobile',
      title: t('services.mobile.title'),
      description: 'Our mobile development team creates intuitive, high-performance applications for iOS and Android platforms. We focus on delivering seamless user experiences with robust functionality.',
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        'Native iOS and Android app development',
        'Cross-platform development with React Native and Flutter',
        'Mobile app UI/UX design',
        'App testing and quality assurance',
        'App store optimization and deployment',
        'Ongoing maintenance and support'
      ],
      image: 'public/images/imagehere.png',
      isReversed: true
    },
    {
      id: 'desktop',
      title: t('services.desktop.title'),
      description: 'We develop powerful desktop applications for Windows, macOS, and Linux platforms. Our desktop solutions are designed to maximize productivity and streamline complex business processes.',
      icon: <Monitor className="w-8 h-8" />,
      features: [
        'Cross-platform desktop applications',
        'Enterprise software solutions',
        'Legacy system modernization',
        'Integration with existing systems',
        'Performance optimization',
        'Comprehensive documentation and training'
      ],
      image: 'public/images/imagehere.png'
    },
    {
      id: 'consulting',
      title: t('services.consulting.title'),
      description: 'Our IT consulting services provide strategic guidance to help organizations optimize their technology investments. We analyze your business needs and develop tailored solutions to achieve your goals.',
      icon: <HelpingHand className="w-8 h-8" />,
      features: [
        'Technology assessment and roadmap development',
        'Digital transformation strategy',
        'IT infrastructure planning',
        'Software architecture design',
        'Technical due diligence',
        'Cloud migration strategy'
      ],
      image: 'public/images/imagehere.png',
      isReversed: true
    },
    {
      id: 'products',
      title: t('services.products.title'),
      description: 'We offer a range of ready-to-use software products designed to address common business challenges. Our products are scalable, secure, and continuously updated with new features.',
      icon: <Package className="w-8 h-8" />,
      features: [
        'Enterprise resource planning (ERP) solutions',
        'Customer relationship management (CRM) systems',
        'Project management tools',
        'Human resource management systems',
        'Business intelligence and analytics',
        'Inventory management solutions'
      ],
      image: 'public/images/imagehere.png'
    },
    {
      id: 'support',
      title: t('services.support.title'),
      description: 'We provide comprehensive technical support services to ensure your systems run smoothly. Our support team is available 24/7 to address any issues and minimize downtime.',
      icon: <Headset className="w-8 h-8" />,
      features: [
        '24/7 technical support',
        'Proactive system monitoring',
        'Regular maintenance and updates',
        'Troubleshooting and issue resolution',
        'Performance optimization',
        'User training and documentation'
      ],
      image: 'public/images/imagehere.png',
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
