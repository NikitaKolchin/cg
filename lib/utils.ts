import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const AppConfig = {
    site_name: 'Яна',
    title: 'Яна Агевнина - психолог',
    description:
        'Яна Агевнина, психолог, профориентолог, карьерный консультант​, игропрактик',
    locale: 'ru',
};
