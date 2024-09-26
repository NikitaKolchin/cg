import { FC } from 'react';
import Link from 'next/link';

type Props = {
    title: string;
    link: string;
};

const MenuLink: FC<Props> = ({ title, link }) => (
    <li>
        <Link href={link}>{title}</Link>
    </li>
);

export default MenuLink;
