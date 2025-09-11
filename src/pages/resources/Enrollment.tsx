import React from 'react';
import ResourceLayout from '../../components/layout/ResourceLayout';
import { Calendar, AlertCircle } from 'lucide-react';

export default function Enrollment() {
  return (
    <ResourceLayout 
      title="Medicare Enrollment Periods"
      description="Understanding when you can enroll in or make changes to your Medicare coverage."
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6">
          {[
            {
              name: "Initial Enrollment Period (IEP)",
              description: "7-month period around your 65th birthday",
              timing: "3 months before your 65th birthday month, your birthday month, and 3 months after"
            },
            {
              name: "Annual Enrollment Period (AEP)",
              description: "Yearly period to change your Medicare coverage",
              timing: "October 15 - December 7"
            }
          ].map((period, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{period.name}</h2>
                  <p className="text-gray-600 mb-3">{period.description}</p>
                  <div className="bg-gray-50 px-4 py-3 rounded-lg">
                    <span className="font-medium text-gray-900">When: </span>
                    <span className="text-gray-700">{period.timing}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
}