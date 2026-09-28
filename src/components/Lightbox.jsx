import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTag } from 'react-icons/fi';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export const Lightbox = ({ item, onClose, brandText, closeText }) => {
  const { lang } = useLanguage();
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0B2E20]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl bg-[#173F2A] rounded-3xl overflow-hidden shadow-2xl border border-emerald-800/50 flex flex-col md:flex-row max-h-[90vh]"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-[#173F2A] transition-colors focus:outline-none"
            aria-label={closeText || 'Close'}
          >
            <FiX className="w-6 h-6" />
          </button>

          <div className="w-full md:w-7/12 bg-black flex items-center justify-center relative overflow-hidden max-h-[50vh] md:max-h-[80vh]">
            <img
              src={item.image}
              alt={translate(item.title, lang)}
              className="w-full h-full object-contain max-h-[75vh]"
            />
          </div>

          <div className="w-full md:w-5/12 p-6 sm:p-8 flex flex-col justify-between text-white bg-gradient-to-b from-[#173F2A] to-[#0B2E20]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700/50 mb-4">
                <FiTag className="w-3 h-3 text-[#A8C3A0]" />
                {translate(siteContent.gallery.chips[item.category], lang)}
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3 leading-tight">
                {translate(item.title, lang)}
              </h3>

              <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 font-light">
                {translate(item.subtitle, lang)}
              </p>
            </div>

            <div className="pt-6 border-t border-emerald-800/60 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-medium">{brandText}</span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-bold bg-[#5E8C61] hover:bg-emerald-500 text-white transition-colors"
              >
                {closeText}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
