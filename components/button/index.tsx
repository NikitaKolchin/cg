import { FC, PropsWithChildren } from 'react';

export const Button: FC<PropsWithChildren> = async ({ children }) => (
    <button className="bg-white text-dark h-8 min-w-24 hover:font-bold p-1 border border-dark rounded-xl uppercase" >
        {children}
    </button>
);
