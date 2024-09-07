import Link from 'next/link';
import Image from 'next/image';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../shared/section';
import { Button } from '@/components/ui/button';

const Hero = async () => {
    return (
        <Section color="bg-dark">
            <div className="sm:flex mb-4">
                <HeroOneButton
                    title="Моя главная задача – раскрыть потенциал и разобраться в чувствах"
                    description={
                                <div className='py-10'>
                                    <div className='shadow-[0px_0px_85px_10px_gray] rounded-3xl bg-opacity-10'>
                                    </div>
                                    <>Психолог |​ Профориентолог | Игропрактик</>
                                </div>
                    }
                    button={
                        <Link href="https://creativedesignsguru.com/category/nextjs/">
                            <Button size={'lg'}>Связаться со мной</Button>
                        </Link>
                    }
                />
                <Image
                    src="/images/yana.png"
                    width="480"
                    height="600"
                    alt="Яна"
                    className="max-sm:absolute max-sm:top-36 max-sm:left-10 max-sm:opacity-35"
                />
            </div>
        </Section>
    );
};

export { Hero };

