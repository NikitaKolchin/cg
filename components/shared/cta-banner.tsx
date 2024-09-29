'use client';
import { FC, PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

type CTABannerProps = {
    title: string;
};

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
        });

        if (!response.ok) {
            console.log('falling over');
            throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData['message']);

        alert('Message successfully sent');
    } catch (err) {
        console.error(err);
        alert('Error, please try resubmitting the form');
    }
}

const CTABanner: FC<PropsWithChildren<CTABannerProps>> = ({
    title,
    children,
}) => {
    const [inViewRef, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
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
                onSubmit={handleSubmit}
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
