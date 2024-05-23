import { StoryFn, Meta } from '@storybook/react';
import { Typography } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Typography> = {
  title: 'General/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: [
        'body1',
        'headline',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'overline',
        'sidenav',
        'caption',
        'caption-semibold',
        'monospaced',
      ],
      control: { type: 'select' },
    },
  },
};
export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Default: StoryFn<typeof Typography> = Template.bind({});
Default.args = {
  variant: 'body1',
  children: 'Default Typography Component',
};

export const Headline: StoryFn<typeof Typography> = Template.bind({});
Headline.args = {
  variant: 'headline',
  children: 'Headline',
};

export const H1: StoryFn<typeof Typography> = Template.bind({});
H1.args = {
  variant: 'h1',
  children: 'Heading Title 1',
};

export const H2: StoryFn<typeof Typography> = Template.bind({});
H2.args = {
  variant: 'h2',
  children: 'Heading Title 2',
};

export const H3: StoryFn<typeof Typography> = Template.bind({});
H3.args = {
  variant: 'h3',
  children: 'Heading Title 3',
};

export const H4: StoryFn<typeof Typography> = Template.bind({});
H4.args = {
  variant: 'h4',
  children: 'Heading Title 4',
};

export const H5: StoryFn<typeof Typography> = Template.bind({});
H5.args = {
  variant: 'h5',
  children: 'Heading Title 5',
};

export const H6: StoryFn<typeof Typography> = Template.bind({});
H6.args = {
  variant: 'h6',
  children: 'Heading Title 6',
};

export const Overline: StoryFn<typeof Typography> = Template.bind({});
Overline.args = {
  variant: 'overline',
  children: 'Overline',
};

export const Sidenav: StoryFn<typeof Typography> = Template.bind({});
Sidenav.args = {
  variant: 'sidenav',
  children: 'Sidenav',
};

export const Body1: StoryFn<typeof Typography> = Template.bind({});
Body1.args = {
  variant: 'body1',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere maximus semper. Etiam mauris magna, commodo sed egestas vel, scelerisque a turpis. Nulla a viverra eros. Nunc suscipit elementum tortor non ornare. Pellentesque vel erat nibh. Sed vulputate facilisis tincidunt. Phasellus euismod nibh ac faucibus faucibus. Suspendisse convallis, libero fermentum dictum commodo, nisi velit euismod sem, quis mollis nisl nibh lobortis nibh. Integer rhoncus tincidunt tellus laoreet scelerisque. Donec sodales nulla vel elit pretium, in dictum neque rhoncus.',
};
export const Body2: StoryFn<typeof Typography> = Template.bind({});
Body2.args = {
  variant: 'body2',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere maximus semper. Etiam mauris magna, commodo sed egestas vel, scelerisque a turpis. Nulla a viverra eros. Nunc suscipit elementum tortor non ornare. Pellentesque vel erat nibh. Sed vulputate facilisis tincidunt. Phasellus euismod nibh ac faucibus faucibus. Suspendisse convallis, libero fermentum dictum commodo, nisi velit euismod sem, quis mollis nisl nibh lobortis nibh. Integer rhoncus tincidunt tellus laoreet scelerisque. Donec sodales nulla vel elit pretium, in dictum neque rhoncus.',
};

export const Caption: StoryFn<typeof Typography> = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: 'Caption',
};

export const CaptionSemiBold: StoryFn<typeof Typography> = Template.bind({});
CaptionSemiBold.args = {
  variant: 'caption-semibold',
  children: 'Caption Semibold',
};

export const Monospaced: StoryFn<typeof Typography> = Template.bind({});
Monospaced.args = {
  variant: 'monospaced',
  children: 'IT 99 C 12345 67890 123456789012',
};
