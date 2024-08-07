import { Meta, StoryFn } from '@storybook/react';
import {
  HeroCounterTemplate,
  defaultsLightWithoutButtons,
} from './herocounterCommons';
import { HeroCounter } from '@react-components/components';
import MarkdownRenderer from '@/components/MarkdownRenderer';

const meta: Meta<typeof HeroCounter> = {
  title: 'Components/HeroCounter/Light',
  component: HeroCounter,
};
export default meta;

export const LightHeroCounter: StoryFn<typeof HeroCounter> = HeroCounterTemplate.bind(
  {}
);
LightHeroCounter.args = {
  ...defaultsLightWithoutButtons,
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

export const LightHeroCounterNoLink: StoryFn<typeof HeroCounter> = HeroCounterTemplate.bind(
  {}
);
LightHeroCounterNoLink.args = {
  ...defaultsLightWithoutButtons,
  counter: {
    number: 1242,
    text: 'Enti disponibili'
  },
  title: 'Enti locali',
  subtitle: MarkdownRenderer({ markdown: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`}),
};