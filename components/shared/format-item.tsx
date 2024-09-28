import { FC } from 'react';
import { AccordionItem } from '@szhsin/react-accordion';

type FormatItemProps = {
    header: string;
    items: string[];
};
const FormatItem: FC<FormatItemProps> = ({ header, items }) => (
    <AccordionItem
        className="py-2 border-b-2 border-gray-700"
        buttonProps={{
            className: 'w-full flex justify-between items-center',
        }}
        header={({ state }) => (
            <div className="flex justify-between items-center text-normal w-full ">
                <div className="flex items-start text-left">
                    <span className="sm:text-4xl max-sm:text-2xl font-bold">
                        {header}
                    </span>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-200 ${state.isEnter && 'rotate-180'} w-12 h-12`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>
        )}
    >
        <ul className="list-disc p-4">
            {items.map((item) => (
                <li key={item} className="m-2 text-gray-800">
                    {item}
                </li>
            ))}
        </ul>
    </AccordionItem>
);

export { FormatItem };
