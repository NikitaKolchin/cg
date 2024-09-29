import { CTABanner } from '../shared/cta-banner';
import { Section } from '../shared/section';
import { Button } from '../ui/button';

const Banner = () => (
    <Section color="bg-dark" yPadding="py-8" isSkewedPlus={true}>
        <CTABanner title="Я познакомлю вас с миром профессий и возможностей">
            <Button size={'link'} className="w-full h-full" type="submit">
                Записаться
            </Button>
        </CTABanner>
    </Section>
);
export { Banner };
