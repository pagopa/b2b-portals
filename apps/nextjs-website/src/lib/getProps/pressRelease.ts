import { getPressReleases } from '../fetch/pressRelease';
import { makeAllAssetURLsRelative } from '../fetch/parseAssetUrls';
import { appEnv } from '../api';
import { Getters } from './types';

export const getPressReleasePages: Getters['getPressReleasePages'] = async (
  locale,
) => {
  const { data } = makeAllAssetURLsRelative(
    await getPressReleases({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  return data;
};
