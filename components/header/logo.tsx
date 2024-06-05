import Link from 'next/link';
import Image from 'next/image';
import { logo } from './constants';

export const Logo = async () => (
    <div className="h-12 w-24 sm:h-16 sm:w-36 relative">
        <Link href={logo.path}>
            <Image src={logo.icon!} alt={logo.title} layout="fill" />
        </Link>
    </div>
);
