import { Box, Container, Typography } from '@mui/material';
import { isJSX } from '../../../types/common/Common.types';
import { LegalInfoProps } from '../../../types/Footer/Footer.types';

export const LegalInfo = ({ data }: LegalInfoProps) => (
  <Box
    sx={{
      borderTop: 1,
      borderColor: 'divider',
      backgroundColor: 'background.paper',
    }}
  >
    <Container sx={{ px: 2, py: 2 }}>
      <Typography
        color='text.primary'
        variant='caption'
        textAlign='center'
        component={isJSX(data) ? 'div' : 'p'}
      >
        {data}
      </Typography>
    </Container>
  </Box>
);
