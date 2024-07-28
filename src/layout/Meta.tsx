import Head from 'next/head';

import { headers } from 'next/headers';

const Meta = () => {
    const heads = headers();
    const pathname = heads.get('next-url');

    return (
        <>
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                    key="viewport"
                />
                <link
                    rel="apple-touch-icon"
                    href={`${pathname}/apple-touch-icon.png`}
                    key="apple"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={`${pathname}/favicon-32x32.png`}
                    key="icon32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={`${pathname}/favicon-16x16.png`}
                    key="icon16"
                />
                <link
                    rel="icon"
                    href={`${pathname}/favicon.ico`}
                    key="favicon"
                />
            </Head>
        </>
    );
};

export { Meta };
