interface Page {
  order: number;
  id: number;
  title: string;
  type: string;
  path: string;
  externalPath: string | null;
  uiRouterKey: string;
  menuAttached: boolean;
  collapsed: boolean;
  createdAt: string;
  updatedAt: string;
  audience: any[];
  parent: Page | null;
  related: {
    id: number;
    Nome: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    __contentType: string;
    navigationItemId: number;
    createdBy: any;
    updatedBy: any;
  };
  items: any[] | null;
}

export const getAllPages = async () => {
  // Step 1: Fetch the navigation ID
  const navigationApiUrl = "http://localhost:1337/api/navigation";
  const token =
    "a7cc986b110df0aef1d499c2fbcdce5e6e5ca567127150a2dc00e2549c7b7960e73ede3425d676f04526e033a6f1227a9c1e0fa2269d4ff564a13ab52ce6ba8fce58d7d8b1298c42f1472ed7b83049b561c1c6e52b739a30dde44fd51bb3b8844b3e1ec35304e910a45dc2eaa0cd4d4a6486ebeb94a6078a78926c710866ed05";

  try {
    const navigationResponse = await fetch(navigationApiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!navigationResponse.ok) {
      throw new Error("Failed to fetch navigation data from the API");
    }

    const navigationData = await navigationResponse.json();

    if (navigationData.length === 0) {
      throw new Error("No navigation data found");
    }

    const navigationId = navigationData[0].id;

    // Step 2: Fetch the page data using the navigation ID
    const navigationRenderApiUrl = `http://localhost:1337/api/navigation/render/${navigationId}`;

    const response = await fetch(navigationRenderApiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const pages = await response.json();

    const slugs: { slug: string[] }[] = [];

    pages.forEach((page: Page) => {
      // Ignore any case in which the slug is null or the special 'home' case
      if (
        page.related.slug == null ||
        page.related.slug.toLowerCase().trim() === "home"
      )
        return;

      const pageSlug = [page.related.slug];

      // If page has no parent, add its slug to the list
      if (page.parent == null) {
        slugs.push({
          slug: pageSlug,
        });

        return;
      }

      // Build slug of page with parent (max 5 levels deep)
      let currPage = page;
      for (let i = 0; i < 5; i++) {
        const pageParentID = currPage.parent ? currPage.parent.id : null;
        const pageParent = pages.filter(
          (page: Page) => page.id === pageParentID
        )[0];

        // If parent doesn't exist don't add page at all, because this behaviour should not be possible and means something went wrong
        if (pageParent == null) {
          return;
        }

        // Add parent slug before child slug
        pageSlug.unshift(pageParent.related.slug);

        // If the parent page has a parent, repeat the cycle
        if (pageParent.parent != null) {
          currPage = pageParent;
          continue;
        }

        // slugs.push is inside of the for loop so that, if we manage to have a page which is more than 5 levels deep, we won't push it into slugs
        slugs.push({
          slug: pageSlug,
        });
        break;
      }
    });

    return {
      pages: slugs,
    };
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return {
      pages: [],
    };
  }
};
