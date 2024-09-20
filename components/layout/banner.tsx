import Link from 'next/link';

import { CTABanner } from '../shared/cta-banner';
import { Section } from '../shared/section';
import { Button } from '@/components/ui/button';
const Banner = () => (
    <Section color="bg-dark">
        <CTABanner
            title="Я познакомлю вас с миром профессий и возможностей"
            button={
                <Link href="https://creativedesignsguru.com/category/nextjs/">
                    <Button>Записаться</Button>
                </Link>
            }
        />
    </Section>
);
export { Banner };
