export const getAllPages = async () => {
  const pages = [
    {
      order: 1,
      id: 1,
      title: 'Home',
      type: 'INTERNAL',
      path: 'home',
      externalPath: null,
      uiRouterKey: 'home',
      menuAttached: false,
      collapsed: false,
      createdAt: '2023-10-23T15:28:16.391Z',
      updatedAt: '2023-10-23T15:28:16.391Z',
      audience: [],
      parent: null,
      related: {
        id: 1,
        Nome: 'Home',
        slug: 'home',
        createdAt: '2023-10-12T10:01:40.668Z',
        updatedAt: '2023-10-12T11:41:24.655Z',
        publishedAt: '2023-10-12T10:19:10.797Z',
        __contentType: 'api::pagine.pagine',
        navigationItemId: 1,
        createdBy: {},
        updatedBy: {},
      },
      items: null,
    },
    {
      order: 2,
      id: 3,
      title: 'Enti',
      type: 'INTERNAL',
      path: 'pubbliche-amministrazioni',
      externalPath: null,
      uiRouterKey: 'enti',
      menuAttached: false,
      collapsed: false,
      createdAt: '2023-10-23T15:30:53.176Z',
      updatedAt: '2023-10-23T15:30:53.176Z',
      audience: [],
      parent: null,
      related: {
        id: 6,
        Nome: 'Enti',
        slug: 'pubbliche-amministrazioni',
        createdAt: '2023-10-12T11:41:53.588Z',
        updatedAt: '2023-10-12T11:41:55.067Z',
        publishedAt: '2023-10-12T11:41:55.061Z',
        __contentType: 'api::pagine.pagine',
        navigationItemId: 3,
        createdBy: {},
        updatedBy: {},
      },
      items: null,
    },
    {
      order: 3,
      id: 2,
      title: 'Cittadini',
      type: 'INTERNAL',
      path: 'cittadini',
      externalPath: null,
      uiRouterKey: 'cittadini',
      menuAttached: true,
      collapsed: false,
      createdAt: '2023-10-23T15:28:16.397Z',
      updatedAt: '2023-10-23T15:30:53.156Z',
      audience: [],
      parent: null,
      related: {
        id: 3,
        Nome: 'Cittadini',
        slug: 'cittadini',
        createdAt: '2023-10-12T10:22:40.513Z',
        updatedAt: '2023-10-12T11:45:56.222Z',
        publishedAt: '2023-10-12T10:32:35.351Z',
        __contentType: 'api::pagine.pagine',
        navigationItemId: 2,
        createdBy: {},
        updatedBy: {},
      },
      items: null,
    },
    {
      order: 1,
      id: 6,
      title: 'Dipendenti',
      type: 'INTERNAL',
      path: 'dipendenti',
      externalPath: null,
      uiRouterKey: 'dipendenti',
      menuAttached: true,
      collapsed: false,
      createdAt: '2023-10-23T15:31:21.629Z',
      updatedAt: '2023-10-23T15:31:21.629Z',
      audience: [],
      parent: {
        id: 2,
        title: 'Cittadini',
        type: 'INTERNAL',
        path: 'cittadini',
        externalPath: null,
        uiRouterKey: 'cittadini',
        menuAttached: true,
        order: 3,
        collapsed: false,
        additionalFields: {},
        createdAt: '2023-10-23T15:28:16.397Z',
        updatedAt: '2023-10-23T15:30:53.156Z',
      },
      related: {
        id: 7,
        Nome: 'Dipendenti',
        slug: 'dipendenti',
        createdAt: '2023-10-23T15:29:17.045Z',
        updatedAt: '2023-10-23T15:29:17.910Z',
        publishedAt: '2023-10-23T15:29:17.904Z',
        __contentType: 'api::pagine.pagine',
        navigationItemId: 6,
        createdBy: {},
        updatedBy: {},
      },
      items: null,
    },
    {
      order: 1,
      id: 7,
      title: 'Statali',
      type: 'INTERNAL',
      path: 'statali',
      externalPath: null,
      uiRouterKey: 'statali',
      menuAttached: false,
      collapsed: false,
      createdAt: '2023-10-23T15:31:21.648Z',
      updatedAt: '2023-10-23T15:31:21.648Z',
      audience: [],
      parent: {
        id: 6,
        title: 'Dipendenti',
        type: 'INTERNAL',
        path: 'dipendenti',
        externalPath: null,
        uiRouterKey: 'dipendenti',
        menuAttached: true,
        order: 1,
        collapsed: false,
        additionalFields: {},
        createdAt: '2023-10-23T15:31:21.629Z',
        updatedAt: '2023-10-23T15:31:21.629Z',
      },
      related: {
        id: 8,
        Nome: 'Statali',
        slug: 'statali',
        createdAt: '2023-10-23T15:29:53.476Z',
        updatedAt: '2023-10-23T15:29:57.398Z',
        publishedAt: '2023-10-23T15:29:57.392Z',
        __contentType: 'api::pagine.pagine',
        navigationItemId: 7,
        createdBy: {},
        updatedBy: {},
      },
      items: null,
    },
    {
      order: 2,
      id: 8,
      title: 'Partite IVA',
      type: 'INTERNAL',
      path: 'partite-iva',
      externalPath: null,
      uiRouterKey: 'partite-iva',
      menuAttached: false,
      collapsed: false,
      createdAt: '2023-10-23T15:32:08.968Z',
      updatedAt: '2023-10-23T15:32:08.968Z',
      audience: [],
      parent: {
        id: 2,
        title: 'Cittadini',
        type: 'INTERNAL',
        path: 'cittadini',
        externalPath: null,
        uiRouterKey: 'cittadini',
        menuAttached: true,
        order: 3,
        collapsed: false,
        additionalFields: {},
        createdAt: '2023-10-23T15:28:16.397Z',
        updatedAt: '2023-10-23T15:30:53.156Z',
      },
      related: {
        id: 9,
        Nome: 'Partite IVA',
        slug: 'partite-iva',
        createdAt: '2023-10-23T15:31:49.761Z',
        updatedAt: '2023-10-23T15:31:50.598Z',
        publishedAt: '2023-10-23T15:31:50.596Z',
        __contentType: 'api::pagine.pagine',
        navigationItemId: 8,
        createdBy: {},
        updatedBy: {},
      },
      items: null,
    },
    {
      order: 4,
      id: 4,
      title: 'FAQ',
      type: 'INTERNAL',
      path: 'faq',
      externalPath: null,
      uiRouterKey: 'faq',
      menuAttached: true,
      collapsed: false,
      createdAt: '2023-10-23T15:30:53.176Z',
      updatedAt: '2023-10-23T15:30:53.176Z',
      audience: [],
      parent: null,
      related: {
        id: 4,
        Nome: 'FAQ',
        slug: 'faq',
        createdAt: '2023-10-12T10:34:22.919Z',
        updatedAt: '2023-10-12T11:35:12.465Z',
        publishedAt: '2023-10-12T10:50:04.529Z',
        __contentType: 'api::pagine.pagine',
        navigationItemId: 4,
        createdBy: {},
        updatedBy: {},
      },
      items: null,
    },
    {
      order: 5,
      id: 5,
      title: 'Perfezionamento',
      type: 'INTERNAL',
      path: 'perfezionamento',
      externalPath: null,
      uiRouterKey: 'perfezionamento',
      menuAttached: false,
      collapsed: false,
      createdAt: '2023-10-23T15:30:53.176Z',
      updatedAt: '2023-10-23T15:30:53.176Z',
      audience: [],
      parent: null,
      related: {
        id: 5,
        Nome: 'Perfezionamento',
        slug: 'perfezionamento',
        createdAt: '2023-10-12T11:01:53.532Z',
        updatedAt: '2023-10-12T11:02:12.502Z',
        publishedAt: '2023-10-12T11:02:12.498Z',
        __contentType: 'api::pagine.pagine',
        navigationItemId: 5,
        createdBy: {},
        updatedBy: {},
      },
      items: null,
    },
  ];

  const slugs: { slug: string[] }[] = [];

  pages.forEach((page) => {
    // Ignore any case in which the slug is null or the special 'home' case
    if (
      page.related.slug == null ||
      page.related.slug.toLowerCase().trim() === 'home'
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
      const pageParentID = currPage.parent.id;
      const pageParent = pages.filter((page) => page.id === pageParentID)[0];

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
}
