import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../components/common/SectionHeader';
import StatsSection from '../components/home/StatsSection';

interface TeamMember {
  name: string;
}

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const { ref: missionRef, inView: missionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  useEffect(() => {
    // Update page title
    document.title = 'About Us - Boomerang IT Solutions';
  }, []);
  
  const teamMembers: TeamMember[] = [
    {
      name: 'Alex Johnson',
    },
    {
      name: 'Sarah Chen',
    },
    {
      name: 'Michael Rodriguez',
    },
    {
      name: 'Emily Patel',
    }
  ];
  
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">{t('aboutPage.ourStoryTitle')}</h2>
              <p className="text-neutral mb-6">
                {t('aboutPage.ourStoryPara1')}
              </p>
              <p className="text-neutral mb-6">
                {t('aboutPage.ourStoryPara2')}
              </p>
              <p className="text-neutral">
                {t('about.description')}
              </p>
            </div>
            
            <div>
              <img 
                src="/images/imagehere.png" 
                alt={t('aboutPage.ourStoryImageAlt')} 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section 
        ref={missionRef}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div 
              className="bg-white p-8 rounded-lg shadow-md"
              style={{ 
                opacity: missionInView ? 1 : 0,
                transform: missionInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{t('aboutPage.missionTitle')}</h3>
              <p className="text-neutral">{t('about.mission')}</p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-lg shadow-md"
              style={{ 
                opacity: missionInView ? 1 : 0,
                transform: missionInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                transitionDelay: '0.2s'
              }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{t('aboutPage.visionTitle')}</h3>
              <p className="text-neutral">{t('about.vision')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <StatsSection />
      
      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t('aboutPage.teamTitle')} 
            subtitle={t('aboutPage.teamSubtitle')} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <img 
                  src="/images/imagehere.png" 
                  alt={t(`aboutPage.teamMember.${member.name.split(' ').join('').toLowerCase()}.imageAlt`)} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{t(`aboutPage.teamMember.${member.name.split(' ').join('').toLowerCase()}.name`)}</h3>
                  <p className="text-secondary font-medium mb-4">{t(`aboutPage.teamMember.${member.name.split(' ').join('').toLowerCase()}.position`)}</p>
                  <p className="text-neutral">{t(`aboutPage.teamMember.${member.name.split(' ').join('').toLowerCase()}.bio`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;