'use client';
import { signOut } from 'next-auth/react';
import { Button } from './button';

const SignOut = () => {
    return <Button onClick={() => signOut()}>Выйти</Button>;
};

export { SignOut };
