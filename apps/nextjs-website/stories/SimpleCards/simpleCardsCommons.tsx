import { StoryFn } from '@storybook/react';
import { SimpleCards } from '@react-components/components';
import { SimpleCardsProps } from '@react-components/types';
import { SimpleCardsItemProps } from '@react-components/types/SimpleCards/SimpleCards.types';

export const generateItems = (count: number): SimpleCardsItemProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Wallet provider ${i + 1}`,
    text: 'Mini descrizione su una riga',
    label: 'Categoria',
    iconURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
    themeVariant: 'SEND',
  }));

export const generateItemsWithLinks = (count: number): SimpleCardsItemProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Wallet provider ${i + 1}`,
    text: 'Mini descrizione su una riga',
    label: 'Categoria',
    href: '#',
    ariaLabel: `Vai a Wallet provider ${i + 1}`,
    iconURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
    themeVariant: 'SEND',
  }));

export const exampleSubtitle = 'Risorse ufficiali per integrare IT-Wallet';

export const markdownLikeBody = (
  <>
    Segui le <strong>linee guida</strong> e usa gli{' '}
    <strong>asset ufficiali</strong> per integrare correttamente il brand
    IT-Wallet nelle tue soluzioni tecnologiche.
  </>
);

export const exampleCtaButtons = [
  {
    text: 'Scopri le specifiche di brand',
    href: '#',
    variant: 'contained' as const,
    size: 'small' as const,
  },
  {
    text: 'Scarica gli asset',
    href: '#',
    variant: 'outlined' as const,
    size: 'small' as const,
  },
];

export const SimpleCardsTemplate: StoryFn<SimpleCardsProps> = (args) => (
  <SimpleCards {...args} />
);

export const defaultPropsLight: SimpleCardsProps = {
  theme: 'light',
  themeVariant: 'SEND',
  items: generateItemsWithLinks(4),
  sectionID: null,
};

export const defaultPropsDark: SimpleCardsProps = {
  theme: 'dark',
  themeVariant: 'SEND',
  items: generateItemsWithLinks(4),
  sectionID: null,
};
