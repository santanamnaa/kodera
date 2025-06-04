import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isProductPage = location.pathname.startsWith('/products');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const headerClasses = `fixed w-full z-40 transition-all duration-300 backdrop-blur-md ${
    isProductPage
      ? 'bg-transparent py-5'
      : isHomePage
        ? (isScrolled ? 'bg-black/70 shadow-lg py-3' : 'bg-transparent py-5')
        : 'bg-transparent py-3'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            Beranda
          </NavLink>

          {/* Dropdown */}
          <div className="relative">
            <button
              className="nav-link flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Layanan
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg py-2 z-50">
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
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-200 hover:text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-light absolute w-full">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            <NavLink to="/" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Beranda</NavLink>
            <NavLink to="/services" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Layanan</NavLink>
            <NavLink to="/products" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Produk</NavLink>
            <NavLink to="/blog" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Blog</NavLink>
            <NavLink to="/about" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Tentang</NavLink>
            <NavLink to="/careers" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Karir</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>Kontak</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
