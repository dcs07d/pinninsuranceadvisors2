import React from 'react';

export default function ContactMap() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.488243778737!2d-80.17753492374611!3d26.15734179623771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d900c1d7c5af8f%3A0x1c9b8c9d9e4d5c1a!2s1835%20S%20Perimeter%20Rd%20%23140%2C%20Fort%20Lauderdale%2C%20FL%2033309!5e0!3m2!1sen!2sus!4v1709932800000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      />
    </div>
  );
}