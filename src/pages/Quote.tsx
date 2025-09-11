import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import QuoteTool from '../components/quote/QuoteTool';

export default function Quote() {
  return (
    <MainLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <QuoteTool />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}