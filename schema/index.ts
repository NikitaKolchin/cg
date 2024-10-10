import { UserRole } from '@prisma/client';
import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'incorrect_email',
    }),
});

const telValidation = new RegExp(/^\+[1-9]{1}[0-9]{3,14}$/);

export const AppointmentSchema = z.object({
    name: z.string().min(1, { message: 'Поле не может быть пустым' }),
    tel: z
        .string()
        .min(1, { message: 'Поле не может быть пустым' })
        .regex(telValidation, {
            message: 'Неверный формат телефона',
        }),
    date: z.coerce.date({ message: 'Неверный формат даты' }),
    query: z.string().min(1, { message: 'Поле не может быть пустым' }),
});

// settings page schema
export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
});
