import { LocaleProviderProps } from '@react-components/types';
import { Locale } from './fetch/siteWideSEO';

export const localeProviderLabels: Record<
  Locale,
  LocaleProviderProps['labels']
> = {
  it: { externalLinkIconLabel: 'Link esterno - Apre in una nuova scheda' },
  en: { externalLinkIconLabel: 'External link - Opens in a new tab' },
  de: {
    externalLinkIconLabel: 'Externer Link - wird in einem neuen Tab geöffnet',
  },
  fr: { externalLinkIconLabel: "Lien externe - S'ouvre dans un nouvel onglet" },
  sl: { externalLinkIconLabel: 'Zunanja povezava - Odpre se v novem zavihku' },
};
