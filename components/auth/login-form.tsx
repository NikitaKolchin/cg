'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

import { Button } from '@/components/ui_old/button';
import { FormError } from '@/components/form-error';
import { LoginSchema } from '@/schema';
import { Login } from '@/actions/auth/login';
import { FormSuccess } from '../form-sucess';
import { Social } from '../auth_old/social';

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');
    const urlError =
        searchParams.get('error') === 'OAuthAccountNotLinked'
            ? 'Email already in use with different provider!'
            : '';

    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            Login(values, callbackUrl)
                .then((data) => {
                    if (data?.error) {
                        form.reset();
                        setError(data.error);
                    }

                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                    }

                    if (data?.twoFactor) {
                        setShowTwoFactor(true);
                    }
                })
                .catch(() => setError('Something went wrong'));
        });
    };

    return (
        <>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <input
                        disabled={isPending}
                        placeholder="john.doe@example.com"
                        type="email"
                        {...form.register("email")}
                    />

                    <input
                        disabled={isPending}
                        placeholder="******"
                        type="password"
                        {...form.register("password")}

                    />
                    <Button
                        size="sm"
                        variant="link"
                        asChild
                        className="px-0 font-normal"
                    >
                        <Link href="/auth/reset">Forgot password?</Link>
                    </Button>
                </div>
                <FormError message={error || urlError} />
                <FormSuccess message={success} />
                <Button disabled={isPending} type="submit" className="w-full">
                    {showTwoFactor ? 'Confirm' : 'Login'}
                </Button>
            </form>
            <Social />
        </>
    );
};
