import { Meta, StoryFn } from '@storybook/react';
import { LogoWall } from '@react-components/components';
import { LogoWallTemplate, getLogoWallStories } from './logowallCommons';

const meta: Meta<typeof LogoWall> = {
  title: 'Components/LogoWall/Dark',
  component: LogoWall,
};

export default meta;

const stories = getLogoWallStories('dark');

export const Full: StoryFn<typeof LogoWall> = LogoWallTemplate.bind({});
Full.args = stories.full;

export const OnlyFirstGroup: StoryFn<typeof LogoWall> = LogoWallTemplate.bind(
  {},
);
OnlyFirstGroup.args = stories.onlyFirstGroup;

export const ManyLogos: StoryFn<typeof LogoWall> = LogoWallTemplate.bind({});
ManyLogos.args = stories.manyLogos;
