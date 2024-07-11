import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoggleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prisma';
import { getUserByEmail, getUserById } from '@/lib/actions/user.actions';
import { Role } from '@prisma/client';
import { getAccountByUserId } from '@/lib/account';
import { LoginSchema } from '@/schema';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: {
                    label: 'password',
                    type: 'password',
                    required: true,
                },
            },
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials); // again doing validation
                if (validatedFields.success) {
                  // if validation is successfull
                  const { email, password } = validatedFields.data;
        
                  const user = await getUserByEmail(email); // checking if user is present in database
                  if (!user || !user.password) return null; // password will be null when user has registered using google or github
        
                  const passwordsMatch = await bcrypt.compare(password, user.password); // comparing the hashed password
        
                  if (passwordsMatch) {
                    return user;
                  }
                }
                return null;
              },
        }),
    ],
    adapter: PrismaAdapter(prisma),
    events: {
        async linkAccount({ user }) {
            await prisma.user.update({
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

            const existingUser = await getUserById(user.id as string);

            // Prevent sign in without email verification
            if (!existingUser?.emailVerified) return false;

            return true;
        },

        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as Role;
            }

            if (session.user) {
                session.user.name = token.name;
                session.user.email = token.email as string;
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
    session: { strategy: 'jwt' },
});
