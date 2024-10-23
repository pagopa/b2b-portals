import { ThemeProvider } from '@mui/material/styles';
import Script from 'next/script';
import { theme } from '../theme';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getPreHeaderProps,
  getHeaderProps,
  getFooterProps,
  getSiteWideSEO,
  isPreviewMode,
  getPreFooterProps,
  getAllPages,
} from '@/lib/api';
import PreFooter from '@/components/PreFooter';

type LayoutProps = {
  children: React.ReactNode;
  params: { slug?: string[] };
};

const MatomoScript = (id: string): string => `
var _paq = (window._paq = window._paq || []);
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
  var u = "https://pagopa.matomo.cloud/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "${id}"]);
  var d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.async = true;
  g.src = "//cdn.matomo.cloud/pagopa.matomo.cloud/matomo.js";
  s.parentNode.insertBefore(g, s);
})();`;

// Same params as Page, we're later going to only extract the locale since the specific page's slug doesn't matter
// We cannot extract the locale directly inside generateStaticParams
// because, since the folder is called [[...slug]], NextJS will only populate params called slug
export const generateStaticParams = async (): Promise<
  Array<LayoutProps['params']>
> => {
  // prevents the error during types generation:
  // .next/types/app/[...slug]/page.ts(37,98): error TS2344: Type '{ __tag__:
  // "generateStaticParams"; __return_type__: Promise<readonly Page[]>; }' does
  // not satisfy the constraint '{ __tag__: "generateStaticParams";
  // __return_type__: any[] | Promise<any[]>; }'.

  if (isPreviewMode()) {
    return [];
  }

  // Get locales
  const { locales } = await getSiteWideSEO();

  // Set default locale as /it, unless /en is the only active locale
  const defaultLocale = locales.en && !locales.it ? 'en' : 'it';

  const pages_it: Array<LayoutProps['params']> = locales.it
    ? (await getAllPages('it')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'it' ? [page.slug] : ['it', page.slug],
      }))
    : [];
  const pages_en: Array<LayoutProps['params']> = locales.en
    ? (await getAllPages('en')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'en' ? [page.slug] : ['en', page.slug],
      }))
    : [];

  return [...pages_it, ...pages_en];
};

export default async function Layout({
  children,
  params: { slug },
}: LayoutProps) {
  if (isPreviewMode()) {
    return (
      <ThemeProvider theme={theme}>
        <html lang='it'>
          <body style={{ margin: 0, scrollBehavior: 'smooth' }}>
            {children}
            <Script
              src='/scripts/otnotice-1.0.min.js'
              type='text/javascript'
              id='otprivacy-notice-script'
              strategy='beforeInteractive'
            />
          </body>
        </html>
      </ThemeProvider>
    );
  }

  const { locales, matomoID } = await getSiteWideSEO();
  const defaultLocale = locales.en && !locales.it ? 'en' : 'it';

  // Check if slug is undefined, which happens for the default locale's homepage due to generateStaticParams' internal logic
  // If it is, set the locale to the default locale
  // The locale will NOT be found for the default locale and will be in slug[0] for all others
  const locale =
    slug === undefined
      ? defaultLocale
      : slug[0] === 'it' || slug[0] === 'en'
      ? slug[0]
      : defaultLocale;

  const preHeaderProps = await getPreHeaderProps(locale);
  const headerProps = await getHeaderProps(locale, defaultLocale);
  const footerProps = await getFooterProps(locale);
  const preFooterProps = await getPreFooterProps(locale);
  const localesArray = Object.keys(locales).filter(
    (locale) => locales[locale as 'it' | 'en']
  );

  return (
    <ThemeProvider theme={theme}>
      <html lang={locale}>
        <body style={{ margin: 0 }}>
          {preHeaderProps && <PreHeader {...preHeaderProps} />}
          <Header {...headerProps} />
          {children}
          {preFooterProps && <PreFooter {...preFooterProps} />}
          <Footer
            {...footerProps}
            locales={localesArray as Array<'it' | 'en'>}
            defaultLocale={defaultLocale}
          />
          <Script
            src='/scripts/otnotice-1.0.min.js'
            type='text/javascript'
            id='otprivacy-notice-script'
            strategy='beforeInteractive'
          />
          {matomoID !== null && (
            <Script
              id='matomo'
              key='script-matomo'
              dangerouslySetInnerHTML={{ __html: MatomoScript(matomoID) }}
              strategy='lazyOnload'
            />
          )}
        </body>
      </html>
    </ThemeProvider>
  );
}
