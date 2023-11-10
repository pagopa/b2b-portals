import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { z } from 'zod';

const PreHeaderTheme = z.union([
  z.literal('dark'),
  z.literal('light'),
]);

const CTAButtonVariant = z.union([
  z.literal('text'),
  z.literal('outlined'),
  z.literal('contained'),
]);

const CTAButtonColor = z.union([
  z.literal('inherit'),
  z.literal('primary'),
  z.literal('secondary'),
  z.literal('success'),
  z.literal('error'),
  z.literal('info'),
  z.literal('warning'),
]);

interface PreHeaderAPIResponse {
  readonly data: {
    readonly attributes: {
      readonly theme: 'light' | 'dark';
      readonly leftCTAButton: {
        readonly text: string;
        readonly variant: 'text' | 'outlined' | 'contained';
        readonly color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
        readonly href: string;
      };
      readonly rightCTAButton: {
        readonly text: string;
        readonly variant: 'text' | 'outlined' | 'contained';
        readonly color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
        readonly href: string;
      };
    };
  };
}

export const PreHeaderAPIResponseSchema: z.ZodType<PreHeaderAPIResponse> = z.object({
  data: z.object({
    attributes: z.object({
      theme: PreHeaderTheme,
      leftCTAButton: z.object({
        text: z.string(),
        variant: CTAButtonVariant,
        color: CTAButtonColor,
        href: z.string(),
      }),
      rightCTAButton: z.object({
        text: z.string(),
        variant: CTAButtonVariant,
        color: CTAButtonColor,
        href: z.string(),
      }),
    }),
  }),
});

export const getPreHeaderData = async () => {
  const token = process.env['NEXT_STRAPI_API_TOKEN'];
  const apiBaseUrl = process.env['NEXT_PUBLIC_API_BASE_URL'];
  const preHeaderApiUrl: string = `${apiBaseUrl}/api/pre-header/?populate=*`;

  const preHeaderResponse = await fetch(preHeaderApiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!preHeaderResponse.ok) {
    return {
      error: 'Failed to fetch pre-header data',
      preHeaderData: null,
    };
  }

  const preHeaderJson = await preHeaderResponse.json();
  const preHeaderAPIResponse = PreHeaderAPIResponseSchema.parse(preHeaderJson);

  if (!preHeaderAPIResponse) {
    return {
      error: 'No pre-header data found',
      preHeaderData: null,
    };
  }

  // Perform data transformation here
  const transformedData: PreHeaderProps= {
    leftCtas: {
      theme: preHeaderAPIResponse.data.attributes.theme,
      ctaButtons: [
        {
          text: preHeaderAPIResponse.data.attributes.leftCTAButton.text,
          variant: preHeaderAPIResponse.data.attributes.leftCTAButton.variant,
          color: preHeaderAPIResponse.data.attributes.leftCTAButton.color,
          href: preHeaderAPIResponse.data.attributes.leftCTAButton.href,
        },
      ],
    },
    rightCtas: {
      theme: preHeaderAPIResponse.data.attributes.theme,
      ctaButtons: [
        {
          text: preHeaderAPIResponse.data.attributes.rightCTAButton.text,
          variant: preHeaderAPIResponse.data.attributes.rightCTAButton.variant,
          color: preHeaderAPIResponse.data.attributes.rightCTAButton.color,
          href: preHeaderAPIResponse.data.attributes.rightCTAButton.href,
        },
      ],
    },
  };

  return {
    preHeaderData: transformedData,
    error: null, // No error occurred
  };
};
