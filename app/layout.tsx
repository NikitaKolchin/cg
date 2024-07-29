import type { Metadata } from 'next';
import { gigaSans } from '@/app/fonts';
import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';
import { AppConfig } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/src/templates/Footer';

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
                    <Header />
                    {children}
                    <Footer />
                    <Toaster />
                </body>
            </html>
        </SessionProvider>
    );
}
