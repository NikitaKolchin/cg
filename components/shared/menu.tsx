import { FC, PropsWithChildren } from 'react';
import { menuData } from '@/data';
import MenuLink from '../ui/menu-link';

type MenuProps = {
    isTop: boolean;
};

const Menu: FC<MenuProps & PropsWithChildren> = ({ isTop, children }) => {
    const style = `${isTop ? 'gap-6 text-2xl' : 'flex-col gap-3'}`;
    return (
        <ul
            className={`flex ${style} justify-between items-center text-white  max-sm:hidden`}
        >
            {menuData.map(({ title, link }) => (
                <MenuLink key={link} title={title} link={link} />
            ))}
            {children}
        </ul>
    );
};

export { Menu };
