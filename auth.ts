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
import { Provider } from '@auth/core/providers';
import { createTransport } from 'nodemailer';
import { AppConfig, text, html } from '@/lib/utils';

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
        async sendVerificationRequest(params) {
            const { identifier, url, provider, theme } = params;
            const { host } = new URL(url);
            console.log(provider.from);
            // NOTE: You are not required to use `nodemailer`, use whatever you want.
            const transport = createTransport(provider.server);
            const result = await transport.sendMail({
                to: identifier,
                from: `${AppConfig.title} <${process.env.NEXT_PUBLIC_EMAIL_USER}> `,
                subject: `Вход на сайт ${host}`,
                text: text({ url, host }),
                html: html({ url, host, theme }),
            });
            const failed = result.rejected
                .concat(result.pending)
                .filter(Boolean);
            if (failed.length) {
                throw new Error(
                    `Письмо (${failed.join(', ')}) не может быть отправлено`,
                );
            }
        },
    }),
    Yandex({
        clientId: process.env.AUTH_YANDEX_ID,
        clientSecret: process.env.AUTH_YANDEX_SECRET,
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
        verifyRequest: '/auth/verify-request',
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
                session.user.tel = token.tel;
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
            token.tel = existingUser.tel;

            return token;
        },
        async redirect() {
            return '/profile';
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
