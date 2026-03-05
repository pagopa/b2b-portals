import { getPreHeader } from '../fetch/preHeader';
import { makeAllAssetURLsRelative } from '../fetch/parseAssetUrls';
import { appEnv } from '../api';
import { Getters } from './types';

export const getPreHeaderProps: Getters['getPreHeaderProps'] = async (
  locale,
) => {
  const { data } = makeAllAssetURLsRelative(
    await getPreHeader({ ...appEnv, locale }),
    appEnv.config.PREVIEW_MODE === 'true',
  );
  return data;
};
