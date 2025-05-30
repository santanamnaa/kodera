import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

// Portfolio item interface
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

const PortfolioSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'E-commerce Web Platform',
      category: 'web',
      image: 'public/images/imagehere.png',
      link: '#'
    },
    {
      id: 2,
      title: 'Banking Mobile App',
      category: 'mobile',
      image: 'public/images/imagehere.png',
      link: '#'
    },
    {
      id: 3,
      title: 'Inventory Management System',
      category: 'desktop',
      image: 'public/images/imagehere.png',
      link: '#'
    },
    {
      id: 4,
      title: 'Travel Booking Website',
      category: 'web',
      image: 'public/images/imagehere.png',
      link: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'public/images/imagehere.png',
      link: '#'
    },
    {
      id: 6,
      title: 'Point of Sale System',
      category: 'desktop',
      image: 'public/images/imagehere.png',
      link: '#'
    }
  ];
  
  // Filter items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  // Filter categories
  const filters = [
    { id: 'all', name: t('portfolio.all') },
    { id: 'web', name: t('portfolio.web') },
    { id: 'mobile', name: t('portfolio.mobile') },
    { id: 'desktop', name: t('portfolio.desktop') }
  ];
  
  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={t('portfolio.title')} 
          subtitle={t('portfolio.subtitle')} 
        />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-secondary text-white' 
                  : 'bg-gray-100 text-neutral hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
            inView ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        >
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="portfolio-item group"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200 mb-4 capitalize">{item.category}</p>
                <a 
                  href={item.link} 
                  className="flex items-center text-secondary hover:underline"
                >
                  {t('portfolio.view')}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;