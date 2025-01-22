import { Meta, StoryFn } from '@storybook/react';
import { HeroChipsTemplate, defaultsLight } from './herochipsCommons';
import { HeroChips } from '@react-components/components';

const meta: Meta<typeof HeroChips> = {
  title: 'Components/HeroChips/Light',
  component: HeroChips,
};
export default meta;

export const LightHeroChipsNoSubtitle: StoryFn<typeof HeroChips> =
  HeroChipsTemplate.bind({});
LightHeroChipsNoSubtitle.args = {
  ...defaultsLight,
};

export const LightHeroChipsWithSubtitle: StoryFn<typeof HeroChips> =
  HeroChipsTemplate.bind({});
LightHeroChipsWithSubtitle.args = {
  ...defaultsLight,
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`,
};
