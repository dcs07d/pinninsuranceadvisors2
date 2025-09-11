import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, BookOpen, Calendar, FileText, HelpCircle, Newspaper, Video, Users } from 'lucide-react';
import { resourceLinks } from '../../config/navigation';

// Map of resource paths to their corresponding icons
const resourceIcons = {
  '/resources/guide': BookOpen,
  '/resources/enrollment': Calendar,
  '/resources/documents': FileText,
  '/resources/faqs': HelpCircle,
  '/resources/blog': Newspaper,
  '/resources/videos': Video,
  '/team': Users
};

export default function ResourcesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors"
        aria-expanded={isOpen}
      >
        Resources
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-3 z-50">
          {resourceLinks.map((resource) => {
            const Icon = resourceIcons[resource.href as keyof typeof resourceIcons] || FileText;
            return (
              <Link
                key={resource.href}
                to={resource.href}
                className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{resource.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}