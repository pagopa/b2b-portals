import { PressReleases } from './fetch/pressRelease';
import { PreviewPageData, PreviewPressReleaseData } from './fetch/preview';
import { PageData } from './navigation';

export const pressReleaseToPageDataArray = (
  pressRelease: PressReleases,
  pressReleasesParentSlug = 'press-releases',
): ReadonlyArray<PageData> =>
  pressRelease.data.map((item) => ({
    slug: [pressReleasesParentSlug, item.slug],
    seo: item.seo,
    sections: [
      {
        __component: 'sections.press-release',
        ...item.pressRelease,
      },
    ],
  }));

export const previewPressReleaseToPreviewPageData = (
  pressRelease: PreviewPressReleaseData,
): PreviewPageData => ({
  data: {
    locale: pressRelease.data.locale,
    sections: [
      {
        __component: 'sections.press-release',
        ...pressRelease.data.pressRelease,
      },
    ],
  },
});
