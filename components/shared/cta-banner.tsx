'use client';
import type { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

type CTABannerProps = {
    title: string;
    button: ReactNode;
};

const CTABanner = (props: CTABannerProps) => {
    const [inViewRef, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    return (
        <div
            ref={inViewRef}
            className={`flex flex-col text-center gap-4 sm:items-center sm:justify-between sm:p-12 sm:text-left ${inView ? 'max-sm:animate-bounce' : ''} transition-transform duration-500`}
        >
            <div className="text-xl">
                <div className="text-white">{props.title}</div>
            </div>

            <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
                {props.button}
            </div>
        </div>
    );
};

export { CTABanner };
