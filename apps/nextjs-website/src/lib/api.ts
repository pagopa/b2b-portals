interface Page {
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
  readonly parent: Page | null;
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

export const getAllPages = async () => {
  // Step 1: Fetch the navigation ID
  const navigationApiUrl: string = "http://127.0.0.1:1337/api/navigation";
  const token: string =
    "a7cc986b110df0aef1d499c2fbcdce5e6e5ca567127150a2dc00e2549c7b7960e73ede3425d676f04526e033a6f1227a9c1e0fa2269d4ff564a13ab52ce6ba8fce58d7d8b1298c42f1472ed7b83049b561c1c6e52b739a30dde44fd51bb3b8844b3e1ec35304e910a45dc2eaa0cd4d4a6486ebeb94a6078a78926c710866ed05";

  try {
    const navigationResponse = await fetch(navigationApiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!navigationResponse.ok) {
      return {
        error: "Failed to fetch navigation data from the API",
      };
    }

    const navigationData = await navigationResponse.json();

    if (navigationData.length === 0) {
      return {
        error: "No navigation data found",
      };
    }

    const navigationId = navigationData[0].id;

    // Step 2: Fetch the page data using the navigation ID
    const navigationRenderApiUrl: string = `http://127.0.0.1:1337/api/navigation/render/${navigationId}`;

    const response = await fetch(navigationRenderApiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return {
        error: "Failed to fetch data from the API",
      };
    }

    const pages: Page[] = await response.json();

    const slugs: {
      slug: string[];
      title: string;
      visible: boolean;
      id: number;
    }[] = [];

    pages.forEach((page: Page) => {
      // Ignore any case in which the slug is null or the special 'home' case
      if (
        page.related.slug == null ||
        page.related.slug.toLowerCase().trim() === "home"
      ) {
        return; // Continue to the next iteration
      }

      const pageSlug = [page.related.slug];

      // If the page has no parent, add its slug to the list
      if (page.parent == null) {
        slugs.push({
          slug: pageSlug,
          title: page.title,
          visible: page.menuAttached ?? false,
          id: page.id,
        });
      } else {
        // Build the slug of the page with a parent (max 5 levels deep)
        let currPage = page;
        const maxLevels = 5;

        for (let i = 0; i < maxLevels; i++) {
          const pageParentID = currPage.parent ? currPage.parent.id : null;
          const pageParent = pages.find((p) => p.id === pageParentID);

          if (pageParent == null) {
            break; // Terminate the loop if the parent doesn't exist
          }

          // Add the parent slug before the child slug
          pageSlug.unshift(pageParent.related.slug);

          if (pageParent.parent != null) {
            currPage = pageParent;
          } else {
            slugs.push({
              slug: pageSlug,
              title: page.title,
              visible: page.menuAttached ?? false,
              id: page.id,
            });
            break;
          }
        }
      }
    });

    // Filter the slugs
    const filteredSlugs = slugs.filter((slugData) => slugData.slug != null);
    // .map((slugData) => ({ slug: slugData.slug }));
    return {
      pages: filteredSlugs, // Use the filtered slugs instead of the original slugs
    };
  } catch (error) {
    return {
      error: "An error occurred while fetching data",
      pages: [],
    };
  }
};
