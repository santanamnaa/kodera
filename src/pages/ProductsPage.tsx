import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CtaSection from '../components/home/CtaSection';

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    // Update page title
    document.title = 'Products - Boomerang IT Solutions';
  }, []);
  
  const products: Product[] = [
    {
      id: 'erp',
      title: t('products.erpTitle'),
      description: t('products.erpDescription'),
      features: [
        t('products.erpFeature1'),
        t('products.erpFeature2'),
        t('products.erpFeature3'),
        t('products.erpFeature4'),
        t('products.erpFeature5'),
        t('products.erpFeature6')
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'crm',
      title: t('products.crmTitle'),
      description: t('products.crmDescription'),
      features: [
        t('products.crmFeature1'),
        t('products.crmFeature2'),
        t('products.crmFeature3'),
        t('products.crmFeature4'),
        t('products.crmFeature5'),
        t('products.crmFeature6')
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'project',
      title: t('products.projectTitle'),
      description: t('products.projectDescription'),
      features: [
        t('products.projectFeature1'),
        t('products.projectFeature2'),
        t('products.projectFeature3'),
        t('products.projectFeature4'),
        t('products.projectFeature5'),
        t('products.projectFeature6')
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'hr',
      title: t('products.hrTitle'),
      description: t('products.hrDescription'),
      features: [
        t('products.hrFeature1'),
        t('products.hrFeature2'),
        t('products.hrFeature3'),
        t('products.hrFeature4'),
        t('products.hrFeature5'),
        t('products.hrFeature6')
      ],
      image: '/images/imagehere.png'
    }
  ];
  
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('productsPage.heroTitle')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('productsPage.heroSubtitle')}
          </p>
        </div>
      </section>
      
      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t('productsPage.sectionTitle')} 
            subtitle={t('productsPage.sectionSubtitle')} 
          />
          
          <div className="space-y-24">
            {products.map((product, index) => {
              const { ref, inView } = useInView({
                threshold: 0.1,
                triggerOnce: true,
              });
              
              return (
                <div 
                  key={product.id}
                  ref={ref}
                  id={product.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div 
                    className={index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}
                    style={{ 
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.5s ease, transform 0.5s ease'
                    }}
                  >
                    <h2 className="text-3xl font-bold text-primary mb-4">{product.title}</h2>
                    <p className="text-neutral mb-6">{product.description}</p>
                    
                    <div className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-1" />
                          <p className="text-neutral-dark">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <button className="btn btn-primary mt-8">
                      {t('productsPage.learnMoreButton')}
                    </button>
                  </div>
                  
                  <div 
                    className={index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}
                    style={{ 
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.5s ease, transform 0.5s ease',
                      transitionDelay: '0.2s'
                    }}
                  >
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      
      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default ProductsPage;