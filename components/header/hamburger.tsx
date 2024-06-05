'use client';
import React, { FC, PropsWithChildren, useState } from 'react';

export const Hamburger: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={handleClick}
                className="flex flex-col justify-center items-center"
            >
                <span
                    className={`bg-normal block transition-all duration-300 ease-out 
            h-1 w-10 rounded-sm${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
                ></span>
                <span
                    className={`bg-normal block transition-all duration-300 ease-out 
            h-1 w-10 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                <span
                    className={`bg-normal block transition-all duration-300 ease-out 
            h-1 w-10 rounded-sm ${
                isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
                ></span>
            </button>
            {isOpen && (
                <div className="bg-normal absolute right-1 top-5">
                    <ul>{children}</ul>
                </div>
            )}
        </div>
    );
};
