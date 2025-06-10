import React, { useEffect, useState } from 'react';
import CtaSection from '../components/home/CtaSection';

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ProductsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Produk Digital - PT AITISERVE DJAYA NARAYA';
  }, []);
  
  const products: Product[] = [
    {
      id: 'aitiserve-erp',
      title: 'AITISERVE ERP',
      description: 'Sistem ERP terintegrasi untuk otomasi proses bisnis, pengelolaan keuangan, SDM, inventaris, dan operasional perusahaan.',
      features: [
        'Manajemen keuangan & akuntansi',
        'Pengelolaan SDM & payroll',
        'Manajemen inventaris & gudang',
        'Otomasi proses bisnis',
        'Integrasi dengan sistem lain',
        'Dashboard analitik real-time'
      ],
      image: '/images/products/products_erp.png'
    },
    {
      id: 'aitiserve-crm',
      title: 'AITISERVE CRM',
      description: 'Solusi CRM untuk pengelolaan relasi pelanggan, penjualan, pemasaran, dan layanan purna jual berbasis data.',
      features: [
        'Manajemen data pelanggan',
        'Otomasi penjualan & pipeline',
        'Pelacakan aktivitas & komunikasi',
        'Analitik perilaku pelanggan',
        'Integrasi email & telepon',
        'Laporan performa tim sales'
      ],
      image: '/images/products/products_crm.png'
    },
    {
      id: 'aitiserve-hris',
      title: 'AITISERVE HRIS',
      description: 'Sistem HRIS modern untuk pengelolaan data karyawan, absensi, cuti, rekrutmen, dan pengembangan SDM.',
      features: [
        'Manajemen data karyawan',
        'Absensi & cuti online',
        'Rekrutmen & onboarding',
        'Penilaian kinerja & KPI',
        'Pengembangan & pelatihan SDM',
        'Self-service portal karyawan'
      ],
      image: '/images/products/products_hris.png'
    },
    {
      id: 'aitiserve-analytics',
      title: 'AITISERVE Analytics',
      description: 'Platform analitik bisnis berbasis AI untuk visualisasi data, prediksi tren, dan pengambilan keputusan berbasis data.',
      features: [
        'Dashboard visual interaktif',
        'Analisis data real-time',
        'Prediksi tren bisnis dengan AI',
        'Integrasi multi-sumber data',
        'Laporan otomatis & kustom',
        'Keamanan data tingkat lanjut'
      ],
      image: '/images/products/products_ai.png'
    }
  ];
  
  // Track hovered card index
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] bg-black text-white flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/products/products_bg3.png')",
            backgroundAttachment: "fixed"
          }}
        />
        {/* Blur overlay above background image only */}
        <div className="absolute inset-0 backdrop-blur-md z-10 pointer-events-none" />
        {/* Black overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 z-20" style={{ backgroundAttachment: 'fixed' }} />
        {/* Hero text (sharp, not blurred) */}
        <div className="relative z-30">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Our Products</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Produk Digital</h1>
          <p className="max-w-2xl text-lg text-gray-300">
            AITISERVE menghadirkan rangkaian produk digital inovatif untuk mendukung efisiensi, pertumbuhan, dan transformasi bisnis Anda.
          </p>
        </div>
      </section>
      <div className="min-h-[80px] bg-black" />

      {/* Products */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {products.map((product, idx) => (
              <div
                key={product.id}
                id={product.id}
                className="relative rounded-2xl overflow-hidden bg-black group shadow-md transition-transform duration-300 hover:scale-[1.02] min-h-[360px] flex flex-col justify-between"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                {/* Black Tint */}
                <div className="absolute inset-0 bg-black/60 z-0" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between px-6 py-6">
                  {/* Top Title */}
                  <div className="text-white text-2xl font-medium mb-4">{product.title}</div>

                  {/* Bottom Section */}
                  <div className="flex justify-between items-end">
                    <p className="text-gray-300 text-sm max-w-[80%] leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex-shrink-0">
                      <img
                        src="https://cdn.prod.website-files.com/674f0bffd16800a9ec56609d/674f1695d93dcf98795b50e8_arrow-top-right-white.png"
                        alt=""
                        className="w-6 h-6 transition-transform duration-500"
                        style={{
                          transform: hoveredIdx === idx
                            ? 'translate3d(0px, 0px, 0px) scale(0.6)'
                            : 'translate3d(10px, 10px, 0px) scale(1)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default ProductsPage;