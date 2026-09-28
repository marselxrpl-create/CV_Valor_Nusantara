// Helper to pick a translated string based on active language
export const t = (obj, lang) => (obj && typeof obj === 'object' ? obj[lang] : obj);

export const siteContent = {
  meta: {
    title: {
      id: "CV Valor Nusantara — Berakar di Alam, Bergerak demi Nilai",
      en: "CV Valor Nusantara — Rooted in Nature, Driven by Value",
      de: "CV Valor Nusantara — In der Natur verwurzelt, vom Wert getrieben"
    }
  },
  nav: {
    home: { id: "Beranda", en: "Home", de: "Startseite" },
    about: { id: "Tentang Kami", en: "About Us", de: "Über uns" },
    services: { id: "Layanan", en: "Services", de: "Leistungen" },
    projects: { id: "Proyek", en: "Projects", de: "Projekte" },
    team: { id: "Tim Kami", en: "Our Team", de: "Unser Team" },
    gallery: { id: "Galeri", en: "Gallery", de: "Galerie" },
    contact: { id: "Kontak", en: "Contact", de: "Kontakt" },
    letsTalk: { id: "Hubungi Kami", en: "Let's Talk", de: "Sprechen wir" },
    languageLabel: { id: "Bahasa", en: "Language", de: "Sprache" },
    brandMotto: { id: "Alam • Manusia • Masa Depan", en: "Nature • People • Future", de: "Natur • Mensch • Zukunft" },
  },
  hero: {
    badge: { id: "🌿 Ekosistem & Keberlanjutan Perusahaan", en: "🌿 Company Ecosystem & Sustainability", de: "🌿 Unternehmensökosystem & Nachhaltigkeit" },
    headingLine1: { id: "Tumbuh Bersama Alam,", en: "Growing With Nature,", de: "Mit der Natur wachsen," },
    headingLine2: { id: "Menciptakan Nilai yang Abadi.", en: "Creating Lasting Value.", de: "Beständigen Wert schaffen." },
    subtitle: {
      id: "Membangun nilai yang berkelanjutan bagi manusia, masyarakat, dan lingkungan Indonesia.",
      en: "Building sustainable value for people, communities, and Indonesia's environment.",
      de: "Wir schaffen nachhaltigen Wert für Menschen, Gemeinschaften und die Umwelt Indonesiens."
    },
    exploreBtn: { id: "Jelajahi Lebih Lanjut", en: "Explore More", de: "Mehr entdecken" },
    contactBtn: { id: "Mulai Kolaborasi", en: "Start a Collaboration", de: "Zusammenarbeit starten" },
    scrollTag: { id: "Scroll Ke Bawah", en: "Scroll Down", de: "Nach unten scrollen" },
    point1: { id: "Strategi 100% Berbasis Alam", en: "100% Nature-Based Strategy", de: "100% naturbasierte Strategie" },
    point2: { id: "Pemberdayaan Masyarakat", en: "Community Empowerment", de: "Stärkung der Gemeinschaften" },
    point3: { id: "Riset Dan Formulatif Sederhana", en: "Simple & Formulative Research", de: "Einfache & formative Forschung" },
  },
  about: {
    badge: { id: "SIAPA KAMI", en: "WHO WE ARE", de: "WER WIR SIND" },
    heading: { id: "Berakar di Alam. Bergerak demi Nilai.", en: "Rooted in Nature. Driven by Value.", de: "In der Natur verwurzelt. Vom Wert getrieben." },
    p1: {
      id: "CV Valor Nusantara hadir sebagai mitra strategis yang memadukan komitmen kelestarian alam dengan profesionalisme korporat. Kami percaya bahwa pertumbuhan ekonomi yang sejati harus berjalan selaras dengan pemeliharaan lingkungan hidup.",
      en: "CV Valor Nusantara is a strategic partner that combines a commitment to nature conservation with corporate professionalism. We believe true economic growth must go hand in hand with environmental stewardship.",
      de: "CV Valor Nusantara ist ein strategischer Partner, der die Verpflichtung zum Naturschutz mit unternehmerischer Professionalität verbindet. Wir sind überzeugt, dass echtes Wirtschaftswachstum immer Hand in Hand mit dem Umweltschutz gehen muss."
    },
    p2: {
      id: "Melalui inovasi terukur dan pendekatan holistik, kami menginisiasi berbagai program berbasis solusi lingkungan, pembuatan eco-enzyme, sabun ramah lingkungan, pemberdayaan masyarakat, dan konsultasi keberlanjutan demi menciptakan nilai jangka panjang.",
      en: "Through measurable innovation and a holistic approach, we initiate environmental solution programs, eco-enzyme production, eco-friendly soap, community empowerment, and sustainability consulting to create long-term value.",
      de: "Durch messbare Innovation und einen ganzheitlichen Ansatz initiieren wir Programme für Umweltlösungen, die Herstellung von Eco-Enzym und umweltfreundlicher Seife, die Stärkung von Gemeinschaften sowie Nachhaltigkeitsberatung, um langfristigen Wert zu schaffen."
    },
    sustainabilityTitle: { id: "01 Keberlanjutan", en: "01 Sustainability", de: "01 Nachhaltigkeit" },
    sustainabilityDesc: {
      id: "Fokus utama pada pengelolaan sumber daya yang ramah lingkungan dan terintegrasi.",
      en: "Primary focus on integrated, environmentally friendly resource management.",
      de: "Schwerpunkt auf integriertem und umweltfreundlichem Ressourcenmanagement."
    },
    innovationTitle: { id: "02 Inovasi Terukur", en: "02 Measurable Innovation", de: "02 Messbare Innovation" },
    innovationDesc: {
      id: "Mengembangkan riset dan metodologi modern yang adaptif terhadap pengelolaan limbah organik.",
      en: "Developing modern research and methodologies adaptive to organic waste management.",
      de: "Entwicklung moderner, anpassungsfähiger Forschung und Methoden für das Management organischer Abfälle."
    },
    bgText: { id: "ALAM • MANUSIA • MASA DEPAN", en: "NATURE • PEOPLE • FUTURE", de: "NATUR • MENSCH • ZUKUNFT" },
    cardTagline: { id: "Berakar di Alam • Bergerak demi Nilai", en: "Rooted in Nature • Driven by Value", de: "In der Natur verwurzelt • Vom Wert getrieben" },
  },
  visionMission: {
    badge: { id: "VISI & MISI", en: "VISION & MISSION", de: "VISION & MISSION" },
    visionTitle: { id: "Visi Kami", en: "Our Vision", de: "Unsere Vision" },
    visionQuote: {
      id: "“Membangun masa depan yang memberikan nilai tambah yang berkelanjutan bagi manusia, masyarakat, dan kelestarian lingkungan.”",
      en: "\u201cBuilding a future that delivers sustainable added value for people, communities, and environmental preservation.\u201d",
      de: "\u201eEine Zukunft aufbauen, die nachhaltigen Mehrwert für Menschen, Gemeinschaften und den Erhalt der Umwelt bietet.\u201c"
    },
    missionBadge: { id: "PILAR UTAMA", en: "CORE PILLARS", de: "KERNPFILER" },
    missionTitle: { id: "Misi & Komitmen Perusahaan", en: "Our Mission & Commitment", de: "Unsere Mission & unser Engagement" },
    missions: [
      {
        id: "01",
        iconName: "plant",
        title: { id: "Keberlanjutan Lingkungan", en: "Environmental Sustainability", de: "Umweltnachhaltigkeit" },
        desc: {
          id: "Menjadikan aspek keberlanjutan lingkungan sebagai fondasi utama dalam setiap solusi dan produk korporat yang kami hasilkan.",
          en: "Making environmental sustainability the core foundation of every corporate solution and product we create.",
          de: "Umweltnachhaltigkeit als zentrale Grundlage jeder Unternehmenslösung und jedes Produkts, das wir entwickeln."
        }
      },
      {
        id: "02",
        iconName: "users",
        title: { id: "Pemberdayaan Masyarakat", en: "Community Empowerment", de: "Stärkung der Gemeinschaften" },
        desc: {
          id: "Mendorong keterlibatan dan pemberdayaan masyarakat lokal untuk menciptakan kemandirian ekonomi ramah lingkungan.",
          en: "Encouraging the involvement and empowerment of local communities to build eco-friendly economic independence.",
          de: "Wir fördern die Beteiligung und Stärkung lokaler Gemeinschaften, um eine umweltfreundliche wirtschaftliche Unabhängigkeit aufzubauen."
        }
      },
      {
        id: "03",
        iconName: "lightbulb",
        title: { id: "Riset & Inovasi Produk", en: "Product Research & Innovation", de: "Produktforschung & Innovation" },
        desc: {
          id: "Mengembangkan formulasi produk ramah lingkungan (eco-enzyme, sabun cair organik) yang berkualitas tinggi.",
          en: "Developing high-quality eco-friendly product formulations (eco-enzyme, organic liquid soap).",
          de: "Entwicklung hochwertiger, umweltfreundlicher Produktformulierungen (Eco-Enzym, organische Flüssigseife)."
        }
      },
      {
        id: "04",
        iconName: "globe",
        title: { id: "Dampak Positif Nyata", en: "Real Positive Impact", de: "Echte positive Wirkung" },
        desc: {
          id: "Menciptakan rekam jejak berdampak nyata yang dapat diukur dan dipertanggungjawabkan bagi generasi mendatang.",
          en: "Creating a track record of measurable, accountable impact for future generations.",
          de: "Aufbau einer nachweisbaren, messbaren und verantwortungsvollen Erfolgsgeschichte für künftige Generationen."
        }
      }
    ]
  },
  services: {
    badge: { id: "APA YANG KAMI LAKUKAN", en: "WHAT WE DO", de: "WAS WIR TUN" },
    title: { id: "Produk & Layanan Utama", en: "Main Products & Services", de: "Unsere Produkte & Leistungen" },
    subtitle: {
      id: "Pendekatan komprehensif kami dirancang untuk membantu sektor usaha dan masyarakat tumbuh secara harmonis bersama ekosistem.",
      en: "Our comprehensive approach is designed to help businesses and communities grow harmoniously with the ecosystem.",
      de: "Unser umfassender Ansatz hilft Unternehmen und Gemeinschaften, harmonisch mit dem Ökosystem zu wachsen."
    },
    viewDetail: { id: "Pelajari Layanan", en: "Learn More", de: "Mehr erfahren" },
  },
  impact: {
    badge: { id: "DAMPAK KAMI", en: "OUR IMPACT", de: "UNSERE WIRKUNG" },
    title: { id: "Menciptakan Perubahan Berkelanjutan", en: "Creating Lasting Change", de: "Beständigen Wandel schaffen" },
    subtitle: {
      id: "Rekam jejak kontribusi nyata CV Valor Nusantara dalam mendukung pemulihan alam dan kesejahteraan masyarakat.",
      en: "CV Valor Nusantara's proven track record in supporting nature recovery and community well-being.",
      de: "Der belegte Beitrag von CV Valor Nusantara zur Erholung der Natur und zum Wohlergehen der Gemeinschaften."
    },
  },
  projects: {
    badge: { id: "PORTOFOLIO PROYEK", en: "PROJECT PORTFOLIO", de: "PROJEKTPORTFOLIO" },
    title: { id: "Karya & Inisiatif Unggulan", en: "Featured Works & Initiatives", de: "Ausgewählte Arbeiten & Initiativen" },
    subtitle: {
      id: "Setiap proyek dirancang dengan standar eksekusi tertinggi demi menciptakan dampak positif pada lingkungan dan masyarakat.",
      en: "Every project is delivered to the highest execution standards to create positive impact for the environment and society.",
      de: "Jedes Projekt wird nach höchsten Umsetzungsstandards realisiert, um positive Wirkung für Umwelt und Gesellschaft zu erzielen."
    },
    viewProject: { id: "Lihat Detail Proyek", en: "View Project Details", de: "Projektdetails ansehen" },
    modalFullDesc: { id: "Deskripsi Lengkap", en: "Full Description", de: "Vollständige Beschreibung" },
    modalOutcomes: { id: "Capaian & Hasil Utama", en: "Key Outcomes & Results", de: "Zentrale Ergebnisse & Resultate" },
    modalYear: { id: "Tahun", en: "Year", de: "Jahr" },
    modalClose: { id: "Tutup", en: "Close", de: "Schließen" },
  },
  team: {
    badge: { id: "TIM KAMI", en: "OUR TEAM", de: "UNSER TEAM" },
    consultSubject: { id: "Konsultasi dengan", en: "Consultation with", de: "Beratung mit" },
    emailTooltip: { id: "Kirim email ke", en: "Send email to", de: "E-Mail senden an" },
    title: { id: "Orang-Orang di Balik Misi Perusahaan", en: "The People Behind Our Mission", de: "Die Menschen hinter unserer Mission" },
    subtitle: {
      id: "Dipimpin oleh jajaran profesional berpengalaman yang berdedikasi menciptakan dampak positif.",
      en: "Led by experienced professionals dedicated to creating positive impact.",
      de: "Geführt von erfahrenen Fachleuten, die sich positiver Wirkung verschrieben haben."
    },
  },
  gallery: {
    badge: { id: "DOKUMENTASI LAPANGAN", en: "FIELD DOCUMENTATION", de: "FELDDOKUMENTATION" },
    title: { id: "Galeri Aktivitas & Program", en: "Activities & Programs Gallery", de: "Galerie der Aktivitäten & Programme" },
    subtitle: {
      id: "Potret nyata pelatihan, workshop komunitas, fasilitas produksi, dan kolaborasi di lapangan.",
      en: "Real glimpses of trainings, community workshops, production facilities, and field collaborations.",
      de: "Echte Einblicke in Schulungen, Community-Workshops, Produktionsanlagen und Kooperationen vor Ort."
    },
    all: { id: "SEMUA", en: "ALL", de: "ALLE" },
    nature: { id: "FASILITAS & ALAM", en: "FACILITIES & NATURE", de: "ANLAGEN & NATUR" },
    project: { id: "PROYEK & EDUKASI", en: "PROJECTS & EDUCATION", de: "PROJEKTE & BILDUNG" },
    community: { id: "PEMBERDAYAAN KOMUNITAS", en: "COMMUNITY EMPOWERMENT", de: "COMMUNITY-STÄRKUNG" },
    event: { id: "EVENT & KERJA SAMA", en: "EVENTS & PARTNERSHIPS", de: "EVENTS & PARTNERSCHAFTEN" },
    chips: {
      NATURE: { id: "ALAM", en: "NATURE", de: "NATUR" },
      PROJECT: { id: "PROYEK", en: "PROJECT", de: "PROJEKT" },
      COMMUNITY: { id: "KOMUNITAS", en: "COMMUNITY", de: "COMMUNITY" },
      EVENT: { id: "EVENT", en: "EVENT", de: "EVENT" }
    },
    lightboxBrand: { id: "Galeri CV Valor Nusantara", en: "CV Valor Nusantara Gallery", de: "CV Valor Nusantara Galerie" },
    lightboxClose: { id: "Tutup Pratinjau", en: "Close Preview", de: "Vorschau schließen" },
  },
  sustainability: {
    badge: { id: "UNTUK MASA DEPAN", en: "FOR THE FUTURE", de: "FÜR DIE ZUKUNFT" },
    title: { id: "Demi Masa Depan yang Lebih Baik", en: "For a Better Future", de: "Für eine bessere Zukunft" },
    quote: {
      id: "“Kami percaya bahwa pertumbuhan bukan hanya tentang menciptakan nilai hari ini, tetapi juga menjaga dan mewariskan nilai tersebut untuk generasi berikutnya.”",
      en: "\u201cWe believe growth is not only about creating value today, but also about safeguarding and passing that value on to the next generation.\u201d",
      de: "\u201eWir glauben, dass Wachstum nicht nur bedeutet, heute Wert zu schaffen, sondern diesen Wert zu bewahren und an die nächste Generation weiterzugeben.\u201c"
    },
    cta: { id: "Jelajahi Pendekatan Kami", en: "Explore Our Approach", de: "Unseren Ansatz entdecken" },
  },
  contact: {
    badge: { id: "HUBUNGI KAMI", en: "CONTACT US", de: "KONTAKTIEREN SIE UNS" },
    title: { id: "Mari Buat Sesuatu yang Bermakna.", en: "Let's Create Something Meaningful.", de: "Lassen Sie uns etwas Bedeutsames schaffen." },
    subtitle: {
      id: "Siap berdiskusi mengenai proyek keberlanjutan, produk ramah lingkungan, pelatihan, atau kemitraan strategis?",
      en: "Ready to discuss sustainability projects, eco-friendly products, training, or strategic partnerships?",
      de: "Bereit, über Nachhaltigkeitsprojekte, umweltfreundliche Produkte, Schulungen oder strategische Partnerschaften zu sprechen?"
    },
    nameLabel: { id: "Nama Lengkap", en: "Full Name", de: "Vollständiger Name" },
    namePlaceholder: { id: "Masukkan nama Anda", en: "Enter your name", de: "Geben Sie Ihren Namen ein" },
    emailLabel: { id: "Alamat Email", en: "Email Address", de: "E-Mail-Adresse" },
    emailPlaceholder: { id: "nama@email.com", en: "name@email.com", de: "name@email.com" },
    messageLabel: { id: "Pesan / Inisiatif Anda", en: "Your Message / Initiative", de: "Ihre Nachricht / Initiative" },
    messagePlaceholder: {
      id: "Tuliskan pesan, pertanyaan, atau usulan kerja sama Anda di sini...",
      en: "Write your message, question, or collaboration proposal here...",
      de: "Schreiben Sie hier Ihre Nachricht, Frage oder Ihren Kooperationsvorschlag ..."
    },
    sendBtn: { id: "Kirim Pesan ke Email", en: "Send Message via Email", de: "Nachricht per E-Mail senden" },
    successTitle: { id: "Pesan Terkirim!", en: "Message Sent!", de: "Nachricht gesendet!" },
    successDesc: {
      id: "Aplikasi email Anda telah dibuka untuk mengirimkan pesan ke valornusantara.id@gmail.com.",
      en: "Your email app has been opened to send your message to valornusantara.id@gmail.com.",
      de: "Ihre E-Mail-App wurde geöffnet, um Ihre Nachricht an valornusantara.id@gmail.com zu senden."
    },
    resendBtn: { id: "Kirim Pesan Lain", en: "Send Another Message", de: "Weitere Nachricht senden" },
    directTitle: { id: "Informasi Kontak Langsung", en: "Direct Contact Information", de: "Direkte Kontaktinformationen" },
    officialEmail: { id: "Email Resmi", en: "Official Email", de: "Offizielle E-Mail" },
    socialMediaTitle: { id: "Media Sosial Resmi", en: "Official Social Media", de: "Offizielle Social Media" },
    whatsappBtn: { id: "Chat via WhatsApp", en: "Chat via WhatsApp", de: "Per WhatsApp chatten" },
    emailBtn: { id: "Kirim Email Langsung", en: "Send Direct Email", de: "Direkt E-Mail senden" },
    emailSubject: { id: "[Situs Web] Pesan dari", en: "[Website Inquiry] Message from", de: "[Website] Nachricht von" },
    bodyName: { id: "Nama", en: "Name", de: "Name" },
    bodyEmail: { id: "Email", en: "Email", de: "E-Mail" },
    bodyMessage: { id: "Pesan", en: "Message", de: "Nachricht" },
    waMessage: {
      id: "Halo CV Valor Nusantara, saya ingin berkolaborasi",
      en: "Hello CV Valor Nusantara, I would like to collaborate",
      de: "Hallo CV Valor Nusantara, ich möchte gerne zusammenarbeiten"
    },
  },
  footer: {
    tagline: { id: "Berakar di Alam. Bergerak demi Nilai.", en: "Rooted in Nature. Driven by Value.", de: "In der Natur verwurzelt. Vom Wert getrieben." },
    description: {
      id: "CV Valor Nusantara — Perusahaan solusi lingkungan, riset eco-enzyme & produk ramah lingkungan, serta pemberdayaan masyarakat berbasis nilai kelestarian.",
      en: "CV Valor Nusantara — Environmental solutions company, eco-enzyme research & eco-friendly products, and community empowerment based on conservation values.",
      de: "CV Valor Nusantara — Unternehmen für Umweltlösungen, Eco-Enzym-Forschung & umweltfreundliche Produkte sowie Community-Stärkung auf Basis von Naturschutzwerten."
    },
    navigation: { id: "Navigasi", en: "Navigation", de: "Navigation" },
    contactInfo: { id: "Kontak & Sosial Media", en: "Contact & Social Media", de: "Kontakt & Social Media" },
    rights: { id: "Semua Hak Cipta Dilindungi.", en: "All Rights Reserved.", de: "Alle Rechte vorbehalten." },
    designedWith: { id: "CV Valor Nusantara", en: "CV Valor Nusantara", de: "CV Valor Nusantara" },
    backToTop: { id: "Kembali ke Atas", en: "Back to Top", de: "Zurück nach oben" },
  }
};
