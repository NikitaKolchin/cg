import { FC, PropsWithChildren } from 'react';

type Props = {
    closeWindow: () => void;
    isOnTop?: boolean;
};

const Modal: FC<PropsWithChildren<Props>> = ({
    children,
    closeWindow,
    isOnTop = false,
}) => {
    return (
        <>
            <div
                onClick={closeWindow}
                className={`${isOnTop ? '' : 'justify-center items-center'} flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none`}
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {children}
                </div>
            </div>
            <div className="opacity-85 fixed inset-0 z-20 bg-gray-800"></div>
        </>
    );
};
export { Modal };
