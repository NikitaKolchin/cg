import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type CenteredFooterProps = {
    logo: ReactNode;
    children: ReactNode;
};

const CenteredFooter = (props: CenteredFooterProps) => (
    <div className="flex max-sm:flex-col justify-between items-center text-center">
        {props.logo}
        <div className="text-sm">
            <FooterCopyright />
        </div>

        <div className="flex justify-center">
            <FooterIconList>{props.children}</FooterIconList>
        </div>
    </div>
);

export { CenteredFooter };
