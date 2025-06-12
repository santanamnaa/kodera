import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 flex flex-col items-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <p className="uppercase tracking-widest text-base md:text-lg mb-4 font-light">About Us</p>
        <h1 className="text-3xl md:text-5xl font-light mb-8">
          <span className="font-normal">"Empowering Web Presence"</span>
        </h1>
        <p className="text-base md:text-xl font-light mb-12 text-justify">
          <span className="font-normal">Kodera</span> adalah agensi pengembangan website yang berperan sebagai penghubung antara klien (pemilik usaha, organisasi, atau individu) dengan pengembang profesional. Dengan pendekatan kolaboratif dan terstruktur, Kodera memastikan setiap proses pembuatan website berjalan efisien, transparan, dan berkualitas tinggi.<br /><br />
          Kami mengelola proyek secara end-to-end—dari identifikasi kebutuhan, penyusunan spesifikasi teknis, hingga koordinasi langsung dengan developer. Kodera menjamin kualitas dan konsistensi melalui proses kurasi dan verifikasi hasil kerja agar memenuhi standar teknis dan estetika yang tinggi.<br /><br />
          Selain itu, Kodera juga menyediakan layanan konsultatif dan dukungan teknis berkelanjutan untuk mendampingi klien bahkan setelah proyek selesai. Dengan sistem kerja berbasis milestone, komunikasi dua arah, dan dedikasi pada hasil terbaik, Kodera berkomitmen menjadi mitra tepercaya dalam membangun kehadiran digital yang kuat dan profesional.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;