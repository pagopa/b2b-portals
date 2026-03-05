import { getFooter } from '../fetch/footer';
import { makeAllAssetURLsRelative } from '../fetch/parseAssetUrls';
import { appEnv } from '../api';
import { Getters } from './types';

export const getFooterProps: Getters['getFooterProps'] = async (locale) => {
  const { data } = makeAllAssetURLsRelative(
    await getFooter({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  return data;
};
