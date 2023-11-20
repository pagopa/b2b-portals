import { describe, it, expect, vi } from 'vitest';
import { getFooter } from '../footer';

const makeTestAppEnv = () => {
  const config = {
    STRAPI_API_TOKEN: 'aStrapiToken',
    STRAPI_API_BASE_URL: 'aStrapiApiBaseUrl',
  };
  const fetchMock = vi.fn(fetch);
  const appEnv = { config, fetchFun: fetchMock };
  return { appEnv, fetchMock };
};

// response example
const footerResponse = {
  data: {
    id: 1,
    attributes: {
      legalInfo: 'test legal',
      showFundedByNextGenerationEULogo: false,
      createdAt: '2023-11-16T15:09:53.280Z',
      updatedAt: '2023-11-16T15:33:50.162Z',
      companyLink: {
        id: 1,
        text: 'testCompanyLink',
        href: '/',
        linkType: 'internal',
        ariaLabel: null,
        icon: null,
      },
      links_aboutUs: {
        id: 1,
        title: 'aboutUs',
        links: [
          {
            id: 2,
            text: 'aboutUsLinkExample1',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
          {
            id: 6,
            text: 'aboutUsLinkExample2',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
        ],
      },
      links_followUs: {
        id: 2,
        title: 'followUs',
        links: [
          {
            id: 3,
            text: 'followUsLinkExample1',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
          {
            id: 7,
            text: 'followUsLinkExample2',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
          {
            id: 10,
            text: 'facebook',
            href: '/',
            linkType: 'social',
            ariaLabel: null,
            icon: null,
          },
        ],
      },
      links_resources: {
        id: 3,
        title: 'Resources',
        links: [
          {
            id: 4,
            text: 'ResourcesLinkExample1',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
          {
            id: 8,
            text: 'ResourcesLinkExample2',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
        ],
      },
      links_services: {
        id: 4,
        title: 'Services',
        links: [
          {
            id: 5,
            text: 'ServicesLinkExample1',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
          {
            id: 9,
            text: 'ServicesLinkExample2',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
        ],
      },
    },
  },
};

describe('getFooter', () => {
  it('should call /api/footer type GET', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(footerResponse),
    } as unknown as Response);

    await getFooter(appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.STRAPI_API_BASE_URL}/api/footer/?populate[0]=companyLink,links_aboutUs.links,links_followUs.links,links_resources.links,links_services.links`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    );
  });

  it('should parse footer without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(footerResponse),
    } as unknown as Response);

    const actual = getFooter(appEnv);

    expect(await actual).toStrictEqual(footerResponse);
  });
});
