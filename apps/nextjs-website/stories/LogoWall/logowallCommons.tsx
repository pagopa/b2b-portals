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
  },
  {
    title: 'Dipartimento per la trasformazione digitale',
    logoURL: dtdLogo.src,
  },
];

const secondGroupLogos: LogoWallItemProps[] = [
  {
    title: 'Agenzia per la cybersicurezza nazionale',
    logoURL: acnLogo.src,
  },
  {
    title: "AGID - Agenzia per l'Italia Digitale",
    logoURL: agidLogo.src,
  },
  {
    title: 'IPZS - Istituto Poligrafico e Zecca dello Stato',
    logoURL: ipzsLogo.src,
  },
  {
    title: 'PagoPA',
    logoURL: pagopaLogo.src,
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
