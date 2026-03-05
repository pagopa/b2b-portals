import { Getters } from '../types';

export const mockAllPageIDs: Getters['getAllPageIDs'] = async () => [
  {
    documentId: 'mock1',
  },
  {
    documentId: 'mock2',
  },
];

export const mockAllPressReleaseIDs: Getters['getAllPressReleaseIDs'] =
  async () => [
    {
      documentId: 'mock1',
    },
    {
      documentId: 'mock2',
    },
  ];

export const mockAllPageSwitchPageIDs: Getters['getAllPageSwitchPageIDs'] =
  async () => [
    {
      documentId: 'mock1',
    },
    {
      documentId: 'mock2',
    },
  ];

export const mockPageDataFromID: Getters['getPageDataFromID'] = async () => ({
  locale: 'it',
  sections: [],
});

export const mockPressReleaseDataFromID: Getters['getPressReleaseDataFromID'] =
  async () => ({
    locale: 'it',
    sections: [],
  });

export const mockPageSwitchPageDataFromID: Getters['getPageSwitchPageDataFromID'] =
  async () => ({
    locale: 'it',
    sections: [],
  });
