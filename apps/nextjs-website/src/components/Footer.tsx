'use client';
import { usePathname } from 'next/navigation';
import MarkdownRenderer from './MarkdownRenderer';
import { Footer as FooterRC } from '@react-components/components';
import {
  DesignersItaliaFooterProps,
  StandardFooterProps,
} from '@react-components/types';
import {
  DesignersItaliaFooterData,
  FooterData,
  StandardFooterData,
} from '@/lib/fetch/footer';
import { FormatSlug, LocalizeURL } from '@/lib/linkLocalization';
import { Locale } from '@/lib/fetch/siteWideSEO';
import { DesignersItaliaFooter as DesignersItaliaFooterRC } from '@react-components/components';

const titleSVG = {
  it: "Finanziato dall'Unione Europea · NextGenerationEU",
  en: 'Funded by the European Union · NextGenerationEU',
  de: 'Gefördert von der Europäischen Union · NextGenerationEU',
  fr: "Financé par l'Union européenne · NextGenerationEU",
  sl: 'Financirano s strani Evropske unije · NextGenerationEU',
};

const labelsDesignersItaliaFooter: Record<
  Locale,
  DesignersItaliaFooterProps['labels']
> = {
  it: {
    copyToClipboard: (hashtag: string) => `Copia ${hashtag} negli appunti`,
    copiedToClipboard: 'Hashtag copiato negli appunti',
  },
  en: {
    copyToClipboard: (hashtag: string) => `Copy ${hashtag} to your clipboard`,
    copiedToClipboard: 'Hashtag copied to clipboard',
  },
  de: {
    copyToClipboard: (hashtag: string) =>
      `Kopieren Sie ${hashtag} in Ihre Zwischenablage.`,
    copiedToClipboard: 'Hashtag in die Zwischenablage kopiert',
  },
  fr: {
    copyToClipboard: (hashtag: string) =>
      `Copiez ${hashtag} dans votre presse-papiers`,
    copiedToClipboard: 'Hashtag copié dans le presse-papiers',
  },
  sl: {
    copyToClipboard: (hashtag: string) => `Kopiraj ${hashtag} v odložišče`,
    copiedToClipboard: 'Hashtag kopirano v odložišče',
  },
};

const makeFooterProps = (
  {
    legalInfo,
    links_aboutUs,
    links_services,
    links_resources,
    links_followUs,
    defaultLocale,
    companyLink,
    localizedLinks,
    ...rest
  }: StandardFooterData & {
    defaultLocale: Locale;
    localizedLinks: ReadonlyArray<{ id: Locale; value: string; href: string }>;
  },
  activeLocale: Locale,
): StandardFooterProps => ({
  legalInfo: MarkdownRenderer({
    markdown: legalInfo,
    locale: activeLocale,
    defaultLocale,
    variant: 'caption',
  }),
  links: {
    aboutUs: {
      links: links_aboutUs.links.map(
        ({ href, showOneTrustPreferencies, label, ariaLabel, page }) => ({
          label,
          ...(ariaLabel && { ariaLabel }),
          href: page
            ? FormatSlug(page.slug, activeLocale, defaultLocale)
            : LocalizeURL({
                URL: href ?? '',
                locale: activeLocale,
                defaultLocale,
              }),
          ...(showOneTrustPreferencies && { showOneTrustPreferencies }),
        }),
      ),
      ...(links_aboutUs.title && { title: links_aboutUs.title }),
    },
    services: {
      links: links_services.links.map(
        ({ href, showOneTrustPreferencies, label, ariaLabel, page }) => ({
          label,
          ...(ariaLabel && { ariaLabel }),
          href: page
            ? FormatSlug(page.slug, activeLocale, defaultLocale)
            : LocalizeURL({
                URL: href ?? '',
                locale: activeLocale,
                defaultLocale,
              }),
          ...(showOneTrustPreferencies && { showOneTrustPreferencies }),
        }),
      ),
      ...(links_services.title && { title: links_services.title }),
    },
    resources: {
      links: links_resources.links.map(
        ({ href, showOneTrustPreferencies, label, ariaLabel, page }) => ({
          label,
          ...(ariaLabel && { ariaLabel }),
          href: page
            ? FormatSlug(page.slug, activeLocale, defaultLocale)
            : LocalizeURL({
                URL: href ?? '',
                locale: activeLocale,
                defaultLocale,
              }),
          ...(showOneTrustPreferencies && { showOneTrustPreferencies }),
        }),
      ),
      ...(links_resources.title && { title: links_resources.title }),
    },
    followUs: {
      title: links_followUs.title,
      links: links_followUs.links.map(
        ({ href, showOneTrustPreferencies, label, ariaLabel, page }) => ({
          label,
          ...(ariaLabel && { ariaLabel }),
          href: page
            ? FormatSlug(page.slug, activeLocale, defaultLocale)
            : LocalizeURL({
                URL: href ?? '',
                locale: activeLocale,
                defaultLocale,
              }),
          ...(showOneTrustPreferencies && { showOneTrustPreferencies }),
        }),
      ),
      socialLinks: links_followUs.socialLinks.map(
        ({ icon, href, ariaLabel }) => ({
          iconURL: icon.url,
          href: LocalizeURL({ URL: href, locale: activeLocale, defaultLocale }),
          ariaLabel,
        }),
      ),
    },
  },
  languages: localizedLinks,
  activeLanguage: localizedLinks.find((l) => l.id === activeLocale) ?? {
    id: activeLocale,
    value: activeLocale,
    href: '/',
  },
  companyLink: {
    ariaLabel: companyLink.ariaLabel,
    href: LocalizeURL({
      URL: companyLink.href,
      locale: activeLocale,
      defaultLocale,
    }),
  },
  titleSVG: titleSVG[activeLocale],
  ...rest,
});

