import Image from 'next/image';
import { Section } from '../shared/section';
import { Button } from '@/components/ui/button';
import { IconList } from '../shared/icon-list';

const Hero = async () => {
    return (
        <Section color="bg-dark">
            <div className="sm:flex mb-4">
                <header className="text-left">
                    <h1
                        className={`text-6xl max-sm:text-3xl leading-tight font-bold text-white`}
                    >
                        {`Моя главная задача – раскрыть потенциал и разобраться в
                        чувствах`}
                    </h1>
                    <div className="mb-8 mt-8  max-sm:text-xl text-2xl text-white md:uppercase">
                        <div className="py-10">
                            <div className="shadow-[0px_0px_85px_10px_gray] rounded-3xl bg-opacity-10"></div>
                            <>Психолог |​ Профориентолог | Игропрактик</>
                        </div>
                    </div>

                    <div className="flex w-4/6 justify-start items-center gap-6 max-sm:hidden">
                        <Button size={'lg'}>Связаться со мной</Button>
                        <IconList color="white" size={48} />
                    </div>
                </header>

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
