import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { FiSend, FiCheckCircle, FiMail, FiMapPin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

export const Contact = () => {
  const { lang } = useLanguage();
  const tr = siteContent.contact;
  const t = (key) => translate(tr[key], lang);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto link to valornusantara.id@gmail.com
    const subject = encodeURIComponent(`${t('emailSubject')} ${formData.name}`);
    const body = encodeURIComponent(`${t('bodyName')}: ${formData.name}\n${t('bodyEmail')}: ${formData.email}\n\n${t('bodyMessage')}:\n${formData.message}`);
    const mailtoUrl = `mailto:valornusantara.id@gmail.com?subject=${subject}&body=${body}`;

    // Open mailto URL
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#173F2A] text-white relative overflow-hidden">
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#5E8C61] rounded-full filter blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('badge')}
          title={t('title')}
          subtitle={t('subtitle')}
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form sending to valornusantara.id@gmail.com */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#0B2E20] p-8 sm:p-12 rounded-3xl border border-emerald-800/60 shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#5E8C61] text-white flex items-center justify-center mx-auto text-3xl shadow-lg">
                  <FiCheckCircle />
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {t('successTitle')}
                </h3>
                <p className="text-emerald-100/80 text-sm max-w-md mx-auto leading-relaxed">
                  {t('successDesc').replace('valornusantara.id@gmail.com', '')}
                  <strong className="text-emerald-300">valornusantara.id@gmail.com</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold bg-[#5E8C61] text-white hover:bg-emerald-500 transition-colors"
                >
                  {t('resendBtn')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                    {t('nameLabel')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('namePlaceholder')}
                    className="w-full px-5 py-4 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-white placeholder-emerald-600/70 focus:outline-none focus:border-[#A8C3A0] focus:ring-1 focus:ring-[#A8C3A0] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                    {t('emailLabel')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('emailPlaceholder')}
                    className="w-full px-5 py-4 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-white placeholder-emerald-600/70 focus:outline-none focus:border-[#A8C3A0] focus:ring-1 focus:ring-[#A8C3A0] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                    {t('messageLabel')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('messagePlaceholder')}
                    className="w-full px-5 py-4 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-white placeholder-emerald-600/70 focus:outline-none focus:border-[#A8C3A0] focus:ring-1 focus:ring-[#A8C3A0] transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#5E8C61] hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t('sendBtn')}</span>
                  <FiSend className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Exact Social Links & Direct Email Launcher */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-6"
          >
            <div className="bg-[#0B2E20]/60 p-8 rounded-3xl border border-emerald-800/40 backdrop-blur-md space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-white">
                {t('directTitle')}
              </h3>

              <div className="space-y-4 text-sm text-emerald-100/90 font-light">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">CV Valor Nusantara</h4>
                    <p className="text-xs text-emerald-200/70">Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{t('officialEmail')}</h4>
                    <a href="mailto:valornusantara.id@gmail.com" className="text-xs text-emerald-300 hover:underline">
                      valornusantara.id@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media List */}
              <div className="pt-2 border-t border-emerald-900/60 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">{t('socialMediaTitle')}</h4>

                <div className="grid grid-cols-1 gap-2.5">
                  <a
                    href="https://instagram.com/valornusantara"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900 text-white transition-colors border border-emerald-800/40 text-xs font-medium"
                  >
                    <FiInstagram className="w-5 h-5 text-pink-400" />
                    <span>@valornusantara</span>
                  </a>

                  <a
                    href="https://instagram.com/valornusantara.ship"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900 text-white transition-colors border border-emerald-800/40 text-xs font-medium"
                  >
                    <FiInstagram className="w-5 h-5 text-pink-400" />
                    <span>@valornusantara.ship</span>
                  </a>

                  <a
                    href="https://tiktok.com/@valornusantara"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900 text-white transition-colors border border-emerald-800/40 text-xs font-medium"
                  >
                    <FaTiktok className="w-5 h-5 text-emerald-300" />
                    <span>valornusantara (TikTok)</span>
                  </a>
                </div>
              </div>

              {/* Direct Action Launchers */}
              <div className="pt-2 space-y-3">
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(t('waMessage'))}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm transition-all shadow-md"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>{t('whatsappBtn')}</span>
                </a>

                <a
                  href="mailto:valornusantara.id@gmail.com"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
                >
                  <FiMail className="w-5 h-5 text-emerald-300" />
                  <span>{t('emailBtn')}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
