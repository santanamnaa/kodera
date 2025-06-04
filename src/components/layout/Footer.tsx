import React from 'react';
import Logo from '../common/Logo';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'CAREER', href: '/career' },
  { label: 'BLOG', href: '/blog' },
  { label: 'IMPRESSUM', href: '/impressum' },
  { label: 'CONTACT', href: '/contact' },
];

const socialLinks = [
  { label: 'Instagram', href: '#'},
  { label: 'Youtube', href: '#'},
  { label: 'LinkedIn', href: '#'},
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col min-h-[60vh]">
        {/* Top Row: Logo, Nav, Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          {/* Logo */}
          <div className="flex-1 flex justify-start mb-8 md:mb-0">
            <Logo />
          </div>
          {/* Nav Links */}
          <nav className="flex-1 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="uppercase text-lg md:text-2xl font-semibold tracking-wide mb-2 md:mb-1 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Social Links */}
          <div className="flex-1 flex flex-col items-end space-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base md:text-lg flex items-center gap-1 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} <span className="inline-block">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Large Get In Touch Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 mb-8 w-full">
          <span className="text-lg text-white/80 mb-4 md:mb-0">Have any Questions?</span>
          <span className="text-[10vw] md:text-[7vw] font-extrabold uppercase leading-none tracking-tight text-white text-center md:text-left">GET IN TOUCH</span>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 w-full mb-4" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <span className="text-sm text-white/80">© Copyright 2025 - <span className="font-medium">Techbros GmbH</span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;