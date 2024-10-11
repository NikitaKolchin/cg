'use client';
import { profile } from '@/lib/actions/profile';
import { AppointmentSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import {
    FC,
    PropsWithChildren,
    startTransition,
    useEffect,
    useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-sucess';
import { Button } from '../ui/button';
import { appointmentData } from '@/data';
import { useRouter } from 'next/navigation';

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
    const router = useRouter();
    useEffect(() => {
        if (success) {
            setTimeout(() => {
                router.push(`/`);
            }, 3000);
        }
    });
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
                setError('Что-то пошло не так!');
            }
        });
    };
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center m-auto gap-2 min-h-screen w-full  gap-y-10 items-center bg-light"
            >
                <div className="pt-16 sm:grid sm:grid-cols-2 sm:gap-16 max-sm:flex max-sm:flex-col max-sm:gap-4  text-gray-800">
                    {appointmentData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full py-8 overflow-hidden shadow-gray-500 shadow-lg rounded-3xl border-2 border-normal bg-clear text-center "
                        >
                            <div className="h-12 max-xl:w-72 xl:w-96 ">
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
                                className="border border-dark rounded-xl p-2 text-center shadow-xl"
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
                </div>
                {success || error ? null : (
                    <Button
                        type="submit"
                        className="max-sm:w-3/4 sm:w-1/2 xl:w-1/4 text-center align-center m-auto my-8"
                    >
                        Отправить
                    </Button>
                )}
                <FormError message={error} />
                <FormSuccess message={success} />
            </form>
        </>
    );
};

export { Appointment };
