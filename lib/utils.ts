import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const AppConfig = {
    site_name: 'Starter',
    title: 'UProffi - работа в удовольствие это реально',
    description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
    locale: 'en',
};
