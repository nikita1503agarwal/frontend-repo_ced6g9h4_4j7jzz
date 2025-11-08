import React from 'react';
import HeroSection from './components/HeroSection';
import EcoScoreDashboard from './components/EcoScoreDashboard';
import ImpactGlobe from './components/ImpactGlobe';
import ChatbotWidget from './components/ChatbotWidget';
import FooterCTA from './components/FooterCTA';

function App() {
  // Auto theme based on time (light by day, bio-glow dark by night)
  React.useEffect(() => {
    const hour = new Date().getHours();
    const prefersDark = hour >= 18 || hour < 6;
    const root = window.document.documentElement;
    if (prefersDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 dark:bg-emerald-950 dark:text-emerald-50 font-inter">
      <HeroSection />
      <EcoScoreDashboard />
      <ImpactGlobe />
      <FooterCTA />
      <ChatbotWidget />
    </div>
  );
}

export default App;
