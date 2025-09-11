import React from 'react';
import ResourceLayout from '../../components/layout/ResourceLayout';
import FAQ from '../../components/resources/FAQ';

export default function FAQs() {
  return (
    <ResourceLayout 
      title="Frequently Asked Questions"
      description="Find answers to common Medicare questions and get expert guidance."
    >
      <FAQ />
    </ResourceLayout>
  );
}