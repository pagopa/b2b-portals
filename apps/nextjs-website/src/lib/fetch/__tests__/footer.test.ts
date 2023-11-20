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
    attributes: {
      legalInfo: 'test legal',
      showFundedByNextGenerationEULogo: false,
      companyLink: {
        href: '/',
        ariaLabel: null,
      },
      links_aboutUs: {
        title: 'aboutUs',
        links: [
          {
            text: 'aboutUsLinkExample1',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
          {
            text: 'aboutUsLinkExample2',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
        ],
      },
      links_followUs: {
        title: 'followUs',
        links: [
          {
            text: 'followUsLinkExample1',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
          {
            text: 'followUsLinkExample2',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
          {
            text: 'facebook',
            href: '/',
            linkType: 'social',
            ariaLabel: null,
            icon: null,
          },
        ],
      },
      links_resources: {
        title: 'Resources',
        links: [
          {
            text: 'ResourcesLinkExample1',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
          {
            text: 'ResourcesLinkExample2',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
        ],
      },
      links_services: {
        title: 'Services',
        links: [
          {
            text: 'ServicesLinkExample1',
            href: '/',
            linkType: 'internal',
            ariaLabel: null,
            icon: null,
          },
          {
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
