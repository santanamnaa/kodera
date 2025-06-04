import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
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
        <div className="relative rounded-3xl container mx-auto px-4">
          
          <div className="space-y-16">
            {products.map((product, idx) => {
              const { ref } = useInView({
                threshold: 0.1,
                triggerOnce: true,
              });
              
              return (
                <div
                  key={product.id}
                  ref={ref}
                  id={product.id}
                  className="relative rounded-3xl overflow-hidden group"
                  style={{
                    height: '450px',
                    width: '1100px',
                    margin: '30px auto',
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 scale-100 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-500" />
                  <div className="relative z-10 h-full text-white">
                    <h2 className="absolute top-4 left-4 text-2xl font-semibold">{product.title}</h2>
                    <p className="absolute bottom-4 left-4 text-sm text-gray-300 max-w-md">{product.description}</p>
                    {/* Animated portfolio arrow icon */}
                    <div
                      className="absolute bottom-15 right-0 z-20 portfolio-icon-container"
                      style={{ width: 40, height: 40 }}
                    >
                      <img
                        src="https://cdn.prod.website-files.com/674f0bffd16800a9ec56609d/674f1695d93dcf98795b50e8_arrow-top-right-white.png"
                        alt=""
                        className="portfolio-arrow-icon w-7 h-7 absolute transition-transform duration-500"
                        style={{
                          left: 0,
                          top: 0,
                          transform: hoveredIdx === idx
                            ? 'translate3d(0,0,0) scale3d(0.5,0.5,0.5)'
                            : 'translate3d(-100%,100%,0) scale3d(1,1,1)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default ProductsPage;