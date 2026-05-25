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

export const CardsOnly: StoryFn<typeof SimpleCards> = SimpleCardsTemplate.bind(
  {},
);
CardsOnly.args = {
  ...defaultPropsDark,
  items: generateItemsWithLinks(4),
};

export const CardsOnlyWithoutLinks: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
CardsOnlyWithoutLinks.args = {
  ...defaultPropsDark,
  items: generateItems(4),
};

export const EditorialTitleOnly: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
EditorialTitleOnly.args = {
  ...defaultPropsDark,
  title: 'Adotta il brand IT-Wallet',
};

export const EditorialTitleAndParagraph: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
EditorialTitleAndParagraph.args = {
  ...defaultPropsDark,
  title: 'Adotta il brand IT-Wallet',
  subtitle: exampleSubtitle,
  body: markdownLikeBody,
};

export const EditorialTitleParagraphAndButtons: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
EditorialTitleParagraphAndButtons.args = {
  ...defaultPropsDark,
  title: 'Adotta il brand IT-Wallet',
  subtitle: exampleSubtitle,
  body: markdownLikeBody,
  ctaButtons: exampleCtaButtons,
};

export const EditorialWithImage: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
EditorialWithImage.args = {
  ...defaultPropsDark,
  title: 'Adotta il brand IT-Wallet',
  subtitle: exampleSubtitle,
  body: markdownLikeBody,
  ctaButtons: exampleCtaButtons,
  imageURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
  imageAlt: '',
};
