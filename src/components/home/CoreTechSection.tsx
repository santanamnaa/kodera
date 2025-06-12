import React from 'react';

const techs = [
  {
    title: 'Manajemen Proyek Web',
    desc: 'Perencanaan, pengorganisasian, dan pengawasan proyek pembuatan website dengan sistem milestone dan timeline yang transparan.',
  },
  {
    title: 'Pengembangan Frontend & Backend',
    desc: 'Kolaborasi dengan developer profesional untuk membangun website modern menggunakan stack populer seperti React, Next.js, Node.js, dan Laravel.',
  },
  {
    title: 'Kurasi & Review Kode',
    desc: 'Setiap kode yang dikembangkan akan melalui proses review dan validasi untuk menjamin kualitas, keamanan, dan performa.',
  },
  {
    title: 'Desain Antarmuka & Pengalaman Pengguna',
    desc: 'Desain UI/UX profesional menggunakan Figma, dengan pendekatan mobile-first dan fokus pada usability serta estetika.',
  },
];

const CoreTechSection: React.FC = () => (
  <section className="bg-black text-white py-20 px-6 md:px-10">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-center mb-12">Teknologi & Kompetensi Inti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techs.map((t) => (
          <div key={t.title} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300">
            <h4 className="text-lg font-light text-teal-400 mb-2">{t.title}</h4>
            <p className="text-gray-300 text-sm font-light leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreTechSection; 