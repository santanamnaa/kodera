import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';


interface HeaderProps {
  onOpenSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isProductPage = location.pathname.startsWith('/products');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('desktop-dropdown-layanan');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const headerClasses = `fixed w-full z-40 transition-all duration-300 backdrop-blur-md ${
    isProductPage
      ? 'bg-transparent py-5'
      : isHomePage
        ? (isScrolled ? 'bg-black/100 shadow-lg py-3' : 'bg-transparent py-5 shadow-none')
        : 'bg-transparent py-3 shadow-none'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center min-h-[64px]">
        <Link to="/" className="flex items-center min-w-[48px]">
          <span className="ml-2 text-xl font-bold">
            <img src="/images/branding/logo_white.svg" alt="AITISERVE" className="inline-block w-20 h-20" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center flex-wrap space-x-4 md:space-x-8">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            Beranda
          </NavLink>

          {/* Dropdown */}
          <div className="relative">
            <button
              className="nav-link flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              aria-controls="desktop-dropdown-layanan"
              type="button"
            >
              Layanan
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isDropdownOpen && (
              <div id="desktop-dropdown-layanan" className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg py-2 z-50">
                <Link to="/services#web" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  Aplikasi Web
                </Link>
                <Link to="/services#mobile" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  Aplikasi Mobile
                </Link>
                <Link to="/services#desktop" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  Aplikasi Desktop
                </Link>
                <Link to="/services#consulting" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  Konsultasi IT & AI
                </Link>
                <Link to="/services#products" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  Produk Digital
                </Link>
                <Link to="/services#support" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  Dukungan Teknis
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            Produk
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            Blog
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            Tentang
          </NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            Karir
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            Kontak
          </NavLink>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center ml-auto">
          <button
            onClick={onOpenSidebar}
            className="text-gray-200 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-secondary rounded"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
