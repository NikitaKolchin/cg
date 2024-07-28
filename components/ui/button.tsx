import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('duration-300 border border-dark rounded-xl uppercase', {
    variants: {
        variant: {
            default:
                'bg-white text-dark hover:font-bold',
            secondary:
                'bg-light text-white hover:bg-dark',
            outline: 'lowercase',
        },
        size: {
            default: 'h-9 px-4 py-2',
            sm: 'h-8 rounded-md px-3 text-xs',
            lg: 'h-10 rounded-md px-8',
            icon: 'h-9 w-9',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

type ButtonProps = VariantProps<typeof buttonVariants> &
    PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<ButtonProps> = ({
    children,
    className,
    variant,
    size,
    ...props
}) => (
    <button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
    >
        {children}
    </button>
);
