import { Section } from '@/components/layout/Section';

const Numbers = () => (
    <Section
        title="Мой опыт в цифрах"
        description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
    >
        <table className="mx-auto border-collapse">
            <tbody>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Проведено более 100 часов психологических консультаций и
                        50 тренингов на разные тематики​ ​
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Используется более 20 различных методов работы с
                        клиентами
                    </td>
                </tr>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        В наличии 10 видов игровых практик
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Среднее число трудоустроенных клиентов – 5 в месяц
                    </td>
                </tr>
            </tbody>
        </table>
    </Section>
);

export { Numbers };
