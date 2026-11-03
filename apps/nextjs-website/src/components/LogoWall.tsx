'use client';

import { LogoWall as LogoWallRC } from '@react-components/components';
import { LogoWallProps } from '@react-components/types/LogoWall/LogoWall.types';
import { LogoWallSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const makeLogoWallProps = ({
  firstGroup,
  secondGroup,
  ...rest
}: LogoWallSection & SiteWidePageData): LogoWallProps => ({
  firstGroup: firstGroup.map(({ logo, title, href, logoMobile }) => ({
    title,
    logoURL: logo.url,
    ...(href && { href }),
    ...(logoMobile && { logoMobileURL: logoMobile.url }),
  })),

  secondGroup: secondGroup.map(({ logo, title, href, logoMobile }) => ({
    title,
    logoURL: logo.url,
    ...(href && { href }),
    ...(logoMobile && { logoMobileURL: logoMobile.url }),
  })),

  ...rest,
});

const LogoWall = (props: LogoWallSection & SiteWidePageData) => (
  <LogoWallRC {...makeLogoWallProps(props)} />
);

export default LogoWall;
