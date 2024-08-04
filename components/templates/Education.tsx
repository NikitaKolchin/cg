'use client';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { Section } from '@/components/layout/Section';

const data = [
    `Высшее экономическое образование (бакалавриат) –
                            ННГУ им. Н.И. Лобачевского​`,
    ` Высшее психологическое образование (магистратура) –
                            РГСУ (г. Москва)​`,
    `Профессиональная переподготовка по направлению
                            «Психологическое консультирование и
                            психодиагностика»​`,
    `Профессиональная переподготовка по направлению
                            «Клиническая психология»`,
    ` Повышение квалификации по направлению «Современные
                            методы профориентации»`,
    `Повышение квалификации по направлению «Сексология в
                            психологическом консультировании»`,
];
const Education = () => (
    <Section
        title="Мое образование​"
        description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
    >
        <>
            <Swiper spaceBetween={10} modules={[EffectCards]} effect="cards">
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-96 bg-[url('/assets/images/ob-bakalavr_ex.jpg')]">
                            <span className="text-xl">{item}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    </Section>
);

export { Education };
