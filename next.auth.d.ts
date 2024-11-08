import { UserRole } from '@prisma/client';
import NextAuth from 'next-auth';

export type ExtendedUser = DefaultSession['user'] & {
    role: UserRole;
    isOAuth: boolean;
};

declare module 'next-auth' {
    interface Session {
        user: ExtendedUser;
    }
}
