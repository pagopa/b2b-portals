import { describe, it, expect } from 'vitest';
import { getPreHeader } from '../preHeader';
import {
  demoStrapiApiBaseUrl,
  demoStrapiApiToken,
  makeTestAppEnv,
} from './testConfig';

// Response example for getPreHeader
const preHeaderResponse = {
  data: {
    createdAt: '2023-11-20T15:35:53.598Z',
    updatedAt: '2024-01-31T15:12:25.352Z',
    leftCtas: [
      {
        id: 1,
        text: 'PagoPA S.p.A.',
        ariaLabel: 'PagoPA S.p.A.',
        href: 'https://www.pagopa.it',
        icon: null,
        size: 'medium',
      },
    ],
    rightCtas: [
      {
        id: 2,
        text: 'Assistenza',
        ariaLabel: 'Assistenza',
        href: 'mailto:destinatari-send@assistenza.pagopa.it',
        icon: 'HelpOutlineOutlined',
        size: 'medium',
      },
    ],
    include: [],
  },
};

const emptyPreHeaderResponse = {
  data: null,
};

const preHeaderResponseAfterCodec = {
  data: {
    leftCtas: [
      {
        text: 'PagoPA S.p.A.',
        ariaLabel: 'PagoPA S.p.A.',
        href: 'https://www.pagopa.it',
        icon: null,
        size: 'medium',
      },
    ],
    rightCtas: [
      {
        text: 'Assistenza',
        ariaLabel: 'Assistenza',
        href: 'mailto:destinatari-send@assistenza.pagopa.it',
        icon: 'HelpOutlineOutlined',
        size: 'medium',
      },
    ],
    include: [],
  },
};

describe('getPreHeader', () => {
  it('should call /api/pre-header type GET based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preHeaderResponse),
    } as unknown as Response);

    await getPreHeader({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${demoStrapiApiBaseUrl}/api/pre-header/?locale=it
&populate[0]=leftCtas
&populate[1]=rightCtas
&populate[2]=include
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${demoStrapiApiToken}`,
        },
      },
    );
  });

  it('should parse preHeader response without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preHeaderResponse),
    } as unknown as Response);

    const actual = getPreHeader({ ...appEnv, locale: 'it' });

    // Use preHeaderResponse directly as the expected value
    expect(await actual).toStrictEqual(preHeaderResponseAfterCodec);
  });

  it('should allow for preHeader data to be null', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(emptyPreHeaderResponse),
    } as unknown as Response);

    const actual = getPreHeader({ ...appEnv, locale: 'it' });

    // Use preHeaderResponse directly as the expected value
    expect(await actual).toStrictEqual({ data: null });
  });
});
