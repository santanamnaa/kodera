import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Halaman Tidak Ditemukan - Kodera';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="text-center p-8 border border-white/10 rounded-xl shadow-md max-w-md">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-light mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-sm text-gray-400 mb-8">
          Maaf, halaman yang Anda cari tidak tersedia atau mungkin telah dipindahkan.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-white text-black font-medium px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;