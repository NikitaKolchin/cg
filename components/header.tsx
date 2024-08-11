import Link from 'next/link';

import { Section } from './shared/section';
import { NavbarTwoColumns } from './shared/nav-bar';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

const Header = async () => {
    const session = await auth();
    const isAuth = !!session;
    return (
        <Section color="bg-gray-300" yPadding="py-1" Tag="header">
            <NavbarTwoColumns logo={<Logo xl />}>
                <li>
                    {isAuth ? (
                        <Link href="api/auth/signout">
                            <Button>Выйти</Button>
                        </Link>
                    ) : (
                        <Link href="auth/login">
                            <Button>Войти</Button>
                        </Link>
                    )}
                </li>
            </NavbarTwoColumns>
        </Section>
    );
};

export { Header };
