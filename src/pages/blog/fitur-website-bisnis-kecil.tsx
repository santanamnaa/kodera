import { div } from 'framer-motion/client';
import React from 'react';

const MobileFirstDesign: React.FC = () => (
<div className="bg-black py-16">
  <article className="bg-black text-white py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-center">
      Desain Mobile-First: Kenapa Penting?
    </h1>
    <div className="flex justify-center mb-8 text-gray-400 text-sm">
      <span>22 Mei 2025</span>
    </div>
    <img
      src="/images/blog/mobile-first.png"
      alt="Desain Mobile First"
      className="w-full h-80 object-cover rounded-xl mb-10 mx-auto"
    />
    <p className="text-base mb-10 text-center text-gray-300 max-w-2xl mx-auto">
      Sebagian besar pengguna saat ini mengakses internet melalui perangkat mobile. Maka dari itu, desain mobile-first menjadi strategi penting dalam pengembangan website.
    </p>
    <section className="mt-12 space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Apa itu Desain Mobile-First?</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Desain mobile-first adalah pendekatan dalam pembuatan website yang dimulai dari tampilan mobile terlebih dahulu, lalu diperluas ke versi tablet dan desktop. Ini memastikan pengalaman pengguna terbaik di layar yang paling kecil sekalipun.
        </p>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Manfaat Utama</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed space-y-2">
          <li>Performa yang lebih cepat di perangkat mobile</li>
          <li>Pengalaman pengguna yang lebih baik</li>
          <li>Lebih siap untuk SEO karena Google mengutamakan mobile indexing</li>
          <li>Meningkatkan konversi dan engagement</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tips Menerapkan Mobile-First</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Gunakan layout yang fleksibel (responsive), hindari elemen besar yang sulit dimuat di mobile, dan pastikan semua fungsi penting tetap mudah diakses pada layar kecil.
        </p>
      </div>
    </section>
  </article>
  </div>
);

export default MobileFirstDesign;