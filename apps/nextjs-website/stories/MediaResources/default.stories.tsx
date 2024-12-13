import { Meta, StoryFn } from '@storybook/react';
import MediaResources from '@react-components/components/MediaResources/MediaResources';
import { MediaResourcesProps } from '@react-components/types/MediaResources/MediaResources.types';

const meta: Meta<typeof MediaResources> = {
  title: 'Components/MediaResources/Default',
  component: MediaResources,
};
export default meta;

const Template: StoryFn<MediaResourcesProps> = (args) => (
  <MediaResources {...args} />
);

export const MediaResourcesFull: StoryFn<typeof MediaResources> = Template.bind(
  {}
);
MediaResourcesFull.args = {
  title: 'Risorse per i media',
  theme: 'light',
  themeVariant: 'SEND',
  sectionID: 'media-resources',
  items: [
    {
      title: 'Documenti su IO',
      thumbnailURL: 'https://via.placeholder.com/200',
      resourceURL: 'https://via.placeholder.com/200',
      label: 'Scarica il documento',
    },
    {
      title: 'Messaggi',
      thumbnailURL: 'https://via.placeholder.com/200',
      resourceURL: 'https://via.placeholder.com/200',
      label: 'Scarica immagine',
    },
    {
      title: 'Pagamenti',
      thumbnailURL: 'https://via.placeholder.com/200',
      resourceURL: 'https://via.placeholder.com/200',
      label: 'Scarica il documento',
    },
    {
      title: 'SEND',
      thumbnailURL: 'https://via.placeholder.com/200',
      resourceURL: 'https://via.placeholder.com/200',
      label: 'Scarica immagine',
    },
    {
      title: 'Servizi',
      thumbnailURL: 'https://via.placeholder.com/200',
      resourceURL: 'https://via.placeholder.com/200',
      label: 'Scarica immagine',
    },
    {
      title: 'App IO',
      thumbnailURL: 'https://via.placeholder.com/200',
      resourceURL: 'https://via.placeholder.com/200',
      label: 'Scarica immagine',
    },
    {
      title: 'Logo e brand manual',
      thumbnailURL: 'https://via.placeholder.com/200',
      resourceURL: 'https://via.placeholder.com/200',
      label: 'Scarica il manuale',
    },
  ],
};
