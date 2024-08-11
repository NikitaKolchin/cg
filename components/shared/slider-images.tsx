'use client';
import { FC } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import Bullet from '../ui/bullet';

type Props = {
    data: Array<{
        text: string;
        fileName: string;
    }>;
};

const SliderImages: FC<Props> = ({ data }) => {
    return (
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
            {data.map((item) => (
                <SwiperSlide key={item.fileName}>
                    <div className={`bg-white`}>
                        <div className="flex justify-center">
                            <Image
                                src={`/assets/images/${item.fileName}.webp`}
                                alt={item.text}
                                width={900}
                                height={100}
                            />
                        </div>
                        <Bullet item={item.text} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export { SliderImages };
