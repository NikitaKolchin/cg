import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type CenteredFooterProps = {
    logo: ReactNode;
    iconList: ReactNode;
    children: ReactNode;
};

const CenteredFooter = (props: CenteredFooterProps) => (
    <div className="md:flex justify-between items-center text-center">
        {props.logo}
        <div className="text-sm">
            <FooterCopyright />
        </div>

        <div className="flex justify-center">
            <FooterIconList>{props.iconList}</FooterIconList>
        </div>
    </div>
);

export { CenteredFooter };
