import { Meta, StoryFn } from '@storybook/react';
import { LogoWall } from '@react-components/components';
import {
  LogoWallTemplate,
  defaultPropsDark,
  onlySecondRowPropsDark,
  onlyFirstRowPropsDark,
  oneFirstRowLogoPropsDark,
  oneSecondRowLogoPropsDark,
} from './logowallCommons';

const meta: Meta<typeof LogoWall> = {
  title: 'Components/LogoWall/Dark',
  component: LogoWall,
};

export default meta;

export const Full: StoryFn<typeof LogoWall> = LogoWallTemplate.bind({});
Full.args = {
  ...defaultPropsDark,
};

export const OnlySecondRow: StoryFn<typeof LogoWall> =
  LogoWallTemplate.bind({});
OnlySecondRow.args = {
  ...onlySecondRowPropsDark,
};

export const OnlyFirstRow: StoryFn<typeof LogoWall> =
  LogoWallTemplate.bind({});
OnlyFirstRow.args = {
  ...onlyFirstRowPropsDark,
};

export const OneLogoFirstRow: StoryFn<typeof LogoWall> =
  LogoWallTemplate.bind({});
OneLogoFirstRow.args = {
  ...oneFirstRowLogoPropsDark,
};

export const OneLogoSecondRow: StoryFn<typeof LogoWall> =
  LogoWallTemplate.bind({});
OneLogoSecondRow.args = {
  ...oneSecondRowLogoPropsDark,
};