'use client';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

type Props = { data: string[] };

const SliderOverlap: FC<Props> = ({ data }) => {
    return (
        <Swiper spaceBetween={20} slidesPerView={1.1}>
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-light border border-dark rounded-xl p-2 text-center shadow-xl">
                        <span className="text-xl">{item}</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export { SliderOverlap };
