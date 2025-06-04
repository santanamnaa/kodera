import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Monitor,
  HelpingHand,
  Package,
  Headset,
  Check,
  LucideIcon
} from 'lucide-react';
import CtaSection from '../components/home/CtaSection';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const services: Service[] = [
  {
    id: 'consulting',
    title: 'IT & AI Consulting',
    description:
      'Strategic guidance for digital transformation, technology needs assessment, AI-based system planning, and sustainable technology roadmap development.',
    icon: HelpingHand,
    features: [
      'Business & technology needs analysis',
      'Digital transformation strategy',
      'AI & IT implementation consulting',
      'Long-term technology roadmap',
      'Adoption of new technologies',
      'Training & knowledge transfer'
    ]
  },
  {
    id: 'web',
    title: 'Web Application Development',
    description:
      "Modern web applications with responsive design, optimal performance, and high scalability to support today's digital business needs.",
    icon: Globe,
    features: [
      'Modern, responsive UI/UX',
      'Cloud-based app development',
      'API & third-party integration',
      'Advanced app security',
      'Performance & scalability optimization',
      'Continuous maintenance & development'
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Application Development',
    description:
      'AI-powered mobile apps with excellent UX and cross-platform compatibility (Android & iOS).',
    icon: Smartphone,
    features: [
      'Native & hybrid app development',
      'AI integration for smart features',
      'Intuitive mobile UX/UI',
      'Backend system integration',
      'Testing & deployment to Play Store/App Store',
      'Update & maintenance support'
    ]
  },
  {
    id: 'desktop',
    title: 'Desktop Application Development',
    description:
      'Robust, secure, and integrated desktop software tailored to the specific needs of organizations or institutions.',
    icon: Monitor,
    features: [
      'Windows, Mac, Linux app development',
      'Internal system integration',
      'Data & access security',
      'Professional desktop UI',
      'Multi-user & multi-role support',
      'Technical maintenance & support'
    ]
  },
  {
    id: 'products',
    title: 'Digital Product Development',
    description:
      'Innovative digital product solutions to support business efficiency and growth across sectors.',
    icon: Package,
    features: [
      'SaaS & digital platform development',
      'Payment & e-commerce integration',
      'Business data & analytics',
      'Market-driven product design',
      'Product launch & scaling support',
      'Feature R&D'
    ]
  },
  {
    id: 'support',
    title: 'Technical Support',
    description:
      '24/7 professional technical assistance to ensure smooth system operations and minimal disruption.',
    icon: Headset,
    features: [
      'Helpdesk & troubleshooting',
      'System & app monitoring',
      'Routine maintenance & updates',
      'Rapid incident response',
      'Remote & onsite support',
      'Issue reporting & documentation'
    ]
  }
];

const ServicesPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Services - PT AITISERVE DJAYA NARAYA';
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [location]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-black text-center">
        <div className="max-w-2xl mx-auto">
          <div className="uppercase text-white/70 tracking-widest text-sm mb-4">Services</div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Our Services</h1>
          <p className="text-lg text-white/80 mb-2">
            AITISERVE delivers comprehensive solutions for the digital era, integrating artificial intelligence and information technology to empower your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group p-8">
                  <div className="mb-4 flex items-center justify-center"><Icon className="w-8 h-8 text-hijau" /></div>
                  <h3 className="text-2xl font-semibold text-white mb-2 text-center">{service.title}</h3>
                  <p className="text-white/80 text-base mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature: string, idx2: number) => (
                      <li key={idx2} className="flex items-start text-white/70 text-sm">
                        <Check className="w-4 h-4 text-hijau mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16">
        <CtaSection />
      </section>
    </>
  );
};

export default ServicesPage;
