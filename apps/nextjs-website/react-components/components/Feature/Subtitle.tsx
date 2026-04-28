import { Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Body, isValidExternalLink, LinkIcon } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { FeatureStackItemProps } from '../../types/Feature/Feature.types';
import { useTheme } from '@mui/material/styles';

const Subtitle = ({ item, theme, themeVariant }: FeatureStackItemProps) => {
  const muiTheme = useTheme();
  const textColor = TextColor(theme);

  const linkColor =
    theme === 'light'
      ? (() => {
          switch (themeVariant) {
            case 'SEND':
              return muiTheme.palette.primary.main;
            case 'IO':
              return muiTheme.palette.custom.blueIO[500];
            case 'WALLET':
              return muiTheme.palette.custom.blueIO[500];
          }
        })()
      : muiTheme.palette.common.white;

  return (
    <Stack spacing={3} justifyContent='center' alignItems='center'>
      <Body textColor={textColor} body={item.subtitle} />
      {item.link !== undefined && (
        <Stack
          spacing={1}
          justifyContent='center'
          alignItems='center'
          direction={'row'}
        >
          <Typography
            component='span'
            variant='body1'
            color={theme === 'light' ? 'text.primary' : linkColor}
          >
            <Link
              color={linkColor}
              href={item.link.href}
              underline='none'
              {...(item.link.ariaLabel && {
                'aria-label': item.link.ariaLabel,
              })}
              sx={{ fontWeight: 'bold' }}
            >
              {item.link.label}
            </Link>
          </Typography>
          <LinkIcon
            sxExternalLinkIcon={{ ml: 0, color: linkColor }}
            showExternalLinkIcon={isValidExternalLink(item.link.href)}
            internalLinkIcon={
              <ArrowForwardIcon
                sx={{
                  color: linkColor,
                }}
              />
            }
          />
        </Stack>
      )}
    </Stack>
  );
};

export default Subtitle;
