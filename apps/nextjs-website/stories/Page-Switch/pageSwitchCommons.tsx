import { StoryFn } from '@storybook/react';
import { PageSwitch } from '@react-components/components';
import { PageSwitchProps } from '@react-components/types';

export const PageSwitchTemplate: StoryFn<PageSwitchProps> = (args) => (
  <PageSwitch {...args} />
);

const generateDefaultProps = (
  theme: 'light' | 'dark',
  themeVariant: 'IO' | 'SEND',
): Partial<PageSwitchProps> => ({
  theme,
  themeVariant,
  title: 'Top Title',
  subtitle: (
    <p>
      Top subtitle with <a href='/'>link</a>
    </p>
  ),
});

export const defaultPropsDark = generateDefaultProps('dark', 'SEND');
export const defaultPropsLight = generateDefaultProps('light', 'SEND');
