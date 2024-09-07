import Link from 'next/link';
import { PiTelegramLogoThin, PiInstagramLogoThin } from 'react-icons/pi';
import { SlSocialVkontakte } from 'react-icons/sl';

const IconList = () => (
    <>
        <Link href="#">
            <SlSocialVkontakte size={48} color="white" />
        </Link>
        <Link href="#">
            <PiTelegramLogoThin size={48} color="white" />
        </Link>
        <Link href="#">
            <PiInstagramLogoThin size={48} color="white" />
        </Link>
    </>
);

export { IconList };
