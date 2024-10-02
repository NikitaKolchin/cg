'use client';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

type CTABannerProps = {
    title: string;
};

const CTABanner: FC<PropsWithChildren<CTABannerProps>> = ({
    title,
    children,
}) => {
    const [inViewRef, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const router = useRouter();
    return (
        <div
            ref={inViewRef}
            className={`flex flex-col text-center gap-4 sm:items-center sm:justify-between sm:px-12 sm:text-left`}
        >
            <div className="text-xl sm:py-8 sm:w-1/2 text-center">
                <div className="text-white sm:text-3xl max-sm:text-2xl">
                    {title}
                </div>
            </div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const url = '/auth/login';

                    const email =
                        new FormData(event.currentTarget)
                            .get('email')
                            ?.toString() || '';
                    const queryParamString = new URLSearchParams({
                        email,
                        callbackUrl: '/settings',
                    }).toString();
                    router.push(`${url}?${queryParamString}`);
                }}
                className={`mx-auto relative max-sm:w-full sm:w-1/2 h-12 rounded-full border border-gray-500  mt-3 sm:mt-0 ${inView ? 'max-sm:animate-bounce' : ''} transition-transform duration-500`}
            >
                <input
                    type="email"
                    name="email"
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
                <div className="absolute w-1/3 left-2/3 inset-0  rounded-full border">
                    {children}
                </div>
            </form>
        </div>
    );
};

export { CTABanner };
