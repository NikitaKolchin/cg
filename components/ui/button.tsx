import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'animate-bounce inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-white text-dark h-8 min-w-24 hover:font-bold p-1 border border-dark rounded-xl uppercase',
                destructive:
                    'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline:
                    'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
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
    },
);

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
