import { Meta, StoryFn } from '@storybook/react';
import { SimpleCards } from '@react-components/components';
import {
  defaultPropsLight,
  exampleCtaButtons,
  exampleSubtitle,
  generateItems,
  generateItemsWithLinks,
  markdownLikeBody,
  SimpleCardsTemplate,
} from './simpleCardsCommons';

const meta: Meta<typeof SimpleCards> = {
  title: 'Components/SimpleCards/Light',
  component: SimpleCards,
};

export default meta;

export const CardsOnly: StoryFn<typeof SimpleCards> = SimpleCardsTemplate.bind(
  {},
);
CardsOnly.args = {
  ...defaultPropsLight,
  items: generateItemsWithLinks(4),
};

export const CardsOnlyWithoutLinks: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
CardsOnlyWithoutLinks.args = {
  ...defaultPropsLight,
  items: generateItems(4),
};

export const EditorialTitleOnly: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
EditorialTitleOnly.args = {
  ...defaultPropsLight,
  title: 'Adotta il brand IT-Wallet',
};

export const EditorialTitleAndParagraph: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
EditorialTitleAndParagraph.args = {
  ...defaultPropsLight,
  title: 'Adotta il brand IT-Wallet',
  subtitle: exampleSubtitle,
  body: markdownLikeBody,
};

export const EditorialTitleParagraphAndButtons: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
EditorialTitleParagraphAndButtons.args = {
  ...defaultPropsLight,
  title: 'Adotta il brand IT-Wallet',
  subtitle: exampleSubtitle,
  body: markdownLikeBody,
  ctaButtons: exampleCtaButtons,
};

export const EditorialWithImage: StoryFn<typeof SimpleCards> =
  SimpleCardsTemplate.bind({});
EditorialWithImage.args = {
  ...defaultPropsLight,
  title: 'Adotta il brand IT-Wallet',
  subtitle: exampleSubtitle,
  body: markdownLikeBody,
  ctaButtons: exampleCtaButtons,
  imageURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
  imageAlt: '',
};
