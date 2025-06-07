import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface StatItemProps {
  value: number | string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <div 
      ref={ref} 
      className={`text-center font-sans font-light ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0{} translate-y-10'
      } transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${delay * 150}ms` }}
    >
      <div className="text-4xl md:text-5xl font-light font-sans text-secondary mb-2">
        {typeof value === 'number' && inView ? (
          <CountUp start={0} end={value as number} duration={2.5} separator="," />
        ) : (
          value
        )}
      </div>
      <p className="text-white font-light font-sans">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-black font-sans font-light px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatItem 
            value={2024} 
            label="Tahun Berdiri" 
            delay={0} 
          />
          <StatItem 
            value={20} 
            label="Proyek Selesai" 
            delay={1} 
          />
          <StatItem 
            value={12} 
            label="Klien & Mitra" 
            delay={2} 
          />
          <StatItem 
            value={8} 
            label="Tim Inti" 
            delay={3} 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;