import Link from 'next/link';
import type { ReactNode } from 'react';

type NavbarProps = {
    logo: ReactNode;
    children: ReactNode;
};

const Navbar = (props: NavbarProps) => (
    <nav className="flex flex-wrap items-center justify-between">
        <div>
            <Link href="/">{props.logo}</Link>
        </div>

        <nav>
            <ul className="navbar flex items-center text-gray-800">
                {props.children}
            </ul>
        </nav>
    </nav>
);

export { Navbar };
