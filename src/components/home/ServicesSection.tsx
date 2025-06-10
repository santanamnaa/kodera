import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  HelpingHand, 
  Map, 
  Headset 
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref} 
      className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition duration-500 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${delay * 150}ms`,
        willChange: 'opacity, transform',
      }}
    >
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 text-teal-400">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <HelpingHand className="w-8 h-8" />,
      title: 'Konsultasi IT & AI',
      description: 'Pendampingan strategis dalam transformasi digital, pemetaan kebutuhan teknologi, perencanaan sistem berbasis AI, dan pengembangan roadmap teknologi berkelanjutan.',
      delay: 0
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Pengembangan Aplikasi Web',
      description: 'Aplikasi web modern dengan desain responsif, performa optimal, dan skalabilitas tinggi untuk mendukung kebutuhan bisnis digital masa kini.',
      delay: 1
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Pengembangan Aplikasi Mobile',
      description: 'Aplikasi mobile berbasis AI dengan UX unggul dan kompatibel lintas platform (Android & iOS).',
      delay: 2
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Pengembangan Aplikasi Desktop',
      description: 'Perangkat lunak desktop yang tangguh, aman, dan terintegrasi sesuai kebutuhan spesifik organisasi atau instansi.',
      delay: 3
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: 'Pengembangan Sistem Informasi Geografis (GIS)',
      description: 'Solusi GIS untuk visualisasi lokasi, analisis spasial, dan pengambilan keputusan berbasis data geospasial yang akurat dan interaktif.',
      delay: 4
    },
    {
      icon: <Headset className="w-8 h-8" />,
      title: 'Dukungan Teknis (Technical Support)',
      description: 'Layanan bantuan teknis profesional 24/7 guna memastikan operasional sistem berjalan lancar dan minim gangguan.',
      delay: 5
    }
  ];

  return (
    <section id="services" className="bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left: Main Content */}
        <div className="w-full md:w-[45%] md:sticky md:top-24 self-start">
          <p className="uppercase tracking-widest text-lg mb-4 font-light">Layanan Kami</p>
          <h2 className="text-3xl md:text-5xl font-light mb-8">Ruang Lingkup Layanan</h2>
          <p className="text-2xl font-light mb-12">
            Sebagai perusahaan yang mengintegrasikan kecerdasan buatan dan teknologi informasi, <span className="font-normal">AITISERVE</span> menyediakan layanan lengkap yang dirancang untuk menjawab tantangan era digital.
          </p>
        </div>
        {/* Right: Services Grid */}
        <div className="w-full bg-black md:w-[55%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
