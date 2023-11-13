import { z } from 'zod';
import { ThemeSchema, CTAButtonVariant, CTAButtonColor } from '../Reusable/z-declaration';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';

export const HeaderButtonSchema = z.object({
  color: CTAButtonColor,
  onClick: z.function().optional(),
  size: z.string(),
  text: z.string(),
  variant: CTAButtonVariant,
});

export const HeaderMenuItemSchema: z.ZodType = z.object({
  items: z.lazy(() => HeaderMenuItemsArraySchema),
  label: z.string(),
  theme: ThemeSchema,
  active: z.boolean().optional(),
  href: z.string().optional(),
});

const HeaderMenuItemsArraySchema = z.array(HeaderMenuItemSchema);

export const HeaderProductSchema = z.object({
  href: z.string(),
  name: z.string(),
});

export const HeaderDataSchema = z.object({
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
  theme: ThemeSchema,
});

export const getHeaderData = async () => {
  const token = process.env['NEXT_STRAPI_API_TOKEN'];
  const apiBaseUrl = process.env['NEXT_STRAPI_API_BASE_URL'];
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

  return {
    headerData,
    error: null, // No error occurred
  };
};
