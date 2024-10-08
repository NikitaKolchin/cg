import { CardWrapper } from '@/components/auth/card-wrapper';
import { FC } from 'react';

type Props = {
    error: string;
};

export const ErrorCard: FC<Props> = ({ error }) => {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
        >
            <div className="w-full flex justify-center items-center">
                {error}
            </div>
        </CardWrapper>
    );
};
