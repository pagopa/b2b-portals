/* eslint-disable @typescript-eslint/no-explicit-any,functional/no-expression-statements,functional/immutable-data */

const ASSET_OBJECT_KEY_NAMES = [
  'image',
  'mobileImage',
  'background',
  'icon',
  'logo',
  'metaImage',
  'favicon',
  'appleTouchIcon',
  'thumbnail',
  'resource',
  'video',
];
const ASSET_OBJECT_ARRAY_KEY_NAMES = ['icons'];

const makeURLRelative = (URL: string): string => {
  if (URL.startsWith('http')) {
    // Assuming an URL formed like the following: https://example.com/asset.jpg
    // Remove https://example.com, aka everything up to the 3rd forward slash
    return '/assets/' + URL.split('/').slice(3).join('/');
  } else {
    return URL;
  }
};

const makeAssetObjectURLsRelative = (
  asset: Record<string, any> | null,
): Record<string, any> | null => {
  if (asset === null || !asset['url']) {
    return asset;
  }

  return {
    ...asset,
    url: makeURLRelative(asset['url']),
    ...(asset['formats'] !== null && {
      formats: {
        ...(asset['formats']['small'] && {
          small: {
            url: makeURLRelative(asset['formats']['small']['url']),
          },
        }),
        ...(asset['formats']['medium'] && {
          medium: {
            url: makeURLRelative(asset['formats']['medium']['url']),
          },
        }),
        ...(asset['formats']['large'] && {
          large: {
            url: makeURLRelative(asset['formats']['large']['url']),
          },
        }),
      },
    }),
  };
};

export const makeAllAssetURLsRelative = (result: any): any => {
  if (result === null) {
    return result;
  }

  if (Array.isArray(result)) {
    // Recursively process each item in the array
    return result.map((item) => makeAllAssetURLsRelative(item));
  }

  if (typeof result === 'object') {
    const updatedResult = { ...result };

    // eslint-disable-next-line functional/no-loop-statements
    for (const key in updatedResult) {
      if (ASSET_OBJECT_KEY_NAMES.includes(key)) {
        updatedResult[key] = makeAssetObjectURLsRelative(updatedResult[key]);
        continue;
      }

      if (ASSET_OBJECT_ARRAY_KEY_NAMES.includes(key)) {
        updatedResult[key] = updatedResult[key].map((item: any) =>
          makeAssetObjectURLsRelative(item),
        );
        continue;
      }

      updatedResult[key] = makeAllAssetURLsRelative(updatedResult[key]);
    }

    return updatedResult;
  }

  return result;
};
