import { CONTACT_PHONE, CONTACT_PHONE_RAW } from './constants';

export function initiatePhoneCall(customPhone?: string) {
  const phoneNumber = customPhone || CONTACT_PHONE_RAW;
  window.location.href = `tel:${phoneNumber}`;
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}-${match[4]}`;
  }
  return phone;
}