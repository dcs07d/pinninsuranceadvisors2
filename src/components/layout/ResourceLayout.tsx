import React from 'react';
import MainNav from '../navigation/MainNav';
import Footer from './Footer';

interface ResourceLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function ResourceLayout({ children, title, description }: ResourceLayoutProps) {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main>
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">{title}</h1>
              {description && (
                <p className="text-xl text-gray-300">{description}</p>
              )}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}