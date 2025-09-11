import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '../../data/teamMembers';
import { Phone, Mail, Calendar } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from '../../utils/constants';

export default function TeamSection() {
  const coFounders = teamMembers.filter(member => member.role === 'co-founder');
  const seniorBrokers = teamMembers.filter(member => member.role === 'senior');
  const juniorBrokers = teamMembers.filter(member => member.role === 'junior');
  const customerService = teamMembers.filter(member => member.role === 'customer-service');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Co-Founders Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coFounders.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Senior Brokers Section */}
        {seniorBrokers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Senior Brokers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {seniorBrokers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        )}

        {/* Junior Brokers Section */}
        {juniorBrokers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Junior Brokers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {juniorBrokers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        )}

        {/* Customer Service Section */}
        {customerService.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customer Service</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {customerService.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto bg-black rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Ready to Get Expert Medicare Guidance?
          </h2>
          <p className="text-gray-300 mb-8">
            Our licensed advisors are here to help you find the right Medicare coverage for your needs.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <a 
              href={`tel:${CONTACT_PHONE_RAW}`}
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors border-4 border-primary-dark"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors border-4 border-primary-dark">
              <Calendar className="w-5 h-5" />
              <span>Schedule Meeting</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors border-4 border-primary-dark">
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}