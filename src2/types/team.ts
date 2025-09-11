export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  certifications: string[];
  role: 'co-founder' | 'senior' | 'junior' | 'customer-service';
  phone?: string;
}