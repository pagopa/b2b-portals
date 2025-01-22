'use client';
import { PressReleasePage } from '@/lib/fetch/pressRelease';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { PressReleaseListSection } from '@/lib/fetch/types/PageSection';
import { LocalizeURL } from '@/lib/linkLocalization';
import { PressReleaseList as PressReleaseListRC } from '@react-components/components';
import { PressReleaseListProps } from '@react-components/types';

const makePressReleaseListProps = ({
  locale,
  defaultLocale,
  pressReleasePages,
  ...rest
}: PressReleaseListSection &
  SiteWidePageData & {
    pressReleasePages: ReadonlyArray<PressReleasePage>;
  }): PressReleaseListProps => ({
  ...rest,
  pressReleases: pressReleasePages.map((PRPage) => ({
    date: PRPage.pressRelease.date,
    title: PRPage.pressRelease.title,
    link: {
      label: locale === 'it' ? 'Leggi' : 'Read',
      href: LocalizeURL({
        URL: '/press-releases/' + PRPage.slug,
        locale,
        defaultLocale,
      }),
    },
    themeVariant: rest.themeVariant,
  })),
});

const PressReleaseList = (
  props: PressReleaseListSection &
    SiteWidePageData & {
      pressReleasePages: ReadonlyArray<PressReleasePage>;
    },
) => <PressReleaseListRC {...makePressReleaseListProps(props)} />;

export default PressReleaseList;
