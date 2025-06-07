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
  <section className="bg-gray-100 py-12 md:py-16 px-4">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Visi, Misi, dan Nilai Perusahaan</h2>
      <div className="mb-6 md:mb-8">
        <h3 className="font-semibold">Visi</h3>
        <p className="mb-4">Menjadi mitra terpercaya dalam transformasi digital yang unggul dan inovatif, serta perusahaan teknologi terdepan yang menghadirkan solusi berbasis kecerdasan buatan dan teknologi informasi untuk masa depan yang berkelanjutan dan berdampak nyata.</p>
        <h3 className="font-semibold mt-4">Misi</h3>
        <ul className="list-disc list-inside text-left max-w-xl mx-auto mb-4">
          <li>Menghadirkan solusi AI dan TI yang efisien, bernilai tambah, dan berorientasi pada masa depan.</li>
          <li>Mendukung transformasi digital melalui layanan konsultasi, implementasi teknologi, dan kemitraan strategis.</li>
          <li>Meningkatkan kualitas sumber daya manusia dengan menanamkan budaya inovatif dan pengembangan kompetensi berkelanjutan.</li>
        </ul>
      </div>
      <h3 className="font-semibold mt-6 md:mt-8 mb-4">Nilai Perusahaan: <span className="font-bold">TANGGUH</span></h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {values.map((v) => (
          <div key={v.title} className="bg-white rounded-lg shadow p-4">
            <h4 className="font-bold text-primary mb-2">{v.title}</h4>
            <p className="text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMissionSection; 