'use client';
import { Locale, SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { MediaResourcesSection } from '@/lib/fetch/types/PageSection';
import { MediaResources as MediaResourcesRC } from '@react-components/components';
import { MediaResourcesProps } from '@react-components/types';

const mediaResourcesLabels: Record<Locale, MediaResourcesProps['labels']> = {
  it: {
    ariaLabelDownload: (file: string, title: string) =>
      `${title}: Scarica ${file}`,
  },
  en: {
    ariaLabelDownload: (file: string, title: string) =>
      `${title}: Download ${file}`,
  },
  fr: {
    ariaLabelDownload: (file: string, title: string) =>
      `${title}: Télécharger ${file}`,
  },
  de: {
    ariaLabelDownload: (file: string, title: string) =>
      `${title}: Herunterladen ${file}`,
  },
  sl: {
    ariaLabelDownload: (file: string, title: string) =>
      `${title}: Prenes ${file}`,
  },
};
const makeMediaResourcesProps = ({
  locale,
  title,
  items,
  ...rest
}: MediaResourcesSection & SiteWidePageData): MediaResourcesProps => ({
  ...(title && { title }),
  items: items.map(({ resource, thumbnail, ...item }) => ({
    resourceURL: resource.url,
    thumbnailURL: thumbnail.url,
    ...item,
  })),
  labels: mediaResourcesLabels[locale],
  ...rest,
});

const MediaResources = (props: MediaResourcesSection & SiteWidePageData) => (
  <MediaResourcesRC {...makeMediaResourcesProps(props)} />
);

export default MediaResources;
