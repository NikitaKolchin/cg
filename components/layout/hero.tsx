import { lightHouse } from '@/app/fonts';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '../shared/section';
import { Button } from '@/components/ui/button';

const Hero = async () => {
    return (
        <Section color="bg-gray-300">
            <div className="sm:flex">
                <div className="text-center  max-sm:mt-36">
                    <h1
                        className={`${lightHouse.variable} font-serif whitespace-pre-line text-xl font-bold leading-hero text-black`}
                    >
                        {
                            'Психолог\n​ Профориентолог​\n Карьерный консультант​\n Игропрактик\n'
                        }
                        <span className="text-primary-500 text-3xl">
                            Яна Агевнина
                        </span>
                    </h1>
                    <div className="mb-8 mt-4 text-xl">
                        {
                            'Моя главная задача – раскрыть потенциал и разобраться в чувствах'
                        }
                    </div>

                    <Link href="https://creativedesignsguru.com/category/nextjs/">
                        <Button variant={'secondary'}>Связаться со мной</Button>
                    </Link>
                </div>

                <Image
                    src="/assets/images/yana.webp"
                    width="350"
                    height="470"
                    alt="Яна"
                    className="max-sm:absolute max-sm:top-28 max-sm:left-10 max-sm:opacity-35"
                />
            </div>
        </Section>
    );
};

export { Hero };
