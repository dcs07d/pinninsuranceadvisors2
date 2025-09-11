import React from 'react';
import { Shield, Award, BadgeCheck, Building2, Scale, Users } from 'lucide-react';

const trustFeatures = [
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "Our advisors are fully licensed and certified in all 50 states"
  },
  {
    icon: Award,
    title: "A+ BBB Rating",
    description: "Highest rating from the Better Business Bureau since 2010"
  },
  {
    icon: BadgeCheck,
    title: "CMS Approved",
    description: "Certified by the Centers for Medicare & Medicaid Services"
  },
  {
    icon: Building2,
    title: "20+ Years Experience",
    description: "Helping seniors find the right Medicare coverage since 2003"
  },
  {
    icon: Scale,
    title: "Independent Advisors",
    description: "Unbiased recommendations from multiple insurance carriers"
  },
  {
    icon: Users,
    title: "50,000+ Clients Served",
    description: "Trusted by thousands of seniors across the United States"
  }
];

export default function TrustIndicators() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}