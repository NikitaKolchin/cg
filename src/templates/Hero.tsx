import Link from 'next/link';
import Image from 'next/image';

import { Background } from '../../components/background/Background';
import { HeroOneButton } from '../../components/hero/HeroOneButton';
import { Section } from '../../components/layout/Section';
import { Button } from '@/components/ui/button';

const Hero = async () => {
    return (
        <Background color="bg-gray-300">
            <Section yPadding="pt-10 pb-12">
                <HeroOneButton
                    title={
                        <>
                            {
                                'Психолог​ Профориентолог​ Карьерный консультант​ Игропрактик\n'
                            }
                            <span className="text-primary-500">
                                Яна Агевнина
                            </span>
                        </>
                    }
                    description="Моя главная задача – раскрыть потенциал и разобраться в чувствах"
                    button={
                        <Link href="https://creativedesignsguru.com/category/nextjs/">
                            <Button variant={'secondary'}>
                                Связаться со мной
                            </Button>
                        </Link>
                    }
                />
                <Image
                    src="/assets/images/yana.webp"
                    width="200"
                    height="300"
                    alt="yana"
                />
            </Section>
        </Background>
    );
};

export { Hero };
