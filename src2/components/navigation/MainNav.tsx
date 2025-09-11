import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import ResourcesDropdown from './ResourcesDropdown';
import CompanyLogo from '../branding/CompanyLogo';
import CalendlyModal from '../scheduling/CalendlyModal';
import { useCalendly } from '../../hooks/useCalendly';

interface MainNavProps {
  transparent?: boolean;
}

export default function MainNav({ transparent = false }: MainNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);
  const location = useLocation();

  useCalendly();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = transparent
    ? `fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`
    : 'relative bg-white shadow-sm';

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="h-20">
              <CompanyLogo />
            </div>
            
            <button 
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div 
              className={`${
                isMenuOpen 
                  ? 'absolute top-full left-0 right-0 bg-white p-4 shadow-lg' 
                  : 'hidden'
              } md:relative md:flex md:items-center md:gap-8 md:p-0 md:bg-transparent md:shadow-none`}
            >
              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:gap-8">
                <NavLink href="/medigap-comparison">Plan Comparison</NavLink>
                <NavLink href="/why-pinnacle">Why Pinnacle</NavLink>
                <ResourcesDropdown />
                <button 
                  onClick={() => setIsSchedulingOpen(true)}
                  className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors border-2 border-primary-dark text-sm"
                >
                  <Calendar size={16} />
                  <span>Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <CalendlyModal 
        isOpen={isSchedulingOpen}
        onClose={() => setIsSchedulingOpen(false)}
      />
    </>
  );
}