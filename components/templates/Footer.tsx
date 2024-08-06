import Link from 'next/link';

import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from '../ui/logo';
import { SlSocialVkontakte } from 'react-icons/sl';
import { LiaTelegram } from 'react-icons/lia';

const Footer = () => (
    <Section color="bg-gray-100" Tag="footer">
        <CenteredFooter
            logo={<Logo />}
            iconList={
                <>
                    <SlSocialVkontakte />
                    <LiaTelegram />
                </>
            }
        >
            <li>
                <Link href="/">VK</Link>
                <Link href="/">Telegram</Link>
            </li>
        </CenteredFooter>
    </Section>
);

export { Footer };
