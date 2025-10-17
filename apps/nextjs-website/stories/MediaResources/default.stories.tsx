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

export const MediaResourcesFullLight: StoryFn<typeof MediaResources> =
  Template.bind({});
MediaResourcesFullLight.args = {
  title: 'Risorse per i media',
  theme: 'light',
  themeVariant: 'SEND',
  sectionID: 'media-resources',
  items: [
    {
      title: 'Documenti su IO',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica il documento',
    },
    {
      title: 'Messaggi',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica immagine',
    },
    {
      title: 'Pagamenti',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica il documento',
    },
    {
      title: 'SEND',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica immagine',
    },
    {
      title: 'Servizi',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica immagine',
    },
    {
      title: 'App IO',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica immagine',
    },
    {
      title: 'Logo e brand manual',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica il manuale',
    },
  ],
};

export const MediaResourcesFullDark: StoryFn<typeof MediaResources> =
  Template.bind({});
MediaResourcesFullDark.args = {
  title: 'Risorse per i media',
  theme: 'dark',
  themeVariant: 'SEND',
  sectionID: 'media-resources',
  items: [
    {
      title: 'Documenti su IO',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica il documento',
    },
    {
      title: 'Messaggi',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica immagine',
    },
    {
      title: 'Pagamenti',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica il documento',
    },
    {
      title: 'SEND',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica immagine',
    },
    {
      title: 'Servizi',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica immagine',
    },
    {
      title: 'App IO',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica immagine',
    },
    {
      title: 'Logo e brand manual',
      thumbnailURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      resourceURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/man_1ff6c4bf50.webp',
      label: 'Scarica il manuale',
    },
  ],
};
