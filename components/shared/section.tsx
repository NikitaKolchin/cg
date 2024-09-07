import type { ReactNode } from 'react';

type SectionProps = {
    title?: string;
    description?: string;
    yPadding?: string;
    children: ReactNode;
    Tag?: keyof JSX.IntrinsicElements;
    color?: string;
    isSkewed?: boolean;
};

const Section = ({
    Tag = 'section',
    yPadding,
    title,
    description,
    color,
    isSkewed,
    children,
}: SectionProps) => (
    <Tag className={`${color} ${isSkewed ? 'relative z-10 skewed-top' : ''}`}>
        <div
            className={`mx-auto max-w-screen-xl px-3 ${
                yPadding ? yPadding : 'py-8'
            }`}
        >
            {(title || description) && (
                <div className="text-center">
                    {title && (
                        <h2 className="text-4xl font-bold text-gray-900">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <div className="mt-4 text-xl md:px-20">
                            {description}
                        </div>
                    )}
                </div>
            )}

            {children}
        </div>
    </Tag>
);

export { Section };
