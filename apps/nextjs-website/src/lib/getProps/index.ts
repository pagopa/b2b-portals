import { getFooterProps } from './footer';
import { getHeaderProps } from './header';
import { getAllPages, getPageProps } from './navigation';
import { getPreFooterProps } from './preFooter';
import { getPreHeaderProps } from './preHeader';
import { getPressReleasePages } from './pressRelease';
import {
  getAllPageIDs,
  getAllPageSwitchPageIDs,
  getAllPressReleaseIDs,
  getPageDataFromID,
  getPageSwitchPageDataFromID,
  getPressReleaseDataFromID,
} from './preview';
import { getSiteWideSEO } from './siteWideSEO';
import { Getters } from './types';

const getters: Getters = {
  getFooterProps,
  getHeaderProps,
  getAllPages,
  getPageProps,
  getPreFooterProps,
  getPreHeaderProps,
  getPressReleasePages,
  getAllPageIDs,
  getAllPageSwitchPageIDs,
  getAllPressReleaseIDs,
  getPageDataFromID,
  getPageSwitchPageDataFromID,
  getPressReleaseDataFromID,
  getSiteWideSEO,
};

export default getters;
