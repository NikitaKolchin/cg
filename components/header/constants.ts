type MenuItem = {
    title: string;
    path: string;
    icon: string | null;
    auth?: boolean[];
    className?: string;
};
const menu: MenuItem[] = [
    {
        title: 'Методики',
        path: '/methods',
        icon: null,
        auth: [true, false],
    },
    {
        title: 'Программа',
        path: '/agenda',
        icon: null,
        auth: [true, false],
    },
    {
        title: 'Блог',
        path: '/blog',
        icon: null,
        auth: [true, false],
    },
    {
        title: 'Вход',
        path: 'auth/login',
        className:
            'bg-light text-white h-8 min-w-24 hover:bg-dark p-1 border border-light rounded-xl uppercase flex justify-center items-center',
        icon: null,
        auth: [false],
    },
    {
        title: 'Выход',
        path: 'api/auth/signout',
        className:
            'bg-white text-dark h-8 min-w-24 hover:font-bold p-1 border border-dark rounded-xl uppercase flex justify-center items-center',
        icon: null,
        auth: [true],
    },
];

const logo: MenuItem = {
    title: 'Главная',
    path: '/',
    icon: '/images/logo_top.svg',
};

export { menu, logo };
