import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../components/common/SectionHeader';
import StatsSection from '../components/home/StatsSection';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
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
      position: 'CEO & Founder',
      image: '/images/imagehere.png',
      bio: 'Alex is a visionary leader with over 15 years of experience in the IT industry. He founded Boomerang IT Solutions with the mission of helping businesses leverage technology to achieve their goals.'
    },
    {
      name: 'Sarah Chen',
      position: 'CTO',
      image: '/images/imagehere.png',
      bio: 'Sarah leads our technical team with her expertise in software architecture and emerging technologies. She ensures that our solutions are built on solid technical foundations and aligned with industry best practices.'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Head of Development',
      image: '/images/imagehere.png',
      bio: 'Michael oversees all development projects, ensuring high-quality code and timely delivery. With his background in both web and mobile development, he brings a holistic approach to our development process.'
    },
    {
      name: 'Emily Patel',
      position: 'UX/UI Director',
      image: '/images/imagehere.png',
      bio: 'Emily leads our design team, creating intuitive and beautiful user experiences. Her passion for user-centered design ensures that our applications are not only functional but also a joy to use.'
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
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-neutral mb-6">
                Founded in 2015, Boomerang IT Solutions has grown from a small startup to a leading IT services provider. Our journey began with a simple mission: to help businesses harness the power of technology to drive growth and innovation.
              </p>
              <p className="text-neutral mb-6">
                Over the years, we've expanded our services and team, but our commitment to excellence and customer satisfaction remains unchanged. Today, we serve clients across various industries, from startups to large enterprises, delivering solutions that address their unique challenges.
              </p>
              <p className="text-neutral">
                {t('about.description')}
              </p>
            </div>
            
            <div>
              <img 
                src="/images/imagehere.png" 
                alt="Our Team" 
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
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
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
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
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
            title="Our Leadership Team" 
            subtitle="Meet the experts behind Boomerang IT Solutions" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <img 
                  src="/images/imagehere.png" 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-4">{member.position}</p>
                  <p className="text-neutral">{member.bio}</p>
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