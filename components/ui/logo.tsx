import { FC } from 'react';
import { AppConfig } from '@/lib/utils';
import Image from 'next/image';

type LogoProps = {
    isTop: boolean;
};

export const Logo: FC<LogoProps> = ({ isTop }) => {
    const size = isTop ? '32' : '24';
    const style = isTop
        ? 'font-regular uppercase sm:text-3xl max-sm:text-xl inline-flex items-center'
        : 'font-regular uppercase sm:text-xl max-sm:text-sm sm:flex sm:flex-col max-sm:inline-flex max-sm:items-center';
    const imagePadding = isTop ? 'mr-4' : 'py-4';
    const textPadding = isTop ? '' : 'max-sm:pl-2';
    return (
        <div className={` text-white ${style}`}>
            <Image
                src="/images/icon.svg"
                width={size}
                height={size}
                alt="logo"
                className={imagePadding}
            />
            <span className={textPadding}>{AppConfig.site_name}</span>
        </div>
    );
};
