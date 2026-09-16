import { describe, it, expect } from 'vitest';
import { getPreFooter } from '../preFooter';
import {
  demoStrapiApiBaseUrl,
  demoStrapiApiToken,
  makeTestAppEnv,
} from './testConfig';

// Response example for getPreFooter
const preFooterResponse = {
  data: {
    title: 'Titolo Pre Footer Senza Bottoni',
    theme: 'dark',
    layout: 'center',
    createdAt: '2024-10-10T15:56:53.564Z',
    updatedAt: '2024-10-10T16:19:54.516Z',
    background: null,
    ctaButtons: [
      {
        id: 15,
        text: 'Bottone Primario',
        ariaLabel: 'Bottone',
        href: '#',
        variant: 'contained',
        icon: null,
        size: 'medium',
        openInNewTab: null,
      },
      {
        id: 14,
        text: 'Bottone Secondario',
        href: '#',
        ariaLabel: 'Bottone',
        variant: 'outlined',
        icon: null,
        size: 'medium',
        openInNewTab: null,
      },
    ],
    storeButtons: {
      id: 3,
      hrefGoogle: '#',
      hrefApple: '#',
      ariaLabelGoogle: 'Scarica IO su Google Play',
      ariaLabelApple: 'Scarica IO su App Store',
    },
    exclude: [
      {
        slug: 'test',
        createdAt: '2024-10-10T15:57:27.916Z',
        updatedAt: '2024-10-10T15:57:36.790Z',
        publishedAt: '2024-10-10T15:57:36.779Z',
      },
    ],
  },
};

const emptyPreFooterResponse = {
  data: null,
};

const preFooterResponseAfterCodec = {
  data: {
    title: 'Titolo Pre Footer Senza Bottoni',
    theme: 'dark',
    layout: 'center',
    background: null,
    ctaButtons: [
      {
        text: 'Bottone Primario',
        ariaLabel: 'Bottone',
        href: '#',
        variant: 'contained',
        icon: null,
        size: 'medium',
        openInNewTab: null,
      },
      {
        text: 'Bottone Secondario',
        ariaLabel: 'Bottone',
        href: '#',
        variant: 'outlined',
        icon: null,
        size: 'medium',
        openInNewTab: null,
      },
    ],
    storeButtons: {
      hrefGoogle: '#',
      hrefApple: '#',
      ariaLabelGoogle: 'Scarica IO su Google Play',
      ariaLabelApple: 'Scarica IO su App Store',
    },
    exclude: [{ slug: 'test' }],
  },
};

describe('getPreFooter', () => {
  it('should call /api/pre-footer type GET based on tenant', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preFooterResponse),
    } as unknown as Response);

    await getPreFooter({ ...appEnv, locale: 'it' });

    expect(fetchMock).toHaveBeenCalledWith(
      `${demoStrapiApiBaseUrl}/api/pre-footer/?locale=it
&populate[0]=background
&populate[1]=ctaButtons
&populate[2]=storeButtons
&populate[3]=exclude
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${demoStrapiApiToken}`,
        },
      },
    );
  });

  it('should parse preFooter response without error', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(preFooterResponse),
    } as unknown as Response);

    const actual = getPreFooter({ ...appEnv, locale: 'it' });

    // Use preFooterResponse directly as the expected value
    expect(await actual).toStrictEqual(preFooterResponseAfterCodec);
  });

  it('should allow for preFooter data to be null', async () => {
    const { appEnv, fetchMock } = makeTestAppEnv();

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(emptyPreFooterResponse),
    } as unknown as Response);

    const actual = getPreFooter({ ...appEnv, locale: 'it' });

    // Use preFooterResponse directly as the expected value
    expect(await actual).toStrictEqual({ data: null });
  });
});
