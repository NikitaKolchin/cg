import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
    <Section
        title="С чем я могу помочь"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
    >
        <VerticalFeatureRow
            title="Выбор профессионального пути, поиск призвания​"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/assets/images/feature.svg"
            imageAlt="First feature alt text"
        />
        <VerticalFeatureRow
            title="Разрешение конфликтов: улучшение коммуникации и понимания в отношениях​"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/assets/images/feature2.svg"
            imageAlt="Second feature alt text"
            reverse
        />
        <VerticalFeatureRow
            title="Повышение самооценки, укрепление уверенности в себе, самопринятие​"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/assets/images/feature3.svg"
            imageAlt="Third feature alt text"
        />
        <VerticalFeatureRow
            title="Раскрытие потенциала, поиск мотивации​"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/assets/images/feature.svg"
            imageAlt="First feature alt text"
            reverse
        />
        <VerticalFeatureRow
            title="Развитие навыков саморегуляции и осознанности​"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/assets/images/feature2.svg"
            imageAlt="Second feature alt text"
        />
        <VerticalFeatureRow
            title="Преодоление трудных жизненных ситуаций, принятие важных решений​"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/assets/images/feature3.svg"
            imageAlt="Third feature alt text"
            reverse
        />
        <VerticalFeatureRow
            title="Контроль над тревожными состояниями, поиск внутреннего спокойствия, выход из кризиса​​"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
            image="/assets/images/feature3.svg"
            imageAlt="Third feature alt text"
        />
    </Section>
);

export { VerticalFeatures };
