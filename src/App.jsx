import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { FloatingLeaves } from './components/FloatingLeaves';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { VisionMission } from './sections/VisionMission';
import { Services } from './sections/Services';
import { Impact } from './sections/Impact';
import { Projects } from './sections/Projects';
import { Team } from './sections/Team';
import { Gallery } from './sections/Gallery';
import { Sustainability } from './sections/Sustainability';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#F9F8F3] text-[#18201B] font-sans antialiased overflow-x-hidden">
        {/* Floating Ambient Leaf Decorations */}
        <FloatingLeaves />

        {/* Top Sticky Frosted Glass Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <VisionMission />
          <Services />
          <Impact />
          <Projects />
          <Team />
          <Gallery />
          <Sustainability />
          <Contact />
        </main>

        {/* Site Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
