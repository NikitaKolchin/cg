import { Meta } from '@/src/layout/Meta';
import { Banner } from '@/src/templates/Banner';
import { Footer } from '@/src/templates/Footer';
import { Hero } from '@/src/templates/Hero';
import { Sponsors } from '@/src/templates/Sponsors';
import { VerticalFeatures } from '@/src/templates/VerticalFeatures';

export default function Home() {
    return (
        <main className="bg-sand">
            <div className="text-gray-600 antialiased">
                <Meta/>
                <Hero />
                <Sponsors />
                <VerticalFeatures />
                <Banner />
                <Footer />
            </div>
        </main>
    );
}
