import NextAuth from 'next-auth';
import { db } from '@/lib/database.connection';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { getUserById } from '@/lib/actions/user.action';
import { UserRole } from '@prisma/client';
import { getAccountByUserId } from '@/lib/account';
import Nodemailer from 'next-auth/providers/nodemailer';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import Yandex from 'next-auth/providers/yandex';
import Vk from 'next-auth/providers/vk';
import { Provider } from '@auth/core/providers';

const serviceName = process.env.NEXT_PUBLIC_EMAIL_SERVICE;
const myEmail = process.env.NEXT_PUBLIC_EMAIL_USER;
const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

const providers: Provider[] = [
    Nodemailer({
        server: {
            service: serviceName,
            secure: true,
            port: 465,
            auth: {
                user: myEmail, // 'uproffi@gmail.com',
                pass: password, //'ybjd alqv rezo bjow',
            },
            from: process.env.NEXT_PUBLIC_EMAIL_USER,
        },
    }),
    Yandex({
        clientId: process.env.AUTH_YANDEX_ID,
        clientSecret: process.env.AUTH_YANDEX_SECRET,
    }),
    Vk({
        clientId: process.env.AUTH_VK_ID,
        clientSecret: process.env.AUTH_VK_SECRET,
        checks: ['none'],
    }),
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        allowDangerousEmailAccountLinking: true,
    }),
    Github({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
];

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
    unstable_update: update,
} = NextAuth({
    pages: {
        signIn: '/auth/login',
        error: '/auth/error',
    },
    providers,
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
            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;

            const existingAccount = await getAccountByUserId(existingUser.id);

            token.isOAuth = !!existingAccount;
            token.role = existingUser.role;
            token.name = existingUser.name;
            token.email = existingUser.email;

            return token;
        },
    },
    adapter: PrismaAdapter(db), // prisma adapter is supported on non edge
    session: { strategy: 'jwt' },
});

export const providerMap = providers
    .map((provider) => {
        if (typeof provider === 'function') {
            const providerData = provider();
            return { id: providerData.id, name: providerData.name };
        } else {
            return { id: provider.id, name: provider.name };
        }
    })
    .filter((provider) => provider.id !== 'nodemailer');
