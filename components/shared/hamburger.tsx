'use client';

import { useState } from 'react';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`${isOpen ? 'hamburger-toggle' : ''} grid place-content-center w-20 h-20 p-6 mx-auto md:hidden`}
        >
            <div
                className={`
                w-10 h-1 bg-white  rounded-full transition-all duration-150 
                before:content-[''] before:absolute 
                before:w-10 before:h-1 before:bg-white before:rounded-full before:-translate-y-3 before:transition-all before:duration-150 
                after:content-[''] after:absolute 
                after:w-10 after:h-1 after:bg-white after:rounded-full after:translate-y-3 after:transition-all after:duration-150
                `}
            ></div>
        </div>
    );
};

export { Hamburger };
