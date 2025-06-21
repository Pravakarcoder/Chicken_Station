import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Offers } from './components/Offers';
import { OfferModal } from './components/OfferModal';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'offers', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setCurrentSection(section);
          break;
        }
      }

      // Handle home section (hero)
      if (scrollPosition < 500) {
        setCurrentSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header currentSection={currentSection} onNavigate={scrollToSection} />
      <OfferModal />
      
      {/* Hero Section */}
      <Hero onNavigate={scrollToSection} />
      
      {/* Menu Section */}
      <Menu />
      
      {/* Offers Section */}
      <Offers />
      
      {/* About Section */}
      <About />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;