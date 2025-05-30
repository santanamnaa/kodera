import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Clock, DollarSign, ChevronRight } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const CareersPage: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  useEffect(() => {
    // Update page title
    document.title = 'Careers - Boomerang IT Solutions';
  }, []);
  
  const jobPostings: JobPosting[] = [
    {
      id: 'frontend-developer',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA (Remote Available)',
      type: 'Full-time',
      salary: '$100,000 - $130,000',
      description: 'We are looking for a Senior Frontend Developer to join our team and help create exceptional user experiences for our clients. In this role, you will work closely with designers and backend developers to implement responsive and interactive web applications.',
      requirements: [
        '5+ years of experience in frontend development',
        'Expertise in React, Vue, or Angular',
        'Strong knowledge of HTML, CSS, and JavaScript',
        'Experience with responsive design and cross-browser compatibility',
        'Familiarity with RESTful APIs and GraphQL',
        'Bachelor\'s degree in Computer Science or related field (or equivalent experience)'
      ],
      responsibilities: [
        'Develop high-quality, responsive web applications',
        'Collaborate with designers to implement user interfaces',
        'Optimize applications for maximum speed and scalability',
        'Write clean, maintainable, and well-documented code',
        'Participate in code reviews and mentor junior developers',
        'Stay up-to-date with emerging trends and best practices in frontend development'
      ]
    },
    {
      id: 'backend-developer',
      title: 'Backend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA (Remote Available)',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      description: 'We are seeking a skilled Backend Developer to design, implement, and maintain server-side applications. As a Backend Developer, you will work with our team to build robust and scalable APIs, services, and databases.',
      requirements: [
        '3+ years of experience in backend development',
        'Proficiency in Node.js, Python, or Java',
        'Experience with databases (SQL and NoSQL)',
        'Knowledge of RESTful API design',
        'Familiarity with cloud services (AWS, Azure, or GCP)',
        'Understanding of security best practices'
      ],
      responsibilities: [
        'Design and implement robust backend services and APIs',
        'Develop database schemas and data models',
        'Ensure application performance, security, and reliability',
        'Write unit and integration tests',
        'Collaborate with frontend developers to integrate user-facing elements',
        'Document code and technical specifications'
      ]
    },
    {
      id: 'mobile-developer',
      title: 'Mobile Developer',
      department: 'Engineering',
      location: 'San Francisco, CA (Remote Available)',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      description: 'We are looking for a talented Mobile Developer to join our team and help create innovative mobile applications. In this role, you will design, build, and maintain high-performance, reliable iOS and Android applications.',
      requirements: [
        '3+ years of experience in mobile app development',
        'Proficiency in React Native, Flutter, or native iOS/Android development',
        'Strong understanding of mobile UX/UI design principles',
        'Experience with RESTful APIs and offline storage',
        'Knowledge of app store submission processes',
        'Bachelor\'s degree in Computer Science or related field (or equivalent experience)'
      ],
      responsibilities: [
        'Develop and maintain mobile applications for iOS and Android',
        'Implement responsive user interfaces following design guidelines',
        'Optimize applications for performance and usability',
        'Integrate with backend services and APIs',
        'Fix bugs and improve application performance',
        'Stay current with the latest mobile development trends and technologies'
      ]
    },
    {
      id: 'ux-designer',
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA (Remote Available)',
      type: 'Full-time',
      salary: '$80,000 - $110,000',
      description: 'We are seeking a creative and user-focused UX/UI Designer to join our design team. In this role, you will create intuitive and engaging user experiences for web and mobile applications, working closely with developers and product managers.',
      requirements: [
        '3+ years of experience in UX/UI design',
        'Proficiency in design tools such as Figma, Sketch, or Adobe XD',
        'Strong portfolio demonstrating user-centered design process',
        'Experience creating wireframes, prototypes, and user flows',
        'Understanding of accessibility standards and responsive design',
        'Bachelor\'s degree in Design, HCI, or related field (or equivalent experience)'
      ],
      responsibilities: [
        'Create wireframes, prototypes, and high-fidelity designs',
        'Conduct user research and usability testing',
        'Develop user personas and journey maps',
        'Collaborate with developers to implement designs',
        'Create and maintain design systems and style guides',
        'Stay current with design trends and best practices'
      ]
    }
  ];
  
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('career.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('career.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t('careersPage.whyJoinUsTitle')} 
            subtitle={t('careersPage.whyJoinUsSubtitle')} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('careersPage.innovativeProjectsTitle')}</h3>
              <p className="text-neutral">{t('careersPage.innovativeProjectsText')}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('careersPage.professionalGrowthTitle')}</h3>
              <p className="text-neutral">{t('careersPage.professionalGrowthText')}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('careersPage.collaborativeCultureTitle')}</h3>
              <p className="text-neutral">{t('careersPage.collaborativeCultureText')}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('careersPage.workLifeBalanceTitle')}</h3>
              <p className="text-neutral">{t('careersPage.workLifeBalanceText')}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('careersPage.comprehensiveBenefitsTitle')}</h3>
              <p className="text-neutral">{t('careersPage.comprehensiveBenefitsText')}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.565A2.5 2.5 0 0017.5 1h-11A2.5 2.5 0 004 3.935V4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{t('careersPage.globalOpportunitiesTitle')}</h3>
              <p className="text-neutral">{t('careersPage.globalOpportunitiesText')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section 
        ref={ref}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t('careersPage.openPositionsTitle')} 
            subtitle={t('careersPage.openPositionsSubtitle')} 
          />
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobPostings.map((job, index) => (
              <div 
                key={job.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{ 
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold text-primary">{t(`careersPage.job.${job.id}.title`)}</h3>
                  <p className="text-secondary">{t(`careersPage.job.${job.id}.department`)}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-neutral mr-2" />
                      <span>{t(`careersPage.job.${job.id}.location`)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-neutral mr-2" />
                      <span>{t(`careersPage.job.${job.id}.type`)}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-neutral mr-2" />
                      <span>{t(`careersPage.job.${job.id}.salary`)}</span>
                    </div>
                  </div>
                  
                  <p className="text-neutral mb-6">{t(`careersPage.job.${job.id}.description`)}</p>
                  
                  <a 
                    href={`/careers/${job.id}`} 
                    className="flex items-center text-secondary hover:underline"
                  >
                    {t('careersPage.viewDetailsButton')}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title={t('careersPage.applicationProcessTitle')} 
            subtitle={t('careersPage.applicationProcessSubtitle')} 
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-4 md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary mb-2">{t('careersPage.applicationStep1Title')}</h3>
                    <p className="text-neutral">{t('careersPage.applicationStep1Text')}</p>
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full text-xl font-bold order-1 md:order-2">
                    1
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-3 mt-4 md:mt-0">
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full text-xl font-bold order-1 md:order-2">
                    2
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-3 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary mb-2">{t('careersPage.applicationStep2Title')}</h3>
                    <p className="text-neutral">{t('careersPage.applicationStep2Text')}</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary mb-2">{t('careersPage.applicationStep3Title')}</h3>
                    <p className="text-neutral">{t('careersPage.applicationStep3Text')}</p>
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full text-xl font-bold order-1 md:order-2">
                    3
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-3 mt-4 md:mt-0">
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full text-xl font-bold order-1 md:order-2">
                    4
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-3 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary mb-2">{t('careersPage.applicationStep4Title')}</h3>
                    <p className="text-neutral">{t('careersPage.applicationStep4Text')}</p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary mb-2">{t('careersPage.applicationStep5Title')}</h3>
                    <p className="text-neutral">{t('careersPage.applicationStep5Text')}</p>
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full text-xl font-bold order-1 md:order-2">
                    5
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-3 mt-4 md:mt-0">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;