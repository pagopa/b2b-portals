import { z } from 'zod';

export const ThemeSchema = z.enum(['light', 'dark']);

export const CTAButtonVariant = z.enum(['text', 'outlined', 'contained']);

export const CTAButtonColor = z.enum([
  'inherit',
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
]);

export const CTAButtonSize = z.enum(['small', 'medium', 'large']);

export const CtaButtonsSchema = z.object({
  text: z.string(),
  href: z.string(),
  variant: CTAButtonVariant,
  color: CTAButtonColor,
  icon: z.string().nullable(),
  size: CTAButtonSize.nullable(),
});
