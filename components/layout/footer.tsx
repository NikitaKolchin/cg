import Link from 'next/link';
import { AppConfig } from '@/lib/utils';

import { Section } from '../shared/section';
import { Logo } from '../ui/logo';
import { SlSocialVkontakte } from 'react-icons/sl';
import { LiaTelegram } from 'react-icons/lia';
import { LiaInstagram } from 'react-icons/lia';

const socialIcons = [
    { name: 'vk', component: <SlSocialVkontakte /> },
    { name: 'telegram', component: <LiaTelegram /> },
    { name: 'instagram', component: <LiaInstagram /> },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { title } = AppConfig;

    return (
        <Section color="bg-gray-100" Tag="footer">
            <div className="flex max-sm:flex-col justify-between items-center text-center">
                <Logo xl />
                <p className="text-sm">
                    © {currentYear} {title}
                </p>

                <div className="flex justify-center">
                    <div className="footer-icon-list flex flex-wrap">
                        <div className="flex w-24 h-10 justify-between items-center">
                            {socialIcons.map((icon) => (
                                <Link href="#" key={icon.name}>
                                    {icon.component}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export { Footer };
