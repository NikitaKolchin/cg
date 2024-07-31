import { useState, useEffect } from 'react';

export const useBetterMediaQuery = (mediaQueryString: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(mediaQueryString);

        const listener = () => setMatches(!!mediaQueryList.matches);
        mediaQueryList.addEventListener('change', listener);

        listener();

        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, [mediaQueryString]);

    return matches;
};
