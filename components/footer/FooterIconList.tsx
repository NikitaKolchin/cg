import type { ReactNode } from 'react';

type FooterIconListProps = {
    children: ReactNode;
};

const FooterIconList = (props: FooterIconListProps) => (
    <div className="footer-icon-list flex flex-wrap">{props.children}</div>
);

export { FooterIconList };
