import { StoryFn } from '@storybook/react';
import { HeroChips } from '@react-components/components';
import { HeroChipsProps } from '@react-components/types';

// Define a 'Template' function that sets how args map to rendering
export const HeroChipsTemplate: StoryFn<HeroChipsProps> = (args) => (
  <HeroChips {...args} />
);

const title = 'Enti locali';
const subtitle = `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`;

const createHeroChipsProps = (
  theme: 'dark' | 'light',
  themeVariant: 'IO' | 'SEND',
  withSubtitle: boolean
): Partial<HeroChipsProps> => {
  let props: Partial<HeroChipsProps> = {
    theme,
    themeVariant,
    title,
    subtitle: withSubtitle ? subtitle : '',
    ...(theme === 'dark' && {
      background: {
        src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
        srcSet: '',
      },
    }),
    chips: [
      { label: 'Notifiche', targetID: 'notifiche' },
      { label: 'SEND', targetID: 'send' },
      { label: 'Recapiti', targetID: 'recapiti' },
      {
        label: 'Documenti e comunicazioni',
        targetID: 'documenti-e-comunicazioni',
      },
      {
        label: 'Ricezione di una notifica',
        targetID: 'ricezione-di-una-notifica',
      },
      { label: 'Perfezionamento', targetID: 'perfezionamento' },
      { label: 'Annullamento', targetID: 'annullamento' },
      { label: 'Accessibilità', targetID: 'accessibilita' },
    ],
  };

  return props;
};

export const defaultsDark = createHeroChipsProps('dark', 'SEND', false);
export const defaultsLight = createHeroChipsProps('light', 'IO', false);
