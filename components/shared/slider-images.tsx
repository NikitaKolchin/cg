'use client';
import { FC, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useBetterMediaQuery } from '@/hooks/use-better-media-query';
import { Modal } from './modal';

type Props = {
    data: Array<{
        text: string;
        fileName: string;
    }>;
};

const SliderImages: FC<Props> = ({ data }) => {
    const isMobile = useBetterMediaQuery('(max-width: 480px)');
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [fileName, setFileName] = useState('');
    return (
        <>
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
                            <div className="flex justify-center items-center flex-col">
                                {!isMobile && (
                                    <p className="text-xl max-w-3xl text-gray-800 text-center">
                                        {item.text}
                                    </p>
                                )}
                                <Image
                                    className="align-middle"
                                    src={`/assets/images/${item.fileName}.webp`}
                                    alt={item.text}
                                    width={
                                        item.fileName === 'e4' ||
                                        item.fileName === 'e5'
                                            ? 820
                                            : 880
                                    }
                                    height={600}
                                    onClick={() => {
                                        setFileName(item.fileName);
                                        setIsOpenModal(true);
                                    }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {isOpenModal && (
                <Modal
                    isOnTop={false}
                    closeWindow={() => {
                        setIsOpenModal(false);
                    }}
                >
                    <Image
                        className="align-middle"
                        src={`/images/${fileName}.png`}
                        alt={'image'}
                        width={880}
                        height={600}
                    />
                </Modal>
            )}
        </>
    );
};

export { SliderImages };
