'use client';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import Bullet from '../ui/bullet';

const data = [
    `Высшее экономическое образование (бакалавриат) –
                            ННГУ им. Н.И. Лобачевского​`,
    `Высшее психологическое образование (магистратура) –
                            РГСУ (г. Москва)​`,
    `Профессиональная переподготовка по направлению
                            «Психологическое консультирование и
                            психодиагностика»​`,
    // `Профессиональная переподготовка по направлению
    //                         «Клиническая психология»`,
    `Повышение квалификации по направлению «Современные
                            методы профориентации»`,
    `Повышение квалификации по направлению «Сексология в
                            психологическом консультировании»`,
];
const Education = () => {

    return (
        <Section
            title="Мое образование​"
            description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
        >
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.2}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`bg-white`}
                                >
                                <div className='flex justify-center'>
                                    <Image
                                        src={`/assets/images/e${index + 1}.webp`}
                                        alt={item}
                                        width={900}
                                        height={100}
                                    />
                                </div>
                                    <Bullet item={item} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </Section>
    );
};

export { Education };
