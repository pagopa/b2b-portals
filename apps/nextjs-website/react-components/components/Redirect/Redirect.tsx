'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import type { RedirectProps } from '../../types/Redirect/Redirect.types';

const Redirect = ({ redirectCode, redirectURL }: RedirectProps) => {
    const router = useRouter();
    const hasRedirectedRef = useRef(false);

    useEffect(() => {
        const destination = redirectURL?.trim();

        if (!destination || hasRedirectedRef.current) {
            return;
        }

        hasRedirectedRef.current = true;

        if (redirectCode === '301') {
            router.replace(destination);
            return;
        }

        router.push(destination);
    }, [redirectCode, redirectURL, router]);

    return null;
};

export default Redirect;
