import { Getters } from '../types';
import { mockFooterProps } from './footer';

const mockers: Getters = {
  getFooterProps: mockFooterProps,
  getHeaderProps: mockHeaderProps,
  getAllPages: mockAllPages,
  getPageProps: mockPageProps,
  getPreFooterProps: mockPreFooterProps,
  getPreHeaderProps: mockPreHeaderProps,
  getPressReleasePages: mockPressReleasePages,
  getAllPageIDs: mockAllPageIDs,
  getAllPageSwitchPageIDs: mockAllPageSwitchPageIDs,
  getAllPressReleaseIDs: mockAllPressReleaseIDs,
  getPageDataFromID: mockPageDataFromID,
  getPageSwitchPageDataFromID: mockPageSwitchPageDataFromID,
  getPressReleaseDataFromID: mockPressReleaseDataFromID,
  getSiteWideSEO: mockSiteWideSEO,
};

export default mockers;
