import { Meta, StoryFn } from '@storybook/react';
import { PressReleaseListProps } from '@react-components/types/PressReleaseList/PressReleaseList.types';
import { PressReleaseList } from '@react-components/components';

const meta: Meta<typeof PressReleaseList> = {
  title: 'Components/PressReleaseList/Default',
  component: PressReleaseList,
};
export default meta;

const Template: StoryFn<PressReleaseListProps> = (args) => (
  <PressReleaseList {...args} />
);

export const DefaultPressReleaseList: StoryFn<typeof PressReleaseList> =
  Template.bind({});
DefaultPressReleaseList.args = {
  title: 'Comunicati stampa',
  sectionID: 'press-release-list',
  pressReleases: [
    {
      date: '31 Gennaio 2024',
      title: 'App IO: arriva la nuova funzionalità per un accesso rapido',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
      locale: 'it-IT',
    },
    {
      date: '23 Dicembre 2022',
      title:
        'Donazioni Ucraina: terminata l’iniziativa su piattaforma pagoPA e app IO',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
      locale: 'it-IT',
    },
    {
      date: '25 Luglio 2022',
      title:
        'Emergenza Ucraina: cresce la platea di organizzazioni umanitarie per cui è possibile donare con app IO e pagoPA',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
      locale: 'it-IT',
    },
    {
      date: '19 Gennaio 2022',
      title: 'PayPal si aggiunge al “Portafoglio” di IO',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
      locale: 'it-IT',
    },
    {
      date: '20 Giugno 2022',
      title:
        'IO, l’app dei servizi pubblici, premiata con il Compasso d’Oro ADI',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
      locale: 'it-IT',
    },
    {
      date: '17 Giugno 2021',
      title: 'La Certificazione verde COVID-19 anche sull’app IO',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
      locale: 'it-IT',
    },
    {
      date: '17 Giugno 2021',
      title:
        'Bonus Vacanze: da oggi è possibile richiederlo tramite l’app IO in pochi semplici passaggi',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
      locale: 'it-IT',
    },
    {
      date: '17 Giugno 2021',
      title: 'IO: arriva l’app per i cittadini progettata con i cittadini',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
      locale: 'it-IT',
    },
  ],
};
