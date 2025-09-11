import React from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

function getEnrollmentPeriod() {
  const now = new Date();
  const year = now.getFullYear();
  const aepStart = new Date(year, 9, 15); // October 15
  const aepEnd = new Date(year, 11, 7); // December 7
  
  if (now >= aepStart && now <= aepEnd) {
    const daysLeft = Math.ceil((aepEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return {
      isActive: true,
      daysLeft,
      message: `Annual Enrollment Period is ACTIVE - ${daysLeft} days left to enroll!`
    };
  }
  
  if (now < aepStart) {
    const daysUntil = Math.ceil((aepStart.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return {
      isActive: false,
      daysLeft: daysUntil,
      message: `Annual Enrollment Period begins in ${daysUntil} days`
    };
  }
  
  return {
    isActive: false,
    daysLeft: 0,
    message: "Contact us about Special Enrollment Periods"
  };
}

export default function TimelineSection() {
  const enrollment = getEnrollmentPeriod();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-xl p-6 ${
            enrollment.isActive ? 'bg-green-50 border-2 border-green-500' : 'bg-slate-50'
          }`}>
            <div className="flex items-start gap-4">
              {enrollment.isActive ? (
                <Clock className="w-8 h-8 text-green-600 animate-pulse" />
              ) : (
                <Calendar className="w-8 h-8 text-slate-600" />
              )}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Medicare Enrollment Timeline
                </h2>
                <p className="text-gray-600 mb-4">{enrollment.message}</p>
                
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium text-gray-900 mb-2">Important Dates</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-20">Oct 15</span>
                        <span>Annual Enrollment Begins</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-20">Dec 7</span>
                        <span>Annual Enrollment Ends</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-20">Jan 1</span>
                        <span>Coverage Begins</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-slate-600" />
                      <h3 className="font-medium text-gray-900">Don't Miss Out</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Lock in your coverage now to ensure you have the best Medicare benefits for your needs.
                    </p>
                    <button className="w-full bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-700 transition-colors">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}