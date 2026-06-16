'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Locale, SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { PressReleaseSection } from '@/lib/fetch/types/PageSection';
import { PressRelease as PressReleaseRC } from '@react-components/components';
import { PressReleaseProps } from '@react-components/types';
import { LocalizeURL } from '@/lib/linkLocalization';
import { IMAGE_SIZES, makeSrcSetFromStrapiImageData } from '@/lib/image';
import { makeCardsItemProps } from './Cards';

const readingTimeLabels: Record<Locale, string> = {
  it: 'Tempo di lettura: ',
  en: 'Reading time: ',
  fr: 'Temps de lecture: ',
  de: 'Lesezeit: ',
  sl: 'Čas branja: ',
};

const shareLinkLabels: Record<Locale, string> = {
  it: 'Condividi',
  en: 'Share',
  fr: 'Partager',
  de: 'Teilen',
  sl: 'Deli',
};

const copyLinkLabels: Record<Locale, string> = {
  it: 'Copia link',
  en: 'Copy link',
  fr: 'Copier le lien',
  de: 'Link kopieren',
  sl: 'Kopiraj povezavo',
};

const linkCopiedLabels: Record<Locale, string> = {
  it: 'Link copiato negli appunti',
  en: 'Link copied to clipboard',
  fr: 'Lien copié dans le presse-papiers',
  de: 'Link in die Zwischenablage kopiert',
  sl: 'Povezavo kopirano v odložišče',
};

const formatDateToLocale = (dateString: string, locale: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const makeTextSectionProps = ({
  locale,
  defaultLocale,
  subtitle,
  body,
  date,
  backlink,
  image,
  metadata,
  paragraphs,
  ...rest
}: PressReleaseSection & SiteWidePageData): PressReleaseProps => ({
  ...(subtitle && { subtitle }),
  body: MarkdownRenderer({ markdown: body, locale, defaultLocale }),
  date: formatDateToLocale(date, locale),
  ...(backlink && {
    backlink: {
      label: backlink.label,
      href: LocalizeURL({
        URL: backlink.href,
        locale,
        defaultLocale,
      }),
      ...(backlink.ariaLabel && { ariaLabel: backlink.ariaLabel }),
    },
  }),
  ...(image && {
    image: {
      src: image.url,
      srcSet: makeSrcSetFromStrapiImageData(image),
      ...(image.alternativeText && {
        alt: image.alternativeText,
      }),
      sizes: IMAGE_SIZES.background,
    },
  }),
  ...(metadata && {
    metadata: {
      labels: {
        readingTime: readingTimeLabels[locale],
        shareLink: shareLinkLabels[locale],
        copyLink: copyLinkLabels[locale],
        linkCopied: linkCopiedLabels[locale],
      },
      ...(metadata.readingTime && { readingTime: metadata.readingTime }),
    },
  }),
  ...(paragraphs.length > 0 && {
    paragraphs: paragraphs.map((paragraph) => ({
      title: paragraph.title,
      ...(paragraph.body && {
        body: MarkdownRenderer({
          markdown: paragraph.body,
          locale,
          defaultLocale,
        }),
      }),
      ...(paragraph.cards.length > 0 && {
        cards: paragraph.cards.map((card) =>
          makeCardsItemProps({
            ...card,
            themeVariant: rest.themeVariant,
            locale,
            defaultLocale,
          }),
        ),
      }),
    })),
  }),
  ...rest,
});

const PressRelease = (props: PressReleaseSection & SiteWidePageData) => (
  <PressReleaseRC {...makeTextSectionProps(props)} />
);

export default PressRelease;
