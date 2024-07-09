'use client';

import { register } from '@/lib/actions/register';

export const RegisterForm = () => {
    const onSubmit = (formData: FormData) => {
        const values = {
            name: formData.get('name')?.toString() || '',
            password: formData.get('password')?.toString() || '',
            email: formData.get('email')?.toString() || '',
        };
        register(values);
    };
    return (
        <form action={onSubmit} className="space-y-6">
            <div className="space-y-4">
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="password" name="password" />
            </div>
            <button type="submit" className="w-full">
                Create an account
            </button>
        </form>
    );
};

export default RegisterForm;
