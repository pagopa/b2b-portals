import { StoryFn, Meta } from '@storybook/react';
import { HowTo } from '@react-components/components';
import {
  HowToTemplate,
  defaultPropsDarkWithIcon,
  defaultPropsDarkWithoutIcon,
} from './howtoCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof HowTo> = {
  title: 'Components/HowTo/Dark',
  component: HowTo,
};
export default meta;

export const DarkHowToFull: StoryFn<typeof HowTo> = HowToTemplate.bind({});
DarkHowToFull.args = {
  ...defaultPropsDarkWithIcon,
  link: {
    label: 'Learn More',
    href: '#',
  },
  stepsAlignment: 'center',
};

export const DarkHowToFullNoLink: StoryFn<typeof HowTo> = HowToTemplate.bind(
  {}
);
DarkHowToFullNoLink.args = {
  ...defaultPropsDarkWithIcon,
  stepsAlignment: 'center',
};

export const DarkHowToNoIcons: StoryFn<typeof HowTo> = HowToTemplate.bind({});
DarkHowToNoIcons.args = {
  ...defaultPropsDarkWithoutIcon,
  link: {
    label: 'Learn More',
    href: '#',
  },
  stepsAlignment: 'center',
};

export const DarkHowToNoLinkNoIcons: StoryFn<typeof HowTo> = HowToTemplate.bind(
  {}
);
DarkHowToNoLinkNoIcons.args = {
  ...defaultPropsDarkWithoutIcon,
  stepsAlignment: 'center',
};

export const DarkHowToFullCenter: StoryFn<typeof HowTo> = HowToTemplate.bind(
  {}
);
DarkHowToFullCenter.args = {
  ...defaultPropsDarkWithIcon,
  link: {
    label: 'Learn More',
    href: '#',
  },
  stepsAlignment: 'center',
};

export const DarkHowToFullLeft: StoryFn<typeof HowTo> = HowToTemplate.bind({});
DarkHowToFullLeft.args = {
  ...defaultPropsDarkWithIcon,
  link: {
    label: 'Learn More',
    href: '#',
  },
  stepsAlignment: 'left',
};

export const DarkHowToFullRight: StoryFn<typeof HowTo> = HowToTemplate.bind({});
DarkHowToFullRight.args = {
  ...defaultPropsDarkWithIcon,
  link: {
    label: 'Learn More',
    href: '#',
  },
  stepsAlignment: 'right',
};
