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

export const MediaResourcesFull = Template.bind({});
MediaResourcesFull.args = {
  sectionTitle: 'Risorse per i media',
  theme: 'light',
  themeVariant: 'SEND',
  sectionID: 'media-resources',
  items: [
    {
      title: 'Documenti su IO',
      thumbnail: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      resource: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      icon: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      label: 'Scarica il documento',
    },
    {
      title: 'Messaggi',
      thumbnail: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      resource: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      icon: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      label: 'Scarica immagine',
    },
    {
      title: 'Pagamenti',
      thumbnail: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      resource: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      icon: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      label: 'Scarica il documento',
    },
    {
      title: 'SEND',
      thumbnail: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      resource: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      icon: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      label: 'Scarica immagine',
    },
    {
      title: 'Servizi',
      thumbnail: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      resource: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      icon: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      label: 'Scarica immagine',
    },
    {
      title: 'App IO',
      thumbnail: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      resource: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      icon: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      label: 'Scarica immagine',
    },
    {
      title: 'Logo e brand manual',
      thumbnail: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      resource: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      icon: {
        data: {
          attributes: {
            url: 'https://via.placeholder.com/200',
          },
        },
      },
      label: 'Scarica il manuale',
    },
  ],
};
