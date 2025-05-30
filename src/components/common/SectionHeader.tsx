import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref} 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 
        className={`${
          light ? 'text-white' : 'text-primary'
        } text-3xl md:text-4xl font-bold mb-4 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-700 ease-out`}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`${
            light ? 'text-gray-300' : 'text-neutral'
          } max-w-3xl mx-auto ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-700 delay-200 ease-out`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;