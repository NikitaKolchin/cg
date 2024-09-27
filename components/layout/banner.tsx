import Link from 'next/link';

import { CTABanner } from '../shared/cta-banner';
import { Section } from '../shared/section';
import { Button } from '@/components/ui/button';
const Banner = () => (
    <Section color="bg-dark" yPadding="py-8" isSkewedPlus={true}>
        <CTABanner
            title="Я познакомлю вас с миром профессий и возможностей"
            button={
                <Link href="#">
                    <Button size={'link'} className="w-full h-full">
                        Записаться
                    </Button>
                </Link>
            }
        />
    </Section>
);
export { Banner };
