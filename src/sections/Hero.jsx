import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { Leaf } from 'lucide-react';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/Button';

export const Hero = () => {
  const { lang } = useLanguage();
  const tr = siteContent.hero;
  const t = (key) => translate(tr[key], lang);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B2E20]">
      {/* Background Image with Parallax & Nature Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Valor Nusantara Nature Hero"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E20] via-[#0B2E20]/60 to-[#173F2A]/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B2E20]/50 to-[#0B2E20]"></div>
      </div>

      {/* Floating Animated Leaf Ornaments */}
      <div className="absolute top-24 left-10 text-emerald-400/20 pointer-events-none animate-float-leaf">
        <Leaf className="w-20 h-20 sm:w-28 sm:h-28" />
      </div>
      <div className="absolute bottom-20 right-12 text-emerald-300/15 pointer-events-none animate-float-leaf-delayed">
        <Leaf className="w-24 h-24 sm:w-32 sm:h-32" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 backdrop-blur-md text-emerald-200 border border-white/20 mb-6"
        >
          <span>{t('badge')}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-heading font-extrabold text-sm sm:text-base tracking-[0.3em] uppercase text-[#A8C3A0] mb-3"
        >
          VALOR NUSANTARA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.1] mb-6"
        >
          <span className="block">{t('headingLine1')}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-[#A8C3A0] to-emerald-400">
            {t('headingLine2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="max-w-2xl mx-auto text-base sm:text-xl text-emerald-100/90 font-light leading-relaxed mb-10"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#about" variant="primary" size="lg" icon={<FiArrowDown className="w-5 h-5 animate-bounce" />}>
            {t('exploreBtn')}
          </Button>

          <Button href="#contact" variant="glass" size="lg" icon={<FiArrowUpRight className="w-5 h-5" />}>
            {t('contactBtn')}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-white/90 text-xs sm:text-sm font-medium"
        >
          <div className="flex items-center justify-center gap-2">
            <FiCheckCircle className="text-[#A8C3A0] w-4 h-4 flex-shrink-0" />
            <span>{t('point1')}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FiCheckCircle className="text-[#A8C3A0] w-4 h-4 flex-shrink-0" />
            <span>{t('point2')}</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2">
            <FiCheckCircle className="text-[#A8C3A0] w-4 h-4 flex-shrink-0" />
            <span>{t('point3')}</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-emerald-200/60 text-xs tracking-widest uppercase">
        <span>{t('scrollTag')}</span>
        <FiArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
