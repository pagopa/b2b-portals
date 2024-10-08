import { Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Body } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { FeatureStackItemProps } from '../../types/Feature/Feature.types';

const Subtitle = ({ item, theme }: FeatureStackItemProps) => {
  const textColor = TextColor(theme);

  return (
    <Stack spacing={3} justifyContent='center' alignItems='center'>
      <Body textColor={textColor} body={item.subtitle} />
      {item.link !== undefined && (
        <Stack
          spacing={1}
          justifyContent='center'
          alignItems='center'
          direction={'row'}
          color={theme === 'light' ? 'primary' : 'background.paper'}
        >
          <Typography
            component='span'
            variant='body1'
            color={theme === 'light' ? 'text.primary' : 'background.paper'}
          >
            <Link
              color='inherit'
              href={item.link.href}
              underline='none'
              sx={{ fontWeight: 'bold' }}
            >
              {item.link.label}
            </Link>
          </Typography>

          <ArrowForwardIcon color='inherit'></ArrowForwardIcon>
        </Stack>
      )}
    </Stack>
  );
};

export default Subtitle;
