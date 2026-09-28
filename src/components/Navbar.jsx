import React, { useState, useEffect } from 'react';
import { siteContent, t } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiArrowUpRight, FiGlobe } from 'react-icons/fi';

export const Navbar = () => {
  const { lang, toggleLanguage } = useLanguage();
  const tr = siteContent.nav;
  const getText = (key) => t(tr[key], lang);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: getText('home'), href: '#home' },
    { name: getText('about'), href: '#about' },
    { name: getText('services'), href: '#services' },
    { name: getText('projects'), href: '#projects' },
    { name: getText('team'), href: '#team' },
    { name: getText('gallery'), href: '#gallery' },
    { name: getText('contact'), href: '#contact' },
  ];

  const LangSwitch = ({ className = '' }) => (
    <div
      className={`inline-flex items-center rounded-full p-1 border transition-colors duration-300 ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <FiGlobe
        className={`w-4 h-4 mx-1.5 flex-shrink-0 ${scrolled ? 'text-[#5E8C61]' : 'text-emerald-200'}`}
      />
      {['id', 'en', 'de'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => toggleLanguage(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
            lang === code
              ? 'bg-[#173F2A] text-[#A8C3A0] shadow-sm'
              : scrolled
                ? 'text-[#18201B]/60 hover:text-[#173F2A]'
                : 'text-white/70 hover:text-white'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav py-3 shadow-sm'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div
            className={`flex items-center justify-center py-1.5 px-3 rounded-2xl transition-all duration-300 ${
              scrolled
                ? 'bg-white/80 border border-[#173F2A]/10 shadow-xs'
                : 'bg-white/95 shadow-md backdrop-blur-sm border border-white/40'
            }`}
          >
            <img
              src="/images/logo.png"
              alt="CV Valor Nusantara"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-heading font-extrabold tracking-wider text-sm sm:text-base uppercase ${
                scrolled ? 'text-[#173F2A]' : 'text-white'
              }`}
            >
              VALOR NUSANTARA
            </span>
            <span
              className={`text-[10px] tracking-widest font-medium uppercase -mt-0.5 ${
                scrolled ? 'text-[#5E8C61]' : 'text-emerald-200/90'
              }`}
            >
              {getText('brandMotto')}
            </span>
          </div>
        </a>

        {/* Desktop Menu Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#5E8C61] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5E8C61] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? 'text-[#18201B]' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <LangSwitch
            className={
              scrolled
                ? 'border-[#173F2A]/20 bg-white/60'
                : 'border-white/20 bg-white/10 backdrop-blur-md'
            }
          />
          <a
            href="#contact"
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
              scrolled
                ? 'bg-[#173F2A] text-white hover:bg-[#0B2E20]'
                : 'bg-white text-[#173F2A] hover:bg-emerald-50'
            }`}
          >
            <span>{getText('letsTalk')}</span>
            <FiArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="sm:hidden">
            <LangSwitch
              className={
                scrolled
                  ? 'border-[#173F2A]/20 bg-white/60'
                  : 'border-white/20 bg-white/10 backdrop-blur-md'
              }
            />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl focus:outline-none transition-colors ${
              scrolled ? 'text-[#173F2A]' : 'text-white'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B2E20] text-white px-6 pt-6 pb-8 border-b border-emerald-900/60 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-emerald-100 hover:text-white py-2 border-b border-emerald-950/60"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 w-full py-3 rounded-full text-sm font-bold bg-[#5E8C61] text-white uppercase tracking-wider"
              >
                <span>{getText('letsTalk')}</span>
                <FiArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
