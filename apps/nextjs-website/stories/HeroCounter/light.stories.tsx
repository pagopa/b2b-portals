import { Meta, StoryFn } from '@storybook/react';
import {
  HeroCounterTemplate,
  defaultsLightWithoutButtons,
} from './herocounterCommons';
import { HeroCounter } from '@react-components/components';

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
  counterNumber: 124,
  counterText: 'Enti disponibili',
  title: 'Enti locali',
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`,
  linkText: 'Sto cercando un Ente nazionale',
  linkUrl: '#',
};