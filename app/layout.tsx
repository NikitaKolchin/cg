import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';
import { AppConfig } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
    title: AppConfig.title,
    description: AppConfig.description,
};

const montserrat = Montserrat({
    subsets: ['cyrillic'],
    style: ['normal', 'italic'],
    weight: ['400', '700'],
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <SessionProvider session={session}>
            <html lang={AppConfig.locale} className={montserrat.className}>
                <body>
                    <Header />
                    {children}
                    <Footer />
                    <Toaster />
                </body>
            </html>
        </SessionProvider>
    );
}
