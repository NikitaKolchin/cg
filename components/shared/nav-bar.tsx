import Link from 'next/link';
import type { ReactNode } from 'react';
import { Hamburger } from './hamburger-menu';
import { Menu } from './menu';

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
            <Menu isTop>{props.children}</Menu>
            <Hamburger>{props.children}</Hamburger>
        </nav>
    </nav>
);

export { Navbar };
