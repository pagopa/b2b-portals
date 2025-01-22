'use client';
import { PressReleasePage } from '@/lib/fetch/pressRelease';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { PressReleaseListSection } from '@/lib/fetch/types/PageSection';
import { LocalizeURL } from '@/lib/linkLocalization';
import { PressReleaseList as PressReleaseListRC } from '@react-components/components';
import { PressReleaseListProps } from '@react-components/types';

const formatDateToLocale = (
  dateString: string,
  locale: string = 'en-GB'
): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  const day = date.toLocaleString(locale, { day: '2-digit' });
  const month = date.toLocaleString(locale, { month: 'long' });
  const year = date.toLocaleString(locale, { year: 'numeric' });

  return `${day} ${month} ${year}`;
};

const makePressReleaseListProps = ({
  locale,
  defaultLocale,
  pressReleasePages,
  ...rest
}: PressReleaseListSection &
  SiteWidePageData & {
    pressReleasePages: ReadonlyArray<PressReleasePage>;
  }): PressReleaseListProps => {
  const resolvedLocale = locale || defaultLocale || 'en-GB';

  return {
    ...rest,
    locale: resolvedLocale,
    pressReleases: pressReleasePages.map((PRPage) => ({
      date: formatDateToLocale(PRPage.pressRelease.date, resolvedLocale),
      title: PRPage.pressRelease.title,
      link: {
        label: resolvedLocale.startsWith('it') ? 'Leggi' : 'Read',
        href: LocalizeURL({
          URL: '/press-releases/' + PRPage.slug,
          locale: resolvedLocale,
          defaultLocale,
        }),
      },
      themeVariant: rest.themeVariant,
      locale: resolvedLocale,
    })),
  };
};

const PressReleaseList = (
  props: PressReleaseListSection &
    SiteWidePageData & {
      pressReleasePages: ReadonlyArray<PressReleasePage>;
      locale: string;
    }
) => {
  const { locale, defaultLocale } = props;
  const resolvedLocale = locale || defaultLocale || 'en-GB';

  return (
    <PressReleaseListRC
      {...makePressReleaseListProps({ ...props, locale: resolvedLocale })}
    />
  );
};

export default PressReleaseList;
