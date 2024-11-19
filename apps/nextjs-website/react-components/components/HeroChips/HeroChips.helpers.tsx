import { Stack, Chip } from '@mui/material';
import { ChipProps } from '@react-components/types/HeroChips/HeroChips.types';

export const ChipsBlock = ({
  chips,
  theme,
}: {
  chips: ReadonlyArray<ChipProps>;
  theme: 'light' | 'dark';
}) => {
  const SmoothScrollToTarget = (targetID: string) => {
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              backgroundColor: '#ebebf52e',
              color: theme === 'dark' ? '#ffffff' : '#000000',
              '&:hover': {
                backgroundColor: '#ebebf54d',
              },
              border: theme === 'light' ? '1px solid #D0D0D0' : 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};
