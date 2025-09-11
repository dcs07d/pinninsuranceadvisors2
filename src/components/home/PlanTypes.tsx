import React from 'react';
import { Shield, Heart, Users, Clock } from 'lucide-react';
import PlanCard from './PlanCard';

const plans = [
  {
    icon: Shield,
    title: 'Original Medicare',
    description: 'Simple coverage for hospital and medical care, perfect for basic needs.',
    features: ['Easy to understand coverage', 'Nationwide acceptance', 'No network restrictions']
  },
  {
    icon: Heart,
    title: 'Medicare Advantage',
    description: 'All-in-one plans that bundle your coverage for simplicity.',
    features: ['One card for all care', 'Extra benefits included', 'Often $0 premium']
  },
  {
    icon: Users,
    title: 'Medigap',
    description: 'Extra coverage that fills the gaps in Original Medicare.',
    features: ['Predictable costs', 'Easy to budget', 'Use any doctor']
  },
  {
    icon: Clock,
    title: 'Part D Coverage',
    description: 'Simple drug coverage to help manage medication costs.',
    features: ['Affordable prescriptions', 'Large pharmacy network', 'Easy to use']
  }
];

export default function PlanTypes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple Medicare Options
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We break down Medicare into easy-to-understand choices, so you can pick the plan that works best for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}