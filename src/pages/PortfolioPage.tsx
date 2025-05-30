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
      title: 'E-commerce Web Platform',
      description: 'A comprehensive e-commerce platform with product management, shopping cart, payment integration, and customer dashboard.',
      category: 'web',
      image: '/images/imagehere.png',
      client: 'RetailMax Inc.',
      date: 'January 2023',
      link: '#'
    },
    {
      id: 2,
      title: 'Banking Mobile App',
      description: 'Secure mobile banking application with account management, transaction history, bill payments, and biometric authentication.',
      category: 'mobile',
      image: '/images/imagehere.png',
      client: 'SecureBank Ltd.',
      date: 'March 2023',
      link: '#'
    },
    {
      id: 3,
      title: 'Inventory Management System',
      description: 'Desktop application for inventory tracking, supplier management, order processing, and reporting.',
      category: 'desktop',
      image: '/images/imagehere.png',
      client: 'GlobalTrade Ltd.',
      date: 'May 2023',
      link: '#'
    },
    {
      id: 4,
      title: 'Travel Booking Website',
      description: 'Travel booking platform featuring flight and hotel reservations, package deals, and itinerary management.',
      category: 'web',
      image: '/images/imagehere.png',
      client: 'TravelEase',
      date: 'July 2023',
      link: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized coaching features.',
      category: 'mobile',
      image: '/images/imagehere.png',
      client: 'FitLife Health',
      date: 'September 2023',
      link: '#'
    },
    {
      id: 6,
      title: 'Point of Sale System',
      description: 'Comprehensive POS system with inventory management, sales tracking, employee management, and reporting.',
      category: 'desktop',
      image: '/images/imagehere.png',
      client: 'RetailPro',
      date: 'November 2023',
      link: '#'
    },
    {
      id: 7,
      title: 'Educational Learning Platform',
      description: 'Online learning platform with course management, video lectures, assessments, and student progress tracking.',
      category: 'web',
      image: '/images/imagehere.png',
      client: 'EduSmart',
      date: 'February 2024',
      link: '#'
    },
    {
      id: 8,
      title: 'Real Estate Management App',
      description: 'Mobile application for property listings, virtual tours, appointment scheduling, and document management.',
      category: 'mobile',
      image: '/images/imagehere.png',
      client: 'PropertyPro',
      date: 'April 2024',
      link: '#'
    },
    {
      id: 9,
      title: 'Healthcare Management System',
      description: 'Desktop application for patient records, appointment scheduling, billing, and medical inventory management.',
      category: 'desktop',
      image: '/images/imagehere.png',
      client: 'MediCare Solutions',
      date: 'June 2024',
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