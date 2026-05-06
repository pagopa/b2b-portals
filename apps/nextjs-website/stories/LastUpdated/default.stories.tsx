import { Meta, StoryFn } from '@storybook/react';
import { LastUpdated } from '@react-components/components';
import { LastUpdatedProps } from '@react-components/types/LastUpdated/LastUpdated.types';

// Define the default export with metadata about your component
const meta: Meta<typeof LastUpdated> = {
  title: 'Components/LastUpdated/Default',
  component: LastUpdated,
};
export default meta;

// Define a 'Template' function that sets how args map to rendering
const LastUpdatedTemplate: StoryFn<LastUpdatedProps> = (args) => (
  <LastUpdated {...args} />
);

export const LastUpdatedSectionFull: StoryFn<typeof LastUpdated> =
  LastUpdatedTemplate.bind({});
LastUpdatedSectionFull.args = {
  label: 'Ultimo aggiornamento',
  lastUpdated: '05 maggio 2026',
  link: {
    label: 'Licenza',
    href: 'https://storybook.b2bportals.pagopa.it/?path=/story/components-lastupdated',
    ariaLabel: 'a11y',
  },
};
