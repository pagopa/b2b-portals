'use client';
import { redirect, usePathname } from 'next/navigation';

const NotFound = () => {
  const pathname = usePathname();

  if (pathname.length < 5) {
    // No locale (/x) or an invalid locale's homepage (/xx/)
    // Redirect to the default locale's homepage
    redirect('/');
  }

  if (pathname[3] === '/') {
    // If an hypothetical locale is present in the pathname
    // Redirect to said locale's homepage
    const locale = pathname.slice(1, 3);
    redirect(`/${locale}`);
    /**
     * We are not checking if the locale has a homepage
     * because, if it doesn't, a new 404 page will be shown and
     * the check at line 7 will redirect to the default locale's homepage.
     * This is done in an effort to maintain the user's locale preference.
     **/
  }

  // No locale has been specified, simply redirect to the default locale's homepage
  redirect('/');
};

export default NotFound;
