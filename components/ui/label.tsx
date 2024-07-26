'use client';
import { FC, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const labelVariants = cva(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

type LabelProps = HTMLAttributes<HTMLLabelElement> &
    VariantProps<typeof labelVariants>;
const Label: FC<LabelProps> = ({ className, ...props }) => (
    <label className={cn(labelVariants(), className)} {...props} />
);

export { Label };
