import React from 'react';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { FiInstagram, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  const { lang } = useLanguage();
  const tr = siteContent.footer;
  const t = (key) => translate(tr[key], lang);
  const nav = siteContent.nav;
  const navText = (key) => translate(nav[key], lang);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2E20] text-white pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-emerald-900/60">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="bg-white/95 p-2 px-3 rounded-2xl shadow-md border border-white/20 inline-flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="CV Valor Nusantara"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-wider uppercase text-white">
                  VALOR NUSANTARA
                </span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-emerald-400">
                  {t('tagline')}
                </span>
              </div>
            </div>

            <p className="text-emerald-100/70 text-sm leading-relaxed font-light max-w-sm">
              {t('description')}
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/valornusantara"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-300 flex items-center justify-center hover:bg-[#5E8C61] hover:text-white transition-colors"
                aria-label="Instagram @valornusantara"
                title="@valornusantara"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/valornusantara.ship"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-300 flex items-center justify-center hover:bg-[#5E8C61] hover:text-white transition-colors"
                aria-label="Instagram @valornusantara.ship"
                title="@valornusantara.ship"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@valornusantara"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-300 flex items-center justify-center hover:bg-[#5E8C61] hover:text-white transition-colors"
                aria-label="TikTok valornusantara"
                title="TikTok valornusantara"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-300 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="mailto:valornusantara.id@gmail.com"
                className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-300 flex items-center justify-center hover:bg-[#5E8C61] hover:text-white transition-colors"
                aria-label="Email"
                title="valornusantara.id@gmail.com"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-emerald-300">
              {t('navigation')}
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80 font-light">
              <li>
                <a href="#home" className="hover:text-white transition-colors">{navText('home')}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">{navText('about')}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{navText('services')}</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">{navText('projects')}</a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">{navText('team')}</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">{navText('gallery')}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">{navText('contact')}</a>
              </li>
            </ul>
          </div>

          {/* Direct Address & Back To Top */}
          <div className="md:col-span-4 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-emerald-300 mb-3">
                {t('contactInfo')}
              </h4>
              <p className="text-sm text-emerald-100/80 leading-relaxed font-light">
                <strong>CV Valor Nusantara</strong><br />
                Email: valornusantara.id@gmail.com<br />
                Instagram: @valornusantara & @valornusantara.ship<br />
                TikTok: valornusantara<br />
                Indonesia
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#173F2A] hover:bg-[#5E8C61] text-emerald-200 hover:text-white border border-emerald-700/50 transition-all shadow-md cursor-pointer"
              >
                <span>{t('backToTop')}</span>
                <FiArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/80 font-light">
          <p>© 2026 CV Valor Nusantara. {t('rights')}</p>
          <p>{t('designedWith')}</p>
        </div>
      </div>
    </footer>
  );
};
