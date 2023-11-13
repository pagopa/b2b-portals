import { z } from 'zod';
import { ThemeSchema, CtaButtonsSchema } from '../../components/reusable/z-declaration';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';

const CtaGroupSchema = z.object({
  theme: ThemeSchema,
  reverse: z.boolean(),
  ctaButtons: z.array(CtaButtonsSchema).nullable(),
});

const PreHeaderAPIResponseSchema: z.ZodType = z.object({
  data: z.object({
    attributes: z.object({
      leftCtas: CtaGroupSchema,
      rightCtas: CtaGroupSchema,
    }),
  }),
});

export const getPreHeaderData = async () => {
  const token = process.env['NEXT_STRAPI_API_TOKEN'];
  const apiBaseUrl = process.env['NEXT_STRAPI_API_BASE_URL'];
  const preHeaderApiUrl: string = `${apiBaseUrl}/api/pre-header/?populate=leftCtas.ctaButtons,rightCtas.ctaButtons`;

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
  const transformedData: PreHeaderProps = preHeaderAPIResponse.data.attributes;

  return {
    preHeaderData: transformedData,
    error: null, // No error occurred
  };
};
