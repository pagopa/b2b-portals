import React from 'react';
import { ColorItem, ColorPalette } from '@storybook/addon-docs';
import {
  AppThemeMode,
  resolveThemeVariant,
  theme,
  themeVariantMaps,
} from '../react-components/theme';
import { ThemeVariant } from '../react-components/types/common/Common.types';

const themeVariants: ReadonlyArray<ThemeVariant> = ['SEND', 'IO', 'WALLET'];
const themeModes: ReadonlyArray<AppThemeMode> = ['light', 'dark'];

const themeVariantLabels: Record<ThemeVariant, string> = {
  SEND: 'SEND',
  IO: 'APPIO',
  WALLET: 'WALLET',
};

const formatLabel = (themeMode: AppThemeMode, index?: number) =>
  index === undefined ? themeMode : `${themeMode} ${index + 1}`;

const normalizeColors = (
  color: string | string[],
  themeMode: AppThemeMode,
): Record<string, string> =>
  Array.isArray(color)
    ? Object.fromEntries(
        color.map((value, index) => [formatLabel(themeMode, index), value]),
      )
    : {
        [formatLabel(themeMode)]: color,
      };

const getMapColors = (mapName: keyof typeof themeVariantMaps) => {
  const { palette } = theme;

  return themeVariants.map((themeVariant) => {
    const colors = themeModes.reduce<Record<string, string>>(
      (acc, themeMode) => {
        const resolvedColor = resolveThemeVariant<string | string[]>(
          mapName,
          themeVariant,
          {
            palette,
            theme: themeMode,
          },
        );

        Object.assign(acc, normalizeColors(resolvedColor, themeMode));

        return acc;
      },
      {},
    );

    return {
      themeVariant,
      colors,
    };
  });
};

const getThemeVariantColors = (themeVariant: ThemeVariant) =>
  Object.keys(themeVariantMaps).map((mapName) => {
    const variantColors = getMapColors(
      mapName as keyof typeof themeVariantMaps,
    ).find((mapColors) => mapColors.themeVariant === themeVariant);

    return {
      title: mapName,
      colors: variantColors?.colors ?? {},
    };
  });

export const ThemeVariantColors = () => {
  return (
    <>
      {themeVariants.map((themeVariant) => (
        <section key={themeVariant}>
          <h2>{themeVariantLabels[themeVariant]}</h2>
          <ColorPalette>
            {getThemeVariantColors(themeVariant).map(({ title, colors }) => (
              <ColorItem
                key={`${themeVariant}-${title}`}
                title={title}
                subtitle=''
                colors={colors}
              />
            ))}
          </ColorPalette>
        </section>
      ))}
    </>
  );
};
