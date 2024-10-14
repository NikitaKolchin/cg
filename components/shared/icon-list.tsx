import Link from 'next/link';
import { FC } from 'react';
import { PiTelegramLogoThin, PiInstagramLogoThin } from 'react-icons/pi';
import { SlSocialVkontakte } from 'react-icons/sl';

type IconListProps = {
    color?: string;
    size?: number;
    alignLeft?: boolean;
};
const IconList: FC<IconListProps> = ({ color, size, alignLeft }) => (
    <div
        className={`flex ${alignLeft ? 'justify-start' : 'justify-center'} sm:gap-10 max-sm:gap-16 max-sm:text-sm`}
    >
        <Link href="https://vk.com/id223013317">
            <SlSocialVkontakte size={size} color={color} />
        </Link>
        <Link href="https://t.me/yanaage">
            <PiTelegramLogoThin size={size} color={color} />
        </Link>
        <Link href="https://www.instagram.com/ioanna.77/profilecard/?igsh=b3RmeHI2b2JtdTZi">
            <PiInstagramLogoThin size={size} color={color} />
        </Link>
    </div>
);

export { IconList };
