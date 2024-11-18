import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Footer } from '@react-components/components';
import { FooterProps } from '@react-components/types';
import { FacebookOutlined } from '@mui/icons-material';

// Define the default export with metadata about your component
const meta: Meta<typeof Footer> = {
  title: 'Components/Footer/Light',
  component: Footer,
};
export default meta;

const FooterTemplate: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const Default: StoryFn<typeof Footer> = FooterTemplate.bind({});
Default.args = {
  companyLink: {
    href: '#',
    ariaLabel: 'Company',
  },
  legalInfo: 'Legal Info',
  links: {
    aboutUs: {
      links: [
        {
          label: 'Link 1',
          href: '#',
          ariaLabel: 'Link 1',
        },
      ],
    },
    services: {
      title: 'Services',
      links: [
        {
          label: 'Service 1',
          href: '#',
          ariaLabel: 'Service 1',
        },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        {
          label: 'Resource 1',
          href: '#',
          ariaLabel: 'Resource 1',
        },
      ],
    },
    followUs: {
      title: 'Follow Us',
      socialLinks: [
        {
          icon: <FacebookOutlined />,
          href: '#',
        },
      ],
      links: [
        {
          label: 'Social Media 1',
          href: '#',
          ariaLabel: 'Social Media 1',
        },
      ],
    },
  },
  showFundedByNextGenerationEULogo: true,
  languages: [
    {
      id: 'it',
      value: 'Italiano',
      href: '#',
    },
    {
      id: 'en',
      value: 'English',
      href: '#',
    },
  ],
  activeLanguage: {
    id: 'en',
    value: 'English',
    href: '#',
  },
};