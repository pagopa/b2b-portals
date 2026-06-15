'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { PressReleaseSection } from '@/lib/fetch/types/PageSection';
import { PressRelease as PressReleaseRC } from '@react-components/components';
import { PressReleaseProps } from '@react-components/types';
import { LocalizeURL } from '@/lib/linkLocalization';
import { IMAGE_SIZES, makeSrcSetFromStrapiImageData } from '@/lib/image';
import { makeCardsItemProps } from './Cards';

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
      ...(metadata.readingTime && { readingTime: metadata.readingTime }),
    },
  }),
  ...(paragraphs.length > 0 && {
    paragraphs: paragraphs.map((paragraph) => ({
      title: paragraph.title,
      ...(paragraph.body && { body: paragraph.body }),
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
