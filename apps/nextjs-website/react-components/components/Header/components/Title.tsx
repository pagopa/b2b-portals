import {
  Stack,
  Avatar,
  Typography,
  Chip,
  useTheme,
  Link,
  Box,
} from '@mui/material';
import { HeaderTitleProps } from '../../../types/Header/Header.types';

export const HeaderTitle = ({
  avatar,
  beta,
  product: { name: productName, href: productHref },
  theme,
  logo,
}: HeaderTitleProps) => {
  const { palette, spacing } = useTheme();
  const textColor =
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
  const label = 'beta';

  return (
    <Stack direction="row" alignItems="center" gap={1} sx={{ height:'100%'}}>
      {logo && (
        <Box sx={{ maxHeight: 64 }}>
          <Link  
            alignItems="center" 
            sx={{ 
              display: 'flex', 
              height: '100%', 
              justifyContent: 'center'
            }} 
            href={logo.href}
          >
            <img src={logo.src} alt={logo.alt} />
          </Link>
        </Box>
      )}
      {!logo && (
      <>
        {avatar && <Avatar {...avatar} />}
        <Typography
          color={textColor}
          fontSize={{ xs: spacing(3), sm: spacing(3.5) }}
          noWrap
          variant="h5"
        >
          {productHref ? (
            <Link href={productHref} underline="none" color="text.primary">
              <b>{productName}</b>
            </Link>
          ) : (
            <b>{productName}</b>
          )}
        </Typography>
      </>
      )}
      {beta && (
        <Chip
          label={label}
          color="primary"
          sx={{ height: 20, width: 45 }}
          size="small"
        />
      )}
    </Stack>
  );
};
