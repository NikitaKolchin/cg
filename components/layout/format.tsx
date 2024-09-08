import { Section } from '@/components/shared/section';
import { VerticalFeatureRow } from '@/components/shared/vertical-feature-row';
import { IconList } from '../shared/icon-list';
import { Button } from '../ui/button';

const Format = () => (
    <Section
        isSkewed={true}
        beforeElement={
            <div className="md:hidden h-36 flex flex-col justify-between mb-12">
                <div className="flex justify-center">
                    <Button size={'lg'}>Связаться со мной</Button>
                </div>
                <IconList color="black" size={48} />
            </div>
        }
        color="bg-light"
        title="Формат работы"
        description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
    >
        <VerticalFeatureRow
            title="Психологическое консультирование​"
            description="Помощь в решении трудных жизненных ситуаций"
            image="/assets/images/feature1.webp"
            imageAlt="First feature alt text"
        />
        <VerticalFeatureRow
            title="Профдиагностика и карьерное консультирование"
            description="Помощь в выборе профессии и самоопределении, выявление сильных
                        сторон и зон роста, построение карьерного трека"
            image="/assets/images/feature2.webp"
            imageAlt="Second feature alt text"
            reverse
        />
        <VerticalFeatureRow
            title="Тренинги и мастер-классы"
            description="Групповая работа по различным
                        тематикам"
            image="/assets/images/feature3.webp"
            imageAlt="Third feature alt text"
        />
        <VerticalFeatureRow
            title="Игровые методики"
            description="Метафорические ассоциативные карты​
                        Игра «Лила»​ Игра «Ключ к подсознанию»​ Игра
                        «Профориентатор» и др."
            image="/assets/images/feature4.webp"
            imageAlt="First feature alt text"
            reverse
        />
    </Section>
);

export { Format };
