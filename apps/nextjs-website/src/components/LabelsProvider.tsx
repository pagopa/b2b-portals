'use client';
import { LabelsProvider as LabelsProviderRC } from '@react-components/components';
import { LabelsProviderProps } from '@react-components/types';
import { Locale } from '@react-components/types/common/Common.types';

const LabelsProviderLabels: Record<
  Locale,
  LabelsProviderProps['externalLinkIconLabel']
> = {
  it: {
    targetBlank: 'Link esterno - Apre in una nuova scheda',
    default: 'Link esterno',
  },
  en: {
    targetBlank: 'External link - Opens in a new tab',
    default: 'External link',
  },
  de: {
    targetBlank: 'Externer Link - wird in einem neuen Tab geöffnet',
    default: 'Externer Link',
  },
  fr: {
    targetBlank: "Lien externe - S'ouvre dans un nouvel onglet",
    default: 'Lien externe',
  },
  sl: {
    targetBlank: 'Zunanja povezava - Odpre se v novem zavihku',
    default: 'Zunanja povezava',
  },
};

const makeLabelsProviderProps = (locale: Locale, children: JSX.Element) => ({
  externalLinkIconLabel: LabelsProviderLabels[locale],
  children,
});

interface Props {
  locale: Locale;
  children: JSX.Element;
}
const LabelsProvider = ({ locale, children }: Props) => (
  <LabelsProviderRC {...makeLabelsProviderProps(locale, children)} />
);

export default LabelsProvider;
