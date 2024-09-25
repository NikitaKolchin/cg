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
            className={`flex flex-col text-center gap-4 sm:items-center sm:justify-between sm:p-12 sm:text-left`}
        >
            <div className="text-xl">
                <div className="text-white">{props.title}</div>
            </div>
            <div
                className={`mx-auto relative max-sm:w-full md:w-1/2 h-12 rounded-full border border-gray-500  mt-3 sm:mt-0 ${inView ? 'max-sm:animate-bounce' : ''} transition-transform duration-500`}
            >
                <input
                    type="email"
                    className="peer h-full w-full
                                    rounded-full 
                                    border border-blue-gray-200 
                                    px-3 py-2.5 pr-20 
                                    text-sm font-normal 
                                    text-blue-gray-700 
                                    outline outline-0 transition-all
                                    placeholder-shown:border placeholder-shown:border-blue-gray-200
                                    placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="Ваш E-mail"
                    required
                />
                <div className="absolute md:left-1/2 md:w-1/2 max-sm:w-1/3 max-sm:left-2/3 inset-0  rounded-full border">
                    {' '}
                    {props.button}
                </div>
            </div>
            {/* <div className="whitespace-no-wrap"></div> */}
        </div>
    );
};

export { CTABanner };
