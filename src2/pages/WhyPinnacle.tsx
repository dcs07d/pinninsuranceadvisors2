import React from 'react';
import MainNav from '../components/navigation/MainNav';
import AboutHero from '../components/about/AboutHero';
import AboutMission from '../components/about/AboutMission';
import TrustIndicators from '../components/home/TrustIndicators';
import Footer from '../components/layout/Footer';

export default function WhyPinnacle() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main>
        <AboutHero />
        <AboutMission />
        <TrustIndicators />
      </main>
      <Footer />
    </div>
  );
}