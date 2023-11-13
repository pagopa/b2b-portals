import { z } from 'zod';

export const ThemeSchema = z.enum(['light', 'dark']);

export const CTAButtonVariant = z.enum(['text', 'outlined', 'contained']);

export const CTAButtonColor = z.enum(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']);