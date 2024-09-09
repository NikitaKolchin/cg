'use client';

const Hamburger = () => (
    <div
        onClick={() => {
            document.body.classList.toggle('hamburger-toggle');
        }}
        className="grid place-content-center w-20 h-20 p-6 mx-auto"
    >
        <div className="w-16 h-2 bg-white rounded-full transition-all duration-150 before:content-[''] before:absolute before:w-16 before:h-2 before:bg-white before:rounded-full before:-translate-y-4 before:transition-all before:duration-150 after:content-[''] after:absolute after:w-16 after:h-2 after:bg-white after:rounded-full after:translate-y-4 after:transition-all after:duration-150"></div>
    </div>
);

export { Hamburger };
