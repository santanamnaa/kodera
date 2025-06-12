import React from 'react';

const values = [
  { title: 'Transformasi', desc: 'Berkomitmen pada perubahan positif dan berkelanjutan dalam menghadapi tantangan.' },
  { title: 'Amanah', desc: 'Menjunjung tinggi integritas, tanggung jawab, dan kepercayaan.' },
  { title: 'Nyata', desc: 'Fokus pada hasil yang konkret, terukur, dan memberikan dampak nyata.' },
  { title: 'Gigih', desc: 'Konsisten dan tangguh dalam menghadapi tantangan dan mencapai target.' },
  { title: 'Gesit', desc: 'Adaptif terhadap perubahan, cepat tanggap dalam mengambil keputusan.' },
  { title: 'Unggul', desc: 'Berorientasi hasil dengan standar kualitas tinggi.' },
  { title: 'Harmonis', desc: 'Menjalin hubungan baik antar tim, mitra, dan seluruh pemangku kepentingan.' },
];

const VisionMissionSection: React.FC = () => (
  <section className="bg-black text-white py-20 px-6 md:px-10">
    <div className="max-w-7xl mx-auto text-center space-y-10">
      <h2 className="text-3xl md:text-5xl font-light tracking-tight">Visi, Misi & Nilai</h2>
      <div className="grid md:grid-cols-2 gap-8 text-left text-gray-300 text-base leading-relaxed max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-light text-white mb-3">Visi</h3>
          <p>Menjadi agensi pengembangan website terpercaya yang menjembatani kebutuhan digital klien dengan solusi berkualitas tinggi melalui pengelolaan proyek yang efisien, transparan, dan kolaboratif.</p>
        </div>
        <div>
          <h3 className="text-xl font-light text-white mb-3">Misi</h3>
          <p>Mengelola proses pengembangan website secara end-to-end dengan fokus pada kualitas, komunikasi efektif, dan dukungan berkelanjutan. Menyediakan layanan konsultasi strategis serta memastikan hasil akhir sesuai dengan tujuan dan identitas klien.</p>
        </div>
      </div>
      <h3 className="text-2xl font-light text-white mt-20 mb-10">Nilai Inti: <span className="text-teal-400 tracking-widest font-normal">TANGGUH</span></h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-[1.01] transition duration-300 text-left"
          >
            <h4 className="text-white text-lg font-light mb-2">
              <span className="text-teal-400 mr-1 font-normal">{v.title.charAt(0)}</span>
              {v.title.slice(1)}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMissionSection; 