import { AppConfig } from '@/lib/utils';
import Image from 'next/image';

type LogoProps = {
    xl?: boolean;
};

export const Logo = (props: LogoProps) => {
    const size = props.xl ? '64' : '48';
    const fontStyle = props.xl
        ? 'font-regular uppercase md:text-3xl max-sm:text-xl'
        : 'font-regular uppercase text-xl';

    return (
        <span className={`inline-flex items-center text-white ${fontStyle}`}>
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
