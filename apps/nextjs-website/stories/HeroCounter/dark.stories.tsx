import { Meta, StoryFn } from '@storybook/react';
import {
  HeroCounterTemplate,
  defaultsDarkWithoutButtons,
} from './herocounterCommons';
import { HeroCounter } from '@react-components/components';
import MarkdownRenderer from '@/components/MarkdownRenderer';

const meta: Meta<typeof HeroCounter> = {
  title: 'Components/HeroCounter/Dark',
  component: HeroCounter,
};
export default meta;

export const DarkHeroCounter: StoryFn<typeof HeroCounter> = HeroCounterTemplate.bind(
  {}
);
DarkHeroCounter.args = {
  ...defaultsDarkWithoutButtons,
  counter: {
    number: 1242,
    text: 'Enti disponibili'
  },
  title: 'Enti locali',
  subtitle: MarkdownRenderer({ markdown: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`}),
  link: {
    label: 'Sto cercando un Ente nazionale',
    href: '#'
  },
};

export const DarkHeroCounterNoLink: StoryFn<typeof HeroCounter> = HeroCounterTemplate.bind(
  {}
);
DarkHeroCounterNoLink.args = {
  ...defaultsDarkWithoutButtons,
  counter: {
    number: 1242,
    text: 'Enti disponibili'
  },
  title: 'Enti locali',
  subtitle: MarkdownRenderer({ markdown: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`}),
};