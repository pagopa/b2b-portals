import { PressReleases } from './fetch/pressRelease';
import { PreviewPageData, PreviewPressReleaseData } from './fetch/preview';
import { PageData } from './navigation';

export const pressReleaseToPageDataArray = (
  pressRelease: PressReleases,
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

export const previewPressReleaseToPreviewPageData = (
  pressRelease: PreviewPressReleaseData,
): PreviewPageData => ({
  data: {
    attributes: {
      locale: pressRelease.data.attributes.locale,
      sections: [
        {
          __component: 'sections.press-release',
          ...pressRelease.data.attributes.pressRelease,
        },
      ],
    },
  },
});
