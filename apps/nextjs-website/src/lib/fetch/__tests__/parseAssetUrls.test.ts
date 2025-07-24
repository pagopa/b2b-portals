import { describe, it, expect } from 'vitest';
import { makeAllAssetURLsRelative } from '../parseAssetUrls';

const fetchResults = {
  allAssets: {
    data: {
      image: {
        url: 'https://example.com/asset.jpg',
        formats: {
          small: {
            url: 'https://example.com/small/asset.jpg',
          },
          medium: {
            url: 'https://example.com/medium/asset.jpg',
          },
          large: {
            url: 'https://example.com/large/asset.jpg',
          },
        },
      },
      mobileImage: {
        url: 'https://example.com/asset.jpg',
        formats: {
          small: {
            url: 'https://example.com/small/asset.jpg',
          },
        },
      },
      background: {
        url: 'https://example.com/asset.jpg',
        formats: null,
      },
      icon: {
        url: 'https://example.com/asset.jpg',
        formats: null,
      },
      logo: {
        url: 'https://example.com/asset.jpg',
        formats: null,
      },
      metaImage: {
        url: 'https://example.com/asset.jpg',
        formats: null,
      },
      favicon: {
        url: 'https://example.com/asset.jpg',
        formats: null,
      },
      appleTouchIcon: {
        url: 'https://example.com/asset.jpg',
        formats: null,
      },
      thumbnail: {
        url: 'https://example.com/asset.jpg',
        formats: null,
      },
      resource: {
        url: 'https://example.com/asset.pdf',
        formats: null,
      },
      video: {
        url: 'https://example.com/asset.mp4',
        formats: null,
      },
      icons: [
        {
          url: 'https://example.com/asset.jpg',
          formats: null,
        },
        {
          url: 'https://example.com/asset.jpg',
          formats: null,
        },
        {
          url: 'https://example.com/asset.jpg',
          formats: null,
        },
      ],
    },
  },
  deeplyNested: {
    data: {
      firstLevel: {
        secondLevel: {
          thirdLevel: {
            image: {
              url: 'https://example.com/asset.jpg',
              formats: null,
            },
          },
        },
      },
    },
  },
  alreadyRelative: {
    data: {
      full: {
        image: {
          url: 'https://example.com/asset.jpg',
          formats: null,
        },
      },
      relative: {
        image: {
          url: '/asset.jpg',
          formats: null,
        },
      },
    },
  },
  nonAssets: {
    data: {
      formURL: 'https://example.com/endpoint',
      image: {
        url: 'https://example.com/asset.jpg',
        formats: null,
      },
    },
  },
  sameNameNonAssets: {
    data: {
      asset: {
        image: {
          url: 'https://example.com/asset.jpg',
          formats: null,
        },
      },
      nonAsset: {
        image: 'https://example.com/external-image-endpoint',
      },
    },
  },
  array: [
    {
      data: {
        image: {
          url: 'https://example.com/asset.jpg',
          formats: null,
        },
      },
    },
    {
      data: {
        image: {
          url: 'https://example.com/asset.jpg',
          formats: null,
        },
      },
    },
  ],
};

const expectedOutput = {
  allAssets: {
    data: {
      image: {
        url: '/assets/asset.jpg',
        formats: {
          small: {
            url: '/assets/small/asset.jpg',
          },
          medium: {
            url: '/assets/medium/asset.jpg',
          },
          large: {
            url: '/assets/large/asset.jpg',
          },
        },
      },
      mobileImage: {
        url: '/assets/asset.jpg',
        formats: {
          small: {
            url: '/assets/small/asset.jpg',
          },
        },
      },
      background: {
        url: '/assets/asset.jpg',
        formats: null,
      },
      icon: {
        url: '/assets/asset.jpg',
        formats: null,
      },
      logo: {
        url: '/assets/asset.jpg',
        formats: null,
      },
      metaImage: {
        url: '/assets/asset.jpg',
        formats: null,
      },
      favicon: {
        url: '/assets/asset.jpg',
        formats: null,
      },
      appleTouchIcon: {
        url: '/assets/asset.jpg',
        formats: null,
      },
      thumbnail: {
        url: '/assets/asset.jpg',
        formats: null,
      },
      resource: {
        url: '/assets/asset.pdf',
        formats: null,
      },
      video: {
        url: '/assets/asset.mp4',
        formats: null,
      },
      icons: [
        {
          url: '/assets/asset.jpg',
          formats: null,
        },
        {
          url: '/assets/asset.jpg',
          formats: null,
        },
        {
          url: '/assets/asset.jpg',
          formats: null,
        },
      ],
    },
  },
  deeplyNested: {
    data: {
      firstLevel: {
        secondLevel: {
          thirdLevel: {
            image: {
              url: '/assets/asset.jpg',
              formats: null,
            },
          },
        },
      },
    },
  },
  alreadyRelative: {
    data: {
      full: {
        image: {
          url: '/assets/asset.jpg',
          formats: null,
        },
      },
      relative: {
        image: {
          url: '/asset.jpg',
          formats: null,
        },
      },
    },
  },
  nonAssets: {
    data: {
      formURL: 'https://example.com/endpoint',
      image: {
        url: '/assets/asset.jpg',
        formats: null,
      },
    },
  },
  sameNameNonAssets: {
    data: {
      asset: {
        image: {
          url: '/assets/asset.jpg',
          formats: null,
        },
      },
      nonAsset: {
        image: 'https://example.com/external-image-endpoint',
      },
    },
  },
  array: [
    {
      data: {
        image: {
          url: '/assets/asset.jpg',
          formats: null,
        },
      },
    },
    {
      data: {
        image: {
          url: '/assets/asset.jpg',
          formats: null,
        },
      },
    },
  ],
};

describe('makeAllAssetURLsRelative', () => {
  it('should make all asset URLs relative', () => {
    const actual = makeAllAssetURLsRelative(fetchResults.allAssets, false);
    expect(actual).toStrictEqual(expectedOutput.allAssets);
  });
  it('should convert indefinitely nested fields', () => {
    const actual = makeAllAssetURLsRelative(fetchResults.deeplyNested, false);
    expect(actual).toStrictEqual(expectedOutput.deeplyNested);
  });
  it('should convert all asset urls in a results array', () => {
    const actual = makeAllAssetURLsRelative(fetchResults.array, false);
    expect(actual).toStrictEqual(expectedOutput.array);
  });
  it('should not convert already relative asset urls', () => {
    const actual = makeAllAssetURLsRelative(
      fetchResults.alreadyRelative,
      false,
    );
    expect(actual).toStrictEqual(expectedOutput.alreadyRelative);
  });
  it('should not convert any non-asset url', () => {
    const actual = makeAllAssetURLsRelative(fetchResults.nonAssets, false);
    expect(actual).toStrictEqual(expectedOutput.nonAssets);
  });
  it('should not convert non-asset fields with the same name as asset fields', () => {
    const actual = makeAllAssetURLsRelative(
      fetchResults.sameNameNonAssets,
      false,
    );
    expect(actual).toStrictEqual(expectedOutput.sameNameNonAssets);
  });
  it('should not convert any assets url in preview mode', () => {
    const actual = makeAllAssetURLsRelative(fetchResults.allAssets, true);
    expect(actual).toStrictEqual(fetchResults.allAssets);
  });
});
