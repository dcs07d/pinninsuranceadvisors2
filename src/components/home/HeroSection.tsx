import React, { useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import CalendlyModal from '../scheduling/CalendlyModal';

export default function HeroSection() {
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);

  const scrollToQuiz = () => {
    const quizSection = document.querySelector('#medicare-quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative h-[60vh] md:h-[70vh] flex items-center mt-[88px]">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://blog.ssa.gov/wp-content/uploads/2019/11/Sign-Up-for-Medicare-and-Estimate-Medicare-Costs.jpg" 
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6">
              Medicare made
              <span className="block font-bold mt-2">
                simple & stress-free
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
              Get expert guidance to find the right Medicare coverage at the best price, without the confusion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsSchedulingOpen(true)}
                className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors text-lg border-4 border-primary-dark"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToQuiz}
                className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Take Medicare Quiz
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <CalendlyModal 
        isOpen={isSchedulingOpen}
        onClose={() => setIsSchedulingOpen(false)}
      />
    </>
  );
}