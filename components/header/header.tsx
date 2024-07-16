import { LoginButton } from '../auth/login-button';
import { Button } from '../ui/button';
import { Hamburger } from './hamburger';
import { Links } from './links';
import { Logo } from './logo';

export const Header = async () => (
    <div className="border-b border-b-dark py-8">
        <nav className="bg-white mx-auto container my-2 uppercase font-medium text-dark ">
            <div className="flex sm:hidden justify-between">
                <Logo />
                <Hamburger>
                    <Links />
                </Hamburger>
            </div>
            <ul className="hidden sm:flex justify-between content-center">
                <Logo />
                <Links />
                <LoginButton mode="modal" asChild>
                    <Button variant="secondary" size="lg">
                        Sign in
                    </Button>
                </LoginButton>
            </ul>
        </nav>
    </div>
);
