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
        <div className="flex flex-col gap-2">
            <div className="p-4 border-2">
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
                >
                    <label htmlFor="email">
                        Электронная почта
                        <input
                            name="email"
                            id="email"
                            defaultValue={props.searchParams.email}
                        />
                    </label>
                    <Button type="submit">
                        <span>Отправить ссылку на почту</span>
                    </Button>
                </form>
            </div>
            <div className="flex gap-4 border-2">
                {Object.values(providerMap).map((provider) => (
                    <form
                        key={provider.id}
                        action={async () => {
                            'use server';
                            try {
                                await signIn(provider.id, {
                                    redirectTo:
                                        props.searchParams?.callbackUrl ?? '/',
                                });
                            } catch (error) {
                                // Signin can fail for a number of reasons, such as the user
                                // not existing, or the user not having the correct role.
                                // In some cases, you may want to redirect to a custom error
                                if (error instanceof AuthError) {
                                    return redirect(
                                        `${SIGNIN_ERROR_URL}?error=${error.type}`,
                                    );
                                }

                                // Otherwise if a redirects happens Next.js can handle it
                                // so you can just re-thrown the error and let Next.js handle it.
                                // Docs:
                                // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
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
                            {provider.name === 'Google' ? (
                                <FcGoogle />
                            ) : provider.name === 'GitHub' ? (
                                <FaGithub />
                            ) : (
                                <span>Войти через {provider.name}</span>
                            )}
                        </Button>
                    </form>
                ))}
            </div>
        </div>
    );
}
