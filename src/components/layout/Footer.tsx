import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from '../../utils/constants';
import { planLinks, resourceLinks, companyLinks } from '../../config/navigation';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderSection = (title: string, id: string, links: typeof planLinks) => (
    <div className="border-b md:border-0 border-gray-800">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between py-4 md:py-0 md:mb-4 md:cursor-default"
      >
        <h3 className="font-semibold text-white">{title}</h3>
        <ChevronDown className={`w-5 h-5 md:hidden transition-transform duration-300 ${
          openSection === id ? 'rotate-180' : ''
        }`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        openSection === id ? 'max-h-96 opacity-100' : 'max-h-0 md:max-h-96 opacity-0 md:opacity-100'
      }`}>
        <ul className="space-y-2 pb-4 md:pb-0">
          {links.map((link) => (
            <li key={link.href}>
              <Link 
                to={link.href} 
                className="block text-sm text-gray-400 hover:text-white transition-colors py-1"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-0 md:gap-8 mb-8">
          {/* Company Info */}
          <div className="border-b md:border-0 border-gray-800">
            <button
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between py-4 md:py-0 md:mb-4 md:cursor-default"
            >
              <Link to="/" className="block">
                <img 
                  src="https://ik.imagekit.io/ogvml4np4/Pinnacle%20logo%20Final.pdf%20copy.jpg?updatedAt=1739762730518"
                  alt="Pinnacle Insurance Advisors"
                  className="h-12 w-auto"
                />
              </Link>
              <ChevronDown className={`w-5 h-5 md:hidden transition-transform duration-300 ${
                openSection === 'contact' ? 'rotate-180' : ''
              }`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSection === 'contact' ? 'max-h-96 opacity-100' : 'max-h-0 md:max-h-96 opacity-0 md:opacity-100'
            }`}>
              <p className="text-sm mb-4 text-gray-400">
                Expert Medicare guidance to help you find the right coverage at the best price.
              </p>
              <div className="space-y-3 pb-4 md:pb-0">
                <a 
                  href={`tel:${CONTACT_PHONE_RAW}`} 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-1"
                >
                  <Phone className="w-4 h-4" />
                  <span>{CONTACT_PHONE}</span>
                </a>
                <a 
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors py-1 group"
                >
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 group-hover:text-primary" />
                  <address className="not-italic text-sm">
                    1835 South Perimeter Road,<br />
                    Suite 140,<br />
                    Fort Lauderdale, FL 33309
                  </address>
                </a>
                <a 
                  href="mailto:cs@agentpia.com" 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-1"
                >
                  <Mail className="w-4 h-4" />
                  <span>cs@agentpia.com</span>
                </a>
              </div>
            </div>
          </div>

          {renderSection('Medicare Plans', 'plans', planLinks)}
          {renderSection('Resources', 'resources', resourceLinks)}
          {renderSection('Company', 'company', companyLinks)}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Pinnacle Insurance. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}