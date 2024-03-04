import { pipe } from 'fp-ts/lib/function';
import * as RA from 'fp-ts/lib/ReadonlyArray';
import { Navigation } from './fetch/navigation';
import { PageSection } from './fetch/types/PageSection';
import { PageSEO } from './fetch/types/SEO';

export type Page = {
  readonly slug: ReadonlyArray<string>;
  readonly sections: ReadonlyArray<PageSection>;
  readonly seo: PageSEO;
};

const makeSlugList = (
  item: Navigation[0],
  navigation: Navigation
): ReadonlyArray<string> => {
  const { related, parent } = item;
  if (parent) {
    const parentNav = navigation.find(({ id }) => id === parent.id);
    const parentSlug = parentNav ? makeSlugList(parentNav, navigation) : [];
    return related.slug !== 'homepage' ? [...parentSlug, related.slug] : [];
  } else {
    return related.slug !== 'homepage' ? [related.slug] : [];
  }
};

export const makePageListFromNavigation = (
  navigation: Navigation
): ReadonlyArray<Page> =>
  pipe(
    navigation,
    RA.map((item) => ({
      slug: makeSlugList(item, navigation),
      seo: item.related.seo,
      sections: item.related.sections,
    }))
  );
