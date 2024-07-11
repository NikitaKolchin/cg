'use client';
import * as z from 'zod';
import { register  as ra } from '@/lib/actions/register';
import { RegisterSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const RegisterForm = () => {
    const { handleSubmit, register, formState: { errors }, } = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            name: '',
        },
    });
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        ra(values);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
                <input type="text" {...register('name')} />
                {errors.name?.message && <p>{errors.name?.message}</p>}
                <input type="email" {...register('email')} />
                {errors.email?.message && <p>{errors.email?.message}</p>}
                <input type="password" {...register('password')}/>
                {errors.password?.message && <p>{errors.password?.message}</p>}
            </div>
            <button type="submit" className="w-full">
                Create an account
            </button>
        </form>
    );
};

export default RegisterForm;
