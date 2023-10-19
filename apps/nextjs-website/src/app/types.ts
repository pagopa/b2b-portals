export interface Route {
  id: number;
  attributes: {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    items: {
      data: MenuItem[];
    };
  };
}

export interface MenuItem {
  id: number;
  attributes: {
    order: number;
    title: string;
    url: string;
    target: null | string;
    visibile: boolean;
    createdAt: string;
    updatedAt: string;
    children: {
      data: MenuItem[];
    };
  };
}

export interface PageProps {
  params: {
    slug: string[];
  };
}
