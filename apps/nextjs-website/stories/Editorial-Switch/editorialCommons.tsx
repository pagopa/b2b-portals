import { StoryFn } from '@storybook/react';
import { EditorialSwitch } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types/Editorial-Switch/Editorial-Switch.types';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

// Define a "Template" function that sets how args map to rendering
export const EditorialSwitchTemplate: StoryFn<EditorialSwitchProps> = (args) => <EditorialSwitch {...args} />;

// Function to generate CTA buttons
export const generateCtaButtons = (count: number): CtaButtonProps[] =>
  Array.from({ length: count }, (_, i) => ({
    text: `CTA Button ${i + 1}`,
    variant: 'contained',
  }));

// Function to generate default props
const generateDefaultProps = (theme: 'light' | 'dark'): Partial<EditorialSwitchProps> => ({
  theme,
  toptitle: 'Top Title',
  topsubtitle: 'Top Subtitle',
  width: 'wide',
  sections: [
    {
      button: { id: '1', text: 'Button 1' },
      content: {
        id: '1',
        eyelet: 'Eyelet Content 1',
        body: 'Body Content 1',
        title: 'Title Content 1',
        pattern: 'dots',
        image: {
          src: 'https://notifichedigitali.pagopa.it/static/images/pa-infoblock-2.png',
          alt: 'Placeholder',
        },
        ctaButtons: generateCtaButtons(2),
      },
    },
    {
      button: { id: '2', text: 'Button 2' },
      content: {
        id: '2',
        eyelet: 'Eyelet Content 2',
        body: 'Body Content 2',
        title: 'Title Content 2',
        pattern: 'none',
        image: {
          src: 'https://notifichedigitali.pagopa.it/static/images/pa-infoblock-3.png',
          alt: 'Placeholder',
        },
        ctaButtons: generateCtaButtons(1),
      },
    },
  ],
});

// Define the default props
export const defaultPropsDark = generateDefaultProps('dark');
export const defaultPropsLight = generateDefaultProps('light');