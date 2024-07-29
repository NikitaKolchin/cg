import Link from 'next/link';
import Image from 'next/image';
import { HeroOneButton } from '../../components/hero/HeroOneButton';
import { Section } from '../../components/layout/Section';
import { Button } from '@/components/ui/button';

const Hero = async () => {
    return (
        <Section color="bg-gray-300" yPadding="pt-10">
            <div className="sm:flex max-sm:pb-12">
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
                    width="300"
                    height="420"
                    alt="Яна"
                    className="max-sm:absolute max-sm:top-28 max-sm:left-10 max-sm:opacity-35"
                />
            </div>
        </Section>
    );
};

export { Hero };
