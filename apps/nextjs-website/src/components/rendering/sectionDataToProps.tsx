import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import { FeatureSectionData } from '@/lib/fetch/page';

export const SectionDataToFeatureProps = ({
  title,
  theme,
  showCarouselMobile,
  items,
}: FeatureSectionData): FeatureProps => ({
  title,
  theme,
  showCarouselMobile,
  items: items.map((item) => ({
    icon: item.icon,
    iconColor: item.iconColor,
    title: item.title,
    subtitle: item.subtitle,
    linkText: item.linkText,
    linkURL: item.linkURL,
  })),
});
