import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en');

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

  const headerClasses = `fixed w-full z-40 transition-all duration-300 ${
    isScrolled || !isHomePage
      ? 'bg-primary shadow-lg py-3'
      : 'bg-transparent py-5'
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
            {t('nav.home')}
          </NavLink>

          {/* Dropdown */}
          <div className="relative">
            <button
              className="nav-link flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {t('nav.services')}
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg py-2 z-50">
                <Link to="/services#web" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  {t('services.web.title')}
                </Link>
                <Link to="/services#mobile" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  {t('services.mobile.title')}
                </Link>
                <Link to="/services#desktop" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  {t('services.desktop.title')}
                </Link>
                <Link to="/services#consulting" className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  {t('services.consulting.title')}
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            {t('nav.portfolio')}
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            {t('nav.products')}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            {t('nav.careers')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            {t('nav.contact')}
          </NavLink>

          <button onClick={toggleLanguage} className="flex items-center text-gray-200 hover:text-white">
            <Globe className="w-5 h-5 mr-1" />
            <span>{i18n.language === 'en' ? 'EN' : 'ID'}</span>
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleLanguage} className="text-gray-200 hover:text-white mr-4">
            <Globe className="w-5 h-5" />
          </button>
          <button onClick={toggleMenu} className="text-gray-200 hover:text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-light absolute w-full">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            <NavLink to="/" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>
              {t('nav.services')}
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>
              {t('nav.portfolio')}
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>
              {t('nav.products')}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/careers" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>
              {t('nav.careers')}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `py-3 ${isActive ? 'nav-link nav-link-active' : 'nav-link'}`}>
              {t('nav.contact')}
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
