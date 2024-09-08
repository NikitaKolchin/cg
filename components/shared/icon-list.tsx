import Link from 'next/link';
import { FC } from 'react';
import { PiTelegramLogoThin, PiInstagramLogoThin } from 'react-icons/pi';
import { SlSocialVkontakte } from 'react-icons/sl';

type IconListProps = {
    color?: string;
    size?: number;
};
const IconList: FC<IconListProps> = ({ color, size }) => (
    <div className="flex justify-center md:gap-10 max-sm:gap-16">
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
