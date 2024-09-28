import { FC } from 'react';
import Image from 'next/image';

type Props = {
    item: string;
    index: number;
};

const Bullet: FC<Props> = ({ item, index }) => {
    return (
        <div
            className={`flex flex-col justify-center items-center ${index === 6 ? 'col-span-3' : ''}`}
        >
            <Image
                src={`/images/help${index}.png`}
                alt={item}
                width={60}
                height={60}
            />{' '}
            <span
                className={`text-xl text-center ${index === 6 ? 'sm:w-1/3' : ''}`}
            >
                {item}
            </span>
        </div>
    );
};

export default Bullet;
