'use client';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LastUpdatedSection } from '@/lib/fetch/types/PageSection';
import { LastUpdatedProps } from '@react-components/types/LastUpdated/LastUpdated.types';
import { LastUpdated as LastUpdatedRC } from '@react-components/components';
import { PagePublishDates } from '@/lib/fetch/navigation';

const lastUpdatedLabels = {
  it: 'Ultimo aggiornamento',
  en: 'Last updated',
  de: 'Letzte Aktualisierung',
  fr: 'Dernière mise à jour',
  sl: 'Zadnja posodobitev',
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

const makeLastUpdatedProps = ({
  locale,
  lastUpdated,
  publishedAt,
  updatedAt,
  link,
  ...rest
}: LastUpdatedSection &
  SiteWidePageData &
  PagePublishDates): LastUpdatedProps => {
  const effectiveDate = lastUpdated ?? publishedAt ?? updatedAt;
  return {
    label: lastUpdatedLabels[locale],
    lastUpdated: formatDateToLocale(effectiveDate, locale),
    link: {
      href: link.href,
      label: link.label,
      ...(link.ariaLabel && { ariaLabel: link.ariaLabel }),
    },
    ...rest,
  };
};

const LastUpdated = (
  props: LastUpdatedSection & SiteWidePageData & PagePublishDates,
) => {
  return <LastUpdatedRC {...makeLastUpdatedProps(props)} />;
};
export default LastUpdated;
