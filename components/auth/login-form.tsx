'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

import { LoginSchema } from '@/schema';
import { Login } from '@/actions/auth/login';
import { Social } from './social';
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-sucess';
import { Input } from '../ui/input';

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl');
    const urlError =
        searchParams.get('error') === 'OAuthAccountNotLinked'
            ? 'Email already in use with different provider!'
            : '';

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
                })
                .catch(() => setError('Something went wrong'));
        });
    };

    return (
        <>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 p-2 border-2 border-dark"
            >
                <div className="space-y-4">
                    <Input
                        disabled={isPending}
                        placeholder="john.doe@example.com"
                        type="email"
                        {...form.register('email')}
                    />

                    <Input
                        disabled={isPending}
                        placeholder="******"
                        type="password"
                        {...form.register('password')}
                    />
                    <Button
                        size="sm"
                        variant="link"
                        className="px-0 font-normal"
                    >
                        <Link href="/auth/reset">Forgot password?</Link>
                    </Button>
                </div>
                <Social />
                <FormError message={error || urlError} />
                <FormSuccess message={success} />
                <Button disabled={isPending} type="submit" className="w-full">
                    {'Login'}
                </Button>
            </form>
        </>
    );
};
