import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { FileText } from 'lucide-react';
import { CONTACT_PHONE } from '../../utils/constants';

export default function Terms() {
  return (
    <MainLayout>
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Terms of Use</h1>
          </div>
          <p className="text-gray-300">Last updated: March 8, 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="lead">
            By accessing and using this website, you accept and agree to be bound by these Terms of Use and our Privacy Policy.
          </p>

          <h2>Website Use</h2>
          <p>
            This website is operated by Pinnacle Insurance Advisors. The content is for general information purposes only and does not constitute professional advice.
          </p>

          <h2>License and Website Access</h2>
          <p>
            We grant you a limited license to access and use this website for personal use. You may not:
          </p>
          <ul>
            <li>Modify or copy website materials</li>
            <li>Use materials for commercial purposes</li>
            <li>Remove any copyright or proprietary notations</li>
            <li>Transfer materials to another person</li>
            <li>Mirror or frame the website</li>
          </ul>

          <h2>Disclaimer</h2>
          <p>
            The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including:
          </p>
          <ul>
            <li>Accuracy or completeness of information</li>
            <li>Merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement of intellectual property</li>
          </ul>

          <h2>Limitations</h2>
          <p>
            We shall not be liable for any damages arising from the use or inability to use the materials on this website.
          </p>

          <h2>Revisions</h2>
          <p>
            We may revise these Terms of Use at any time without notice. By using this website, you agree to be bound by the current version of these Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Florida.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl mt-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p>For questions about these Terms of Use, please contact:</p>
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