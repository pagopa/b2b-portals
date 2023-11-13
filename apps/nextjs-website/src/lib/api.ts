import { z } from 'zod';

// Zod schemas for validation
const RelatedSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  __contentType: z.string(),
  navigationItemId: z.number(),
  createdBy: z.object({ name: z.string().optional() }).nullable(),
  updatedBy: z.object({ name: z.string().optional() }).nullable(),
});

const ParentSchema = z
  .object({
    id: z.number(),
    title: z.string(),
    type: z.string(),
    path: z.string(),
    externalPath: z.string().nullable(),
    uiRouterKey: z.string(),
    menuAttached: z.boolean(),
    order: z.number(),
    collapsed: z.boolean(),
    additionalFields: z.unknown().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .nullable();

const NavigationItemSchema = z.lazy(() =>
  z.object({
    order: z.number(),
    id: z.number(),
    title: z.string(),
    type: z.string(),
    path: z.string(),
    externalPath: z.string().nullable(),
    uiRouterKey: z.string(),
    menuAttached: z.boolean(),
    collapsed: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    parent: ParentSchema,
    related: RelatedSchema,
    items: z.unknown().nullable(),
  })
);

const PageSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.array(z.string()),
  visible: z.boolean(),
});

const makePagesFromNavItems = (
  navItemsData: ReadonlyArray<unknown>
): ReadonlyArray<typeof PageSchema._input> => {
  const navItems = navItemsData.map((item) => NavigationItemSchema.parse(item));
  const isEmptyOrHomePage = (navItem: typeof NavigationItemSchema._input) =>
    navItem.related.slug == null ||
    navItem.related.slug.toLowerCase().trim() === 'home';

  const getParentSlugsChain = (
    navItem: typeof NavigationItemSchema._input,
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

  const pages: ReadonlyArray<typeof PageSchema._input> = navItems
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

  return pages.map((page) => PageSchema.parse(page));
};

export const getAllPages = async () => {
  // Step 1: Fetch the navigation ID
  const token = process.env['NEXT_STRAPI_API_TOKEN'];
  const apiBaseUrl = process.env['NEXT_API_BASE_URL'];
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

  const navItems: ReadonlyArray<unknown> = await response.json();

  const pages: ReadonlyArray<typeof PageSchema._input> =
    makePagesFromNavItems(navItems);

  return { pages };
};
