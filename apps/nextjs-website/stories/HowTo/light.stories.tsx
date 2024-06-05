import { StoryFn, Meta } from '@storybook/react';
import { HowTo } from '@react-components/components';
import { HowToTemplate, defaultPropsLightWithIcon, defaultPropsLightWithoutIcon } from './howtoCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof HowTo> = {
  title: 'Components/HowTo/Light',
  component: HowTo,
};
export default meta;

export const LightHowToFull: StoryFn<typeof HowTo> = HowToTemplate.bind({});
LightHowToFull.args = {
  ...defaultPropsLightWithIcon,
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'center',
};

export const LightHowToFullNoLink: StoryFn<typeof HowTo> = HowToTemplate.bind({});
LightHowToFullNoLink.args = {
  ...defaultPropsLightWithIcon,
  stepsAlignment: 'center',
};

export const LightHowToNoIcons: StoryFn<typeof HowTo> = HowToTemplate.bind({});
LightHowToNoIcons.args = {
  ...defaultPropsLightWithoutIcon,
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'center',
};

export const LightHowToNoLinkNoIcons: StoryFn<typeof HowTo> = HowToTemplate.bind({});
LightHowToNoLinkNoIcons.args = {
  ...defaultPropsLightWithoutIcon,
  stepsAlignment: 'center',
};

export const LightHowToFullCenter: StoryFn<typeof HowTo> = HowToTemplate.bind({});
LightHowToFullCenter.args = {
  ...defaultPropsLightWithIcon,
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'center',
};

export const LightHowToFullLeft: StoryFn<typeof HowTo> = HowToTemplate.bind({});
LightHowToFullLeft.args = {
  ...defaultPropsLightWithIcon,
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'left',
};

export const LightHowToFullRight: StoryFn<typeof HowTo> = HowToTemplate.bind({});
LightHowToFullRight.args = {
  ...defaultPropsLightWithIcon,
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'right',
};