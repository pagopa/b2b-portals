'use client';
import { LocaleProvider as LocaleProviderRC } from '@react-components/components';
import { LocaleProviderProps } from '@react-components/types';
import { Locale } from '@react-components/types/common/Common.types';

const localeProviderLabels: Record<Locale, LocaleProviderProps['labels']> = {
  it: { externalLinkIconLabel: 'Link esterno - Apre in una nuova scheda' },
  en: { externalLinkIconLabel: 'External link - Opens in a new tab' },
  de: {
    externalLinkIconLabel: 'Externer Link - wird in einem neuen Tab geöffnet',
  },
  fr: { externalLinkIconLabel: "Lien externe - S'ouvre dans un nouvel onglet" },
  sl: { externalLinkIconLabel: 'Zunanja povezava - Odpre se v novem zavihku' },
};

const makeLocaleProviderProps = (locale: Locale, children: JSX.Element) => ({
  labels: localeProviderLabels[locale],
  children,
});

interface Props {
  locale: Locale;
  children: JSX.Element;
}
const LocaleProvider = ({ locale, children }: Props) => (
  <LocaleProviderRC {...makeLocaleProviderProps(locale, children)} />
);

export default LocaleProvider;
