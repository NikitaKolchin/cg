import { experienceData } from '@/data';
import { Section } from '../shared/section';

const Experience = () => {
    return (
        <Section title="Мой опыт" id="experience">
            <div className="pt-12 sm:grid sm:grid-cols-2 sm:gap-16 max-sm:flex max-sm:flex-col max-sm:gap-4">
                {experienceData.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 shadow-gray-500 shadow-lg rounded-3xl border-2 border-gray-100"
                    >
                        <div className="text-6xl text-normal">{item.title}</div>
                        <div className="text-lg text-gray-700">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export { Experience };
