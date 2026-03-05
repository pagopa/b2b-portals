import { Getters } from '../types';
import { mockFooterProps } from './footer';
import { mockHeaderProps } from './header';
import { mockAllPages, mockPageProps } from './navigation';
import { mockPreFooterProps } from './preFooter';
import { mockPreHeaderProps } from './preHeader';
import { mockPressReleasePages } from './pressRelease';
import { mockAllPageIDs, mockAllPageSwitchPageIDs, mockAllPressReleaseIDs, mockPageDataFromID, mockPageSwitchPageDataFromID, mockPressReleaseDataFromID } from './preview';
import { mockSiteWideSEO } from './siteWideSEO';

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
