'use client';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, FC } from 'react';

const labelVariants = cva(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

type LabelProps = ButtonHTMLAttributes<HTMLLabelElement> &
    VariantProps<typeof labelVariants>;
const Label: FC<LabelProps> = ({ className, ...props }) => (
    <label className={cn(labelVariants(), className)} {...props} />
);

export { Label };
