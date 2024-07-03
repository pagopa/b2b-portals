import React from 'react';
import MegaHeader from '@react-components/components/MegaHeader/MegaHeader';
import { StoryFn, Meta } from '@storybook/react';
import { defaultMenuItems, defaultSocialMediaLinks } from './megaheaderCommon';


const meta: Meta<typeof MegaHeader> = {
  title: 'Components/MegaHeader/Light',
  component: MegaHeader,
};
export default meta;

const Template: StoryFn = (args) => <MegaHeader {...args} />;

export const Default: StoryFn = Template.bind({});
Default.args = {
  menuItems: defaultMenuItems,
  socialMediaLinks: defaultSocialMediaLinks,
};