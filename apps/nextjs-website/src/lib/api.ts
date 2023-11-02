interface NavigationItem {
  readonly order: number;
  readonly id: number;
  readonly title: string;
  readonly type: string;
  readonly path: string;
  readonly externalPath: string | null;
  readonly uiRouterKey: string;
  readonly menuAttached: boolean;
  readonly collapsed: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly parent: NavigationItem | null;
  readonly related: {
    readonly id: number;
    readonly Nome: string;
    readonly slug: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly publishedAt: string;
    readonly __contentType: string;
    readonly navigationItemId: number;
    readonly createdBy: string;
    readonly updatedBy: string;
  };
}

export interface Page {
  readonly id: number;
  readonly title: string;
  readonly slug: ReadonlyArray<string>;
  readonly visible: boolean;
}

const GeneratePagesFromNavItems = (
  navItems: ReadonlyArray<NavigationItem>
): ReadonlyArray<Page> => {
  const isEmptyOrHomePage = (navItem: NavigationItem) =>
    navItem.related.slug == null ||
    navItem.related.slug.toLowerCase().trim() === 'home';

  const getParentSlugsChain = (
    navItem: NavigationItem,
    chain: ReadonlyArray<string> = []
  ): ReadonlyArray<string> => {
    if (!navItem.parent) {
      return chain;
    } else {
      const parent = navItems.find((p) => p.id === navItem.parent?.id);
      if (!parent) {
        return chain;
      }
      return getParentSlugsChain(parent, [parent.related.slug, ...chain]);
    }
  };

  const pages: ReadonlyArray<Page> = navItems
    .filter((navItem) => !isEmptyOrHomePage(navItem))
    .map((navItem) => {
      const pageSlug = [navItem.related.slug, ...getParentSlugsChain(navItem)];

      return {
        id: navItem.id,
        title: navItem.title,
        slug: pageSlug,
        visible: navItem.menuAttached ?? false,
      };
    });

  return pages.filter((p) => p.slug.join('') !== '');
};

export const getAllPages = async () => {
  // Step 1: Fetch the navigation ID
  const token = process.env['NEXT_STRAPI_API_TOKEN'];
  const apiBaseUrl = process.env['NEXT_PUBLIC_API_BASE_URL'];
  const navigationApiPath = '/api/navigation';
  const navigationApiUrl = `${apiBaseUrl}${navigationApiPath}`;

  const navigationResponse = await fetch(navigationApiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!navigationResponse.ok) {
    return {
      error: 'Failed to fetch navigation data from the API',
    };
  }

  const navigationData = await navigationResponse.json();

  if (navigationData.length === 0) {
    return {
      error: 'No navigation data found',
    };
  }

  const navigationId = navigationData[0].id;

  // Step 2: Fetch the page data using the navigation ID
  const navigationRenderApiUrl: string = `${apiBaseUrl}${navigationApiPath}/render/${navigationId}`;

  const response = await fetch(navigationRenderApiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return {
      error: 'Failed to fetch data from the API',
    };
  }

  const navItems: ReadonlyArray<NavigationItem> = await response.json();

  const pages: ReadonlyArray<Page> = GeneratePagesFromNavItems(navItems);

  return { pages };
};

export interface PreHeaderData {
  readonly leftCtas: {
    readonly ctaButtons: {
      readonly color: string;
      readonly href: string;
      readonly text: string;
      readonly variant: string;
    }[];
    readonly theme: string;
  };
  readonly rightCtas: {
    readonly ctaButtons: {
      readonly color: string;
      readonly href: string;
      readonly text: string;
      readonly variant: string;
    }[];
    readonly theme: string;
  };
}

export const getPreHeaderData = async () => {
  const token = process.env['NEXT_STRAPI_API_TOKEN'];
  const apiBaseUrl = process.env['NEXT_PUBLIC_API_BASE_URL'];
  const preHeaderApiUrl: string = `${apiBaseUrl}/api/pre-header/?populate=*`;

  const preHeaderResponse = await fetch(preHeaderApiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!preHeaderResponse.ok) {
    return {
      error: 'Failed to fetch pre-header data',
      preHeaderData: null,
    };
  }

  const preHeaderData = await preHeaderResponse.json();

  if (!preHeaderData) {
    return {
      error: 'No pre-header data found',
      preHeaderData: null,
    };
  }

  // Perform data transformation here
  const transformedData = {
    leftCtas: {
      theme: preHeaderData.data.attributes.theme.toLowerCase(),
      ctaButtons: [
        {
          text: preHeaderData.data.attributes.leftCTAButton.text,
          variant: preHeaderData.data.attributes.leftCTAButton.variant,
          color: preHeaderData.data.attributes.leftCTAButton.color,
          href: preHeaderData.data.attributes.leftCTAButton.href,
        },
      ],
    },
    rightCtas: {
      theme: preHeaderData.data.attributes.theme.toLowerCase(),
      ctaButtons: [
        {
          text: preHeaderData.data.attributes.rightCTAButton.text,
          variant: preHeaderData.data.attributes.rightCTAButton.variant,
          color: preHeaderData.data.attributes.rightCTAButton.color,
          href: preHeaderData.data.attributes.rightCTAButton.href,
        },
      ],
    },
  };

  return {
    preHeaderData: transformedData,
    error: null, // No error occurred
  };
};
