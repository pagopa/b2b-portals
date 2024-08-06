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

export const DarkHeroChipsNoSubtitleCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
DarkHeroChipsNoSubtitleCentered.args = {
  ...defaultsDark,
  centerText: true,
};

export const DarkHeroChipsWithSubtitleCentered: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
DarkHeroChipsWithSubtitleCentered.args = {
  ...defaultsDark,
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`,
  centerText: true,
};