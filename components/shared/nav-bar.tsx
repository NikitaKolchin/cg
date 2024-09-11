import Link from 'next/link';
import type { ReactNode } from 'react';
import { Hamburger } from './hamburger';
import { TopMenu } from './top-menu';

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
            <TopMenu>{props.children}</TopMenu>
            <Hamburger>{props.children}</Hamburger>
        </nav>
    </nav>
);

export { Navbar };
