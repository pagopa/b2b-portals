import React from 'react';
import { PageSwitch as PageSwitchRC } from '@react-components/components';
import { PageSwitchProps, PageSwitchSection as SectionType, PageSwitchContent } from '@react-components/types';
import { makeEditorialProps } from './Editorial';
import { makeCardsProps } from './Cards';
import { makeBannerLinkProps } from './BannerLink';

const makePageSwitchProps = ({
  subtitle,
  sections,
  ...rest
}: SectionType): PageSwitchProps => ({
  ...(subtitle && { subtitle }),
  sections: sections.map(({ contents, ...section }: { contents: PageSwitchContent[], buttonText: string, id: number }) => ({
    ...section,
    contents: contents.map((content: PageSwitchContent) => ({
      ...content,
      props: (() => {
        switch (content.type) {
          case 'Editorial':
            return makeEditorialProps(content.props);
          case 'Cards':
            return makeCardsProps(content.props);
          case 'BannerLink':
            return makeBannerLinkProps(content.props);
          default:
            return content.props;
        }
      })(),
    })),
  })),
  ...rest,
});

const PageSwitch = (props: SectionType) => (
  <PageSwitchRC {...makePageSwitchProps(props)} />
);

export default PageSwitch;
