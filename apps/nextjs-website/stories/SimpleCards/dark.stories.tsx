import { Meta, StoryFn } from '@storybook/react';
import { SimpleCards } from '@react-components/components';
import {
  defaultPropsDark,
  exampleCtaButtons,
  exampleSubtitle,
  generateItems,
  generateItemsWithLinks,
  markdownLikeBody,
  SimpleCardsTemplate,
} from './simpleCardsCommons';

const meta: Meta<typeof SimpleCards> = {
  title: 'Components/SimpleCards/Dark',
  component: SimpleCards,
};

export default meta;

const imageURL =
  'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg';

export const TitleOnlyLink: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleOnlyLink.args = {
  ...defaultPropsDark,
  items: generateItemsWithLinks(4),
};

export const TitleOnly: StoryFn<typeof SimpleCards> = SimpleCardsTemplate.bind(
  {},
);
TitleOnly.args = {
  ...defaultPropsDark,
  items: generateItems(4),
};

export const TitleAndLabelLink: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleAndLabelLink.args = {
  ...defaultPropsDark,
  items: generateItemsWithLinks(4, {
    withLabel: true,
  }),
};

export const TitleAndLabel: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleAndLabel.args = {
  ...defaultPropsDark,
  items: generateItems(4, {
    withLabel: true,
  }),
};

export const TitleLabelAndDescriptionLink: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleLabelAndDescriptionLink.args = {
  ...defaultPropsDark,
  items: generateItemsWithLinks(4, {
    withLabel: true,
    withText: true,
  }),
};

export const TitleLabelAndDescription: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleLabelAndDescription.args = {
  ...defaultPropsDark,
  items: generateItems(4, {
    withLabel: true,
    withText: true,
  }),
};

export const TitleAndDescriptionLink: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleAndDescriptionLink.args = {
  ...defaultPropsDark,
  items: generateItemsWithLinks(4, {
    withText: true,
  }),
};

export const TitleAndDescription: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleAndDescription.args = {
  ...defaultPropsDark,
  items: generateItems(4, {
    withText: true,
  }),
};

export const TitleOnlyLinkIcon: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleOnlyLinkIcon.args = {
  ...defaultPropsDark,
  items: generateItemsWithLinks(4, {
    withIcon: true,
  }),
};

export const TitleOnlyIcon: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleOnlyIcon.args = {
  ...defaultPropsDark,
  items: generateItems(4, {
    withIcon: true,
  }),
};

export const TitleAndLabelLinkIcon: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleAndLabelLinkIcon.args = {
  ...defaultPropsDark,
  items: generateItemsWithLinks(4, {
    withIcon: true,
    withLabel: true,
  }),
};

export const TitleAndLabelIcon: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleAndLabelIcon.args = {
  ...defaultPropsDark,
  items: generateItems(4, {
    withIcon: true,
    withLabel: true,
  }),
};

export const TitleLabelAndDescriptionLinkIcon: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleLabelAndDescriptionLinkIcon.args = {
  ...defaultPropsDark,
  items: generateItemsWithLinks(4, {
    withIcon: true,
    withLabel: true,
    withText: true,
  }),
};

export const TitleLabelAndDescriptionIcon: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleLabelAndDescriptionIcon.args = {
  ...defaultPropsDark,
  items: generateItems(4, {
    withIcon: true,
    withLabel: true,
    withText: true,
  }),
};

export const TitleAndDescriptionLinkIcon: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleAndDescriptionLinkIcon.args = {
  ...defaultPropsDark,
  items: generateItemsWithLinks(4, {
    withIcon: true,
    withText: true,
  }),
};

export const TitleAndDescriptionIcon: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleAndDescriptionIcon.args = {
  ...defaultPropsDark,
  items: generateItems(4, {
    withIcon: true,
    withText: true,
  }),
};

export const CardsOnly: StoryFn<typeof SimpleCards> = SimpleCardsTemplate.bind(
  {},
);
CardsOnly.args = {
  ...defaultPropsDark,
  items: generateItemsWithLinks(6, {
    withIcon: true,
    withLabel: true,
    withText: true,
  }),
};

export const TitleParagraphButtonImage: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleParagraphButtonImage.args = {
  ...defaultPropsDark,
  title: 'Adotta il brand IT-Wallet',
  body: markdownLikeBody,
  ctaButtons: exampleCtaButtons.slice(0, 1),
  imageURL,
  imageAlt: '',
  items: generateItemsWithLinks(3, {
    withLabel: true,
    withText: true,
  }),
};

export const TitleParagraphImage: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleParagraphImage.args = {
  ...defaultPropsDark,
  title: 'Adotta il brand IT-Wallet',
  body: markdownLikeBody,
  imageURL,
  imageAlt: '',
  items: generateItemsWithLinks(3, {
    withLabel: true,
    withText: true,
  }),
};

export const TitleParagraphButton: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleParagraphButton.args = {
  ...defaultPropsDark,
  title: 'Adotta il brand IT-Wallet',
  body: markdownLikeBody,
  ctaButtons: exampleCtaButtons.slice(0, 1),
  items: generateItemsWithLinks(3, {
    withLabel: true,
    withText: true,
  }),
};

export const TitleParagraph: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleParagraph.args = {
  ...defaultPropsDark,
  title: 'Adotta il brand IT-Wallet',
  body: markdownLikeBody,
  items: generateItemsWithLinks(3, {
    withLabel: true,
    withText: true,
  }),
};

export const TitleOnlyEditorial: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleOnlyEditorial.args = {
  ...defaultPropsDark,
  title: 'Adotta il brand IT-Wallet',
  items: generateItemsWithLinks(3, {
    withLabel: true,
    withText: true,
  }),
};

export const TitleParagraphCentered: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleParagraphCentered.args = {
  ...defaultPropsDark,
  textAlign: 'center',
  title: 'Adotta il brand IT-Wallet',
  body: markdownLikeBody,
  items: generateItemsWithLinks(4, {
    withIcon: true,
    withText: true,
  }),
};

export const TitleParagraphButtonCentered: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
TitleParagraphButtonCentered.args = {
  ...defaultPropsDark,
  textAlign: 'center',
  title: 'Adotta il brand IT-Wallet',
  body: markdownLikeBody,
  ctaButtons: exampleCtaButtons.slice(0, 1),
  items: generateItemsWithLinks(4, {
    withIcon: true,
    withText: true,
  }),
};

export const FullCentered: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
FullCentered.args = {
  ...defaultPropsDark,
  textAlign: 'center',
  title: 'Adotta il brand IT-Wallet',
  subtitle: exampleSubtitle,
  body: markdownLikeBody,
  ctaButtons: exampleCtaButtons,
  imageURL,
  imageAlt: '',
  items: generateItemsWithLinks(4, {
    withIcon: true,
    withLabel: true,
    withText: true,
  }),
};

export const Full: StoryFn<typeof SimpleCards> = SimpleCardsTemplate.bind({});
Full.args = {
  ...defaultPropsDark,
  title: 'Adotta il brand IT-Wallet',
  subtitle: exampleSubtitle,
  body: markdownLikeBody,
  ctaButtons: exampleCtaButtons,
  imageURL,
  imageAlt: '',
  items: generateItemsWithLinks(4, {
    withIcon: true,
    withLabel: true,
    withText: true,
  }),
};
