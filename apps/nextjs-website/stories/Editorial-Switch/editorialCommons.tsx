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
  title: 'Top Title',
  subtitle: 'Top Subtitle',
  sections: [
    {
      id: 1,
      buttonText: 'Button 1' ,
      content: {
        sectionID: null,
        theme: 'light',
        title: 'Editorial 1',
        body: 'Light Editorial',
        width: 'standard',
        image: <img src='https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png' alt="placeholder" />,
        mobileImage: <img src='https://notifichedigitali.pagopa.it/static/images/pi-infoblock-1.png' alt="placeholder" />
      },
    },
    {
      id: 2,
      buttonText: 'Button 2' ,
      content: {
        sectionID: null,
        theme: 'dark',
        title: 'Editorial 2',
        body: 'Dark Editorial',
        width: 'standard',
        image: <img src='https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png' alt="placeholder" />,
        mobileImage: <img src='https://notifichedigitali.pagopa.it/static/images/pi-infoblock-1.png' alt="placeholder" />
      },
    },
  ],
});

// Define the default props
export const defaultPropsDark = generateDefaultProps('dark');
export const defaultPropsLight = generateDefaultProps('light');