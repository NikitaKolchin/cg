import { costData } from '@/data';
import { Section } from '../shared/section';

const Cost = () => {
    return (
        <Section
            title="Стоимость услуг"
            description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
            color="bg-light"
            yPadding="py-16"
        >
            <div className="pt-16 md:grid md:grid-cols-2 md:gap-16 max-sm:flex max-sm:flex-col max-sm:gap-4 z-10">
                {costData.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full py-8 overflow-hidden shadow-gray-500 shadow-lg rounded-3xl border-2 border-normal bg-clear text-center"
                    >
                        <div className="relative z-0 flex flex-col justify-between gap-8">
                            <h2 className="text-3xl text-black font-semibold">
                                {item.title}
                            </h2>
                            <div>
                                <p className="text-5xl text-normal font-semibold">
                                    {item.cost}
                                </p>
                                <p className="text-lg text-gray-700">
                                    {item.description}
                                </p>
                            </div>
                            <span className="text-xs text-gray-700">
                                {item.note}
                            </span>
                            {item.strip && (
                                <div
                                    className=" absolute 
                                                max-sm:top-[95%]
                                                md:top-[90%]
                                                md:left-[10%]
                                                max-sm:left-[15%]
                                                max-sm:w-[120%]
                                                md:w-[80%]
                                                text-white
                                                align-middle
                                                whitespace-nowrap
                                                rotate-[30deg]
                                                -translate-y-[70%]
                                                -translate-x-[40%]
                                                z-10
                                                bg-normal"
                                >
                                    <div>{item.strip.split('\n')?.[0]}</div>
                                    <div>{item.strip.split('\n')?.[1]}</div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export { Cost };
