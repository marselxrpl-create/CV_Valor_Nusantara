import React from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export const TeamCard = ({ member, index }) => {
  const { lang } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200/80 flex flex-col"
    >
      {/* Portrait Frame */}
      <div className="aspect-[4/3] sm:aspect-[3/4] overflow-hidden relative bg-stone-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E20]/90 via-[#173F2A]/20 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-300"></div>

        {/* Email Quick Launcher */}
        {member.email && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={`mailto:${member.email}?subject=${encodeURIComponent(`${translate(siteContent.team.consultSubject, lang)} ${member.name}`)}`}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#173F2A] flex items-center justify-center shadow-md hover:bg-[#173F2A] hover:text-white transition-colors"
              title={`${translate(siteContent.team.emailTooltip, lang)} ${member.name}`}
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-6 text-center flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-heading font-extrabold text-xl text-[#173F2A] mb-1 group-hover:text-[#5E8C61] transition-colors">
            {member.name}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#173F2A]/10 text-[#173F2A] mb-3 border border-[#173F2A]/20">
            {translate(member.role, lang)}
          </span>
          <p className="text-xs text-[#18201B]/75 leading-relaxed">
            {translate(member.bio, lang)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
