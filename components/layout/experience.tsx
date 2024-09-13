'use client';
import { SliderOverlap } from '@/components/shared/slider-overlap';
import { Section } from '../shared/section';
import { useBetterMediaQuery } from '@/hooks/use-better-media-query';
import Bullet from '../ui/bullet';

const data = [
    `Проведено более 100 часов психологических консультаций и
        50 тренингов на разные тематики​ ​`,
    `Более 8 лет опыта работы экспертом по развитию персонала (HR)`,
    `В настоящее время работаю совместно с Областным кадровым
        агентством и Молодежным центром карьеры Нижегородской
        области (при поддержке КУПНО) в должности карьерного
        консультанта`,
    `Регулярная личная терапия и супервизия`,
];

const Experience = () => {
    const isTabletOrMobile = useBetterMediaQuery('(max-width: 500px)');
    return (
        <Section title="Мой опыт">
            {isTabletOrMobile ? (
                <SliderOverlap data={data} />
            ) : (
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
                    {data.map((item, index) => (
                        <Bullet key={index} item={item} index={index} />
                    ))}
                </div>
            )}
        </Section>
    );
};

export { Experience };
