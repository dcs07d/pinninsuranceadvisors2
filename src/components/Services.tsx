import React from 'react';
import { Shield, Heart, Users, Clock } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Medicare Part A',
    description: 'Hospital Insurance covering inpatient care, skilled nursing, and more.',
  },
  {
    icon: Heart,
    title: 'Medicare Part B',
    description: 'Medical Insurance for outpatient care, preventive services, and medical supplies.',
  },
  {
    icon: Users,
    title: 'Medicare Advantage',
    description: 'All-in-one alternative to Original Medicare with additional benefits.',
  },
  {
    icon: Clock,
    title: 'Medicare Part D',
    description: 'Prescription drug coverage to help lower your medication costs.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">Understanding Your Medicare Options</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}