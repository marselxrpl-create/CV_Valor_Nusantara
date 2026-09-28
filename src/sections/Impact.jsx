import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { impactData } from '../data/impact';

const CounterItem = ({ target, prefix, suffix, label, subtext, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
      <div className="font-heading font-extrabold text-5xl sm:text-6xl text-white mb-2 tracking-tight">
        {prefix}
        {count < 10 && prefix.includes('0') ? `0${count}` : count}
        {suffix}
      </div>
      <h3 className="font-heading font-bold text-lg text-emerald-200 mb-1">
        {label}
      </h3>
      <p className="text-xs text-white/70 font-light">
        {subtext}
      </p>
    </div>
  );
};

export const Impact = () => {
  const { lang } = useLanguage();
  const tr = siteContent.impact;
  const t = (key) => translate(tr[key], lang);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-[#173F2A] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/galeri-5.jpg"
          alt="Nature Impact Background"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#173F2A]/90 via-[#0B2E20]/85 to-[#173F2A]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('badge')}
          title={t('title')}
          subtitle={t('subtitle')}
          theme="dark"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {impactData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <CounterItem
                target={item.targetValue}
                prefix={item.prefix}
                suffix={item.suffix}
                label={translate(item.label, lang)}
                subtext={translate(item.subtext, lang)}
                inView={isInView}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
