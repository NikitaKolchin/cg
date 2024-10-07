import { redirect } from 'next/navigation';
import { signIn, providerMap, auth } from '@/auth';
import { AuthError } from 'next-auth';
import {
    SIGNIN_ERROR_URL,
    SIGNIN_REDIRECT_URL,
    WORKING_REDIRECT_URL,
} from '@/lib/utils';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { FaYandex } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

export default async function SignInPage(props: {
    searchParams: {
        email: string | undefined;
        callbackUrl: string | undefined;
    };
}) {
    const session = await auth();
    if (session?.user.name) return redirect(WORKING_REDIRECT_URL);
    if (session) return redirect(SIGNIN_REDIRECT_URL);
    return (
        <div className="bg-dark w-full h-full flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center bg-light w-fit m-auto border-2 rounded-2xl  shadow-gray-500 shadow-lg">
                <div className="flex flex-col gap-4 p-4">
                    <form
                        action={async (formData) => {
                            'use server';
                            try {
                                await signIn('nodemailer', formData);
                            } catch (error) {
                                if (error instanceof AuthError) {
                                    return redirect(
                                        `${SIGNIN_ERROR_URL}?error=${error.type}`,
                                    );
                                }
                                throw error;
                            }
                        }}
                        className="flex flex-col gap-8 justify-center items-center"
                    >
                        <h1 className="text-3xl p-8">Вход в аккаунт</h1>

                        <label htmlFor="email" className="text-2xl">
                            Электронная почта{' '}
                        </label>
                        <input
                            className="
                                    w-1/2 max-sm:w-full
                                    rounded-full 
                                    border border-blue-gray-200 
                                    px-3 py-2.5 pr-20 
                                    text-xl font-normal 
                                    text-blue-gray-700 
                                    outline outline-0 transition-all
                                    placeholder-shown:border placeholder-shown:border-blue-gray-200
                                    placeholder-shown:border-t-blue-gray-200 disabled:border-0 disabled:bg-blue-gray-50"
                            name="email"
                            id="email"
                            placeholder="Ваш E-mail"
                            defaultValue={props.searchParams.email}
                        />
                        <span className="sm:w-3/4 max-sm:w-full text-center">
                            {' '}
                            На Вашу электронную почту будет направлена ссылка,
                            для входа достаточно просто по ней пройти
                        </span>
                        <Button
                            type="submit"
                            className="sm:w-1/2 max-sm:w-full text-2xl"
                        >
                            <span>Отправить ссылку</span>
                        </Button>
                    </form>
                </div>
                <div className="flex flex-col p-4 border-t-2">
                    <h2 className="text-xl">
                        Или войдите с помощью других сервисов
                    </h2>
                    <div className="flex justify-center">
                        {Object.values(providerMap).map((provider) => (
                            <form
                                key={provider.id}
                                action={async () => {
                                    'use server';
                                    try {
                                        await signIn(provider.id, {
                                            redirectTo:
                                                props.searchParams
                                                    ?.callbackUrl ?? '/',
                                        });
                                    } catch (error) {
                                        if (error instanceof AuthError) {
                                            return redirect(
                                                `${SIGNIN_ERROR_URL}?error=${error.type}`,
                                            );
                                        }
                                        throw error;
                                    }
                                }}
                            >
                                <Button
                                    size="lg"
                                    className="w-full"
                                    variant="outline"
                                    type="submit"
                                >
                                    {provider.name === 'Yandex' ? (
                                        <FaYandex color="red" size={36} />
                                    ) : provider.name === 'Google' ? (
                                        <FcGoogle size={36} />
                                    ) : provider.name === 'GitHub' ? (
                                        <FaGithub size={36} />
                                    ) : (
                                        <span>Войти через {provider.name}</span>
                                    )}
                                </Button>
                            </form>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
