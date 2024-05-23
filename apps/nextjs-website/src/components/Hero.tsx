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
  ...rest
}: HeroSection): HeroProps => ({
  ...rest,
  useHoverlay: false,
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  ...(image && { image: image.url }),
  ...(image && image.alternativeText && { altText: image.alternativeText }),
  ...(background && { background: background.url }),
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
        ...ctaBtn,
        ...(icon && { startIcon: Icon(icon) }),
      })),
    }),
});

const Hero = (props: HeroSection) => <HeroRC {...makeHeroProps(props)} />;

export default Hero;
