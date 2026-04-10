import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for intelligently merging Tailwind CSS classes.
 * Perfect for conditional classes and component variants.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
