import { Meta, StoryFn } from '@storybook/react';
import { StatsProps } from '@react-components/types/Stats/Stats.types';
import { Stats } from '@react-components/components';

// Define the default export with metadata about your component
const meta: Meta<typeof Stats> = {
  title: 'Components/Stats/Default',
  component: Stats,
};
export default meta;

// Define a 'Template' function that sets how args map to rendering
const StatsTemplate: StoryFn<StatsProps> = (args) => {
  return <Stats {...args} />;
};

export const StatsFull: StoryFn<typeof Stats> = StatsTemplate.bind({});
StatsFull.args = {
  eyelet: 'I NUMERI',
  title: 'Siamo in tanti',
  body: 'Ogni giorno si uniscono nuovi enti e servizi, e sempre più persone usano IO.',
  items: [
    {
      title: '647M',
      description: 'messaggi inviati dagli enti su IO',
      iconURL: 'https://io.italia.it/assets/img/io-it-logo-blue.svg',
    },
    {
      title: '8M',
      description: 'metodi di pagamento aggiunti dalle persone',
      iconURL: 'https://io.italia.it/assets/img/io-it-logo-blue.svg',
    },
    {
      title: '319.629',
      description: 'servizi locali e nazionali disponibili',
      iconURL: 'https://io.italia.it/assets/img/io-it-logo-blue.svg',
    },
  ],
};

export const StatsMinimum: StoryFn<typeof Stats> = StatsTemplate.bind({});
StatsMinimum.args = {
  title: 'Siamo in tanti',
  items: [
    { title: '647M', description: 'messaggi inviati dagli enti su IO' },
    { title: '8M', description: 'metodi di pagamento aggiunti dalle persone' },
  ],
};
