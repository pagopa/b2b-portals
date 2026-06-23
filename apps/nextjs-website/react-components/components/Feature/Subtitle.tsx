import { Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Body, isValidExternalLink, LinkIcon } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { FeatureStackItemProps } from '../../types/Feature/Feature.types';
import { useTheme } from '@mui/material/styles';
import { resolveThemeVariant } from '../../theme';

const Subtitle = ({ item, theme, themeVariant }: FeatureStackItemProps) => {
  const { palette } = useTheme();
  const textColor = TextColor(theme, themeVariant);
  const ctx = { palette, theme };

  const linkColor = resolveThemeVariant<string>(
    'featureLinkColor',
    themeVariant,
    ctx,
  );

  return (
    <Stack spacing={3} justifyContent='center' alignItems='center'>
      <Body textColor={textColor} body={item.subtitle} />
      {item.link !== undefined && (
        <Stack
          spacing={1}
          justifyContent='center'
          alignItems='center'
          direction='row'
        >
          <Typography component='span' variant='body1' color={linkColor}>
            <Link
              color={linkColor}
              href={item.link.href}
              underline='none'
              {...(item.link.ariaLabel && {
                'aria-label': item.link.ariaLabel,
              })}
              sx={{ fontWeight: 'bold' }}
              {...(isValidExternalLink(item.link.href) && {
                target: '_blank',
              })}
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
            {...(isValidExternalLink(item.link.href) && {
              externaLinkIconTarget: '_blank',
            })}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default Subtitle;
