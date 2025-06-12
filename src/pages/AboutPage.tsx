import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb, Handshake } from 'lucide-react';
import FaqSection from '../components/home/FaqSection';

const coreValues = [
  {
    icon: <Lightbulb className="w-8 h-8 text-hijau" />, 
    title: 'Inovasi & Kualitas',
    desc: 'Kami berkomitmen untuk terus berinovasi dalam pengembangan website dan menjaga kualitas hasil kerja melalui proses yang sistematis dan kolaboratif.'
  },
  {
    icon: <Handshake className="w-8 h-8 text-hijau" />,
    title: 'Presisi & Keandalan',
    desc: 'Setiap proyek dijalankan dengan ketelitian dan tanggung jawab tinggi untuk memastikan hasil yang dapat diandalkan dan sesuai ekspektasi klien.'
  },
  // Add more values as needed
];

const aboutFaqs = [
  {
    question: 'Apa itu Kodera?',
    answer: 'Kodera adalah agensi pengembangan website yang membantu klien terhubung dengan developer profesional melalui manajemen proyek yang terstruktur dan efisien.',
  },
  {
    question: 'Apa saja layanan yang ditawarkan Kodera?',
    answer: 'Kami menawarkan manajemen proyek pembuatan website, koordinasi tim developer, kurasi kualitas dan UI/UX, serta layanan konsultasi digital berkelanjutan.',
  },
  {
    question: 'Apakah Kodera cocok untuk usaha kecil dan individu?',
    answer: 'Ya. Kami mendampingi berbagai skala klien, mulai dari UMKM, komunitas, hingga profesional individu untuk membangun website yang efektif dan representatif.',
  },
  {
    question: 'Bagaimana cara memulai proyek dengan Kodera?',
    answer: 'Hubungi kami melalui formulir di website atau WhatsApp. Tim kami akan mengatur sesi konsultasi awal dan menyusun proposal proyek untuk Anda.',
  },
];

const AboutPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-4 relative">
        <div className="max-w-3xl mx-auto pt-24 md:pt-30 pb-16 md:pb-20">
          <div className="uppercase text-white/70 tracking-widest text-sm mb-4">Tentang Kami</div>
          <h1 className="text-3xl md:text-5xl font-light text-white mb-6">"Bersama Membangun Inovasi"</h1>
          <p className="text-base md:text-lg text-white/80 mb-8">
            Kodera hadir untuk menjembatani kebutuhan digital klien dengan solusi pengembangan website yang efisien, kolaboratif, dan berkualitas tinggi.
          </p>
          <a href="/contact" className="inline-block text-white/90 border-b border-white/40 hover:opacity-80 transition text-base md:text-lg">
            Hubungi kami di sini <span className="ml-1">↗</span>
          </a>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="w-full relative">
        <img src="/images/branding/logo.svg" alt="Showcase" className="w-full h-48 md:h-[60vh] object-cover object-center" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent" />
      </section>

      {/* CEO Quote Section */}
      <section className="bg-black py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl italic text-white font-light mb-8">
            "Di dunia digital saat ini, kehadiran online yang kuat bukan lagi pilihan—melainkan kebutuhan. Kodera berkomitmen membantu klien membangun website yang bukan hanya tampil menarik, tapi juga fungsional dan berdampak."
          </blockquote>
          <div className="text-white/70 text-base md:text-lg">Achmad Faizal, Direktur Utama</div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-black py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-light text-white mb-6">Nilai Inti Kami</h2>
              <p className="text-white/80 text-base md:text-lg mb-10">
                Prinsip yang kami pegang menjadi fondasi setiap proyek yang kami jalankan. Kodera menjunjung tinggi profesionalisme, transparansi, dan kualitas dalam mendampingi klien membangun kehadiran digital mereka.
              </p>
            </div>
            <div className="space-y-8 md:space-y-10">
              {coreValues.map((v, i) => (
                <div key={v.title} className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 mt-1">{v.icon}</div>
                  <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 w-full">
                    <div className="text-primary font-bold mb-1">#{(i+1).toString().padStart(2,'0')}</div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">{v.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection faqs={aboutFaqs} title="TANYA JAWAB" subtitle="Pertanyaan umum seputar Kodera" />
    </>
  );
};

export default AboutPage;