import { Section } from '../shared/section';
import Bullet from '../ui/bullet';
import { helpData } from '@/data';

const Help = () => {
    return (
        <Section title="С чем я могу помочь" yPadding="py-16">
            <div className="mt-12 sm:grid sm:grid-cols-3 gap-12 sm:grid-rows-[repeat(2,auto) 1fr] max-sm:flex max-sm:flex-col text-gray-800">
                {helpData.map((item, index) => (
                    <Bullet key={index} item={item} index={index} />
                ))}
            </div>
        </Section>
    );
};

export { Help };
