import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { siteContent, t as translate } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { FiX, FiCheckCircle, FiCalendar, FiTag } from 'react-icons/fi';

const projectsList = [
  {
    id: "proj-01",
    num: "01",
    title: {
      id: "Pelatihan & Pembuatan Eco-Enzyme Organik",
      en: "Organic Eco-Enzyme Training & Production",
      de: "Bio-Eco-Enzym-Schulung & Produktion"
    },
    category: {
      id: "Inovasi Lingkungan",
      en: "Environmental Innovation",
      de: "Umweltinnovation"
    },
    year: "2025 - 2026",
    shortDesc: {
      id: "Inisiatif pendampingan masyarakat dalam mengolah sampah organik rumah tangga dan buah-buahan menjadi cairan pembersih serbaguna ramah lingkungan.",
      en: "Community mentoring initiative turning household organic waste and fruit into versatile eco-friendly cleaning liquid.",
      de: "Begleitungsinitiative zur Verarbeitung von Haushalts- und Fruchtorganikabfällen in vielseitige umweltfreundliche Reinigungsflüssigkeit."
    },
    fullDesc: {
      id: "Program ini menggabungkan edukasi praktis fermentasi alami dengan pemberdayaan ibu-ibu posyandu, warga desa, dan komunitas sekolah. Hasil fermentasi digunakan sebagai pembersih lantai alami, pupuk tanaman organik, dan pakan ternak berkelanjutan.",
      en: "This program combines hands-on natural fermentation education with the empowerment of posyandu mothers, village residents, and school communities. The fermentation output is used as a natural floor cleaner, organic plant fertilizer, and sustainable animal feed.",
      de: "Dieses Programm verbindet praxisnahe natürliche Fermentationsbildung mit der Stärkung von Posyandu-Müttern, Dorfbewohnern und Schulkommunen. Das Fermentationsprodukt wird als natürlicher Bodenreiniger, organischer Pflanzendünger und nachhaltiges Tierfutter eingesetzt."
    },
    outcomes: {
      id: [
        "100+ Keluarga Terdaftar Pelatihan",
        "Reduksi Limbah Organik Rumah Tangga 60%",
        "Formulasi Pembersih Organik Bebas Bahan Kimia"
      ],
      en: [
        "100+ Families Enrolled in Training",
        "60% Household Organic Waste Reduction",
        "Chemical-Free Organic Cleaner Formulation"
      ],
      de: [
        "100+ Familien für Schulung angemeldet",
        "60% Reduktion der Haushalts-Organikabfälle",
        "Chemiefreie Bio-Reinigungsformulierung"
      ]
    },
    image: "/images/galeri-1.jpg"
  },
  {
    id: "proj-02",
    num: "02",
    title: {
      id: "Produksi & Pengembangan Sabun Cair Ramah Lingkungan",
      en: "Eco-Friendly Liquid Soap Production & Development",
      de: "Herstellung & Entwicklung umweltfreundlicher Flüssigseife"
    },
    category: {
      id: "Riset & Produksi Hijau",
      en: "Green Research & Production",
      de: "Grüne Forschung & Produktion"
    },
    year: "2025 - 2026",
    shortDesc: {
      id: "Fasilitas pengolahan dan riset sabun cair berbasis bahan alami nabati yang ramah terhadap ekosistem air dan kulit.",
      en: "Processing and research facility for liquid soap made from natural plant-based materials, gentle on aquatic ecosystems and skin.",
      de: "Verarbeitungs- und Forschungsanlage für Flüssigseife auf natürlicher pflanzlicher Basis, haut- und umweltfreundlich."
    },
    fullDesc: {
      id: "Valor Nusantara mendirikan ruang produksi dan laboratorium standar teknis kefarmasian untuk memformulasi sabun cuci tangan dan pembersih alami tanpa kandungan deterjen keras sintetis. Diuji secara berkala oleh tim teknis kefarmasian.",
      en: "Valor Nusantara established a production room and laboratory built to pharmaceutical technical standards to formulate hand soap and natural cleaners free from harsh synthetic detergents. Products are regularly tested by our pharmaceutical technical team.",
      de: "Valor Nusantara hat einen Produktionsraum und ein Labor nach pharmazeutisch-technischen Standards eingerichtet, um Handseife und natürliche Reiniger ohne aggressive synthetische Tenside zu formulieren. Die Produkte werden regelmäßig von unserem pharmazeutisch-technischen Team getestet."
    },
    outcomes: {
      id: [
        "Fasilitas Standar Teknis Kefarmasian",
        "100% Menggunakan Bahan Nabati Alami",
        "Kemitraan Distribusi Komunitas & Sekolah"
      ],
      en: [
        "Pharmaceutical-Standard Facility",
        "100% Natural Plant-Based Ingredients",
        "Community & School Distribution Partnerships"
      ],
      de: [
        "Pharmazeutisch-technische Standardanlage",
        "100 % natürliche pflanzliche Inhaltsstoffe",
        "Gemeinschafts- & Schulvertriebpartnerschaften"
      ]
    },
    image: "/images/galeri-3.jpg"
  },
  {
    id: "proj-03",
    num: "03",
    title: {
      id: "Pemberdayaan Komunitas KSP CU Lantang Tipo & Posyandu",
      en: "KSP CU Lantang Tipo & Posyandu Community Empowerment",
      de: "Gemeinschaftsstärkung KSP CU Lantang Tipo & Posyandu"
    },
    category: {
      id: "Pemberdayaan Masyarakat",
      en: "Community Empowerment",
      de: "Gemeinschaftsstärkung"
    },
    year: "2024 - 2026",
    shortDesc: {
      id: "Program workshop pengelolaan sampah organik menjadi pakan ternak, kompos, und pembersih alami berbasis partisipasi warga.",
      en: "Workshop program on managing organic waste into animal feed, compost, and natural cleaners through resident participation.",
      de: "Workshop-Programm zur Verarbeitung organischer Abfälle in Tierfutter, Kompost und natürliche Reiniger durch Beteiligung der Anwohner."
    },
    fullDesc: {
      id: "Melalui kemitraan strategis dengan KSP CU Lantang Tipo (Pusat Damai) dan Posyandu Tanjung Sari Pertamina Semarang, Valor Nusantara secara aktif mengedukasi ratusan warga untuk membangun kemandirian ekonomi dari pengelolaan limbah.",
      en: "Through strategic partnerships with KSP CU Lantang Tipo (Pusat Damai) and Posyandu Tanjung Sari Pertamina Semarang, Valor Nusantara actively educates hundreds of residents to build economic independence from waste management.",
      de: "Durch strategische Partnerschaften mit KSP CU Lantang Tipo (Pusat Damai) und Posyandu Tanjung Sari Pertamina Semarang bildet Valor Nusantara aktiv hunderte von Bewohnern aus, um wirtschaftliche Unabhängigkeit durch Abfallmanagement aufzubauen."
    },
    outcomes: {
      id: [
        "Ratusan Peserta Gatherings & Workshop",
        "Kolaborasi Sektor Pendidikan & Posyandu",
        "Kemandirian Ekonomi Berbasis Keberlanjutan"
      ],
      en: [
        "Hundreds of Gathering & Workshop Participants",
        "Education Sector & Posyandu Collaboration",
        "Sustainability-Based Economic Independence"
      ],
      de: [
        "Hunderte von Teilnehmern an Treffen & Workshops",
        "Kooperation Bildungssektor & Posyandu",
        "Nachhaltigkeitsbasierte wirtschaftliche Unabhängigkeit"
      ]
    },
    image: "/images/galeri-2.jpg"
  }
];

