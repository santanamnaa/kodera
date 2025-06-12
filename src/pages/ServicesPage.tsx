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
    id: 'manajemen',
    title: 'Manajemen Proyek',
    description:
      'Kodera mengelola proyek pengembangan website dari awal hingga akhir secara terstruktur dan efisien.',
    icon: HelpingHand,
    features: [
      'Analisis kebutuhan klien',
      'Perencanaan milestone & timeline',
      'Koordinasi lintas peran',
      'Pengawasan dan update progres',
      'Evaluasi pascaproyek'
    ]
  },
  {
    id: 'developer',
    title: 'Koordinasi Developer',
    description:
      'Kami menugaskan developer profesional yang sesuai dengan kebutuhan proyek Anda.',
    icon: Monitor,
    features: [
      'Kurasi developer berdasarkan kebutuhan',
      'Distribusi tugas berbasis keahlian',
      'Pemantauan produktivitas tim',
      'Komunikasi dua arah dengan klien',
      'Pengelolaan revisi & eskalasi'
    ]
  },
  {
    id: 'kurasi',
    title: 'Kurasi & QA',
    description:
      'Kodera menjamin setiap produk akhir melewati proses verifikasi kualitas teknis dan estetika.',
    icon: Check,
    features: [
      'Review kode & dokumentasi',
      'Uji fungsional & UAT',
      'Checklist teknis & estetika',
      'Feedback multi-pihak',
      'Standarisasi hasil akhir'
    ]
  },
  {
    id: 'konsultasi',
    title: 'Konsultasi & Dukungan',
    description:
      'Kami menyediakan layanan konsultatif dan bantuan teknis selama dan setelah proyek berjalan.',
    icon: Headset,
    features: [
      'Konsultasi strategi digital',
      'Pendampingan teknis pascaproyek',
      'Dokumentasi panduan klien',
      'Respons terhadap kendala teknis',
      'Pembaruan & pemeliharaan sistem'
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
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Layanan dari Kodera</h1>
          <p className="text-lg text-white/80 mb-2">
            Kodera menyediakan layanan pengembangan website secara menyeluruh, mulai dari manajemen proyek hingga pendampingan teknis berkelanjutan.
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
