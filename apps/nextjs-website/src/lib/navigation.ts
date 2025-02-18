import { PageSEO } from './fetch/types/SEO';
import { PageSection } from './fetch/types/PageSection';
import { Navigation } from './fetch/navigation';

export interface PageData {
  readonly slug: ReadonlyArray<string>;
  readonly seo: PageSEO;
  readonly sections: ReadonlyArray<PageSection>;
}

export const navigationToPageDataArray = (
  navigation: Navigation,
): ReadonlyArray<PageData> =>
  navigation.data.map((item) => ({
    slug: item.slug === 'homepage' ? [''] : [item.slug],
    seo: item.seo,
    sections: item.sections,
  }));
