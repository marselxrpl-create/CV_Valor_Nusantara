import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteContent, t as translate } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('valor_lang') || 'id';
  });

  const cycleOrder = ['id', 'en', 'de'];

  const toggleLanguage = (selectedLang) => {
    const newLang = selectedLang || cycleOrder[(cycleOrder.indexOf(lang) + 1) % cycleOrder.length];
    setLang(newLang);
    localStorage.setItem('valor_lang', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translate(siteContent.meta.title, lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
