import React from 'react';
import { makeEditorialProps } from './Editorial';
import { makeCardsProps } from './Cards';
import { makeBannerLinkProps } from './BannerLink';
import { PageSwitch as PageSwitchRC } from '@react-components/components';
import { PageSwitchProps } from '@react-components/types';
import { PageSwitchSection } from '@/lib/fetch/types/PageSection';
import { PageSwitchContent } from '@react-components/types/Page-Switch/Page-Switch.types';

const makePageSwitchProps = ({
  subtitle,
  sections,
  ...rest
}: PageSwitchSection): PageSwitchProps => ({
  ...(subtitle && { subtitle }),
  sections: sections.map(
    ({
      contents,
      ...section
    }: {
      contents: PageSwitchContent[];
      buttonText: string;
      id: number;
    }) => ({
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
    })
  ),
  ...rest,
});

const PageSwitch = (props: PageSwitchSection) => (
  <PageSwitchRC {...makePageSwitchProps(props)} />
);

export default PageSwitch;
