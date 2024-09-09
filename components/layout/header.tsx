import Link from 'next/link';

import { Section } from '../shared/section';
import { Navbar } from '../shared/nav-bar';
import { auth } from '@/auth';
import { Logo } from '@/components/ui/logo';
import { SignOut } from '../ui/sign-out';
// import { SignOut } from '../ui/sign-out';

const Header = async () => {
    const session = await auth();
    const isAuth = !!session;
    return (
        <Section color="bg-dark" yPadding="py-1" Tag="header">
            <Navbar logo={<Logo xl />}>
                <li>Формат работы</li>
                <li>Мой опыт</li>
                <li>Стоимость услуг</li>
                <li>
                    {isAuth ? (
                        <SignOut />
                    ) : (
                        <Link href="auth/login">Войти</Link>
                    )}
                </li>
            </Navbar>
        </Section>
    );
};

export { Header };
