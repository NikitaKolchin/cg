'use client';

import { Section } from '@/components/shared/section';
import { IconList } from '../shared/icon-list';
import { Button } from '../ui/button';
import { Accordion } from '@szhsin/react-accordion';
import { formatData } from '@/data';
import { FormatItem } from '../shared/format-item';

const Format = () => (
    <Section
        isSkewedMinus={true}
        beforeElement={
            <div className="sm:hidden h-36 flex flex-col justify-between mb-12">
                <div className="flex justify-center">
                    <Button size={'lg'}>Связаться со мной</Button>
                </div>
                <IconList color="black" size={48} />
            </div>
        }
        yPadding="sm:py-12 max-sm:pb-8"
        color="bg-light"
        title="Формат работы"
        description="С помощью различных практик мы мягко и бережно погружаемся в глубины нашего сознания"
        id="format"
    >
        <Accordion
            className="border-t-2 border-gray-700 sm:mb-24 max-sm:mb-12"
            allowMultiple
            transition
            transitionTimeout={250}
        >
            {formatData.map(({ header, items }) => (
                <FormatItem key={header} header={header} items={items} />
            ))}
        </Accordion>
    </Section>
);

export { Format };
