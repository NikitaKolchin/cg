import { UserRole } from '@prisma/client';
import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'incorrect_email',
    }),
});

// settings page schema
export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
});
