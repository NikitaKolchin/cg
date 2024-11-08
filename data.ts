import { z } from 'zod';
import { AppointmentSchema } from './schema';

export const menuData = [
    { title: 'Формат работы', link: '/#format' },
    { title: 'Мой опыт', link: '/#experience' },
    { title: 'Стоимость услуг', link: '/#cost' },
];
export const heroData = {
    title: 'Моя главная задача – раскрыть потенциал и разобраться в чувствах',
    items: ['Психолог', 'Профориентолог', 'Игропрактик'],
    button: 'Связаться со мной',
};
export const formatData = [
    {
        header: 'Психологическое консультирование',
        items: [
            'вы не можете решить какую-то проблему и вам кажется, что вы ходите по замкнутому кругу',
            'вы долго чувствуете, что «что-то не так» и хотите перемен',
            'вы хотите изменить свою жизнь, но не знаете, что для этого нужно сделать',
            'вы долгое время страдаете от пониженного настроения',
        ],
    },
    {
        header: 'Профдиагностика и карьерное консультирование',
        items: [
            'профессиональное и эмоциональное выгорание',
            'командообразование для малых групп',
            'самопомощь «здесь и сейчас» при стрессе',
            'профориентация',
            'аутсорсинг или «Помощь в поиске работы»',
        ],
    },
    {
        header: 'Тренинги и мастер-классы',
        items: [
            'не знаете какую профессию выбрать и почему',
            'хотите узнать свои профессиональные способности и мотивацию в работе',
            'ищете компанию для старта карьеры',
            'мечтаете сменить сферу деятельности, но не можете определиться с выбором',
        ],
    },
    {
        header: 'Игровые методики',
        items: [
            'Метафорические ассоциативные карты',
            'Игра «Лила»',
            'Игра «Ключ к подсознанию»',
            'Игра «Профориентатор» и другие',
        ],
    },
];

export const helpData = [
    `Выбор профессионального пути, поиск призвания​`,
    `Повышение самооценки, укрепление уверенности в себе,
    самопринятие​`,
    `Раскрытие потенциала, поиск мотивации`,
    ` Разрешение конфликтов: улучшение коммуникации и понимания в
                отношениях​`,
    `Развитие навыков саморегуляции и осознанности`,
    ` Преодоление трудных жизненных ситуаций, принятие важных
                решений​​`,
    `         Контроль над тревожными состояниями, поиск внутреннего
                спокойствия, выход из кризиса​​`,
];

export const experienceData = [
    { title: '200+', description: 'часов психологического консультирования' },
    { title: '100+', description: 'часов личной терапии и супервизии' },
    { title: '10+', description: 'ренингов на разные тематики' },
    {
        title: '8+',
        description: 'лет опыта работы экспертом по развитию персонала',
    },
];

export const educationData = [
    {
        text: 'Профессиональная переподготовка по направлению «Психологическое консультирование и психодиагностика»',
        fileName: 'e1',
    },
    {
        text: 'Диплом профессиональной переподготовки – РГСУ (г. Москва)',
        fileName: 'e2',
    },
    {
        text: 'Высшее психологическое образование (магистратура) – РГСУ (г. Москва)',
        fileName: 'e3',
    },
    {
        text: 'Повышение квалификации по направлению «Современные методы профориентации»',
        fileName: 'e4',
    },
    {
        text: 'Повышение квалификации по направлению «Сексология в психологическом консультировании»',
        fileName: 'e5',
    },
];

export const costData = [
    {
        title: 'Психологическое консультирование',
        description: '90 минут',
        cost: '3 000 ₽',
        note: '',
        strip: '',
    },
    {
        title: 'Профдиагностика и карьерное консультирование',
        description: '90 минут',
        cost: '3 000 ₽',
        note: '',
        strip: 'диагностический\n тест в подарок',
    },
    {
        title: 'Тренинги и мастер-классы',
        description: 'от 2-х часов, до 10 человек',
        cost: 'от 5 000 ₽',
        note: '*стоимость обсуждается индивидуально',
        strip: '',
    },
    {
        title: 'Игровые методики',
        description: 'с человека, до 3-х часов',
        cost: '4 000 ₽',
        note: '',
        strip: '',
    },
];

export const appointmentData: {
    label: string;
    name: keyof z.infer<typeof AppointmentSchema>;
    type: string;
    placeholder: string;
}[] = [
    {
        label: 'Имя',
        name: 'name',
        type: 'text',
        placeholder: 'Ваше имя',
    },
    // {
    //     label: 'Почта',
    //     name: 'email',
    //     type: 'email',
    //     placeholder: '',
    //     disabled: true,
    // },
    {
        label: 'ваш запрос',
        name: 'query',
        type: 'text',
        placeholder: '',
    },
    {
        label: 'контактный телефон',
        name: 'tel',
        type: 'tel',
        placeholder: '',
    },
    {
        label: 'желаемая дата',
        name: 'date',
        type: 'datetime-local',
        placeholder: '',
    },
];
