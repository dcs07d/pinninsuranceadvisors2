import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FormInput from './FormInput';
import { ContactFormData } from '../../types/forms';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<{ success: boolean; message: string }>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        zipCode: formData.get('zipCode') as string,
        message: formData.get('message') as string
      };

      const result = await onSubmit(data);
      if (result.success) {
        setSuccess(true);
        e.currentTarget.reset();
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {success ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-green-50 p-6 rounded-xl text-center"
        >
          <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">
            We've received your message and will contact you shortly.
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-red-50 text-red-700 p-4 rounded-lg"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <FormInput
            id="name"
            name="name"
            label="Full Name"
            required
            placeholder="John Doe"
            disabled={isSubmitting}
          />
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email"
            required
            placeholder="john@example.com"
            disabled={isSubmitting}
          />
          <FormInput
            id="phone"
            name="phone"
            type="tel"
            label="Phone Number"
            required
            placeholder="(555) 555-5555"
            disabled={isSubmitting}
          />
          <FormInput
            id="zipCode"
            name="zipCode"
            label="ZIP Code"
            required
            pattern="[0-9]{5}"
            placeholder="12345"
            disabled={isSubmitting}
          />
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Tell us how we can help you..."
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors shadow-lg border-4 border-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}