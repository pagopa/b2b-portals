import type { FC } from 'react';
import { SvgIt } from './SvgIt';
import { SvgEn } from './SvgEn';
import { SvgDe } from './SvgDe';
import { SvgFr } from './SvgFr';
import { SvgSl } from './SvgSl';

export type SvgLocale = 'it' | 'en' | 'de' | 'fr' | 'sl';

export const svgByLocale: Record<SvgLocale, FC> = {
  it: SvgIt,
  en: SvgEn,
  de: SvgDe,
  fr: SvgFr,
  sl: SvgSl,
};
