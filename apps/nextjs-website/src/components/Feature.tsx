'use client';
import { Feature as FeatureRC } from '@react-components/components';
import { FeatureProps } from '@react-components/types';
import { FeatureSection } from '@/lib/fetch/types/PageSection';
import { Locale, SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LocalizeURL } from '@/lib/linkLocalization';
const featureLabels: Record<Locale, FeatureProps['labels']> = {
  it: {
    pagination: 'Paginazione carosello',
    goToSlide: (index) => `Vai alla slide ${index + 1}`,
    slideOf: (index, total) => `Slide ${index + 1} di ${total}`,
    cardPrevious: 'Card precedente',
    cardNext: 'Card successiva',
  },
  en: {
    pagination: 'Karussell-Seitennummerierung',
    goToSlide: (index) => `Go to slide ${index + 1}`,
    slideOf: (index, total) => `Slide ${index + 1} of ${total}`,
    cardPrevious: 'Previous card',
    cardNext: 'Next card',
  },
  de: {
    pagination: 'Paginazione carosello',
    goToSlide: (index) => `Weiter zu Folie ${index + 1}`,
    slideOf: (index, total) => `Folie ${index + 1} von ${total}`,
    cardPrevious: 'vorherige Karte',
    cardNext: 'nächste Karte',
  },
  fr: {
    pagination: 'Pagination du carrousel',
    goToSlide: (index) => `Passez à la diapositive ${index + 1}`,
    slideOf: (index, total) => `Diapositive ${index + 1} sur ${total}`,
    cardPrevious: 'carte précédente',
    cardNext: 'carte suivante',
  },
  sl: {
    pagination: 'Vrtiljak straničenja',
    goToSlide: (index) => `pojdi na diapozitiv ${index + 1}`,
    slideOf: (index, total) => `Diapozitiv ${index + 1} od ${total}`,
    cardPrevious: 'prejšnja kartica',
    cardNext: 'naslednja karta',
  },
};

const makeFeatureProps = ({
  locale,
  defaultLocale,
  items,
  ...rest
}: FeatureSection & SiteWidePageData): FeatureProps => ({
  labels: featureLabels[locale],
  items: items.map((item) => ({
    title: item.title,
    subtitle: item.subtitle,
    iconURL: item.icon.url,
    ...(item.link && {
      link: {
        label: item.link.label,
        href: LocalizeURL({ URL: item.link.href, locale, defaultLocale }),
        ariaLabel: item.link.ariaLabel ?? '',
      },
    }),
  })),
  ...rest,
});

const Feature = (props: FeatureSection & SiteWidePageData) => (
  <FeatureRC {...makeFeatureProps(props)} />
);

export default Feature;
