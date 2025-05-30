import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6">
              {t('footer.about_description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('footer.links')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('nav.careers')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#web" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('services.web.title')}
                </Link>
              </li>
              <li>
                <Link to="/services#mobile" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('services.mobile.title')}
                </Link>
              </li>
              <li>
                <Link to="/services#desktop" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('services.desktop.title')}
                </Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('services.consulting.title')}
                </Link>
              </li>
              <li>
                <Link to="/services#products" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('services.products.title')}
                </Link>
              </li>
              <li>
                <Link to="/services#support" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('services.support.title')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t('contact.title')}</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Jl. Kopo No. 88, Bandung, Indonesia
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@aiti.co.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-secondary transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-secondary transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;