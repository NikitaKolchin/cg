'use client';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

type Props = {
    error: string;
};

export const ErrorCard: FC<Props> = ({ error }) => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            if (router) {
                router.push('/');
            }
        }, 3000);
    }, [router]);

    return (
        <div className="bg-dark w-full h-full flex flex-col justify-center">
            <div className=" bg-rose-500 max-sm:w-3/4 sm:w-1/2 m-auto border-2 rounded-2xl  shadow-gray-500 shadow-lg p-6">
                Упс, произошла ошибка, перезагружаю страницу. ({error})
            </div>
        </div>
    );
};
