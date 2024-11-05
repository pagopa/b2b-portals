import { Meta, StoryFn } from '@storybook/react';
import { HeroChipsTemplate, defaultsDark } from './herochipsCommons';
import { HeroChips } from '@react-components/components';

const meta: Meta<typeof HeroChips> = {
  title: 'Components/HeroChips/Dark',
  component: HeroChips,
};
export default meta;

export const DarkHeroChipsNoSubtitle: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
DarkHeroChipsNoSubtitle.args = {
  ...defaultsDark,
};

export const DarkHeroChipsWithSubtitle: StoryFn<typeof HeroChips> = HeroChipsTemplate.bind({});
DarkHeroChipsWithSubtitle.args = {
  ...defaultsDark,
  subtitle: `In questa pagina puoi consultare la lista in costante aggiornamento di tutti gli Enti nazionali e locali che sono saliti a bordo di IO, con il dettaglio dei rispettivi servizi già a disposizione dei cittadini.`
};