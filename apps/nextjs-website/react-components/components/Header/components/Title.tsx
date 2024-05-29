import {
  Stack,
  Avatar,
  Typography,
  Chip,
  useTheme,
  Link,
} from '@mui/material';
import { HeaderTitleProps } from '../../../types/Header/Header.types';
import { TextColor } from '@react-components/components/common/Common.helpers';

export const HeaderTitle = ({
  avatar,
  beta,
  product: { name: productName, href: productHref },
  theme,
  logo,
}: HeaderTitleProps) => {
  const { spacing } = useTheme();
  const textColor = TextColor(theme);
  const label = 'beta';

  return (
    <Stack direction="row" alignItems="center" gap={1} paddingX={3} paddingY={2}>
      {logo && (
        <Link  
          alignItems="center" 
          sx={{ 
            display: 'flex',
            justifyContent: 'center'
          }} 
          href={logo.href}
        >
          <img src={logo.src} alt={logo.alt} style={{ height:70 }}/>
        </Link>
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
