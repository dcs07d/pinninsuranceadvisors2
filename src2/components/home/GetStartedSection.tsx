import React, { useState } from 'react';
import { Shield, Calendar, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnalytics } from '../../hooks/useAnalytics';
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from '../../utils/constants';
import CalendlyModal from '../scheduling/CalendlyModal';
import AnimatedButton from '../buttons/AnimatedButton';

export default function GetStartedSection() {
  const { trackConversion } = useAnalytics();
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);

  const handleScheduleClick = () => {
    trackConversion('schedule_consultation', {
      source: 'get_started_section',
      type: 'consultation'
    });
    setIsSchedulingOpen(true);
  };

  const handleCallClick = () => {
    trackConversion('phone_call', {
      source: 'get_started_section',
      type: 'call'
    });
    window.location.href = `tel:${CONTACT_PHONE_RAW}`;
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Shield className="w-4 h-4" />
                <span>Expert Medicare Guidance</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Find Your Perfect Medicare Plan?
              </h2>
              <p className="text-xl text-gray-600">
                Get personalized support from our licensed Medicare advisors
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedButton onClick={handleScheduleClick} variant="primary">
                <Calendar className="w-6 h-6" />
                <span className="font-medium">Schedule Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>

              <AnimatedButton onClick={handleCallClick} variant="secondary">
                <Phone className="w-6 h-6" />
                <span className="font-medium">Call {CONTACT_PHONE}</span>
              </AnimatedButton>
            </div>

            <motion.div 
              className="mt-12 grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                {
                  icon: Shield,
                  title: "Licensed Advisors",
                  description: "Get expert guidance from our team of licensed Medicare specialists"
                },
                {
                  icon: Calendar,
                  title: "Quick Response",
                  description: "Schedule a consultation at a time that works best for you"
                },
                {
                  icon: Phone,
                  title: "Free Support",
                  description: "No cost or obligation to speak with our Medicare experts"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-xl mb-4">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
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