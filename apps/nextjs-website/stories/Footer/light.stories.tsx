import { Meta, StoryFn } from '@storybook/react';
import { StorybookFooter } from './component';
interface Props {
  showFundedByNextGenerationEULogo: boolean;
}

const meta: Meta<typeof StorybookFooter> = {
  title: 'Components/Footer/Light',
  component: StorybookFooter,
  argTypes: {
    showFundedByNextGenerationEULogo: {
      name: 'Mostra logo EU',
      control: 'boolean',
      description: 'Mostra il logo NextGenerationEU nel footer',
      required: true,
    },
  },
};

export default meta;

const Template: StoryFn<Props> = (args) => <StorybookFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  showFundedByNextGenerationEULogo: true,
};
