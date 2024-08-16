import Link from 'next/link';

import { Section } from '../shared/section';
import { Navbar } from '../shared/nav-bar';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { SignOut } from '../ui/sign-out';

const Header = async () => {
    const session = await auth();
    const isAuth = !!session;
    return (
        <Section color="bg-gray-300" yPadding="py-1" Tag="header">
            <Navbar logo={<Logo xl />}>
                <li>
                    {isAuth ? (
                        <SignOut />
                    ) : (
                        <Link href="auth/login">
                            <Button>Войти</Button>
                        </Link>
                    )}
                </li>
            </Navbar>
        </Section>
    );
};

export { Header };
