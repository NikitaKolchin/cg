'use client';
import { SliderOverlap } from '@/components/shared';
import { Section } from '../layout/Section';
import { useBetterMediaQuery } from '@/hooks/use-better-media-query';
import Bullet from '../ui/bullet';

const data = [
    `Выбор профессионального пути, поиск призвания​`,
    ` Разрешение конфликтов: улучшение коммуникации и понимания в
                отношениях​`,
    `Повышение самооценки, укрепление уверенности в себе,
                самопринятие​`,
    `Раскрытие потенциала, поиск мотивации`,
    `Развитие навыков саморегуляции и осознанности`,
    ` Преодоление трудных жизненных ситуаций, принятие важных
                решений​​`,
    `         Контроль над тревожными состояниями, поиск внутреннего
                спокойствия, выход из кризиса​​`,
];

const Help = () => {
    const isTabletOrMobile = useBetterMediaQuery('(max-width: 500px)');
    return (
        <Section title="С чем я могу помочь">
            {isTabletOrMobile ? (
                <SliderOverlap data={data} />
            ) : (
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
                    {data.map((item, index) => (
                        <Bullet key={index} item={item} />
                    ))}
                </div>
            )}
        </Section>
    );
};

export { Help };
