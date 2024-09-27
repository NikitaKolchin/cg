import type { ReactNode } from 'react';

type SectionProps = {
    title?: string;
    description?: string;
    yPadding?: string;
    children: ReactNode;
    Tag?: keyof JSX.IntrinsicElements;
    color?: string;
    isSkewedMinus?: boolean;
    isSkewedPlus?: boolean;
    beforeElement?: ReactNode;
    id?: string;
};

const Section = ({
    Tag = 'section',
    yPadding,
    title,
    description,
    color,
    isSkewedMinus,
    isSkewedPlus,
    beforeElement,
    id,
    children,
}: SectionProps) => (
    <Tag
        className={`${color} ${
            isSkewedMinus
                ? `relative z-10
            before:absolute
            before:bg-light
            before:content-['']
            before:w-full
            before:h-full
            before:-z-10
            before:origin-top-left
            before:max-sm:-skew-y-12
            before:md:-skew-y-6`
                : isSkewedPlus
                  ? `
                  relative z-10
                  before:absolute
                  before:bg-dark
                  before:content-['']
                  before:w-full
                  before:h-full
                  before:-z-10
                  before:bottom-[30%]
                  before:max-sm:skew-y-12
                  before:md:skew-y-6
                  `
                  : ''
        }`}
    >
        <div
            id={id}
            className={`mx-auto max-w-screen-xl px-3 ${
                yPadding ? yPadding : 'py-8'
            }`}
        >
            {beforeElement}
            {(title || description) && (
                <div
                    className={
                        beforeElement
                            ? `text-center ${yPadding}`
                            : 'text-center'
                    }
                >
                    {title && (
                        <h2 className="text-4xl font-bold text-gray-900">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <div className="mt-4 text-xl md:px-20 text-gray-800">
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
