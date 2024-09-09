import Link from 'next/link';
import type { ReactNode } from 'react';
import { Hamburger } from './hamburger';

type NavbarProps = {
    logo: ReactNode;
    children: ReactNode;
};

const Navbar = (props: NavbarProps) => (
    <nav className="flex flex-wrap items-center justify-between md:m-4">
        <div>
            <Link href="/">{props.logo}</Link>
        </div>

        <nav>
            <Hamburger />
            <ul className="flex justify-between items-center gap-6 text-white text-2xl max-sm:hidden">
                {props.children}
            </ul>
        </nav>
    </nav>
);

export { Navbar };
