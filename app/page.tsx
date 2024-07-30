import { Banner } from '@/components/templates/Banner';
import { Hero } from '@/components/templates/Hero';
import { Format } from '@/components/templates/Format';
import { VerticalFeatures } from '@/components/templates/VerticalFeatures';
import { Education } from '@/components/templates/Education';
import { Experience } from '@/components/templates/Experience';
import { Achievements } from '@/components/templates/Achievements';
import { Numbers } from '@/components/templates/Numbers';

export default function Home() {
    return (
        <main>
            <Hero />
            <Format />
            <VerticalFeatures />
            <Education />
            <Banner />
            <Experience />
            <Numbers />
            <Achievements />
        </main>
    );
}
