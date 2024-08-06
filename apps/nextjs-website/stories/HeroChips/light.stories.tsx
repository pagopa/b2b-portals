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

export const LightHeroChipsNoSubtitleOnlyTitleCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
LightHeroChipsNoSubtitleOnlyTitleCentered.args = {
  ...defaultsLight,
  isTitleCentered: true,
};

export const LightHeroChipsWithSubtitleOnlyTitleCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
LightHeroChipsWithSubtitleOnlyTitleCentered.args = {
  ...defaultsLight,
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`,
  isTitleCentered: true,
};

export const LightHeroChipsWithSubtitleFullCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
LightHeroChipsWithSubtitleFullCentered.args = {
  ...defaultsLight,
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`,
  isTitleCentered: true,
  isSubtitleCentered: true,
};