'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Hero as HeroRC } from '@react-components/components';
import { HeroProps } from '@react-components/types';
import { HeroSection } from '@/lib/fetch/types/PageSection';
import Icon from '@/components/Icon';

const makeHeroProps = ({
  subtitle,
  image,
  background,
  ctaButtons,
  storeButtons,
  ...rest
}: HeroSection): HeroProps => ({
  ...rest,
  useHoverlay: false,
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  ...(image.data && { image: image.data.attributes.url }),
  ...(image.data &&
    image.data.attributes.alternativeText && {
      altText: image.data.attributes.alternativeText,
    }),
  ...(background.data && { background: background.data.attributes.url }),
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
        ...ctaBtn,
        ...(icon && { startIcon: Icon(icon) }),
      })),
    }),
  ...(storeButtons && {
    storeButtons: {
      ...(storeButtons.hrefGoogle && { hrefGoogle: storeButtons.hrefGoogle }),
      ...(storeButtons.hrefApple && { hrefApple: storeButtons.hrefApple }),
    },
  }),

  // TODO: Implement chips
  chips: [],
});

const Hero = (props: HeroSection) => <HeroRC {...makeHeroProps(props)} />;

export default Hero;
