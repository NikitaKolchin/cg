'use client';
import SliderCenter from '../shared/slider-center/slider-center';
import { Section } from '../layout/Section';
import { useBetterMediaQuery } from '@/hooks/use-better-media-query';
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
                <SliderCenter data={data} />
            ) : (
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded flex p-4 h-full items-center"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                className="text-dark w-6 h-6 flex-shrink-0 mr-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span className="text-xl">{item}</span>
                        </div>
                    ))}
                </div>
            )}
        </Section>
    );
};

export { Help };
