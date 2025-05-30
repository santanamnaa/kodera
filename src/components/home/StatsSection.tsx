import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface StatItemProps {
  value: number;
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
      className={`text-center ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${delay * 150}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
        {inView ? (
          <CountUp start={0} end={value} duration={2.5} separator="," />
        ) : (
          '0'
        )}
        <span>+</span>
      </div>
      <p className="text-neutral-dark">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem 
            value={250} 
            label={t('stats.projects')} 
            delay={0} 
          />
          <StatItem 
            value={120} 
            label={t('stats.clients')} 
            delay={1} 
          />
          <StatItem 
            value={50} 
            label={t('stats.team')} 
            delay={2} 
          />
          <StatItem 
            value={30} 
            label={t('stats.awards')} 
            delay={3} 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;