import type { FC, ReactNode } from 'react';
import { IconList } from './icon-list';

type HeroOneButtonProps = {
    title: string;
    description: ReactNode;
    button: ReactNode;
};

const HeroOneButton: FC<HeroOneButtonProps> = ({
    title,
    description,
    button,
}) => {
    return (
        <header className="text-left">
            <h1
                className={`text-6xl max-sm:text-3xl leading-tight font-bold text-white`}
            >
                {title}
            </h1>
            <div className="mb-8 mt-8  max-sm:text-xl text-2xl text-white md:uppercase">
                {description}
            </div>

            <div className="flex w-4/6 justify-between items-center max-sm:hidden">
                {button}
                <IconList />
            </div>
        </header>
    );
};

export { HeroOneButton };
