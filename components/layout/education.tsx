import { Section } from '@/components/shared/section';
import { SliderImages } from '../shared/slider-images';

const data = [
    {
        text: 'Высшее экономическое образование (бакалавриат) – ННГУ им. Н.И. Лобачевского',
        fileName: 'e3',
    },
    {
        text: 'Высшее психологическое образование (магистратура) – РГСУ (г. Москва)',
        fileName: 'e2',
    },
    {
        text: 'Профессиональная переподготовка по направлению «Психологическое консультирование и психодиагностика»',
        fileName: 'e1',
    },
    {
        text: 'Повышение квалификации по направлению «Современные методы профориентации»',
        fileName: 'e4',
    },
    {
        text: 'Повышение квалификации по направлению «Сексология в психологическом консультировании»',
        fileName: 'e5',
    },
];
const Education = () => {
    return (
        <Section title="Мое образование​" description="Я люблю учиться...">
            <SliderImages data={data} />
        </Section>
    );
};

export { Education };