const makeDesignersItaliaFooterProps = (
  {
    defaultLocale,
    localizedLinks,
    ...props
  }: DesignersItaliaFooterData & {
    defaultLocale: Locale;
    localizedLinks: ReadonlyArray<{ id: Locale; value: string; href: string }>;
  },
  activeLocale: Locale,
): DesignersItaliaFooterProps => ({
  ...(props.bottomLinks && {
    bottomLinks: {
      ...(props.bottomLinks.ariaLabel && {
        title: props.bottomLinks.ariaLabel,
      }),
      ...(props.bottomLinks.links && {
        links: props.bottomLinks.links.map(
          ({ href, showOneTrustPreferencies, label, ariaLabel, page }) => ({
            label,
            ...(ariaLabel && { ariaLabel }),
            href: page
              ? FormatSlug(page.slug, activeLocale, defaultLocale)
              : LocalizeURL({
                  URL: href ?? '',
                  locale: activeLocale,
                  defaultLocale,
                }),
            ...(showOneTrustPreferencies && { showOneTrustPreferencies }),
          }),
        ),
      }),
    },
  }),
  links: {
    ...(props.links.title && { title: props.links.title }),
    links: props.links.links.map(
      ({ href, showOneTrustPreferencies, label, ariaLabel, page }) => ({
        label,
        ...(ariaLabel && { ariaLabel }),
        href: page
          ? FormatSlug(page.slug, activeLocale, defaultLocale)
          : LocalizeURL({
              URL: href ?? '',
              locale: activeLocale,
              defaultLocale,
            }),
        ...(showOneTrustPreferencies && { showOneTrustPreferencies }),
      }),
    ),
  },
  ...(props.socialLinks && {
    socialLinks: {
      ...(props.socialLinks.title && { title: props.socialLinks.title }),
      links: props.socialLinks.socialLinks.map(({ icon, ariaLabel, href }) => ({
        iconURL: icon.url,
        ariaLabel,
        href: LocalizeURL({ URL: href, locale: activeLocale, defaultLocale }),
      })),
    },
  }),
  ...(props.hashtags && {
    hashtags: {
      ...(props.hashtags.title && { title: props.hashtags.title }),
      hashtags: props.hashtags.hashtags.map((hashtag) => hashtag.hashtag),
    },
  }),
  labels: labelsDesignersItaliaFooter[activeLocale],
});

const Footer = ({
  defaultLocale,
  localizedLinks,
  ...props
}: FooterData['data']['footer'][0] & {
  defaultLocale: Locale;
  localizedLinks: ReadonlyArray<{ id: Locale; value: string; href: string }>;
}) => {
  const pathname = usePathname() + '/'; // Add final slash to make sure not to miss a non-default locale's homepage (e.g.: \en)
  const activeLocale = ['it/', 'en/', 'de/', 'fr/', 'sl/'].includes(
    pathname.slice(1, 4),
  ) // Include '/' to make sure not to detect slugs happening to begin with the same letters (e.g.: /enroll)
    ? (pathname.slice(1, 3) as Locale)
    : defaultLocale;

  const footerType = props.__component;

  switch (footerType) {
    case 'footers.standard-footer':
      return (
        <FooterRC
          {...makeFooterProps(
            { ...props, localizedLinks, defaultLocale },
            activeLocale,
          )}
        />
      );
    case 'footers.designers-italia-footer':
      return (
        <DesignersItaliaFooterRC
          {...makeDesignersItaliaFooterProps(
            { ...props, localizedLinks, defaultLocale },
            activeLocale,
          )}
        />
      );
  }
};

export default Footer;
