import { Section } from '@/components/layout/Section';

const Experience = () => (
    <Section
        title="Мой опыт"
        description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
    >
        <table className="mx-auto border-collapse">
            <tbody>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Более 8 лет опыта работы экспертом по развитию персонала
                        (HR)
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        В настоящее время работаю совместно с Областным кадровым
                        агентством и Молодежным центром карьеры Нижегородской
                        области (при поддержке КУПНО) в должности карьерного
                        консультанта
                    </td>
                </tr>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Работа с персоналом: развитие, мотивация, вовлеченность,
                        разработка кадровых стратегий, наставничество, подбор,
                        адаптация
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Профориентация школьников, студентов и молодежи
                    </td>
                </tr>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Психологическая помощь
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Помощь при трудоустройстве (составление резюме, поиск
                        работы, подготовка к собеседованию и т.д.)
                    </td>
                </tr>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Проведение мастер-классов, тренингов и других
                        развивающих мероприятий
                    </td>
                    <td className="border-2 border-gray-300 p-3"></td>
                </tr>
            </tbody>
        </table>
    </Section>
);

export { Experience };
