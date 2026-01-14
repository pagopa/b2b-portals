import { Meta, StoryFn } from '@storybook/react';
import { ServiceCarousel } from '@react-components/components';
import { ServiceCarouselProps } from '@react-components/types';

// Define the default export with metadata about your component
const meta: Meta<typeof ServiceCarousel> = {
  title: 'Components/ServiceCarousel/Default',
  component: ServiceCarousel,
};
export default meta;

// Define a "Template" function that sets how args map to rendering
const ServiceCarouselTemplate: StoryFn<ServiceCarouselProps> = (args) => (
  <ServiceCarousel {...args} themeVariant='SEND' />
);

export const ServiceCarouselFull: StoryFn<typeof ServiceCarousel> =
  ServiceCarouselTemplate.bind({});
ServiceCarouselFull.args = {
  title: 'Le funzionalità su IO',
  eyelet: 'FIORE',
  description:
    'Piattaforma Notifiche digitalizza e semplifica la gestione delle comunicazioni a valore legale. Gli enti mittenti non devono che depositare l’atto da notificare: sarà la piattaforma a occuparsi dell’invio, per via digitale o analogica.',
  cards: [
    {
      title: 'Funzionalità',
      link: {
        label: 'Scopri funzionalità',
        href: '#',
      },
      description:
        'Con pagoPA integrata nell’app, paghi in modo rapido e sicuro i servizi di tutti gli Enti della Pubblica Amministrazione.',
      image: {
        url: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
      },
    },
    {
      title: 'Funzionalità',
      link: {
        label: 'Scopri funzionalità',
        href: '#',
      },
      description:
        'Con pagoPA integrata nell’app, paghi in modo rapido e sicuro i servizi di tutti gli Enti della Pubblica Amministrazione.',
      image: {
        url: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
      },
    },
    {
      title: 'Funzionalità',
      link: {
        label: 'Scopri funzionalità',
        href: '#',
      },
      description:
        'Con pagoPA integrata nell’app, paghi in modo rapido e sicuro i servizi di tutti gli Enti della Pubblica Amministrazione.',
      image: {
        url: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
      },
    },
    {
      title: 'Funzionalità',
      link: {
        label: 'Scopri funzionalità',
        href: '#',
      },
      description:
        'Con pagoPA integrata nell’app, paghi in modo rapido e sicuro i servizi di tutti gli Enti della Pubblica Amministrazione.',
      image: {
        url: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
      },
    },
    {
      title: 'Funzionalità',
      link: {
        label: 'Scopri funzionalità',
        href: '#',
      },
      description:
        'Con pagoPA integrata nell’app, paghi in modo rapido e sicuro i servizi di tutti gli Enti della Pubblica Amministrazione.',
      image: {
        url: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
      },
    },
  ],
  labels: {
    pagination: 'Paginazione carosello',
    cardNext: 'Card successiva',
    cardPrevious: 'Card precedente',
    goToSlide: (index) => `Vai alla slide ${index + 1}`,
    slideOf: (index, total) => `Slide ${index + 1} di ${total}`,
  },
};

export const ServiceCarouselMinimum: StoryFn<typeof ServiceCarousel> =
  ServiceCarouselTemplate.bind({});
ServiceCarouselMinimum.args = {
  title: 'Le funzionalità su IO',
  cards: [
    {
      title: 'Funzionalità',
      link: {
        label: 'Scopri funzionalità',
        href: '#',
      },
    },
    {
      title: 'Funzionalità',
      link: {
        label: 'Scopri funzionalità',
        href: '#',
      },
    },
    {
      title: 'Funzionalità',
      link: {
        label: 'Scopri funzionalità',
        href: '#',
      },
    },
    {
      title: 'Funzionalità',
      link: {
        label: 'Scopri funzionalità',
        href: '#',
      },
    },
    {
      title: 'Funzionalità',
      link: {
        label: 'Scopri funzionalità',
        href: '#',
      },
    },
  ],
  labels: {
    pagination: 'Paginazione carosello',
    cardNext: 'Card successiva',
    cardPrevious: 'Card precedente',
    goToSlide: (index) => `Vai alla slide ${index + 1}`,
    slideOf: (index, total) => `Slide ${index + 1} di ${total}`,
  },
};
