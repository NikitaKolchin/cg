import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const AppConfig = {
    site_name: 'Яна Агевнина',
    title: 'Яна Агевнина - психолог',
    description:
        'Яна Агевнина, психолог, профориентолог, карьерный консультант​, игропрактик',
    locale: 'ru',
};

export const SIGNIN_URL = '/auth/login';
export const SIGNIN_ERROR_URL = '/auth/error';
export const SIGNIN_REDIRECT_URL = '/settings';
export const WORKING_REDIRECT_URL = '/server';
