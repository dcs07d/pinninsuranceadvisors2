import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Heart } from 'lucide-react';
import { CONTACT_PHONE } from '../../utils/constants';

export default function Accessibility() {
  return (
    <MainLayout>
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Accessibility Statement</h1>
          </div>
          <p className="text-gray-300">Last updated: March 8, 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="lead">
            Pinnacle Insurance Advisors is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We strive to ensure that our website adheres to Level AA of the Web Content Accessibility Guidelines (WCAG) 2.1. These guidelines explain how to make web content more accessible for people with disabilities.
          </p>

          <h2>Accessibility Features</h2>
          <p>Our website includes the following accessibility features:</p>
          <ul>
            <li>Semantic HTML markup for better screen reader compatibility</li>
            <li>ARIA landmarks and labels where appropriate</li>
            <li>Sufficient color contrast ratios</li>
            <li>Keyboard navigation support</li>
            <li>Alt text for images</li>
            <li>Resizable text without loss of functionality</li>
            <li>Clear heading structure</li>
          </ul>

          <h2>Assistive Technologies</h2>
          <p>Our website is designed to be compatible with the following assistive technologies:</p>
          <ul>
            <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
            <li>Speech recognition software</li>
            <li>Screen magnification software</li>
            <li>Alternative keyboard and mouse input devices</li>
          </ul>

          <h2>Known Issues</h2>
          <p>
            While we strive for WCAG 2.1 Level AA compliance, some content may not yet meet all requirements. We are actively working to identify and resolve any accessibility issues.
          </p>

          <h2>Feedback and Support</h2>
          <p>
            We welcome your feedback on the accessibility of our website. If you experience any accessibility barriers or have suggestions for improvement, please contact us:
          </p>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p>Accessibility Support Team</p>
            <p>Pinnacle Insurance Advisors</p>
            <p>1835 South Perimeter Road, Suite 140</p>
            <p>Fort Lauderdale, FL 33309</p>
            <p>Email: cs@agentpia.com</p>
            <p>Phone: {CONTACT_PHONE}</p>
          </div>

          <h2>Continuous Improvement</h2>
          <p>
            We are committed to making our website accessible to all users and will continue to take steps to improve its accessibility. This statement was created on March 8, 2024, and will be reviewed and updated regularly.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}