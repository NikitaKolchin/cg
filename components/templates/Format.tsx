import { Section } from '@/components/layout/Section';

const Format = () => (
    <Section
        title="Формат работы"
        description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
    >
        <table className="mx-auto border-collapse">
            <tbody>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Психологическое консультирование: помощь в решении
                        трудных жизненных ситуаций
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Профдиагностика и карьерное консультирование: помощь в
                        выборе профессии и самоопределении, выявление сильных
                        сторон и зон роста, построение карьерного трека
                    </td>
                </tr>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Тренинги и мастер-классы: групповая работа по различным
                        тематикам
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Игровые методики:​ Метафорические ассоциативные карты​
                        Игра «Лила»​ Игра «Ключ к подсознанию»​ Игра
                        «Профориентатор» и др.​
                    </td>
                </tr>
            </tbody>
        </table>
    </Section>
);

export { Format };
