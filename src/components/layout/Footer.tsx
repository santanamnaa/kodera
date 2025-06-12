import React from 'react';
import Logo from '../common/Logo';

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/services' },
  { label: 'Produk', href: '/products' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tentang', href: '/about' },
  { label: 'Karir', href: '/careers' },
  { label: 'Kontak', href: '/contact' },
];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Youtube', href: '#' },
];

const contactInfo = [
  { label: 'Email', value: 'santanamnaa.dev@gmail.com', href: 'mailto:hello@kodera.id' },
  // { label: 'Alamat', value: 'Jl. Pembangunan No. 21, Jakarta' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col min-h-[40vh]">
        {/* Top Row: Logo, Nav, Social */}
        <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center md:items-center w-full gap-8 md:gap-0">
          {/* Logo */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
            <Logo />
          </div>
          {/* Nav Links */}
          <nav className="w-full md:w-1/3 flex flex-wrap flex-col xs:flex-row md:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6 mb-4 md:mb-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="uppercase text-base xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide px-2 py-1 rounded hover:underline focus:outline-none focus:ring-2 focus:ring-secondary transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Social Links & Contact Info */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end gap-3 md:gap-2">
            <div className="flex flex-row md:flex-col justify-center md:items-end items-center gap-3 md:gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base md:text-lg flex items-center gap-1 hover:underline focus:outline-none focus:ring-2 focus:ring-secondary px-2 py-1 rounded transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <span className="inline-block">↗</span>
                </a>
              ))}
            </div>
            <div className="mt-2 flex flex-col items-center md:items-end gap-1 text-xs md:text-sm text-white/80">
              {contactInfo.map((info) => (
                info.href ? (
                  <a key={info.label} href={info.href} className="hover:underline">{info.label}: {info.value}</a>
                ) : (
                  <span key={info.label}>{info.label}: {info.value}</span>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Large Get In Touch Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-16 mb-6 md:mb-8 w-full text-center md:text-left gap-2 md:gap-0">
          <span className="text-base xs:text-sm sm:text-base md:text-lg text-white/80 mb-2 md:mb-0">Ada pertanyaan?</span>
          <span className="text-3xl xs:text-4xl sm:text-5xl md:text-[7vw] lg:text-6xl font-extrabold uppercase leading-none tracking-tight text-white">Hubungi Kami</span>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 w-full mb-4" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-2 md:gap-0">
          <span className="text-xs xs:text-sm md:text-base text-white/80 text-center">© {new Date().getFullYear()} - <span className="font-medium">KODERA</span>. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;