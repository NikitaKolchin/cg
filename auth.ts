// * Comnfiguration for authentication
import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import { db } from '@/lib/database.connection';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { getUserById } from '@/lib/actions/user.action';
import { UserRole } from '@prisma/client';
import { getAccountByUserId } from '@/lib/account';

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
    unstable_update: update,
} = NextAuth({
    // * This is for solving errors when using linkAccount feature
    pages: {
        signIn: '/auth/login',
        error: '/auth/error',
    },

    // * This is for linkAccount feature
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() },
            });
        },
    },

    callbacks: {
        // * (70)
        async signIn({ user, account }) {
            // Allow OAuth without email verification
            if (account?.provider !== 'credentials') return true;

            const existingUser = await getUserById(user.id!);

            // Prevent sign in without email verification
            if (!existingUser?.emailVerified) return false;

            return true;
        },

        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }

            if (session.user) {
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.isOAuth = token.isOAuth as boolean;
            }

            return session;
        },

        async jwt({ token }) {
            // fecthing the user

            if (!token.sub) return token;
            const exisitingUser = await getUserById(token.sub);
            if (!exisitingUser) return token;

            const existingAccount = await getAccountByUserId(exisitingUser.id);

            token.isOAuth = !!existingAccount;
            token.role = exisitingUser.role;
            token.name = exisitingUser.name;
            token.email = exisitingUser.email;

            return token;
        },
    },
    adapter: PrismaAdapter(db), // prisma adapter is supported on non edge
    session: { strategy: 'jwt' },
    ...authConfig,
});
