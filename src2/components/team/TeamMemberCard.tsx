import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { TeamMember } from '../../types/team';

export default function TeamMemberCard({
  name,
  title,
  image,
  npn,
  licenseNumber,
  phone
}: TeamMember) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-[50%_15%]"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{title}</p>
        
        <div className="space-y-1 mb-4 text-sm text-gray-600">
          {npn && <div>NPN: {npn}</div>}
          {licenseNumber && <div>Florida License: {licenseNumber}</div>}
        </div>

        <div className="flex gap-2">
          {phone && (
            <a
              href={`tel:${phone}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
          )}
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors text-sm">
            <Mail className="w-4 h-4" />
            Email
          </button>
        </div>
      </div>
    </div>
  );
}