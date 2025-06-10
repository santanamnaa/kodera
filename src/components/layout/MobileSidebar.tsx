// MobileSidebar.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const MobileSidebar: React.FC<Props> = ({ onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="flex-1 bg-black/50" onClick={onClose}></div>
      {/* Sidebar */}
      <div className="w-4/5 max-w-xs h-full bg-black pt-8 shadow-lg overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-200 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-secondary rounded"
          aria-label="Tutup menu"
        >
          <X className="w-7 h-7" />
        </button>
        <nav className="px-6 py-4 flex flex-col gap-2 mt-8">
          <NavLink to="/" className={({ isActive }) => `py-4 text-lg ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Beranda</NavLink>
          {/* Dropdown Layanan */}
          <div>
            <button
              className="py-4 text-lg nav-link flex items-center w-full justify-between"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              aria-controls="mobile-dropdown-layanan"
              type="button"
            >
              Layanan
              <span>{isDropdownOpen ? '▲' : '▼'}</span>
            </button>
            {isDropdownOpen && (
              <div id="mobile-dropdown-layanan" className="ml-4 flex flex-col gap-1">
                <NavLink to="/services#web" className={({ isActive }) => `py-2 text-base ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Aplikasi Web</NavLink>
                <NavLink to="/services#mobile" className={({ isActive }) => `py-2 text-base ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Aplikasi Mobile</NavLink>
                <NavLink to="/services#desktop" className={({ isActive }) => `py-2 text-base ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Aplikasi Desktop</NavLink>
                <NavLink to="/services#consulting" className={({ isActive }) => `py-2 text-base ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Konsultasi IT & AI</NavLink>
                <NavLink to="/services#products" className={({ isActive }) => `py-2 text-base ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Produk Digital</NavLink>
                <NavLink to="/services#support" className={({ isActive }) => `py-2 text-base ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Dukungan Teknis</NavLink>
              </div>
            )}
          </div>
          <NavLink to="/products" className={({ isActive }) => `py-4 text-lg ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Produk</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `py-4 text-lg ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Blog</NavLink>
          <NavLink to="/about" className={({ isActive }) => `py-4 text-lg ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Tentang</NavLink>
          <NavLink to="/careers" className={({ isActive }) => `py-4 text-lg ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Karir</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `py-4 text-lg ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Kontak</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MobileSidebar;