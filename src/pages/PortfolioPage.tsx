import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

// Portfolio item interface
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
  date: string;
  link: string;
}

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    // Update page title
    document.title = 'Portfolio - AITI';
  }, []);
  
  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: t('portfolio.item.1.title'),
      description: t('portfolio.item.1.description'),
      category: 'web',
      image: '/images/imagehere.png',
      client: t('portfolio.item.1.client'),
      date: t('portfolio.item.1.date'),
      link: '#'
    },
    {
      id: 2,
      title: t('portfolio.item.2.title'),
      description: t('portfolio.item.2.description'),
      category: 'mobile',
      image: '/images/imagehere.png',
      client: t('portfolio.item.2.client'),
      date: t('portfolio.item.2.date'),
      link: '#'
    },
    {
      id: 3,
      title: t('portfolio.item.3.title'),
      description: t('portfolio.item.3.description'),
      category: 'desktop',
      image: '/images/imagehere.png',
      client: t('portfolio.item.3.client'),
      date: t('portfolio.item.3.date'),
      link: '#'
    },
    {
      id: 4,
      title: t('portfolio.item.4.title'),
      description: t('portfolio.item.4.description'),
      category: 'web',
      image: '/images/imagehere.png',
      client: t('portfolio.item.4.client'),
      date: t('portfolio.item.4.date'),
      link: '#'
    },
    {
      id: 5,
      title: t('portfolio.item.5.title'),
      description: t('portfolio.item.5.description'),
      category: 'mobile',
      image: '/images/imagehere.png',
      client: t('portfolio.item.5.client'),
      date: t('portfolio.item.5.date'),
      link: '#'
    },
    {
      id: 6,
      title: t('portfolio.item.6.title'),
      description: t('portfolio.item.6.description'),
      category: 'desktop',
      image: '/images/imagehere.png',
      client: t('portfolio.item.6.client'),
      date: t('portfolio.item.6.date'),
      link: '#'
    },
    {
      id: 7,
      title: t('portfolio.item.7.title'),
      description: t('portfolio.item.7.description'),
      category: 'web',
      image: '/images/imagehere.png',
      client: t('portfolio.item.7.client'),
      date: t('portfolio.item.7.date'),
      link: '#'
    },
    {
      id: 8,
      title: t('portfolio.item.8.title'),
      description: t('portfolio.item.8.description'),
      category: 'mobile',
      image: '/images/imagehere.png',
      client: t('portfolio.item.8.client'),
      date: t('portfolio.item.8.date'),
      link: '#'
    },
    {
      id: 9,
      title: t('portfolio.item.9.title'),
      description: t('portfolio.item.9.description'),
      category: 'desktop',
      image: '/images/imagehere.png',
      client: t('portfolio.item.9.client'),
      date: t('portfolio.item.9.date'),
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
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('portfolio.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Portfolio */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="portfolio-item group">
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-neutral mb-4">{item.description}</p>
                  <div className="flex flex-wrap justify-between text-sm">
                    <span className="text-secondary font-medium">{item.client}</span>
                    <span className="text-neutral">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;