import { Getters } from '../types';
import { mockImageData, mockPageSEOData } from './commons';

export const mockPressReleasePages: Getters['getPressReleasePages'] =
  async () => [
    {
      slug: 'mock',
      seo: mockPageSEOData,
      pressRelease: {
        backlink: {
          href: 'mock',
          label: 'mock',
        },
        body: 'mock',
        date: 'mock',
        sectionID: 'mock',
        subtitle: 'mock',
        title: 'mock',
      },
      credits: {
        body: 'mock',
        image: mockImageData,
        imageLinkTitle: 'mock',
        imageLinkUrl: 'mock',
        sectionID: 'mock',
      },
    },
  ];
