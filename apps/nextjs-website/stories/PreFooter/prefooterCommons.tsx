import { StoryFn } from '@storybook/react';
import { PreFooter } from '@react-components/components';
import { PreFooterProps } from '@react-components/types/PreFooter/PreFooter';

// Define a "Template" function that sets how args map to rendering
export const PreFooterTemplate: StoryFn<PreFooterProps> = (args) => <PreFooter {...args} />;

// Function to generate default props with a given theme
const generateDefaultProps = (theme: 'light' | 'dark'): Partial<PreFooterProps> => ({
  title: 'This is the Title',
  theme,
  decoration: { url: 'https://s3-alpha-sig.figma.com/img/ae80/98d2/364735b02ccaf9e7f95fd6af6989f154?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ohlkbH8BdmJlKp2p6st585VhvjuedEEU9TXArCHlshf9IeSMGvvkjpFlyT1CFUfpgIk8g5IJZrCehDTGfqeqkir8OgblfzX1htJ~FvPCX2V8W-zA3MGgPipQAe46FVAyJNUMPVaI0SWYLDCTUq-UTXgStL-KIkaszBwyGq1-UKk0zBSF4kDAXSzwQJOfbw7OdAcNcVjg8ecZtMx1XMuzle2kOjtXgDc0z7lLRkxiZn558CSMqf-GdvlfRRwChYlFTFm2u~XYUs-H-2~Vocjjn7prAtudZCmPCjVhHa8Qg6locTt7jPIkUgX7xcYNut6Qsi1i9hRnWEDzZPFWBhWOEw__' },
});

// Define the default props with light theme
export const defaultPropsLight = generateDefaultProps('light');

// Define the default props with dark theme
export const defaultPropsDark = generateDefaultProps('dark');
