import { z } from 'zod';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';

const HeaderButtonSchema = z.object({
  color: z.string(),
  onClick: z.function().optional(),
  size: z.string(),
  text: z.string(),
  variant: z.string(),
});

const HeaderMenuItemSchema = z.object({
  items: z.array(
    z.object({
      href: z.string(),
      key: z.number(),
      label: z.string(),
    })
  ),
  label: z.string(),
  theme: z.string(),
  active: z.boolean().optional(),
  href: z.string().optional(),
});

const HeaderProductSchema = z.object({
  href: z.string(),
  name: z.string(),
});

const HeaderDataSchema = z.object({
  avatar: z
    .object({
      alt: z.string(),
      src: z.string(),
    })
    .optional(),
  beta: z.boolean().optional(),
  ctaButtons: z.array(HeaderButtonSchema).optional(),
  reverse: z.boolean().optional(),
  menu: z.array(HeaderMenuItemSchema),
  product: HeaderProductSchema,
  theme: z.string(),
});

export const getHeaderData = async () => {
  const token = process.env['NEXT_STRAPI_API_TOKEN'];
  const apiBaseUrl = process.env['NEXT_PUBLIC_API_BASE_URL'];
  const HeaderApiUrl: string = `${apiBaseUrl}/api/header/?populate=*`;

  const HeaderResponse = await fetch(HeaderApiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!HeaderResponse.ok) {
    return {
      error: 'Failed to fetch header data',
      headerData: null,
    };
  }

  const HeaderJson = await HeaderResponse.json();
  const headerData = HeaderDataSchema.parse(HeaderJson);

  if (!headerData) {
    return {
      error: 'No header data found',
      headerData: null,
    };
  }

  // Perform data transformation here
  const transformedData: HeaderProps = {
    leftCtas: {
      theme,
      ctaButtons: [
        {
          text: headerData.data.attributes.leftCTAButton.text,
          variant: leftCTAVariant,
          color: leftCTAColor,
          href: headerData.data.attributes.leftCTAButton.href,
        },
      ],
    },
    rightCtas: {
      theme,
      ctaButtons: [
        {
          text: headerData.data.attributes.rightCTAButton.text,
          variant: rightCTAVariant,
          color: rightCTAColor,
          href: headerData.data.attributes.rightCTAButton.href,
        },
      ],
    },
  };

  return {
    headerData: transformedData,
    error: null, // No error occurred
  };
};
