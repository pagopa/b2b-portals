import React from 'react';
import { ColorItem, ColorPalette } from '@storybook/addon-docs';
import { theme } from '../src/app/theme';
import {
  AppThemeMode,
  resolveThemeVariant,
  themeVariantMaps,
} from '../react-components/theme';
import { ThemeVariant } from '../react-components/types/common/Common.types';

const themeVariants: ReadonlyArray<ThemeVariant> = ['SEND', 'IO', 'WALLET'];
const themeModes: ReadonlyArray<AppThemeMode> = ['light', 'dark'];

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

const hasVariantDifferences = (
  variantColors: ReturnType<typeof getMapColors>,
) => {
  const colorLabels = Object.keys(variantColors[0]?.colors ?? {});

  return colorLabels.some((label) => {
    const colorsByVariant = variantColors.map(({ colors }) => colors[label]);

    return new Set(colorsByVariant).size > 1;
  });
};

export const ThemeVariantColors = () => {
  const colorGroups = Object.keys(themeVariantMaps)
    .map((mapName) => ({
      title: mapName,
      variantColors: getMapColors(mapName as keyof typeof themeVariantMaps),
    }))
    .filter(({ variantColors }) => hasVariantDifferences(variantColors));

  return (
    <>
      {colorGroups.map(({ title, variantColors }) => (
        <section key={title}>
          <h2>{title}</h2>
          <ColorPalette>
            {variantColors.map(({ themeVariant, colors }) => (
              <ColorItem
                key={`${title}-${themeVariant}`}
                title={themeVariant}
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
