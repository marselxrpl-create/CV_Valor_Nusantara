import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { siteContent, t } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/services';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { Leaf, Users, HeartPulse, FlaskConical } from 'lucide-react';

const serviceIcons = {
  Leaf: <Leaf className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  HeartPulse: <HeartPulse className="w-7 h-7" />,
  FlaskConical: <FlaskConical className="w-7 h-7" />
};

export const Services = () => {
  const { lang } = useLanguage();
  const tr = siteContent.services;
  const getText = (key) => t(tr[key], lang);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0B2E20] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#173F2A] rounded-full filter blur-3xl opacity-50 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5E8C61] rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={getText('badge')}
          title={getText('title')}
          subtitle={getText('subtitle')}
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#173F2A]/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-emerald-800/60 hover:border-[#A8C3A0] transition-all duration-300 group flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/50"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-emerald-800/50">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-800/50 flex items-center justify-center text-[#A8C3A0] group-hover:bg-[#173F2A] transition-colors">
                    {serviceIcons[service.iconName]}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/50 uppercase">
                    {service.code}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4 group-hover:text-[#A8C3A0] transition-colors">
                  {t(service.title, lang)}
                </h3>

                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {t(service.desc, lang)}
                </p>

                <div className="space-y-2.5 mb-8">
                  {service.details[lang].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-200/90 font-medium">
                      <span className="w-4 h-4 rounded-full bg-[#5E8C61] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="w-2.5 h-2.5" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-emerald-800/40">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#A8C3A0] group-hover:text-white transition-colors"
                >
                  <span>{getText('viewDetail')}</span>
                  <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </a>
                <Leaf className="w-5 h-5 text-emerald-800 group-hover:text-[#A8C3A0] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
