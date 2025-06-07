import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 flex flex-col items-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <p className="uppercase tracking-widest text-base md:text-lg mb-4">About Us</p>
        <h1 className="text-3xl md:text-5xl font-light mb-8">
          <span className="font-normal">"Shaping a Bright Future"</span>
        </h1>
        <p className="text-base md:text-xl font-light mb-12 text-justify">
          PT. AITISERVE DJAYA NARAYA (AITISERVE) adalah perusahaan teknologi yang lahir dari semangat inovasi dan komitmen untuk membentuk masa depan digital yang lebih cerdas dan berkelanjutan. Didirikan pada 27 Agustus 2024 di Bandung, AITISERVE hadir sebagai startup visioner yang menggabungkan kecanggihan Kecerdasan Buatan (AI) dan Teknologi Informasi (TI) untuk menghadirkan solusi yang adaptif, efisien, dan berdampak langsung bagi dunia usaha dan masyarakat luas.<br /><br />
        Berbadan hukum Perseroan Terbatas berdasarkan Akta Pendirian dan telah disahkan melalui SK Menteri Hukum dan HAM RI Nomor AHU-0065986.AH.01.01.TAHUN 2024, AITISERVE menempatkan inovasi dan layanan sebagai inti dari setiap langkahnya.<br /><br />
        Filosofi nama "AITISERVE DJAYA NARAYA" mencerminkan sinergi antara kecerdasan buatan, teknologi informasi, dan layanan unggulan (AITISERVE), serta kejayaan, harapan, dan kemakmuran (DJAYA NARAYA). Nilai-nilai ini menjadi landasan dalam setiap langkah perusahaan untuk membentuk masa depan digital yang lebih cerdas, berkelanjutan, dan berdampak nyata.
        </p>
      </div>
    </section>
  );
};

export default AboutSection; 