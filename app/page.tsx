import { Banner } from '@/src/templates/Banner';
import { Hero } from '@/src/templates/Hero';
import { Sponsors } from '@/src/templates/Sponsors';
import { VerticalFeatures } from '@/src/templates/VerticalFeatures';

export default function Home() {
    return (
        <main>
            <Hero />
            <Sponsors />
            <VerticalFeatures />
            <Banner />
        </main>
    );
}
