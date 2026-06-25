'use client';
import { usePathname } from 'next/navigation';
import MarkdownRenderer from './MarkdownRenderer';
import { Footer as FooterRC, LangCode, Languages } from '@pagopa/mui-italia';
import {
  DesignersItaliaFooterProps,
  FooterProps,
} from '@react-components/types';
import {
  DesignersItaliaFooterData,
  FooterData,
  StandardFooterData,
} from '@/lib/fetch/footer';
import { FormatSlug, LocalizeURL } from '@/lib/linkLocalization';
import { Locale } from '@/lib/fetch/siteWideSEO';
import { DesignersItaliaFooter as DesignersItaliaFooterRC } from '@react-components/components';
import { isValidExternalLink } from '@react-components/components/common/Common';

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

const languageLabels = {
  it: {
    it: 'Italiano',
    en: 'Inglese',
    fr: 'Francese',
    de: 'Tedesco',
    sl: 'Sloveno',
  },
  en: {
    it: 'Italian',
    en: 'English',
    fr: 'French',
    de: 'German',
    sl: 'Slovenian',
  },
  fr: {
    it: 'Italien',
    en: 'Anglais',
    fr: 'Français',
    de: 'Allemand',
    sl: 'Slovène',
  },
  de: {
    it: 'Italienisch',
    en: 'Englisch',
    fr: 'Französisch',
    de: 'Deutsch',
    sl: 'Slowenisch',
  },
  sl: {
    it: 'Italijanščina',
    en: 'Angleščina',
    fr: 'Francoščina',
    de: 'Nemščina',
    sl: 'Slovenščina',
  },
};

type LocalizedLinksType = ReadonlyArray<{
  id: Locale;
  value: string;
  href: string;
}>;

const makeLanguagesProps = (languages: LocalizedLinksType) => {
  return Object.fromEntries(
    languages.map((lang: { id: LangCode }) => [
      lang.id,
      languageLabels[lang.id],
    ]),
  ) as Languages;
};

const resolveLink = (props: {
  page: { slug: string } | null;
  activeLocale: Locale;
  defaultLocale: Locale;
  href: string | null;
}) =>
  props.page
    ? FormatSlug(props.page.slug, props.activeLocale, props.defaultLocale)
    : LocalizeURL({
        URL: props.href ?? '',
        locale: props.activeLocale,
        defaultLocale: props.defaultLocale,
      });

const handleLanguageChange = (
  language: LangCode,
  activeLocale: Locale,
  localizedLinks: LocalizedLinksType,
) => {
  localStorage.setItem('preferredLang', language);
  const newHref = localizedLinks.find((l) => l.id === activeLocale) ?? {
    id: activeLocale,
    value: activeLocale,
    href: '/',
  };
  // eslint-disable-next-line functional/immutable-data
  window.location.href = newHref.href;
};

const makeFooterProps = (
  {
    legalInfo,
    links_aboutUs,
    links_resources,
    links_followUs,
    defaultLocale,
    companyLink,
    localizedLinks,
    ...rest
  }: StandardFooterData & {
    defaultLocale: Locale;
    localizedLinks: LocalizedLinksType;
  },
  activeLocale: Locale,
): FooterProps => ({
  legalInfo: MarkdownRenderer({
    markdown: legalInfo,
    locale: activeLocale,
    defaultLocale,
    variant: 'caption',
  }),
  preLoginLinks: {
    aboutUs: {
      links: links_aboutUs.links.map(
        ({ href, showOneTrustPreferencies, label, ariaLabel, page }) => ({
          label,
          ...(ariaLabel && { ariaLabel }),
          linkType: isValidExternalLink(
            resolveLink({ page, activeLocale, defaultLocale, href }),
          )
            ? 'external'
            : 'internal',
          ...(showOneTrustPreferencies
            ? {
                onClick: () => window.OneTrust.ToggleInfoDisplay(),
              }
            : {
                href: resolveLink({ page, activeLocale, defaultLocale, href }),
              }),
        }),
      ),
      ...(links_aboutUs.title && { title: links_aboutUs.title }),
    },
    resources: {
      links: links_resources.links.map(
        ({ href, showOneTrustPreferencies, label, ariaLabel, page }) => ({
          label,
          ...(ariaLabel && { ariaLabel }),
          linkType: isValidExternalLink(
            resolveLink({ page, activeLocale, defaultLocale, href }),
          )
            ? 'external'
            : 'internal',
          ...(showOneTrustPreferencies
            ? {
                onClick: () => window.OneTrust.ToggleInfoDisplay(),
              }
            : {
                href: resolveLink({ page, activeLocale, defaultLocale, href }),
              }),
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
          linkType: isValidExternalLink(
            resolveLink({ page, activeLocale, defaultLocale, href }),
          )
            ? 'external'
            : 'internal',
          ...(showOneTrustPreferencies
            ? {
                onClick: () => window.OneTrust.ToggleInfoDisplay(),
              }
            : {
                href: resolveLink({ page, activeLocale, defaultLocale, href }),
              }),
        }),
      ),
      socialLinks: links_followUs.socialLinks.map(
        ({ icon, href, ariaLabel, title }) => ({
          icon,
          href: LocalizeURL({ URL: href, locale: activeLocale, defaultLocale }),
          title,
          ...(ariaLabel && { ariaLabel }),
        }),
      ),
    },
  },
  currentLangCode: activeLocale,
  onLanguageChanged: (language) =>
    handleLanguageChange(language, activeLocale, localizedLinks),
  languages: makeLanguagesProps(localizedLinks),
  loggedUser: false,
  postLoginLinks: [],
  companyLink: {
    ariaLabel: companyLink.ariaLabel,
    href: LocalizeURL({
      URL: companyLink.href,
      locale: activeLocale,
      defaultLocale,
    }),
  },
  ...rest,
});

const makeDesignersItaliaFooterProps = (
  {
    defaultLocale,
    localizedLinks,
    ...props
  }: DesignersItaliaFooterData & {
    defaultLocale: Locale;
    localizedLinks: LocalizedLinksType;
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
            href: resolveLink({ page, activeLocale, defaultLocale, href }),
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
        href: resolveLink({ page, activeLocale, defaultLocale, href }),
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
  localizedLinks: LocalizedLinksType;
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
