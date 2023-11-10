import { z } from 'zod';

const HeaderTheme = z.union([z.literal('dark'), z.literal('light')]);

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

export interface HeaderButton {
  readonly color: string;
  readonly onClick?: () => void | undefined;
  readonly size: string;
  readonly text: string;
  readonly variant: string;
}

export interface HeaderMenuItem {
  readonly items?: ReadonlyArray<HeaderMenuItem>;
  readonly label: string;
  readonly theme: 'light' | 'dark';
  readonly active?: boolean | undefined;
  readonly href?: string | undefined;
}

export interface HeaderProduct {
  readonly href: string;
  readonly name: string;
}

export interface HeaderData {
  readonly avatar?: {
    readonly alt: string;
    readonly src: string;
  };
  readonly beta?: boolean;
  readonly ctaButtons?: ReadonlyArray<HeaderButton>;
  readonly reverse?: boolean;
  readonly menu: ReadonlyArray<HeaderMenuItem>;
  readonly product: HeaderProduct;
  readonly theme: 'dark' | 'light';
}

export const HeaderButtonSchema = z.object({
  color: CTAButtonColor,
  onClick: z.function().optional(),
  size: z.string(),
  text: z.string(),
  variant: CTAButtonVariant,
});

export const HeaderMenuItemSchema: z.ZodType<HeaderMenuItem> = z.object({
  items: z.lazy(() => HeaderMenuItemsArraySchema),
  label: z.string(),
  theme: HeaderTheme,
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
  theme: HeaderTheme,
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

  return {
    headerData,
    error: null, // No error occurred
  };
};
