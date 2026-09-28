import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { TeamCard } from '../components/TeamCard';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { teamData } from '../data/team';

export const Team = () => {
  const { lang } = useLanguage();
  const tr = siteContent.team;
  const t = (key) => translate(tr[key], lang);

  return (
    <section id="team" className="py-24 sm:py-32 bg-[#EFECE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('badge')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamData.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
