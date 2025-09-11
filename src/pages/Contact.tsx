import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ContactForm from '../components/forms/ContactForm';
import ContactMap from '../components/maps/ContactMap';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from '../utils/constants';
import { useAnalytics } from '../hooks/useAnalytics';
import { submitContactForm } from '../utils/forms';

export default function Contact() {
  const { trackConversion } = useAnalytics();

  const handleSubmit = async (data: any) => {
    const result = await submitContactForm(data);
    
    if (result.success) {
      trackConversion('contact_form_submit', {
        source: 'contact_page',
        type: 'form_submission'
      });
    }

    return result;
  };

  return (
    <MainLayout>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our Medicare experts for personalized guidance.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <ContactForm onSubmit={handleSubmit} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <a href={`tel:${CONTACT_PHONE_RAW}`} className="text-primary hover:text-primary-dark">
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a href="mailto:info@pinnacleinsurance.com" className="text-primary hover:text-primary-dark">
                      info@pinnacleinsurance.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Office</h3>
                    <address className="not-italic text-gray-600">
                      1835 South Perimeter Road,<br />
                      Suite 140,<br />
                      Fort Lauderdale, FL 33309
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8AM - 8PM EST</p>
                    <p className="text-gray-600">Saturday: 9AM - 5PM EST</p>
                  </div>
                </div>
              </div>

              <ContactMap />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}