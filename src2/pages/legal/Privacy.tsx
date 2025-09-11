import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Shield } from 'lucide-react';
import { CONTACT_PHONE } from '../../utils/constants';

export default function Privacy() {
  return (
    <MainLayout>
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-gray-300">Last updated: March 8, 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="lead">
            At Pinnacle Insurance Advisors, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Mailing address and ZIP code</li>
            <li>Date of birth and Medicare eligibility information</li>
            <li>Health information necessary for insurance recommendations</li>
            <li>Information about your current insurance coverage</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide insurance recommendations and quotes</li>
            <li>Process your insurance applications</li>
            <li>Communicate with you about your coverage</li>
            <li>Send you relevant Medicare information and updates</li>
            <li>Improve our services and website functionality</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li>Insurance carriers to process your applications</li>
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p>Pinnacle Insurance Advisors</p>
            <p>1835 South Perimeter Road, Suite 140</p>
            <p>Fort Lauderdale, FL 33309</p>
            <p>Email: cs@agentpia.com</p>
            <p>Phone: {CONTACT_PHONE}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}