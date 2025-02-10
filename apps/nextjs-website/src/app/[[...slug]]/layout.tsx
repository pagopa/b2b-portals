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
import { Locale } from '@/lib/fetch/siteWideSEO';
import ConsentHandler from '@/components/ConsentHandler';

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
  const { defaultLocale, locales } = await getSiteWideSEO();

  const pages_it: Array<LayoutProps['params']> = locales.it
    ? (await getAllPages('it')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'it' ? [...page.slug] : ['it', ...page.slug],
      }))
    : [];
  const pages_en: Array<LayoutProps['params']> = locales.en
    ? (await getAllPages('en')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'en' ? [...page.slug] : ['en', ...page.slug],
      }))
    : [];
  const pages_fr: Array<LayoutProps['params']> = locales.fr
    ? (await getAllPages('fr')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'fr' ? [...page.slug] : ['fr', ...page.slug],
      }))
    : [];
  const pages_de: Array<LayoutProps['params']> = locales.de
    ? (await getAllPages('de')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'de' ? [...page.slug] : ['de', ...page.slug],
      }))
    : [];
  const pages_sl: Array<LayoutProps['params']> = locales.sl
    ? (await getAllPages('sl')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'sl' ? [...page.slug] : ['sl', ...page.slug],
      }))
    : [];

  return [...pages_it, ...pages_en, ...pages_fr, ...pages_de, ...pages_sl];
};

export default async function Layout({
  children,
  params: { slug },
}: LayoutProps) {
  if (isPreviewMode()) {
    return null;
  }

  const siteWideSEO = await getSiteWideSEO();
  const {
    defaultLocale,
    locales,
    matomoID,
    mixpanel: mixpanelConfig,
    themeVariant,
  } = siteWideSEO;

  // Check if slug is undefined, which happens for the default locale's homepage due to generateStaticParams' internal logic
  // If it is, set the locale to the default locale
  // The locale will NOT be found for the default locale and will be in slug[0] for all others
  const locale =
    slug === undefined
      ? defaultLocale
      : ['it', 'en', 'de', 'fr', 'sl'].includes(slug[0] ?? '')
        ? (slug[0] as Locale)
        : defaultLocale;

  const preHeaderProps = await getPreHeaderProps(locale);
  const headerProps = await getHeaderProps(locale, defaultLocale);
  const footerProps = await getFooterProps(locale);
  const preFooterProps = await getPreFooterProps(locale);
  const localesArray = Object.keys(locales).filter(
    (locale) => locales[locale as Locale],
  );

  return (
    <ThemeProvider theme={theme}>
      <html lang={locale}>
        <body style={{ margin: 0 }}>
          {preHeaderProps && (
            <PreHeader
              {...preHeaderProps}
              themeVariant={themeVariant}
              locale={locale}
              defaultLocale={defaultLocale}
            />
          )}
          <Header
            {...headerProps}
            locale={locale}
            defaultLocale={defaultLocale}
          />
          {children}
          {preFooterProps && (
            <PreFooter
              {...preFooterProps}
              themeVariant={themeVariant}
              locale={locale}
              defaultLocale={defaultLocale}
            />
          )}
          <Footer
            {...footerProps}
            locales={localesArray as Array<Locale>}
            defaultLocale={defaultLocale}
          />
          <Script
            src='/scripts/otnotice-1.0.min.js'
            type='text/javascript'
            id='otprivacy-notice-script'
            strategy='beforeInteractive'
          />
          {mixpanelConfig && (
            <Script
              src='https://cdn.cookielaw.org/scripttemplates/otSDKStub.js'
              type='text/javascript'
              data-domain-script={mixpanelConfig.oneTrustDomainID}
              strategy='beforeInteractive'
            />
          )}
          {mixpanelConfig && <ConsentHandler {...mixpanelConfig} />}
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
