import { Meta, StoryFn } from '@storybook/react';
import { LogoWall } from '@react-components/components';
import {
  LogoWallTemplate,
  defaultPropsLight,
  onlySecondRowPropsLight,
  onlyFirstRowPropsLight,
  oneFirstRowLogoPropsLight,
  oneSecondRowLogoPropsLight,
} from './logowallCommons';

const meta: Meta<typeof LogoWall> = {
  title: 'Components/LogoWall/Light',
  component: LogoWall,
};

export default meta;

export const Full: StoryFn<typeof LogoWall> = LogoWallTemplate.bind({});
Full.args = {
  ...defaultPropsLight,
};

export const OnlyFirstRow: StoryFn<typeof LogoWall> = LogoWallTemplate.bind({});
OnlyFirstRow.args = {
  ...onlyFirstRowPropsLight,
};

export const OnlySecondRow: StoryFn<typeof LogoWall> = LogoWallTemplate.bind(
  {},
);
OnlySecondRow.args = {
  ...onlySecondRowPropsLight,
};

export const OneLogoFirstRow: StoryFn<typeof LogoWall> = LogoWallTemplate.bind(
  {},
);
OneLogoFirstRow.args = {
  ...oneFirstRowLogoPropsLight,
};

export const OneLogoSecondRow: StoryFn<typeof LogoWall> = LogoWallTemplate.bind(
  {},
);
OneLogoSecondRow.args = {
  ...oneSecondRowLogoPropsLight,
};
