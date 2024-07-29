import { AppConfig } from '@/lib/utils';
import Image from 'next/image';

type LogoProps = {
    xl?: boolean;
};

export const Logo = (props: LogoProps) => {
    const size = props.xl ? '88' : '64';
    const fontStyle = props.xl
        ? 'font-semibold text-3xl'
        : 'font-semibold text-xl';

    return (
        <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
            <Image
                src="/assets/images/logo.webp"
                width={size}
                height={size}
                alt="logo"
            />
            {AppConfig.site_name}
        </span>
    );
};
