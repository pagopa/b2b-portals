import { Stack, Chip } from '@mui/material';
import { ChipProps } from '@react-components/types/HeroChips/HeroChips.types';
import {
  SendChipsBackgroundColor,
  IoChipsBackgroundColor,
  SendChipsBackgroundColorHover,
  IoChipsBackgroundColorHover,
} from '../common/Common.helpers';
import { useTheme } from '@mui/material/styles';

export const ChipsBlock = ({
  chips,
  theme,
  themeVariant,
}: {
  chips: ReadonlyArray<ChipProps>;
  theme: 'light' | 'dark';
  themeVariant: 'IO' | 'SEND';
}) => {
  const SmoothScrollToTarget = (targetID: string) => {
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      targetSection.focus({ preventScroll: true });
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { palette } = useTheme();

  const chipBackgroundColor =
    themeVariant === 'SEND'
      ? SendChipsBackgroundColor(theme)
      : IoChipsBackgroundColor(theme);

  const chipBackgroundColorHover =
    themeVariant === 'SEND'
      ? SendChipsBackgroundColorHover(theme)
      : IoChipsBackgroundColorHover(theme);

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
    >
      <Stack
        direction='row'
        spacing={1}
        sx={{
          maxWidth: '600px',
          flexWrap: 'wrap',
          rowGap: '8px',
          justifyContent: 'center',
        }}
      >
        {chips.map((chip, index) => (
          <Chip
            key={index}
            label={chip.label}
            onClick={() => SmoothScrollToTarget(chip.targetID)}
            sx={{
              backgroundColor: `${chipBackgroundColor} !important`,
              color: `${chipTextColor} !important`,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: `${chipBackgroundColorHover} !important`,
              },
              cursor: 'pointer',
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};
