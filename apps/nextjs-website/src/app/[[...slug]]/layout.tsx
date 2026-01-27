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
import { getLocalizedSlugs } from '@/lib/localizedSlugs';
import LocaleGuard from '@/components/LocaleGuard';

type LayoutProps = {
  children: React.ReactNode;
  params: { slug?: string[] };
};

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
    analytics,
    themeVariant,
    pressReleasesParentSlug,
    oneTrustToken,
  } = siteWideSEO;

  // Check if slug is undefined, which happens for the default locale's homepage due to generateStaticParams' internal logic
  // If it is, set the locale to the default locale
  // The locale will NOT be found for the default locale and will be in slug[0] for all others
  const localesArray = Object.keys(locales).filter(
    (locale) => locales[locale as Locale],
  );

  const locale =
    slug === undefined
      ? defaultLocale
      : localesArray.includes(slug[0] ?? '')
        ? (slug[0] as Locale)
        : defaultLocale;

  const preHeaderProps = await getPreHeaderProps(locale);
  const headerProps = await getHeaderProps(locale, defaultLocale);
  const footerProps = await getFooterProps(locale);
  const preFooterProps = await getPreFooterProps(locale);
  const slugWithoutLocale =
    slug === undefined
      ? []
      : localesArray.includes(slug[0] ?? '')
        ? slug.slice(1)
        : slug;

  const localizedLinks = await getLocalizedSlugs({
    currentSlug: slugWithoutLocale,
    defaultLocale,
    availableLocales: localesArray as Locale[],
  });

  return (
    <LocaleGuard
      slug={slug}
      locale={locale}
      defaultLocale={defaultLocale}
      languages={localesArray}
    >
      <ThemeProvider theme={theme}>
        <html lang={locale}>
          <body style={{ margin: 0 }}>
            {preHeaderProps && (
              <PreHeader
                {...preHeaderProps}
                themeVariant={themeVariant}
                locale={locale}
                defaultLocale={defaultLocale}
                {...(pressReleasesParentSlug && { pressReleasesParentSlug })}
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
                {...(pressReleasesParentSlug && { pressReleasesParentSlug })}
              />
            )}
            <Footer
              {...footerProps}
              defaultLocale={defaultLocale}
              localizedLinks={localizedLinks}
            />
            <Script
              src='/scripts/otnotice-1.0.min.js'
              type='text/javascript'
              id='otprivacy-notice-script'
              strategy='beforeInteractive'
              {...(oneTrustToken && { 'data-settings': oneTrustToken })}
            />
            <Script
              // Set Recaptcha Options in a Script tag to ensure it runs before any ReCaptcha is rendered
              id='set-recaptcha-options'
              type='text/javascript'
              strategy='beforeInteractive'
            >{`
              if (typeof window !== 'undefined') {
                window.recaptchaOptions = { useRecaptchaNet: true };
              }
            `}</Script>
            {analytics && <ConsentHandler {...analytics} locale={locale} />}
          </body>
        </html>
      </ThemeProvider>
    </LocaleGuard>
  );
}
