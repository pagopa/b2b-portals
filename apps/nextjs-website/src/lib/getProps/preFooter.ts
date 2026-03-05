import { getPreFooter } from '../fetch/preFooter';
import { makeAllAssetURLsRelative } from '../fetch/parseAssetUrls';
import { appEnv } from '../api';
import { Getters } from './types';

export const getPreFooterProps: Getters['getPreFooterProps'] = async (
  locale,
) => {
  const { data } = makeAllAssetURLsRelative(
    await getPreFooter({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  return data;
};
