import React from 'react';
import { Target, Users, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutMission() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower seniors with clear, straightforward Medicare guidance that helps them make informed decisions about their healthcare coverage."
    },
    {
      icon: Users,
      title: "Personal Approach",
      description: "We take the time to understand your unique healthcare needs and preferences, ensuring you get coverage that truly fits your life."
    },
    {
      icon: Heart,
      title: "Client-First Focus",
      description: "Your well-being is our priority. We're here to support you throughout your Medicare journey with expert advice and ongoing assistance."
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Our licensed advisors bring years of Medicare expertise to help you navigate your options with confidence and peace of mind."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Meet Our Medicare Experts</h2>
              <p className="text-gray-300 mb-8">
                Our team of licensed advisors brings decades of combined experience in Medicare consulting. 
                We're here to help you navigate your Medicare journey with confidence.
              </p>
              <Link 
                to="/team"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors group border-4 border-primary-dark"
              >
                <Users className="w-5 h-5" />
                Meet Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}