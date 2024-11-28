import { PressReleases } from './fetch/pressRelease';
import { PageData } from './navigation';

export const pressReleaseToPageDataArray = (
  pressRelease: PressReleases
): ReadonlyArray<PageData> =>
  pressRelease.data.map((item) => ({
    slug: ['press-releases', item.attributes.slug],
    seo: item.attributes.seo,
    sections: [
      {
        __component: 'sections.press-release',
        ...item.attributes.pressRelease,
      },
    ],
  }));
