import { StoryFn } from '@storybook/react';
import { HeroCounter } from '@react-components/components';
import { HeroCounterProps } from '@react-components/types';
import MarkdownRenderer from '@/components/MarkdownRenderer';

// Define a 'Template' function that sets how args map to rendering
export const HeroCounterTemplate: StoryFn<HeroCounterProps> = (args) => (
  <HeroCounter {...args} />
);

const title = 'Enti locali';
const subtitle = `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`;

const createHeroCounterProps = (
  theme: 'dark' | 'light',
  themeVariant: 'IO' | 'SEND',
  withSubtitle: boolean
): Partial<HeroCounterProps> => {
  let props: Partial<HeroCounterProps> = {
    theme,
    themeVariant,
    title,
    ...(withSubtitle && {
      subtitle: MarkdownRenderer({
        markdown: subtitle,
        locale: 'it',
        defaultLocale: 'it',
      }),
    }),
    ...(theme === 'dark' && {
      background: {
        src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
        srcSet: '',
      },
    }),
  };

  return props;
};

export const defaultsDarkWithoutButtons = createHeroCounterProps(
  'dark',
  'SEND',
  false
);
export const defaultsLightWithoutButtons = createHeroCounterProps(
  'light',
  'IO',
  false
);
