import { Stack, useTheme, type Theme } from '@mui/material';
import { DialogBubbleProps } from '../../types/Header/Header.types';

const useStyles = (muiTheme: Theme) => ({
  bubbleContainer: {
    transform: 'rotate(180deg)',
    position: 'absolute',
    marginTop: '42px',
    padding: muiTheme.spacing(2),
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
  const muiTheme = useTheme();
  const styles = useStyles(muiTheme);
  return (
    <Stack
      sx={{ ...styles.bubbleContainer, bgcolor: muiTheme.palette.common.white }}
      aria-haspopup="true"
    >
      <Stack sx={styles.bubble} {...stackProps}>
        {children}
      </Stack>
    </Stack>
  );
};
