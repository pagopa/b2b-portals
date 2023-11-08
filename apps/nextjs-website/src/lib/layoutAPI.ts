import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';

export interface PreHeaderData {
  readonly data: {
    readonly attributes: {
      readonly theme: string;
      readonly leftCTAButton: {
        readonly text: string;
        readonly variant: string;
        readonly color: string;
        readonly href: string;
      };
      readonly rightCTAButton: {
        readonly text: string;
        readonly variant: string;
        readonly color: string;
        readonly href: string;
      };
    };
  };
}

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

  const preHeaderData: PreHeaderData = await preHeaderResponse.json();

  if (!preHeaderData) {
    return {
      error: 'No pre-header data found',
      preHeaderData: null,
    };
  }

  type PreHeaderTheme = 'dark' | 'light';

  const theme: PreHeaderTheme = ['dark', 'light'].includes(
    preHeaderData.data.attributes.theme.toLowerCase()
  )
    ? (preHeaderData.data.attributes.theme.toLowerCase() as PreHeaderTheme)
    : 'light';

  type CTAButtonVariant = 'text' | 'outlined' | 'contained';

  const leftCTAVariant: CTAButtonVariant = [
    'text',
    'outlined',
    'contained',
  ].includes(preHeaderData.data.attributes.leftCTAButton.variant)
    ? (preHeaderData.data.attributes.leftCTAButton.variant as CTAButtonVariant)
    : 'text';

  const rightCTAVariant: CTAButtonVariant = [
    'text',
    'outlined',
    'contained',
  ].includes(preHeaderData.data.attributes.rightCTAButton.variant)
    ? (preHeaderData.data.attributes.rightCTAButton.variant as CTAButtonVariant)
    : 'text';

  type CTAButtonColor =
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';

  const leftCTAColor: CTAButtonColor = [
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning',
  ].includes(preHeaderData.data.attributes.leftCTAButton.color)
    ? (preHeaderData.data.attributes.leftCTAButton.color as CTAButtonColor)
    : 'inherit';

  const rightCTAColor: CTAButtonColor = [
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning',
  ].includes(preHeaderData.data.attributes.rightCTAButton.color)
    ? (preHeaderData.data.attributes.rightCTAButton.color as CTAButtonColor)
    : 'inherit';

  // Perform data transformation here
  const transformedData: PreHeaderProps = {
    leftCtas: {
      theme,
      ctaButtons: [
        {
          text: preHeaderData.data.attributes.leftCTAButton.text,
          variant: leftCTAVariant,
          color: leftCTAColor,
          href: preHeaderData.data.attributes.leftCTAButton.href,
        },
      ],
    },
    rightCtas: {
      theme,
      ctaButtons: [
        {
          text: preHeaderData.data.attributes.rightCTAButton.text,
          variant: rightCTAVariant,
          color: rightCTAColor,
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
