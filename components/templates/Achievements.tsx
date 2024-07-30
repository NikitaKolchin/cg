import { Section } from '@/components/layout/Section';

const Achievements = () => (
    <Section
        title="Мои достижения"
        description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
    >
        <table className="mx-auto border-collapse">
            <tbody>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Внедрение и развитие систем внутреннего и внешнего
                        обучений, института наставничества, повышение уровня
                        вовлеченности и мотивации персонала
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Разработка системы профориентации для школ и вузов
                    </td>
                </tr>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Спикер Общероссийского общества Знание
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Организатор мастер-классов для молодежных и карьерных
                        форумов: День Молодежи, Ярмарка вакансий, День карьеры и
                        др.​
                    </td>
                </tr>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Организатор благотворительных мероприятий для детей в
                        трудной жизненной ситуации (для реабилитационных
                        центров, пациентов паллиативного отделения, детских
                        домов)​
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Участник крупных экономических и HR-форумов (ПМЭФ,
                        Финополис, HR-EXPO и др.)​
                    </td>
                </tr>
            </tbody>
        </table>
    </Section>
);

export { Achievements };
