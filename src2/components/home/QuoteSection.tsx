import React from 'react';
import ContactForm from '../forms/ContactForm';
import { Shield, Clock, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "2-Minute Quote",
    description: "Quick and easy process to get your personalized quote"
  },
  {
    icon: Shield,
    title: "Expert Guidance",
    description: "Licensed advisors help you understand your options"
  },
  {
    icon: ThumbsUp,
    title: "Best Value Plans",
    description: "We find the right coverage at the best price"
  }
];

export default function QuoteSection() {
  const handleContactSubmit = (data: {
    name: string;
    email: string;
    phone: string;
    zipCode: string;
  }) => {
    console.log('Contact form submitted:', data);
  };

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Get Your Free Medicare Quote
            </h2>
            <p className="text-gray-600">
              Enjoy your retirement with the right Medicare coverage
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">Get Started Today</h3>
              <ContactForm onSubmit={handleContactSubmit} />
            </div>

            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://t3.ftcdn.net/jpg/05/46/84/30/360_F_546843036_ae4665ybuuUm5DXTUKruSBJA7SIEYbIt.jpg"
                  alt="Happy senior couple enjoying retirement lifestyle"
                  className="w-full h-[300px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg font-medium">
                    Protect your health and happiness with comprehensive coverage
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <benefit.icon className="w-10 h-10 text-slate-700 mb-3" />
                    <h3 className="text-sm font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-xs text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}