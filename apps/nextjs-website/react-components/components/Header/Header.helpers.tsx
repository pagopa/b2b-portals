import { Stack, useTheme, type Theme } from '@mui/material';
import { DialogBubbleProps } from '../../types/Header/Header.types';

const useStyles = (mui: Theme) => ({
  bubbleContainer: {
    transform: 'rotate(180deg)',
    position: 'absolute',
    marginTop: '42px',
    padding: mui.spacing(2),
    direction: 'rtl',
    textAlign: 'left',
    borderRadius: '4px',
  },
  bubble: { transform: 'rotate(180deg)' },
});

export const DialogBubble = ({
  children,
  ...stackProps
}: DialogBubbleProps) => {
  const mui = useTheme();
  const styles = useStyles(mui);
  return (
    <Stack
      sx={{ ...styles.bubbleContainer, bgcolor: mui.palette.common.white }}
      aria-haspopup="true"
    >
      <Stack sx={styles.bubble} {...stackProps}>
        {children}
      </Stack>
    </Stack>
  );
};
