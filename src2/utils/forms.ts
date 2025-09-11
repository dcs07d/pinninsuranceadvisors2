import { ContactFormData } from '../types/forms';

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.zipCode) {
      throw new Error('Please fill in all required fields');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Please enter a valid email address');
    }

    // Validate phone format
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(data.phone)) {
      throw new Error('Please enter a valid phone number');
    }

    // Validate ZIP code format
    const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (!zipRegex.test(data.zipCode)) {
      throw new Error('Please enter a valid ZIP code');
    }

    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real application, you would make an API call here
    // For now, we'll just simulate a successful submission
    console.log('Form submitted:', data);

    return {
      success: true,
      message: "Thank you! We'll contact you shortly."
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred'
    };
  }
}