import { Section } from '@/components/layout/Section';

const Education = () => (
    <Section
        title="Мое образование​"
        description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
    >
        <table className="mx-auto border-collapse">
            <tbody>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Высшее экономическое образование (бакалавриат) – ННГУ
                        им. Н.И. Лобачевского
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Высшее психологическое образование (магистратура) – РГСУ
                        (г. Москва)
                    </td>
                </tr>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Профессиональная переподготовка по направлению
                        «Психологическое консультирование и психодиагностика» ​
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Профессиональная переподготовка по направлению
                        «Клиническая психология»​
                    </td>
                </tr>
                <tr className="h-56">
                    <td className="border-2 border-gray-300 p-3">
                        Повышение квалификации по направлению «Современные
                        методы профориентации»
                    </td>
                    <td className="border-2 border-gray-300 p-3">
                        Повышение квалификации по направлению «Сексология в
                        психологическом консультировании»
                    </td>
                </tr>
            </tbody>
        </table>
    </Section>
);

export { Education };
