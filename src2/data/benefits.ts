import { Stethoscope, Eye, Pill, Heart, Truck, HeadphonesIcon } from 'lucide-react';
import { Benefit } from '../types/benefits';

export const AVAILABLE_BENEFITS: Benefit[] = [
  {
    id: 'dental',
    name: 'Dental Coverage',
    icon: Stethoscope,
    monthlyValue: 50,
    description: 'Comprehensive dental care including cleanings and procedures'
  },
  {
    id: 'vision',
    name: 'Vision Benefits',
    icon: Eye,
    monthlyValue: 30,
    description: 'Eye exams, glasses, and contact lenses'
  },
  {
    id: 'prescription',
    name: 'Prescription Drugs',
    icon: Pill,
    monthlyValue: 100,
    description: 'Coverage for prescription medications'
  },
  {
    id: 'wellness',
    name: 'Wellness Programs',
    icon: Heart,
    monthlyValue: 25,
    description: 'Fitness programs and wellness resources'
  },
  {
    id: 'transportation',
    name: 'Transportation',
    icon: Truck,
    monthlyValue: 40,
    description: 'Non-emergency medical transportation'
  },
  {
    id: 'hearing',
    name: 'Hearing Benefits',
    icon: HeadphonesIcon,
    monthlyValue: 35,
    description: 'Hearing aids and routine hearing exams'
  }
];