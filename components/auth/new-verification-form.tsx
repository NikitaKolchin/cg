'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CardWrapper } from './card-wrapper';
import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';
import { newVerification } from '@/lib/actions/auth/new-verification';
import { FormSuccess } from '../form-sucess';
import { FormError } from '../form-error';

const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const searchParams = useSearchParams();

    const token = searchParams.get('token');

    const onSubmit = useCallback(async () => {
        if (!token) {
            setError('Missing token!');
            return;
        }
        try {
            const data = await newVerification(token);
            setSuccess(data.success);
            setError(data.error);
        } catch (error) {
            setError('Something went wrong!');
        }
    }, [token]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);
    return (
        <CardWrapper
            headerLabel="Confirming your verification"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && <BeatLoader />}
                <FormSuccess message={success} />
                {!success && <FormError message={error} />}
            </div>
        </CardWrapper>
    );
};

export default NewVerificationForm;
