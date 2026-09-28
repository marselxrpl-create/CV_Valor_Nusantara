import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Lightbox } from '../components/Lightbox';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { galleryData } from '../data/gallery';
import { FiMaximize2 } from 'react-icons/fi';

export const Gallery = () => {
  const { lang } = useLanguage();
  const tr = siteContent.gallery;
  const t = (key) => translate(tr[key], lang);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [lightboxItem, setLightboxItem] = useState(null);

  const categories = [
    { key: 'ALL', label: t('all') },
    { key: 'NATURE', label: t('nature') },
    { key: 'PROJECT', label: t('project') },
    { key: 'COMMUNITY', label: t('community') },
    { key: 'EVENT', label: t('event') },
  ];

  const filteredItems = selectedCategory === 'ALL'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F9F8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('badge')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                selectedCategory === cat.key
                  ? 'bg-[#173F2A] text-white shadow-md scale-105'
                  : 'bg-white text-[#18201B]/70 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxItem(item)}
                className="group relative rounded-3xl overflow-hidden shadow-lg bg-stone-900 aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={translate(item.title, lang)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E20]/90 via-[#173F2A]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                      {translate(tr.chips[item.category], lang)}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/90 text-[#173F2A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <FiMaximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-lg text-white mb-1">
                      {translate(item.title, lang)}
                    </h4>
                    <p className="text-xs text-emerald-100/80 line-clamp-1 font-light">
                      {translate(item.subtitle, lang)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        brandText={t('lightboxBrand')}
        closeText={t('lightboxClose')}
      />
    </section>
  );
};