export const Projects = () => {
  const { lang } = useLanguage();
  const tr = siteContent.projects;
  const t = (key) => translate(tr[key], lang);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F9F8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={t('badge')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="space-y-20 sm:space-y-28">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#0B2E20]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden bg-black">
                <img
                  src={selectedProject.image}
                  alt={translate(selectedProject.title, lang)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-[#173F2A] transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#5E8C61] text-white mb-2">
                    <FiTag className="w-3 h-3" />
                    {translate(selectedProject.category, lang)}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl leading-tight">
                    {translate(selectedProject.title, lang)}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="flex items-center justify-between text-xs text-[#5E8C61] font-semibold pb-4 border-b border-stone-100">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="w-4 h-4" />
                    {t('modalYear')}: {selectedProject.year}
                  </span>
                  <span className="uppercase tracking-widest font-bold">
                    CV VALOR NUSANTARA
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-lg text-[#173F2A] mb-2">
                    {t('modalFullDesc')}
                  </h4>
                  <p className="text-sm sm:text-base text-[#18201B]/80 leading-relaxed">
                    {translate(selectedProject.fullDesc, lang)}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-lg text-[#173F2A] mb-3">
                    {t('modalOutcomes')}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.outcomes[lang].map((outcome, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F9F8F3] border border-stone-200/80 text-xs sm:text-sm text-[#173F2A] font-medium">
                        <FiCheckCircle className="text-[#5E8C61] w-4 h-4 flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#173F2A] text-white hover:bg-[#0B2E20] transition-colors"
                  >
                    {t('modalClose')}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
