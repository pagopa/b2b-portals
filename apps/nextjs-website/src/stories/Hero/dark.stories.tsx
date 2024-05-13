// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import Image from 'next/image';
import { ThemeProvider } from '@mui/material/styles';
import { heroCommonProps, background, image } from './heroCommons';
import { Hero } from '@react-components/components';
import { HeroProps } from '@react-components/types';
import { theme } from '../../app/theme';

// Define the default export with metadata about your component
export default {
  title: 'Components/Hero',
  component: Hero,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<HeroProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Hero {...args} />
  </ThemeProvider>
);

const ctaButtons: HeroProps['ctaButtons'] = [
  {
    text: 'Button 1',
    variant: 'contained',
    href: '#',
  },
  {
    text: 'Button 2',
    variant: 'outlined',
    href: '#',
  },
];

// Define a story by binding a function to the Template with specific args
export const Default = Template.bind({});
Default.args = {
  ...heroCommonProps,
  size: 'medium',
  inverse: false,
  background: <Image src={background} alt='Background image' />,
  theme: 'dark',
  image: <Image src={image} alt='Hero image' />,
  altText: 'Alt text for image',
  ctaButtons,
};