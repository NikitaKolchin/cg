import type { FC, ReactNode } from 'react';
import { lightHouse } from '@/app/fonts';

type HeroOneButtonProps = {
    title: ReactNode;
    description: string;
    button: ReactNode;
};

const HeroOneButton: FC<HeroOneButtonProps> = ({
    title,
    description,
    button,
}) => (
    <header className="text-center">
        <h1
            className={`${lightHouse.variable} font-serif whitespace-pre-line text-3xl font-bold leading-hero text-gray-900`}
        >
            {title}
        </h1>
        <div className="mb-16 mt-4 text-2xl">{description}</div>

        {button}
    </header>
);

export { HeroOneButton };
