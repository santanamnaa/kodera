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
      title: 'BoomerangERP',
      description: 'A comprehensive enterprise resource planning solution designed to streamline business operations and improve efficiency. BoomerangERP integrates key business functions including finance, HR, inventory, and sales in a single platform.',
      features: [
        'Financial management and accounting',
        'Human resource management',
        'Inventory and supply chain management',
        'Sales and customer relationship management',
        'Reporting and analytics',
        'Mobile access and collaboration tools'
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'crm',
      title: 'BoomerangCRM',
      description: 'A powerful customer relationship management system that helps businesses build stronger customer relationships and drive sales growth. BoomerangCRM provides a 360-degree view of customer interactions and streamlines sales processes.',
      features: [
        'Contact and lead management',
        'Sales pipeline tracking',
        'Marketing campaign management',
        'Customer service and support',
        'Performance analytics and reporting',
        'Integration with email and communication tools'
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'project',
      title: 'BoomerangProject',
      description: 'A project management solution that enables teams to plan, track, and deliver projects on time and within budget. BoomerangProject provides the tools needed to manage resources, tasks, and timelines effectively.',
      features: [
        'Task and subtask management',
        'Gantt charts and project timelines',
        'Resource allocation and tracking',
        'Time and expense tracking',
        'Document management and collaboration',
        'Project portfolio management'
      ],
      image: '/images/imagehere.png'
    },
    {
      id: 'hr',
      title: 'BoomerangHR',
      description: 'A human resource management system that simplifies HR processes and enhances employee experience. BoomerangHR helps organizations manage the employee lifecycle from recruitment to retirement.',
      features: [
        'Recruitment and applicant tracking',
        'Employee onboarding and offboarding',
        'Performance management',
        'Time and attendance tracking',
        'Payroll and benefits administration',
        'Employee self-service portal'
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
            Our Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful software solutions designed to drive business growth and efficiency
          </p>
        </div>
      </section>
      
      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Software Products" 
            subtitle="Our suite of ready-to-use software solutions for various business needs" 
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
                      Learn More
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