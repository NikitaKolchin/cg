import { auth } from '@/auth';
import { menu } from './constants';
import Link from 'next/link';

export const Links = async () => {
    const session = await auth();
    const isAuth = !!session;
    return (
        <>
            {menu
                .filter((item) => item.auth!.includes(isAuth))
                .map((item, index) => (
                    <li key={index} className="flex items-center">
                        <Link href={item.path} className={item.className}>
                            {item.title}
                        </Link>
                    </li>
                ))}
        </>
    );
};
