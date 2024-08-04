import { cn } from '@/lib/utils';

type VerticalFeatureRowProps = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
};

const VerticalFeatureRow = (props: VerticalFeatureRowProps) => {
    const verticalFeatureClass = cn(
        'mt-5',
        'flex',
        'flex-wrap',
        'items-center',
        {
            'flex-row-reverse': props.reverse,
        },
    );

    return (
        <div className={verticalFeatureClass}>
            <div className="w-full text-center sm:w-1/2 mt">
                <h3 className="text-3xl font-semibold text-gray-900">
                    {props.title}
                </h3>
                <div className="mt-6 text-xl leading-9">
                    {props.description}
                </div>
            </div>

            <div className="w-full sm:w-1/2">
                <img src={`${props.image}`} alt={props.imageAlt} />
            </div>
        </div>
    );
};

export { VerticalFeatureRow };