import React, { useState, useEffect } from 'react';
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
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    // Update page title
    document.title = 'Portfolio - AITI';
  }, []);
  
  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      category: 'web',
      image: '/images/imagehere.png',
      client: 'Client 1',
      date: 'Date 1',
      link: '#'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      category: 'mobile',
      image: '/images/imagehere.png',
      client: 'Client 2',
      date: 'Date 2',
      link: '#'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      category: 'desktop',
      image: '/images/imagehere.png',
      client: 'Client 3',
      date: 'Date 3',
      link: '#'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description of Project 4',
      category: 'web',
      image: '/images/imagehere.png',
      client: 'Client 4',
      date: 'Date 4',
      link: '#'
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description of Project 5',
      category: 'mobile',
      image: '/images/imagehere.png',
      client: 'Client 5',
      date: 'Date 5',
      link: '#'
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description of Project 6',
      category: 'desktop',
      image: '/images/imagehere.png',
      client: 'Client 6',
      date: 'Date 6',
      link: '#'
    },
    {
      id: 7,
      title: 'Project 7',
      description: 'Description of Project 7',
      category: 'web',
      image: '/images/imagehere.png',
      client: 'Client 7',
      date: 'Date 7',
      link: '#'
    },
    {
      id: 8,
      title: 'Project 8',
      description: 'Description of Project 8',
      category: 'mobile',
      image: '/images/imagehere.png',
      client: 'Client 8',
      date: 'Date 8',
      link: '#'
    },
    {
      id: 9,
      title: 'Project 9',
      description: 'Description of Project 9',
      category: 'desktop',
      image: '/images/imagehere.png',
      client: 'Client 9',
      date: 'Date 9',
      link: '#'
    }
  ];
  
  // Filter items based on active filter
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  // Filter categories
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'desktop', name: 'Desktop' }
  ];
  
  return (
    <>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Portfolio
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of our projects
          </p>
        </div>
      </section>
      
      {/* Portfolio */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 md:px-6 py-2 rounded-full transition-all duration-300 ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="pt-0">
                  <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{item.client}</span>
                    <span>{item.date}</span>
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