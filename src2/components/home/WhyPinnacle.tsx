import React from 'react';
import { Shield, Award, Users, Clock, Building2, Scale } from 'lucide-react';
import TrustCard from './TrustCard';
import { Link } from 'react-router-dom';

// ... rest of the imports and trustFeatures array ...

export default function WhyPinnacle() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* ... existing content ... */}
      
      <div className="mt-16 bg-black rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-gray-300 mb-6">
              We believe everyone deserves personalized Medicare guidance from experts who truly care. 
              That's why we invest in ongoing training and maintain the highest industry standards.
            </p>
            <Link 
              to="/team"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors border-4 border-primary-dark"
            >
              Meet Our Team
            </Link>
          </div>
          {/* ... rest of the content ... */}
        </div>
      </div>
    </section>
  );
}