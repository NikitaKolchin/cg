import Link from 'next/link';

import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from '../ui/logo';
import { SlSocialVkontakte } from 'react-icons/sl';
import { LiaTelegram } from 'react-icons/lia';
import { LiaInstagram } from "react-icons/lia";

const Footer = () => (
    <Section color="bg-gray-100" Tag="footer">
        <CenteredFooter
            logo={<Logo />}
        >
                <div className='flex w-24 h-10 justify-between items-center'>
                    <Link href='#'><SlSocialVkontakte /></Link>
                    <Link href='#'><LiaTelegram /></Link>
                    <Link href='#'><LiaInstagram /></Link>
                </div>
        </CenteredFooter>
    </Section>
);

export { Footer };
