'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Hero as HeroEC } from '@react-components';
import { HeroProps } from '@react-components-props';
import { HeroSection } from '@/lib/fetch/types/PageSection';
import Icon from '@/components/Icon';

const makeHeroProps = ({
  theme,
  subtitle,
  image,
  background,
  ctaButtons,
  ...rest
}: HeroSection): HeroProps => ({
  ...rest,
  theme,
  useHoverlay: false,
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  ...(image && { image: image.url }),
  ...(image && image.alternativeText && { altText: image.alternativeText }),
  ...(background && { background: background.url }),
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
        ...ctaBtn,
        color: theme === 'dark' ? 'negative' : 'primary',
        ...(icon && { startIcon: Icon(icon) }),
      })),
    }),
});

const Hero = (props: HeroSection) => <HeroEC {...makeHeroProps(props)} />;

export default Hero;
