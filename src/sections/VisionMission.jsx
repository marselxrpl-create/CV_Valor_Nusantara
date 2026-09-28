import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { GiSprout, GiMultipleTargets, GiLightBulb, GiWorld } from 'react-icons/gi';

export const VisionMission = () => {
  const { lang } = useLanguage();
  const tr = siteContent.visionMission;
  const t = (key) => translate(tr[key], lang);

  const missionIcons = {
    plant: <GiSprout className="w-8 h-8 text-[#5E8C61]" />,
    users: <GiMultipleTargets className="w-8 h-8 text-[#5E8C61]" />,
    lightbulb: <GiLightBulb className="w-8 h-8 text-[#5E8C61]" />,
    globe: <GiWorld className="w-8 h-8 text-[#5E8C61]" />
  };

  return (
    <section className="py-24 bg-[#EFECE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#173F2A] text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl mb-20 relative overflow-hidden border border-emerald-800/50"
        >
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 text-white/5 text-9xl pointer-events-none">
            <GiSprout />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-white/10 text-emerald-300 border border-white/20 mb-6">
              {t('visionTitle')}
            </span>

            <blockquote className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight text-white tracking-tight mb-6">
              {t('visionQuote')}
            </blockquote>

            <div className="w-16 h-1 bg-[#5E8C61] mx-auto rounded-full"></div>
          </div>
        </motion.div>

        <SectionTitle
          badge=          {t('missionBadge')}
          title=          {t('missionTitle')}
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {tr.missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/70 hover:border-[#173F2A] group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F9F8F3] group-hover:bg-[#173F2A] flex items-center justify-center transition-colors duration-300">
                    {React.cloneElement(missionIcons[mission.iconName], {
                      className: 'w-7 h-7 text-[#5E8C61] group-hover:text-white transition-colors duration-300'
                    })}
                  </div>
                  <span className="font-heading text-2xl font-extrabold text-stone-300 group-hover:text-[#173F2A] transition-colors">
                    {mission.id}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#173F2A] mb-3 group-hover:text-[#5E8C61] transition-colors">
                  {translate(mission.title, lang)}
                </h3>

                <p className="text-sm text-[#18201B]/75 leading-relaxed font-normal">
                  {translate(mission.desc, lang)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
