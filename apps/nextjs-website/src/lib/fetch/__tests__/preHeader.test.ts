import { describe, it, expect, vi } from 'vitest';
import { getPreHeader } from '../preHeader';

const makeTestAppEnv = () => {
  const config = {
    STRAPI_API_TOKEN: 'aStrapiToken',
    STRAPI_API_BASE_URL: 'aStrapiApiBaseUrl',
  };
  const fetchMock = vi.fn(fetch);
  const appEnv = { config, fetchFun: fetchMock };
  return { appEnv, fetchMock };
};

// Response example for getPreHeader
const preHeaderResponse = {
  data: {
    attributes: {
      createdAt: '2023-11-20T15:35:53.598Z',
      updatedAt: '2024-01-31T15:12:25.352Z',
      leftCtas: [
        {
          id: 1,
          text: 'PagoPA S.p.A.',
          href: 'https://www.pagopa.it',
          icon: null,
          variant: 'naked',
          size: 'medium',
        },
      ],
      rightCtas: [
        {
          id: 2,
          text: 'Assistenza',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
          icon: 'HelpOutlineOutlined',
          variant: 'naked',
          size: 'medium',
        },
      ],
    },
  },
};

const preHeaderResponseAfterCodec = {
  data: {
    attributes: {
      leftCtas: [
        {
          text: 'PagoPA S.p.A.',
          href: 'https://www.pagopa.it',
          icon: null,
          variant: 'naked',
          size: 'medium',
        },
      ],
      rightCtas: [
        {
          text: 'Assistenza',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
          icon: 'HelpOutlineOutlined',
          variant: 'naked',
          size: 'medium',
        },
      ],
    },
  },
};

describe('getPreHeader', () => {
  it('should call /api/pre-header type GET', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();
    const { config } = appEnv;

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preHeaderResponse),
    } as unknown as Response);

    await getPreHeader(appEnv);

    expect(fetchMock).toHaveBeenCalledWith(
      `${config.STRAPI_API_BASE_URL}/api/pre-header/?populate=leftCtas,rightCtas`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    );
  });

  it('should parse preHeader response without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preHeaderResponse),
    } as unknown as Response);

    const actual = getPreHeader(appEnv);

    // Use preHeaderResponse directly as the expected value
    expect(await actual).toStrictEqual(preHeaderResponseAfterCodec);
  });
});
