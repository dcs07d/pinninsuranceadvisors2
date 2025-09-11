import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../components/navigation/MainNav';
import Footer from '../components/layout/Footer';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="py-16">
        {/* Rest of the component remains the same */}
      </main>
      <Footer />
    </div>
  );
}