import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCalendar, FiTag } from 'react-icons/fi';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export const ProjectCard = ({ project, index, onSelect }) => {
  const { lang } = useLanguage();
  const tr = siteContent.projects;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Image Container */}
      <div
        className="w-full lg:w-7/12 group relative rounded-3xl overflow-hidden shadow-xl bg-stone-900 cursor-pointer"
        onClick={() => onSelect(project)}
      >
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={project.image}
            alt={translate(project.title, lang)}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E20]/80 via-[#173F2A]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

          <div className="absolute top-5 left-5 z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#173F2A] shadow-md">
              <FiTag className="w-3 h-3 text-[#5E8C61]" />
              {translate(project.category, lang)}
            </span>
          </div>

          <div className="absolute bottom-6 right-6 z-10 w-12 h-12 rounded-full bg-white text-[#173F2A] flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <FiArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <span className="text-4xl sm:text-5xl font-heading font-extrabold text-[#5E8C61]/30 mb-2">
          {project.num}
        </span>
        <div className="flex items-center gap-2 text-xs font-medium text-[#5E8C61] mb-2 uppercase tracking-wider">
          <FiCalendar className="w-3.5 h-3.5" />
          <span>{project.year}</span>
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#173F2A] leading-tight mb-4 group-hover:text-[#5E8C61] transition-colors">
          {translate(project.title, lang)}
        </h3>
        <p className="text-[#18201B]/80 text-base leading-relaxed mb-6 font-normal">
          {translate(project.shortDesc, lang)}
        </p>

        <div className="space-y-2 mb-6 border-l-2 border-[#5E8C61]/40 pl-4">
          {project.outcomes[lang].map((outcome, idx) => (
            <p key={idx} className="text-xs sm:text-sm font-medium text-[#173F2A]/90 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E8C61]"></span>
              {outcome}
            </p>
          ))}
        </div>

        <div>
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173F2A] hover:text-[#5E8C61] transition-colors group cursor-pointer"
          >
            <span>{translate(tr.viewProject, lang)}</span>
            <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
