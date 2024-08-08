import React from 'react';
import { PageSwitch as PageSwitchRC } from '@react-components/components';
import { PageSwitchProps } from '@react-components/types';
import { PageSwitchSection } from '@/lib/fetch/types/PageSection';
import { makeEditorialProps } from './Editorial';
import { makeCardsProps } from './Cards';
import { makeBannerLinkProps } from './BannerLink';

const makePageSwitchProps = ({
  subtitle,
  sections,
  ...rest
}: PageSwitchSection): PageSwitchProps => ({
  ...(subtitle && { subtitle }),
  sections: sections.map(({ content, ...section }) => ({
    ...section,
    content: {
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
      })()
    },
  })),
  ...rest,
});

const PageSwitch = (props: PageSwitchSection) => (
  <PageSwitchRC {...makePageSwitchProps(props)} />
);

export default PageSwitch;
