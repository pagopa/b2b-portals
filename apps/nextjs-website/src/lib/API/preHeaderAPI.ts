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

interface PreHeaderData {
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

export const PreHeaderDataSchema: z.ZodType<PreHeaderData> = z.object({
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
  const preHeaderData = PreHeaderDataSchema.parse(preHeaderJson);

  if (!preHeaderData) {
    return {
      error: 'No pre-header data found',
      preHeaderData: null,
    };
  }

  // Perform data transformation here
  const transformedData= {
    leftCtas: {
      theme: PreHeaderTheme,
      ctaButtons: [
        {
          text: preHeaderData.data.attributes.leftCTAButton.text,
          variant: CTAButtonVariant,
          color: CTAButtonColor,
          href: preHeaderData.data.attributes.leftCTAButton.href,
        },
      ],
    },
    rightCtas: {
      theme: PreHeaderTheme,
      ctaButtons: [
        {
          text: preHeaderData.data.attributes.rightCTAButton.text,
          variant: CTAButtonVariant,
          color: CTAButtonColor,
          href: preHeaderData.data.attributes.rightCTAButton.href,
        },
      ],
    },
  };

  return {
    preHeaderData: transformedData,
    error: null, // No error occurred
  };
};
