import { FC, PropsWithChildren } from 'react';

const TopMenu: FC<PropsWithChildren> = ({ children }) => (
    <ul className="flex justify-between items-center gap-6 text-white text-2xl max-sm:hidden">
        {children}
    </ul>
);

export { TopMenu };
