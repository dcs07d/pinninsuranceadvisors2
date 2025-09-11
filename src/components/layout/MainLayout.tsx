import React from 'react';
import MainNav from '../navigation/MainNav';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  transparentNav?: boolean;
}

export default function MainLayout({ children, transparentNav = false }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav transparent={transparentNav} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}