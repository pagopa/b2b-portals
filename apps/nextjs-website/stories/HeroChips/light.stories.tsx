import { Meta, StoryFn } from '@storybook/react';
import { HeroChipsTemplate, defaultsLight } from './herochipsCommons';
import { HeroChips } from '@react-components/components';

const meta: Meta<typeof HeroChips> = {
  title: 'Components/HeroChips/Light',
  component: HeroChips,
};
export default meta;

export const LightHeroChipsNoSubtitleNoCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
LightHeroChipsNoSubtitleNoCentered.args = {
  ...defaultsLight,
};

export const LightHeroChipsWithSubtitleNoCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
LightHeroChipsWithSubtitleNoCentered.args = {
  ...defaultsLight,
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`
};

export const LightHeroChipsNoSubtitleCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
LightHeroChipsNoSubtitleCentered.args = {
  ...defaultsLight,
  centerText: true,
};

export const LightHeroChipsWithSubtitleCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
LightHeroChipsWithSubtitleCentered.args = {
  ...defaultsLight,
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`,
  centerText: true,
};