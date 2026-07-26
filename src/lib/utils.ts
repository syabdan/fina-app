import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToIDR(value: number) {
  const formattedNumber = new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: 0,
  }).format(value);
  return `Rp ${formattedNumber}`;
}
