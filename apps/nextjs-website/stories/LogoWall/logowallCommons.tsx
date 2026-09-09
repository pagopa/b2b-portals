import { StoryFn } from '@storybook/react';
import { LogoWall } from '@react-components/components';
import { LogoWallProps } from '@react-components/types';
import { LogoWallItemProps } from '@react-components/types/LogoWall/LogoWall.types';

import acnLogo from '@react-components/assets/acn.png';
import agidLogo from '@react-components/assets/agid.png';
import dtdLogo from '@react-components/assets/dtd.png';
import euNextGenLogo from '@react-components/assets/euNextGen.png';
import ipzsLogo from '@react-components/assets/ipzs.png';
import pagopaLogo from '@react-components/assets/pagopa.png';

export const LogoWallTemplate: StoryFn<LogoWallProps> = (args) => (
  <LogoWall {...args} />
);

const firstGroupLogos: LogoWallItemProps[] = [
  {
    title: "Finanziato dall'Unione europea - NextGenerationEU",
    logoURL: euNextGenLogo.src,
    width: euNextGenLogo.width,
    height: euNextGenLogo.height,
    href: 'https://next-generation-eu.europa.eu/',
  },
  {
    title: 'Dipartimento per la trasformazione digitale',
    logoURL: dtdLogo.src,
    width: dtdLogo.width,
    height: dtdLogo.height,
    href: 'https://innovazione.gov.it/',
  },
];

const secondGroupLogos: LogoWallItemProps[] = [
  {
    title: 'Agenzia per la cybersicurezza nazionale',
    logoURL: acnLogo.src,
    width: acnLogo.width,
    height: acnLogo.height,
    href: 'https://www.acn.gov.it/',
  },
  {
    title: "AGID - Agenzia per l'Italia Digitale",
    logoURL: agidLogo.src,
    width: agidLogo.width,
    height: agidLogo.height,
    href: 'https://www.agid.gov.it/',
  },
  {
    title: 'IPZS - Istituto Poligrafico e Zecca dello Stato',
    logoURL: ipzsLogo.src,
    width: ipzsLogo.width,
    height: ipzsLogo.height,
    href: 'https://www.ipzs.it/',
  },
  {
    title: 'PagoPA',
    logoURL: pagopaLogo.src,
    width: pagopaLogo.width,
    height: pagopaLogo.height,
    href: 'https://www.pagopa.it/',
  },
];

const manyFirstGroupLogos: LogoWallItemProps[] = [
  ...firstGroupLogos,
  secondGroupLogos[0]!,
  secondGroupLogos[1]!,
  secondGroupLogos[2]!,
];

const manySecondGroupLogos: LogoWallItemProps[] = [
  ...secondGroupLogos,
  firstGroupLogos[0]!,
];

const generateLogoWallProps = (
  theme: 'light' | 'dark',
  firstGroup: LogoWallItemProps[],
  secondGroup: LogoWallItemProps[],
): LogoWallProps => ({
  theme,
  themeVariant: 'WALLET',
  sectionID: null,
  firstGroup,
  secondGroup,
});

export const getLogoWallStories = (theme: 'light' | 'dark') => ({
  full: generateLogoWallProps(theme, firstGroupLogos, secondGroupLogos),
  onlyFirstGroup: generateLogoWallProps(theme, firstGroupLogos, []),
  manyLogos: generateLogoWallProps(
    theme,
    manyFirstGroupLogos,
    manySecondGroupLogos,
  ),
});
