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
                        className="container-skewed shadow-gray-500 shadow-lg rounded-3xl border-2 border-normal bg-clear text-center"
                    >
                        <div className="text-content flex flex-col justify-between gap-16">
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
                                <div className="diagonal-banner bg-normal">
                                    <span>{item.strip}</span>
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
