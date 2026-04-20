'use client';
import { PagePublishDates, SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LastUpdatedSection } from '@/lib/fetch/types/PageSection';
import { LastUpdatedProps } from '@react-components/types/LastUpdated/LastUpdated.types';
import { LastUpdated as LastUpdatedRC } from '@react-components/components';

const lastUpdatedLabels = {
  it: 'Data ultimo aggiornamento',
  en: 'Last updated date',
  de: 'Datum der letzten Aktualisierung',
  fr: 'Dernière mise à jour',
  sl: 'Datum zadnje posodobitve',
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
    hour: '2-digit',
    minute: '2-digit',
  });
};

const makeLastUpdatedProps = ({
  locale,
  lastUpdated,
  publishedAt,
  updatedAt,
  ...rest
}: LastUpdatedSection &
  SiteWidePageData &
  PagePublishDates): LastUpdatedProps => {
  const effectiveDate = lastUpdated ?? publishedAt ?? updatedAt;
  return {
    label: lastUpdatedLabels[locale],
    ...(effectiveDate && {
      lastUpdated: formatDateToLocale(effectiveDate, locale),
    }),
    ...rest,
  };
};

const LastUpdated = (
  props: LastUpdatedSection & SiteWidePageData & PagePublishDates,
) => {
  return <LastUpdatedRC {...makeLastUpdatedProps(props)} />;
};
export default LastUpdated;
