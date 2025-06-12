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
    document.title = 'Produk - Kodera';
  }, []);
  
  const products: Product[] = [
    {
      id: 'suma-barber-booking',
      title: 'Suma Barber Booking Management',
      description: 'Sistem manajemen booking barbershop berbasis web untuk mengatur jadwal, pelanggan, dan layanan secara efisien.',
      features: [],
      image: '/images/products/suma-booking.png'
    },
    {
      id: 'aitiserve-company-profile',
      title: 'Company Profile PT AITISERVE',
      description: 'Website company profile informatif dan profesional untuk PT AITISERVE, menampilkan layanan, portofolio, dan identitas perusahaan.',
      features: [],
      image: '/images/products/aitiserve-profile.png'
    },
    {
      id: 'menanti-giliran-coffee',
      title: 'Menanti Giliran Coffee Shop',
      description: 'Website branding untuk kedai kopi lokal dengan desain minimalis, menampilkan menu, lokasi, dan sistem antrian pelanggan.',
      features: [],
      image: '/images/products/menanti-giliran.png'
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
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Produk Kodera</p>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Solusi Siap Pakai</h1>
          <p className="max-w-2xl text-lg text-gray-300">
            Kodera menghadirkan solusi digital siap pakai untuk membantu UMKM, komunitas, dan profesional membangun kehadiran online yang efektif dan efisien.
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