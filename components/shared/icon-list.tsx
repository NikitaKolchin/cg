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
        className={`flex ${alignLeft ? 'justify-start' : 'justify-center'} md:gap-10 max-sm:gap-16 max-sm:text-sm`}
    >
        <Link href="#">
            <SlSocialVkontakte size={size} color={color} />
        </Link>
        <Link href="#">
            <PiTelegramLogoThin size={size} color={color} />
        </Link>
        <Link href="#">
            <PiInstagramLogoThin size={size} color={color} />
        </Link>
    </div>
);

export { IconList };
