import { Banner } from '@/components/layout/banner';
import { Hero } from '@/components/layout/hero';
import { Format } from '@/components/layout/format';
import { Help } from '@/components/layout/help';
import { Education } from '@/components/layout/education';
import { Experience } from '@/components/layout/experience';

export default function Home() {
    return (
        <main>
            <Hero />
            <Format />
            <Help />
            <Banner />
            <Education />
            <Experience />
        </main>
    );
}
