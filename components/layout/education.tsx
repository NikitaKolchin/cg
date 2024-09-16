import { Section } from '@/components/shared/section';
import { SliderImages } from '../shared/slider-images';
import { educationData } from '@/data';

const Education = () => {
    return (
        <Section title="Мое образование​" description={''} yPadding="py-16">
            <div className="mt-12">
                <SliderImages data={educationData} />
            </div>
        </Section>
    );
};

export { Education };
