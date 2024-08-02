import { Banner } from '@/components/templates/Banner';
import { Hero } from '@/components/templates/Hero';
import { Format } from '@/components/templates/Format';
import { Help } from '@/components/templates/Help';
import { Education } from '@/components/templates/Education';
import { Experience } from '@/components/templates/Experience';
import { Achievements } from '@/components/templates/Achievements';
import { Numbers } from '@/components/templates/Numbers';

export default function Home() {
    return (
        <main>
            <Hero />
            <Format />
            <Help />
            <Banner />
            <Education />
            <Experience />
            <Numbers />
            <Achievements />
        </main>
    );
}
