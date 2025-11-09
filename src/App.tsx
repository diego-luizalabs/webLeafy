import { useState } from 'react';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ForSchoolsSection } from './components/ForSchoolsSection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  
  const handleNavigate = (id: string) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 text-gray-900 overflow-x-hidden">
      <Header 
        onNavigate={handleNavigate} 
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      {isMenuOpen && (
        <MobileMenu onNavigate={handleNavigate} onClose={() => setIsMenuOpen(false)} />
      )}
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <FeaturesSection />
        <ForSchoolsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}