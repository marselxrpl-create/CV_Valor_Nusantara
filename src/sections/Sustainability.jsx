import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { FiArrowUpRight } from 'react-icons/fi';
import { Leaf } from 'lucide-react';

export const Sustainability = () => {
  const { lang } = useLanguage();
  const tr = siteContent.sustainability;
  const t = (key) => translate(tr[key], lang);

  return (
    <section className="relative py-28 sm:py-36 bg-[#0B2E20] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/galeri-8.jpg"
          alt="Sustainability Banner Background"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E20]/95 via-[#173F2A]/90 to-[#0B2E20]/95"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 mb-6"
        >
          <Leaf className="w-4 h-4 text-[#A8C3A0]" />
          <span>{t('badge')}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-8"
        >
          {t('title')}
        </motion.h2>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-2xl text-emerald-100/90 font-light leading-relaxed max-w-3xl mx-auto mb-10 italic"
        >
          {t('quote')}
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <Button href="#services" variant="primary" size="lg" icon={<FiArrowUpRight className="w-5 h-5" />}>
            {t('cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
