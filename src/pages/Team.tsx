import React from 'react';
import MainNav from '../components/navigation/MainNav';
import TeamSection from '../components/team/TeamSection';
import Footer from '../components/layout/Footer';

export default function Team() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <div className="bg-slate-50 py-12">
        {/* Rest of the component remains the same */}
      </div>
      <TeamSection />
      <Footer />
    </div>
  );
}