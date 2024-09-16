'use client';
import { FC } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useBetterMediaQuery } from '@/hooks/use-better-media-query';

type Props = {
    data: Array<{
        text: string;
        fileName: string;
    }>;
};

const SliderImages: FC<Props> = ({ data }) => {
    const isMobile = useBetterMediaQuery('(max-width: 480px)');
    return (
        <Swiper
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={10}
            slidesPerView={isMobile ? 1.15 : 1}
            pagination={!isMobile}
            navigation={!isMobile}
            modules={[Pagination, Navigation]}
        >
            {data.map((item) => (
                <SwiperSlide key={item.fileName}>
                    <div className={`bg-white`}>
                        <div className="flex justify-center">
                            <Image
                                className="align-middle"
                                src={`/images/${item.fileName}.png`}
                                alt={item.text}
                                width={
                                    item.fileName === 'e3'
                                        ? isMobile
                                            ? 200
                                            : 420
                                        : item.fileName === 'e1'
                                          ? 860
                                          : 800
                                }
                                height={item.fileName === 'e3' ? 800 : 600}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export { SliderImages };
