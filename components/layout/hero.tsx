import Image from 'next/image';
import { Section } from '../shared/section';
import { Button } from '@/components/ui/button';
import { IconList } from '../shared/icon-list';
import yana from '../../public/images/yana_m.png';

const Hero = async () => {
    return (
        <Section color="bg-dark" yPadding="md:py-8 max-sm:py-4">
            <div className="md:flex">
                <header className="text-left">
                    <h1
                        className={`md:text-6xl max-sm:text-2xl md:leading-tight font-bold text-white`}
                    >
                        {`Моя главная задача – раскрыть потенциал и разобраться в
                        чувствах`}
                    </h1>
                    <div className="md:my-8 max-sm:mt-20 max-sm:mb-16 max-sm:text-lg md:text-2xl text-white md:uppercase">
                        <div className="md:py-10 max-sm:pt-4 max-sm:pb-20">
                            <div className="md:shadow-[0px_0px_85px_10px_gray] max-sm:shadow-[-10px_30px_85px_15px_gray] max-sm:w-1/2 rounded-3xl"></div>
                            <ul className="flex max-sm:flex-col gap-4">
                                <li>Психолог</li>
                                <li className="max-sm:hidden"> | </li>
                                <li>Профориентолог</li>
                                <li className="max-sm:hidden"> | </li>
                                <li>Игропрактик</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex w-4/6 justify-start items-center gap-6 max-sm:hidden">
                        <Button size={'lg'}>Связаться со мной</Button>
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
                    alt="Яна"
                    className="max-sm:absolute max-sm:top-48 max-sm:left-20 max-sm:opacity-85"
                />
            </div>
        </Section>
    );
};

export { Hero };
