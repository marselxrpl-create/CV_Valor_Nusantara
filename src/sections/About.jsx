import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { FiCheck } from 'react-icons/fi';

export const About = () => {
  const { lang } = useLanguage();
  const tr = siteContent.about;
  const t = (key) => translate(tr[key], lang);

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#F9F8F3] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-200/40 text-6xl sm:text-8xl md:text-9xl font-heading font-extrabold uppercase tracking-widest pointer-events-none select-none whitespace-nowrap z-0">
        {translate(tr.bgText, lang)}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('badge')}
          title={t('heading')}
          center={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#173F2A] border-4 border-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/galeri-7.jpg"
                  alt="Kegiatan Komunitas CV Valor Nusantara"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl max-w-xs border border-stone-100 flex items-start gap-3.5">
                <div className="w-12 h-10 rounded-xl bg-white border border-stone-200/90 p-1 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <img src="/images/logo.png" alt="CV Valor Nusantara" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#173F2A]">CV Valor Nusantara</h4>
                  <p className="text-xs text-[#18201B]/70 font-medium">{t('cardTagline')}</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[2.5rem] bg-[#A8C3A0]/30 -z-10 hidden sm:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-lg sm:text-xl text-[#173F2A] font-semibold leading-relaxed mb-6">
              {t('p1')}
            </p>

            <p className="text-base text-[#18201B]/75 leading-relaxed mb-8">
              {t('p2')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200/80 hover:border-[#5E8C61] transition-colors">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#173F2A] mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#173F2A] text-white text-xs flex items-center justify-center font-bold">
                    <FiCheck className="w-3.5 h-3.5" />
                  </span>
                  <span>{t('sustainabilityTitle')}</span>
                </div>
                <p className="text-xs text-[#18201B]/70 leading-relaxed">
                  {t('sustainabilityDesc')}
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200/80 hover:border-[#5E8C61] transition-colors">
                <div className="flex items-center gap-2 text-sm font-extrabold text-[#173F2A] mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#5E8C61] text-white text-xs flex items-center justify-center font-bold">
                    <FiCheck className="w-3.5 h-3.5" />
                  </span>
                  <span>{t('innovationTitle')}</span>
                </div>
                <p className="text-xs text-[#18201B]/70 leading-relaxed">
                  {t('innovationDesc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
