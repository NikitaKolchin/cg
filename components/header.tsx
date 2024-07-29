import Link from 'next/link';

import { Background } from './background/Background';
import { Section } from './layout/Section';
import { NavbarTwoColumns } from './navigation/NavbarTwoColumns';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

const Header = async () => {
    const session = await auth();
    const isAuth = !!session;
    return (
        <Background color="bg-gray-300">
            <Section yPadding="py-1">
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
        </Background>
    );
};

export { Header };
