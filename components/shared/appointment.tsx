'use client';
import { profile } from '@/lib/actions/profile';
import { AppointmentSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { FC, PropsWithChildren, startTransition, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-sucess';
import { Button } from '../ui/button';

type AppointmentProps = {
    user: {
        name?: string;
        email?: string;
    };
};

const Appointment: FC<PropsWithChildren<AppointmentProps>> = ({ user }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof AppointmentSchema>>({
        resolver: zodResolver(AppointmentSchema),
    });
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const { update } = useSession();
    const onSubmit = (values: z.infer<typeof AppointmentSchema>) => {
        startTransition(() => {
            profile(values)
                .then((data) => {
                    if (data.error) {
                        setError(data.error);
                    }

                    if (data.success) {
                        update();
                        setSuccess(data.success);
                    }
                })
                .catch(() => setError('Something went wrong!'));
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
                <div className="flex flex-col gap-2">
                    <div className="border-2 p-2 m-auto text-center">
                        <div className="h-12 w-72">
                            <label htmlFor="" className="text-center font-bold">
                                Имя
                            </label>
                            {errors?.name && (
                                <div className="text-sm text-red-600">
                                    {errors.name.message}
                                </div>
                            )}
                        </div>
                        <input
                            placeholder="Ваше имя"
                            {...register('name')}
                            type="text"
                            defaultValue={user?.name}
                        />
                    </div>
                    <div>
                        <div className="h-12">
                            <label htmlFor="">Почта</label>
                            {errors?.email && <div>{errors.email.message}</div>}
                        </div>
                        <input
                            {...register('email')}
                            type="email"
                            defaultValue={user?.email}
                        />
                    </div>
                    <div>
                        <div className="h-12">
                            <label htmlFor="">ваш запрос</label>
                            {errors?.query && <div>{errors.query.message}</div>}
                        </div>
                        <input
                            {...register('query')}
                            name="query"
                            type="text"
                        />
                    </div>

                    <div>
                        <div className="h-12">
                            <label htmlFor="">контактный телефон</label>
                            {errors?.tel && <div>{errors.tel.message}</div>}
                        </div>

                        <input {...register('tel')} type="tel" />
                    </div>
                    <div>
                        <div className="h-12">
                            <label htmlFor="">желаемая дата</label>
                            {errors?.date && <div>{errors.date.message}</div>}
                        </div>
                        <input {...register('date')} type="datetime-local" />
                    </div>

                    <Button type="submit" className="button">
                        Отправить
                    </Button>
                </div>
            </form>
            <FormError message={error} />
            <FormSuccess message={success} />
        </>
    );
};

export { Appointment };
