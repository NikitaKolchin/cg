import { lightHouse } from '@/app/fonts';
import type { ReactNode } from 'react';

type HeroOneButtonProps = {
    title: ReactNode;
    description: string;
    button: ReactNode;
};

const HeroOneButton = (props: HeroOneButtonProps) => (
    <header className="text-center">
        <h1
            className={`${lightHouse.variable} font-serif whitespace-pre-line text-3xl font-bold leading-hero text-gray-900`}
        >
            {props.title}
        </h1>
        <div className="mb-16 mt-4 text-2xl">{props.description}</div>

        {props.button}
    </header>
);

export { HeroOneButton };
