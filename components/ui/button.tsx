import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('duration-300 border border-dark rounded-2xl', {
    variants: {
        variant: {
            default:
                'bg-normal text-white hover:drop-shadow-xl hover:text-opacity-75',
            secondary: 'bg-light text-white hover:bg-dark hover:drop-shadow-md',
            outline: 'lowercase',
        },
        size: {
            default: 'min-h-12 px-4 py-2',
            sm: 'min-h-10 px-3 text-xs',
            lg: 'min-h-16 px-8 text-2xl rounded-3xl',
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
