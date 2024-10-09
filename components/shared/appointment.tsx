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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Имя</label>

                    {errors?.name && <span>{errors.name.message}</span>}
                </div>
                <input
                    {...register('name')}
                    type="text"
                    defaultValue={user?.name}
                />

                <div>
                    <label htmlFor="">Почта</label>
                    {errors?.email && <span>{errors.email.message}</span>}
                </div>
                <input
                    {...register('email')}
                    type="email"
                    defaultValue={user?.email}
                />

                <div>
                    <label htmlFor="">ваш запрос</label>
                    {errors?.query && <span>{errors.query.message}</span>}
                </div>
                <input {...register('query')} name="query" type="text" />

                <div>
                    <label htmlFor="">контактный телефон</label>
                    {errors?.tel && <span>{errors.tel.message}</span>}
                </div>
                <input {...register('tel')} type="tel" />

                <div>
                    <label htmlFor="">желаемая дата</label>
                    {errors?.date && <span>{errors.date.message}</span>}
                </div>
                <input {...register('date')} type="datetime-local" />

                <button type="submit" className="button">
                    Отправить
                </button>
            </form>
            <FormError message={error} />
            <FormSuccess message={success} />
        </>
    );
};

export { Appointment };
