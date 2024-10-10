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
import { appointmentData } from '@/data';

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
        startTransition(async () => {
            try {
                const data = await profile(values);
                if (data?.error) {
                    setError(data.error);
                }
                if (data?.success) {
                    update();
                    setSuccess(data.success);
                }
            } catch (error) {
                setError('Something went wrong!');
            }
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
                <div className="flex flex-col gap-2">
                    {appointmentData.map((item, index) => (
                        <div
                            key={index}
                            className="border-2 p-2 m-auto text-center"
                        >
                            <div className="h-12 w-72">
                                <label
                                    htmlFor=""
                                    className="text-center font-bold"
                                >
                                    {item.label}
                                </label>
                                {!item.disabled &&
                                    errors?.[
                                        item.name as keyof z.infer<
                                            typeof AppointmentSchema
                                        >
                                    ] && (
                                        <div className="text-sm text-red-600">
                                            {
                                                errors?.[
                                                    item.name as keyof z.infer<
                                                        typeof AppointmentSchema
                                                    >
                                                ]?.message
                                            }
                                        </div>
                                    )}
                            </div>
                            <input
                                placeholder={item.placeholder}
                                {...register(
                                    item.name as keyof z.infer<
                                        typeof AppointmentSchema
                                    >,
                                )}
                                type={item.type}
                                disabled={item.disabled}
                                defaultValue={
                                    user?.[item.name as 'name' | 'email']
                                }
                            />
                        </div>
                    ))}

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
