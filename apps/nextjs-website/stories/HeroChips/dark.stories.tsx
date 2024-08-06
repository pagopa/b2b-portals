import { Meta, StoryFn } from '@storybook/react';
import { HeroChipsTemplate, defaultsDark } from './herochipsCommons';
import { HeroChips } from '@react-components/components';

const meta: Meta<typeof HeroChips> = {
  title: 'Components/HeroChips/Dark',
  component: HeroChips,
};
export default meta;

export const DarkHeroChipsNoSubtitleNoCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
DarkHeroChipsNoSubtitleNoCentered.args = {
  ...defaultsDark,
};

export const DarkHeroChipsWithSubtitleNoCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
DarkHeroChipsWithSubtitleNoCentered.args = {
  ...defaultsDark,
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`
};

export const DarkHeroChipsNoSubtitleOnlyTitleCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
DarkHeroChipsNoSubtitleOnlyTitleCentered.args = {
  ...defaultsDark,
  isTitleCentered: true,
};

export const DarkHeroChipsWithSubtitleOnlyTitleCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
DarkHeroChipsWithSubtitleOnlyTitleCentered.args = {
  ...defaultsDark,
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`,
  isTitleCentered: true,
};

export const DarkHeroChipsWithSubtitleFullCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
DarkHeroChipsWithSubtitleFullCentered.args = {
  ...defaultsDark,
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`,
  isTitleCentered: true,
  isSubtitleCentered: true,
};
