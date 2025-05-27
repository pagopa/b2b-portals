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
};

const expectedOutput = {
  allAssets: {
    data: {
      image: {
        url: '/asset.jpg',
        formats: {
          small: {
            url: '/small/asset.jpg',
          },
          medium: {
            url: '/medium/asset.jpg',
          },
          large: {
            url: '/large/asset.jpg',
          },
        },
      },
      mobileImage: {
        url: '/asset.jpg',
        formats: {
          small: {
            url: '/small/asset.jpg',
          },
        },
      },
      background: {
        url: '/asset.jpg',
        formats: null,
      },
      icon: {
        url: '/asset.jpg',
        formats: null,
      },
      logo: {
        url: '/asset.jpg',
        formats: null,
      },
      metaImage: {
        url: '/asset.jpg',
        formats: null,
      },
      favicon: {
        url: '/asset.jpg',
        formats: null,
      },
      appleTouchIcon: {
        url: '/asset.jpg',
        formats: null,
      },
      thumbnail: {
        url: '/asset.jpg',
        formats: null,
      },
      resource: {
        url: '/asset.pdf',
        formats: null,
      },
      video: {
        url: '/asset.mp4',
        formats: null,
      },
    },
  },
  deeplyNested: {
    data: {
      firstLevel: {
        secondLevel: {
          thirdLevel: {
            image: {
              url: '/asset.jpg',
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
          url: '/asset.jpg',
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
        url: '/asset.jpg',
        formats: null,
      },
    },
  },
  sameNameNonAssets: {
    data: {
      asset: {
        image: {
          url: '/asset.jpg',
          formats: null,
        },
      },
      nonAsset: {
        image: 'https://example.com/external-image-endpoint',
      },
    },
  },
};

describe('makeAllAssetURLsRelative', () => {
  it('should make all asset URLs relative', () => {
    const actual = makeAllAssetURLsRelative(fetchResults.allAssets);
    expect(actual).toStrictEqual(expectedOutput.allAssets);
  });
  it('should convert indefinitely nested fields', () => {
    const actual = makeAllAssetURLsRelative(fetchResults.deeplyNested);
    expect(actual).toStrictEqual(expectedOutput.deeplyNested);
  });
  it('should not convert already relative asset urls', () => {
    const actual = makeAllAssetURLsRelative(fetchResults.alreadyRelative);
    expect(actual).toStrictEqual(expectedOutput.alreadyRelative);
  });
  it('should not convert any non-asset url', () => {
    const actual = makeAllAssetURLsRelative(fetchResults.nonAssets);
    expect(actual).toStrictEqual(expectedOutput.nonAssets);
  });
  it('should not convert non-asset fields with the same name as asset fields', () => {
    const actual = makeAllAssetURLsRelative(fetchResults.sameNameNonAssets);
    expect(actual).toStrictEqual(expectedOutput.sameNameNonAssets);
  });
});
