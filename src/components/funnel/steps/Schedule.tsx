import React from 'react';
import { useFunnel } from '../FunnelContext';
import { Calendar, Clock, Phone, Video } from 'lucide-react';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM'
];

export default function Schedule() {
  const { updateFormData } = useFunnel();
  const [type, setType] = React.useState('video');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');

  const handleSubmit = () => {
    updateFormData({ consultation: { type, date, time } });
    // Here you would typically submit the form data
    alert('Thank you! We will contact you to confirm your appointment.');
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Free Consultation</h2>
        <p className="text-gray-600">Choose a time that works best for you</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Consultation Type
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setType('video')}
              className={`flex items-center gap-2 p-3 border rounded-lg ${
                type === 'video'
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-500'
              }`}
            >
              <Video size={20} className="text-purple-600" />
              <span>Video Call</span>
            </button>
            <button
              onClick={() => setType('phone')}
              className={`flex items-center gap-2 p-3 border rounded-lg ${
                type === 'phone'
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-500'
              }`}
            >
              <Phone size={20} className="text-purple-600" />
              <span>Phone Call</span>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Date
          </label>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-3">
            <Calendar size={20} className="text-gray-400" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-0 focus:ring-0 p-0 text-gray-900"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Time
          </label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setTime(slot)}
                className={`p-2 border rounded-lg flex items-center justify-center gap-1 ${
                  time === slot
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-500'
                }`}
              >
                <Clock size={16} className="text-purple-600" />
                <span className="text-sm">{slot}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!type || !date || !time}
        className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Schedule Consultation
      </button>
    </div>
  );
}