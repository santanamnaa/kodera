import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';

const positions = [
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    location: 'Bandung / Remote',
    type: 'Full-time',
    salary: 'Kompetitif',
    desc: 'Bertanggung jawab mengembangkan antarmuka aplikasi web modern dengan React, Tailwind, dan integrasi API.'
  },
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    location: 'Bandung / Remote',
    type: 'Full-time',
    salary: 'Kompetitif',
    desc: 'Mengembangkan dan memelihara API, database, serta sistem backend berbasis Node.js, Go, atau Python.'
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    location: 'Bandung / Remote',
    type: 'Full-time',
    salary: 'Kompetitif',
    desc: 'Membangun solusi AI (ML, NLP, Computer Vision) untuk berbagai kebutuhan bisnis dan integrasi produk.'
  },
  {
    id: 'uiux-designer',
    title: 'UI/UX Designer',
    location: 'Bandung / Remote',
    type: 'Full-time',
    salary: 'Kompetitif',
    desc: 'Merancang pengalaman pengguna dan antarmuka aplikasi digital yang intuitif dan menarik.'
  }
];

const faqs = [
  {
    q: 'Bagaimana proses rekrutmen di Kodera?',
    a: 'Proses rekrutmen meliputi seleksi CV, wawancara, uji kemampuan (jika diperlukan), dan penawaran kerja resmi.'
  },
  {
    q: 'Apakah Kodera mendukung kerja remote?',
    a: 'Ya, sebagian besar posisi di Kodera mendukung fleksibilitas lokasi dan waktu kerja.'
  },
  {
    q: 'Nilai budaya kerja seperti apa yang diterapkan Kodera?',
    a: 'Kami menjunjung tinggi kolaborasi, transparansi, dan pembelajaran berkelanjutan dalam setiap proses kerja.'
  },
  {
    q: 'Bagaimana cara melamar ke Kodera?',
    a: 'Kirim CV dan portofolio Anda ke email resmi kami atau isi formulir rekrutmen di halaman kontak.'
  },
];

const culture = [
  {
    icon: <Briefcase className="w-7 h-7 text-hijau" />,
    title: 'Inovasi & Kolaborasi',
    desc: 'Kami mendorong inovasi, kolaborasi, dan pengembangan diri di setiap lini perusahaan.'
  },
  {
    icon: <Briefcase className="w-7 h-7 text-hijau" />,
    title: 'Work-Life Balance',
    desc: 'Fleksibilitas kerja dan keseimbangan antara kehidupan pribadi dan profesional.'
  },
  {
    icon: <Briefcase className="w-7 h-7 text-hijau" />,
    title: 'Pengembangan Karir',
    desc: 'Dukungan pelatihan, sertifikasi, dan peluang berkembang bersama tim AITISERVE.'
  },
  {
    icon: <Briefcase className="w-7 h-7 text-hijau" />,
    title: 'Benefit Kompetitif',
    desc: 'Gaji, tunjangan, dan fasilitas kerja yang kompetitif di industri teknologi.'
  },
];

const CareersPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <div className="min-h-[100px] bg-black" />
      {/* Hero Section */}
      <section className="bg-black py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="uppercase text-white/70 tracking-widest text-sm mb-4">Careers</div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Bergabung dengan Kodera</h1>
          <p className="text-lg text-white/80 mb-2">
            Bergabunglah bersama tim Kodera dan jadilah bagian dari perjalanan membangun website berkualitas untuk klien dari berbagai latar belakang. Temukan budaya kerja yang mendukung pertumbuhan dan kolaborasi.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white mb-4">Budaya & Nilai Kami</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Kami percaya bahwa lingkungan kerja yang suportif dan nilai yang kuat adalah fondasi dari hasil kerja yang bermakna. Di Kodera, setiap individu didorong untuk belajar, berinovasi, dan bertumbuh bersama.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white mb-4">FAQ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="bg-black border-b border-white/10 py-6">
                <button
                  className="flex items-center justify-between w-full text-left text-lg text-white/90 font-medium focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openFaq === idx && (
                  <div className="mt-3 text-white/70 text-base">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;