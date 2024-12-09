import { Meta, StoryFn } from '@storybook/react';
import { PressReleaseListProps } from '@react-components/types/PressReleaseList/PressReleaseList.types';
import { PressReleaseList } from '@react-components/components';

const meta: Meta<typeof PressReleaseList> = {
  title: 'Components/PressReleaseList/Default',
  component: PressReleaseList,
};
export default meta;

const Template: StoryFn<PressReleaseListProps> = (args) => <PressReleaseList {...args} />;

export const DefaultPressReleaseList = Template.bind({});
DefaultPressReleaseList.args = {
  title: 'Comunicati stampa',
  sectionID: 'press-release-list',
  pressReleases: [
    {
      date: '10 APRILE 2024',
      title:
        "Rimborsi in arrivo, scadenze e altri avvisi personalizzati. L'Agenzia comunica con i cittadini anche sull'App IO",
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '31 GENNAIO 2024',
      title: 'App IO: arriva la nuova funzionalità per un accesso rapido',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '4 APRILE 2023',
      title:
        "E-distribuzione sbarca sull'app IO: un filo diretto con i clienti per le comunicazioni di servizio",
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '23 DICEMBRE 2022',
      title:
        'Donazioni Ucraina: terminata l’iniziativa su piattaforma pagoPA e app IO',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '25 LUGLIO 2022',
      title:
        'Emergenza Ucraina: cresce la platea di organizzazioni umanitarie per cui è possibile donare con app IO e pagoPA',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '24 MARZO 2022',
      title: 'Emergenza Ucraina: da oggi è possibile donare anche su app IO',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '19 GENNAIO 2022',
      title: 'PayPal si aggiunge al “Portafoglio” di IO',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '20 GIUGNO 2022',
      title:
        'IO, l’app dei servizi pubblici, premiata con il Compasso d’Oro ADI',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '17 GIUGNO 2021',
      title:
        'La Certificazione verde COVID-19 anche sull’app IO',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '17 GIUGNO 2021',
      title:
        'Bonus Vacanze: da oggi è possibile richiederlo tramite l’app IO in pochi semplici passaggi',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '17 GIUGNO 2021',
      title:
        'IO: arriva l’app per i cittadini progettata con i cittadini',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '17 GIUGNO 2021',
      title:
        'Palermo invita i cittadini a testare IO, l’app dei servizi pubblici',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
    {
      date: '10 MARZO 2022',
      title:
        'IO app, più di 5 mila PA hanno integrato i loro primi servizi',
      link: {
        label: 'Leggi',
        href: '#',
      },
      themeVariant: 'IO',
    },
  ],
};
