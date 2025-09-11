import React from 'react';
import ResourceLayout from '../../components/layout/ResourceLayout';
import { Book, ArrowRight } from 'lucide-react';

export default function Guide() {
  return (
    <ResourceLayout 
      title="Medicare Guide"
      description="Everything you need to know about Medicare coverage options, eligibility, and enrollment."
    >
      <div className="max-w-4xl mx-auto prose prose-lg">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2>Understanding Medicare</h2>
          <p>
            Medicare is federal health insurance for people 65 or older, certain younger people with disabilities, and people with End-Stage Renal Disease.
          </p>

          <h3>The Four Parts of Medicare</h3>
          <ul>
            <li>
              <strong>Part A (Hospital Insurance)</strong> - Covers inpatient hospital stays, skilled nursing facility care, hospice care, and some home health care.
            </li>
            <li>
              <strong>Part B (Medical Insurance)</strong> - Covers certain doctors' services, outpatient care, medical supplies, and preventive services.
            </li>
            <li>
              <strong>Part C (Medicare Advantage)</strong> - An alternative to Original Medicare offered by private companies approved by Medicare.
            </li>
            <li>
              <strong>Part D (Prescription Drug Coverage)</strong> - Adds prescription drug coverage to Original Medicare and some Medicare Advantage Plans.
            </li>
          </ul>

          <div className="bg-primary/10 p-6 rounded-xl my-8">
            <h3 className="flex items-center gap-2 text-primary mb-4">
              <Book className="w-5 h-5" />
              Need Help Understanding Your Options?
            </h3>
            <p className="mb-4">
              Our licensed Medicare advisors can help you understand your coverage options and find the right plan for your needs.
            </p>
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors border-4 border-primary-dark group">
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
}