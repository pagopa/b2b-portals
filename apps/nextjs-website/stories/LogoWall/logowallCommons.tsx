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

const firstRowLogos: LogoWallItemProps[] = [
  {
    title: "Finanziato dall'Unione europea - NextGenerationEU",
    logoURL: euNextGenLogo.src,
  },
  {
    title: 'Dipartimento per la trasformazione digitale',
    logoURL: dtdLogo.src,
  },
];

const secondRowLogos: LogoWallItemProps[] = [
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

const generateDefaultProps = (
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

export const defaultPropsLight = generateDefaultProps(
  'light',
  firstRowLogos,
  secondRowLogos,
);

export const defaultPropsDark = generateDefaultProps(
  'dark',
  firstRowLogos,
  secondRowLogos,
);

export const onlySecondRowPropsLight = generateDefaultProps(
  'light',
  [],
  secondRowLogos,
);

export const onlyFirstRowPropsLight = generateDefaultProps(
  'light',
  firstRowLogos,
  [],
);

export const oneFirstRowLogoPropsLight = generateDefaultProps(
  'light',
  [firstRowLogos[0]!],
  secondRowLogos,
);

export const oneSecondRowLogoPropsLight = generateDefaultProps(
  'light',
  firstRowLogos,
  [secondRowLogos[0]!],
);

export const onlySecondRowPropsDark = generateDefaultProps(
  'dark',
  [],
  secondRowLogos,
);

export const onlyFirstRowPropsDark = generateDefaultProps(
  'dark',
  firstRowLogos,
  [],
);

export const oneFirstRowLogoPropsDark = generateDefaultProps(
  'dark',
  [firstRowLogos[0]!],
  secondRowLogos,
);

export const oneSecondRowLogoPropsDark = generateDefaultProps(
  'dark',
  firstRowLogos,
  [secondRowLogos[0]!],
);
