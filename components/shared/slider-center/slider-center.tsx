'use client';
import { FC } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './slider-center.css';

type Props = { data: string[] };

const SliderCenter: FC<Props> = ({ data }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            modules={[Navigation]}
            navigation
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-light border border-dark rounded-xl w-72 p-2 text-center shadow-xl">
                        <span className="text-xl">{item}</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderCenter;
