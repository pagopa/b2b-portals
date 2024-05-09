import { Link } from '@mui/material';
import { Stack } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Body } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { SubtitleProps } from '../../types/Feature/Feature.types';

const Subtitle = ({ subtitle, textLink, url, theme }: SubtitleProps) => {

  const textColor = TextColor(theme);

  return (
    <Stack spacing={3} justifyContent='center' alignItems='center'>
      <Body textColor={textColor} body={subtitle} />
      {textLink !== undefined && (
        <Stack
          spacing={1}
          justifyContent='center'
          alignItems='center'
          direction={'row'}
          color={theme === 'light' ? 'primary' : 'background.paper'}
        >
          <Link
            color='inherit'
            href={url}
            underline='none'
            sx={{
              fontWeight: 'bold',
            }}
          >
            {textLink}
          </Link>

          <ArrowForwardIcon color='inherit'></ArrowForwardIcon>
        </Stack>
      )}
    </Stack>
  );
};

export default Subtitle;