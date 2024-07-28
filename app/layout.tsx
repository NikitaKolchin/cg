import type { Metadata } from 'next';
import { gigaSans } from '@/app/fonts';
import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';
import Link from 'next/link';
import { AppConfig } from '@/lib/utils';

export const metadata: Metadata = {
    title: AppConfig.title,
    description: AppConfig.description,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <SessionProvider session={session}>
            <html lang={AppConfig.locale}>
                <body className={`${gigaSans.variable} font-sans`}>
                    <span>{session?.user?.name}</span> <Link href={'/'}>/</Link>
                    {children}
                    <Toaster />
                </body>
            </html>
        </SessionProvider>
    );
}
