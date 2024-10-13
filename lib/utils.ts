import { Theme } from '@auth/core/types';
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

export function html(params: { url: string; host: string; theme: Theme }) {
    const { url, host, theme } = params;

    const escapedHost = host.replace(/\./g, '&#8203;.');

    const brandColor = theme.brandColor || '#346df1';
    const color = {
        background: '#f9f9f9',
        text: '#444',
        mainBackground: '#fff',
        buttonBackground: brandColor,
        buttonBorder: brandColor,
        buttonText: theme.buttonText || '#fff',
    };

    return `
      <body style="background: ${color.background};">
        <table width="100%" border="0" cellspacing="20" cellpadding="0"
          style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
          <tr>
            <td align="center"
              style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
              Вход на сайт <strong>${escapedHost}</strong>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 20px 0;">
              <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                      target="_blank"
                      style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Войти</a></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center"
              style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
              Если вы не пытались войти на этот сайт, просто проигнорируйте это письмо.
            </td>
          </tr>
        </table>
      </body>
      `;
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
export function text({ url, host }: { url: string; host: string }) {
    return `Вход на сайт ${host}\n${url}\n\n`;
}

export const SIGNIN_URL = '/auth/login';
export const SIGNIN_ERROR_URL = '/auth/error';
export const SIGNIN_REDIRECT_URL = '/profile';
