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
    q: 'Bagaimana proses rekrutmen di AITISERVE?',
    a: 'Proses rekrutmen meliputi seleksi administrasi, wawancara, tes teknis (jika diperlukan), dan penawaran kerja.'
  },
  {
    q: 'Apakah AITISERVE mendukung remote working?',
    a: 'Ya, sebagian besar posisi mendukung remote working dan fleksibilitas waktu.'
  },
  {
    q: 'Apa saja nilai budaya kerja di AITISERVE?',
    a: 'Budaya kerja kami berlandaskan nilai TANGGUH: Transformasi, Amanah, Nyata, Gigih, Gesit, Unggul, Harmonis.'
  },
  {
    q: 'Bagaimana cara melamar?',
    a: 'Kirim CV dan portofolio Anda ke email resmi kami atau melalui form rekrutmen di website.'
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
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Join AITISERVE</h1>
          <p className="text-lg text-white/80 mb-2">
            Bergabunglah bersama tim AITISERVE dan jadilah bagian dari transformasi digital Indonesia.<br />
            Temukan peluang karir, budaya kerja inovatif, dan pengembangan diri tanpa batas.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white mb-4">Our Culture & Values</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Kami percaya bahwa budaya kerja yang sehat dan nilai perusahaan yang kuat adalah kunci keberhasilan bersama. Di AITISERVE, setiap individu didorong untuk tumbuh, berinovasi, dan berkontribusi nyata.
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

      {/* Open Positions Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white mb-4">Open Positions</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Temukan posisi yang sesuai dengan minat dan keahlian Anda. Kami mencari talenta terbaik untuk tumbuh bersama AITISERVE.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {positions.map((job) => (
              <div key={job.id} className="bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                  <div className="flex items-center text-white/70 text-sm mb-2 gap-4">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" />{job.salary}</span>
                  </div>
                  <p className="text-white/80 text-base mb-4 flex-1">{job.desc}</p>
                  <a
                    href={`mailto:hr@aitiserve.co.id?subject=Lamaran%20${encodeURIComponent(job.title)}`}
                    className="inline-block mt-auto text-hijau font-medium border-b border-hijau hover:text-hijau hover:border-green-500 transition-colors duration-200 text-base"
                  >
                    Apply Now <span className="ml-1">↗</span>
                  </a>
                </div>
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