import { PageSEO } from './fetch/types/SEO';
import { PageSection } from './fetch/types/PageSection';
import { Navigation } from './fetch/navigation';

export interface PageData {
  readonly slug: ReadonlyArray<string>;
  readonly seo: PageSEO;
  readonly sections: ReadonlyArray<PageSection>;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly publishedAt?: string;
}

export const navigationToPageDataArray = (
  navigation: Navigation,
): ReadonlyArray<PageData> =>
  navigation.data.map((item) => ({
    slug: item.slug === 'homepage' ? [''] : [item.slug],
    seo: item.seo,
    sections: item.sections,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    ...(item.publishedAt && { publishedAt: item.publishedAt }),
  }));
