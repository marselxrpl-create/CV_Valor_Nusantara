import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({
  badge,
  title,
  subtitle,
  center = true,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 sm:mb-16 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 ${
            isDark
              ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50'
              : 'bg-[#173F2A]/10 text-[#173F2A] border border-[#173F2A]/20'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5E8C61] animate-pulse"></span>
          {badge}
        </span>
      )}
      {title && (
        <h2
          className={`font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-[#173F2A]'
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-emerald-100/80 font-light' : 'text-[#18201B]/75 font-normal'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
