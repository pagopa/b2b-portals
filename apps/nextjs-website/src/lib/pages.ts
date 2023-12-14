import { pipe } from 'fp-ts/lib/function';
import * as RA from 'fp-ts/lib/ReadonlyArray';
import { Navigation } from './fetch/navigation';
import { PageSection } from './fetch/types/page';

export type Page = {
  readonly slug: ReadonlyArray<string>;
  readonly sections: ReadonlyArray<PageSection>;
};

const makeSlugList = (
  item: Navigation[0],
  navigation: Navigation
): ReadonlyArray<string> => {
  const { path, parent } = item;
  if (parent) {
    const parentNav = navigation.find(({ id }) => id === parent.id);
    const parentSlug = parentNav ? makeSlugList(parentNav, navigation) : [];
    return path !== '/' ? [...parentSlug, path] : [];
  } else {
    return path !== '/' ? [path] : [];
  }
};

export const makePageListFromNavigation = (
  navigation: Navigation
): ReadonlyArray<Page> =>
  pipe(
    navigation,
    RA.map((item) => ({
      slug: makeSlugList(item, navigation),
      sections: item.related.sections,
    }))
  );
