import Link from 'next/link';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import { Button } from '@/components/ui/button';
const Banner = () => (
    <Section>
        <CTABanner
            title="Я познакомлю вас с миром профессий и возможностей"
            subtitle="Начни сейчас"
            button={
                <Link href="https://creativedesignsguru.com/category/nextjs/">
                    <Button>Записаться</Button>
                </Link>
            }
        />
    </Section>
);
export { Banner };
