import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';

const Hero = async () => {
    const session = await auth();
    const isAuth = !!session;
    return (
        <Background color="bg-gray-300">
            <Section yPadding="py-6">
                <NavbarTwoColumns logo={<Logo xl />}>
                    <li>
                        <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                            GitHub
                        </Link>
                    </li>
                    <li>
                        {isAuth ? (
                            <Link href="api/auth/signout">
                                <Button>Sign out</Button>
                            </Link>
                        ) : (
                            <Link href="auth/login">Sign in</Link>
                        )}
                    </li>
                </NavbarTwoColumns>
            </Section>

            <Section yPadding="pt-20 pb-32">
                <HeroOneButton
                    title={
                        <>
                            {'The modern landing page for\n'}
                            <span className="text-primary-500">
                                React developers
                            </span>
                        </>
                    }
                    description="The easiest way to build a React landing page in seconds."
                    button={
                        <Link href="https://creativedesignsguru.com/category/nextjs/">
                            <Button variant={'secondary'}>
                                Download Your Free Theme
                            </Button>
                        </Link>
                    }
                />
            </Section>
        </Background>
    );
};

export { Hero };
