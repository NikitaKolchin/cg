import { FC } from 'react';

type Props = {
    error: string;
};

export const ErrorCard: FC<Props> = ({ error }) => {
    return (
        <div className="w-full flex justify-center items-center bg-red-600">
            {error}
        </div>
    );
};
