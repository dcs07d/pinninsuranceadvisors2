import React from 'react';
import ResourceLayout from '../../components/layout/ResourceLayout';
import { FileText, Download, ArrowRight } from 'lucide-react';
import { documents } from '../../data/documents';
import { downloadDocument } from '../../utils/documents';

export default function Documents() {
  return (
    <ResourceLayout 
      title="Plan Documents"
      description="Access and download important Medicare forms and documents."
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6">
          {documents.map((doc) => (
            <div key={doc.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <FileText className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">{doc.title}</h2>
                    <p className="text-gray-600 text-sm mb-2">{doc.description}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => downloadDocument(doc.id, doc.title)}
                  className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
}