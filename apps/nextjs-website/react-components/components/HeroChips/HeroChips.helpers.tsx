import { Stack, Chip } from '@mui/material';
import { ChipProps } from '@react-components/types/HeroChips/HeroChips.types';
import { useTheme } from '@mui/material/styles';
import {
  resolveByThemeVariant,
  variantChipBackgroundColorMap,
  variantChipBackgroundHoverColorMap,
} from '../../theme';

export const ChipsBlock = ({
  chips,
  theme,
  themeVariant,
  ariaLabelChips,
}: {
  chips: ReadonlyArray<ChipProps>;
  ariaLabelChips?: string;
  theme: 'light' | 'dark';
  themeVariant: 'IO' | 'SEND' | 'WALLET';
}) => {
  const { palette } = useTheme();
  const ctx = { palette, theme };

  const chipBackgroundColor = resolveByThemeVariant(
    variantChipBackgroundColorMap,
    themeVariant,
    ctx,
  );

  const chipBackgroundColorHover = resolveByThemeVariant(
    variantChipBackgroundHoverColorMap,
    themeVariant,
    ctx,
  );

  const chipTextColor = palette.custom.chipsTextColor;

  return (
    <Stack
      direction='row'
      spacing={1}
      mt={2}
      sx={{
        width: '100%',
        justifyContent: 'center',
      }}
      component='nav'
      {...(ariaLabelChips && { 'aria-label': ariaLabelChips })}
    >
      <Stack
        direction='row'
        spacing={1}
        component='ul'
        sx={{
          maxWidth: '600px',
          flexWrap: 'wrap',
          rowGap: '8px',
          justifyContent: 'center',
          listStyle: 'none',
          padding: 0,
          '& > li': {
            padding: 0,
          },
        }}
      >
        {chips.map((chip, index) => (
          <li key={index}>
            <Chip
              role='link'
              component='a'
              href={`#${chip.targetID}`}
              label={chip.label}
              sx={{
                backgroundColor: `${chipBackgroundColor} !important`,
                color: `${chipTextColor} !important`,
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: `${chipBackgroundColorHover} !important`,
                },
                '&:focus': {
                  outline: `2px solid ${theme === 'light' ? chipBackgroundColor : 'white'}`,
                },
                cursor: 'pointer',
              }}
            />
          </li>
        ))}
      </Stack>
    </Stack>
  );
};
