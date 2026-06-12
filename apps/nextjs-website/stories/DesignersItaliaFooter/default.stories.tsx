import React from 'react';
import { DesignersItaliaFooter } from '@react-components/components';
import { DesignersItaliaFooterProps } from '@react-components/types';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof DesignersItaliaFooter> = {
  title: 'Components/DesignersItaliaFooter/Default',
  component: DesignersItaliaFooter,
};
export default meta;

const DesignersItaliaFooterTemplate: StoryFn<DesignersItaliaFooterProps> = (
  args,
) => <DesignersItaliaFooter {...args} />;

export const DesignersItaliaFooterSection: StoryFn<
  typeof DesignersItaliaFooter
> = DesignersItaliaFooterTemplate.bind({});
DesignersItaliaFooterSection.args = {
  links_SiteIndex: {
    title: 'INDICE DEL SITO',
    links: [
      { label: 'Homepage', href: '#', ariaLabel: 'Homepage' },
      { label: 'Che cos’è', href: '#', ariaLabel: 'Che cos’è' },
      { label: 'Come iniziare', href: '#', ariaLabel: 'Come iniziare' },
      {
        label: 'Per enti e aziende',
        href: '#',
        ariaLabel: 'Per enti e aziende',
      },
      {
        label: 'Risorse per progettare e sviluppare',
        href: '#',
        ariaLabel: 'Risorse per progettare e sviluppare',
      },
      {
        label: 'Risorse per media e comunicazione',
        href: '#',
        ariaLabel: 'Risorse per media e comunicazione',
      },
      { label: 'Supporto', href: '#', ariaLabel: 'Supporto' },
    ],
  },
  links_Policies: {
    title: 'PRIVACY E CONDIZIONI',
    links: [
      { label: 'Cookie Policy', href: '#', ariaLabel: 'Cookie Policy' },
      { label: 'Privacy Policy', href: '#', ariaLabel: 'Privacy Policy' },
      {
        label: 'Termini e condizioni',
        href: '#',
        ariaLabel: 'Termini e condizioni',
      },
      {
        label: 'Dichiarazione di accessibilità',
        href: '#',
        ariaLabel: 'Dichiarazione di accessibilità',
      },
    ],
  },
  hashtags: {
    title: 'HASHTAG UFFICIALI',
    hashtags: ['#ITWallet', '#SistemaITWallet', '#PortafoglioDigitaleItaliano'],
  },
  links_Social: {
    title: 'SEGUICI SU',
    links: [
      {
        href: '#',
        ariaLabel: 'LinkedIn',
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
      },
      {
        href: '#',
        ariaLabel: 'Instagram',
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
      },
      {
        href: '#',
        ariaLabel: 'Facebook',
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
      },
      {
        href: '#',
        ariaLabel: 'YouTube',
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
      },
      {
        href: '#',
        ariaLabel: 'X',
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
      },
    ],
  },
  labels: {
    copyToClipboard: (hashtag: string) => `Copia ${hashtag} negli appunti`,
  },
};
