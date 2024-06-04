import { useTheme } from '@mui/material/styles';
import { Stack, type Theme } from '@mui/material';
import { DialogBubbleProps } from '../../types/Header/Header.types';

const useStyles = (muiTheme: Theme) => ({
  bubbleContainer: {
    transform: 'rotate(180deg)',
    position: 'absolute',
    marginTop: { xs: '0px', md: '-30px' },
    padding: muiTheme.spacing(2),
    direction: 'rtl',
    textAlign: { xs: 'right', md: 'left' },
    borderRadius: '4px',
    zIndex: 1,
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
      sx={{ 
        ...styles.bubbleContainer, 
        bgcolor: 'common.white', 
        boxShadow: { xs: 'custom.boxShadow', md: 'custom.otMenuMobile' } 
      }}
      aria-haspopup="true"
    >
      <Stack sx={styles.bubble} {...stackProps}>
        {children}
      </Stack>
    </Stack>
  );
};
