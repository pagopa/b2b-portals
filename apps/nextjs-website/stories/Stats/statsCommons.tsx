import { Meta, StoryFn } from '@storybook/react';
import { StatsProps } from '@react-components/types/Stats/Stats.types';
import { Stats } from '@react-components/components';

const meta: Meta<typeof Stats> = {
  title: 'Components/Stats',
  component: Stats,
};
export default meta;

const StatsTemplate: StoryFn<StatsProps> = (args) => {
  const { sectionID, ...restArgs } = args;
  return <Stats {...restArgs} />;
};

export const StatsFull: StoryFn<typeof Stats> = StatsTemplate.bind({});
StatsFull.args = {
  eyelet: 'I NUMERI',
  title: 'Siamo in tanti',
  body: 'Ogni giorno si uniscono nuovi enti e servizi, e sempre più persone usano IO.',
  stats: [
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
  sectionID: 'stats-section',
};

export const StatsMinimum: StoryFn<typeof Stats> = StatsTemplate.bind({});
StatsMinimum.args = {
  title: 'Siamo in tanti',
  stats: [
    { title: '647M', description: 'messaggi inviati dagli enti su IO' },
    { title: '8M', description: 'metodi di pagamento aggiunti dalle persone' },
  ],
  sectionID: 'stats-minimum-section',
};

// Default props for light theme
export const defaultPropsLight: StatsProps = {
  title: 'Siamo in tanti',
  eyelet: 'I NUMERI',
  body: 'Ogni giorno si uniscono nuovi enti e servizi, e sempre più persone usano IO.',
  stats: [
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
  sectionID: 'default-light-section',
};
