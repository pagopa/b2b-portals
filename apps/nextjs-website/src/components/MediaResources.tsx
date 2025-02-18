'use client';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { MediaResourcesSection } from '@/lib/fetch/types/PageSection';
import { MediaResources as MediaResourcesRC } from '@react-components/components';
import { MediaResourcesProps } from '@react-components/types';

const makeMediaResourcesProps = ({
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
  ...rest,
});

const MediaResources = (props: MediaResourcesSection & SiteWidePageData) => (
  <MediaResourcesRC {...makeMediaResourcesProps(props)} />
);

export default MediaResources;
