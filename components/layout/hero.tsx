import Image from 'next/image';
import { Section } from '../shared/section';
import { Button } from '@/components/ui/button';
import { IconList } from '../shared/icon-list';
import yana from '../../public/images/yana_m.png';
import { heroData } from '@/data';
import { Fragment } from 'react';
import { AppConfig } from '@/lib/utils';

const Hero = async () => {
    return (
        <Section color="bg-dark" yPadding="sm:py-8 max-xl:py-4">
            <div className="sm:flex">
                <header className="text-left">
                    <h1
                        className={`sm:text-6xl max-xl:text-2xl sm:leading-tight font-bold text-white`}
                    >
                        {heroData.title}
                    </h1>
                    <div className="sm:my-8 max-xl:mt-20 max-xl:mb-16 max-xl:text-lg sm:text-2xl text-white sm:uppercase">
                        <div className="sm:py-10 max-xl:pt-4 max-xl:pb-20">
                            <div className="sm:shadow-[0px_0px_85px_10px_gray] max-xl:shadow-[-10px_30px_85px_15px_gray] max-xl:w-1/2 rounded-3xl"></div>
                            <ul className="flex max-xl:flex-col gap-4">
                                {heroData.items.map((item, index) => (
                                    <Fragment key={index}>
                                        <li>{item}</li>
                                        {index !==
                                            heroData.items.length - 1 && (
                                            <li className="max-xl:hidden">
                                                {' '}
                                                |{' '}
                                            </li>
                                        )}
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex w-4/6 justify-start items-center gap-6 max-xl:hidden">
                        <Button size={'lg'}>{heroData.button}</Button>
                        <IconList color="white" size={48} />
                    </div>
                </header>

                <Image
                    src={yana}
                    sizes="100vw"
                    style={{
                        width: '80%',
                        height: 'auto',
                    }}
                    alt={AppConfig.title}
                    className="max-xl:absolute max-xl:top-52 max-lg:top-64 max-md:top-48 max-xl:left-20 max-xl:opacity-55 max-sm:opacity-85"
                />
            </div>
        </Section>
    );
};

export { Hero };
