import { Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { isValidExternalLink, LinkIcon } from '../common/Common';
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

  const linkHoverColor = resolveThemeVariant<string>(
    'richTextLinkHoverColor',
    themeVariant,
    ctx,
  );

  return (
    <Stack justifyContent='center' alignItems='center'>
      <Typography variant='body2' color={textColor}>
        {item.subtitle}
      </Typography>
      {item.link !== undefined && (
        <Link
          color={linkColor}
          href={item.link.href}
          variant='body1'
          underline='none'
          {...(item.link.ariaLabel && {
            'aria-label': item.link.ariaLabel,
          })}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            fontWeight: 'bold',
            '&&': {
              m: 0,
              mt: 3,
            },
            '&:hover': {
              color: linkHoverColor,
            },
          }}
          {...(isValidExternalLink(item.link.href) && {
            target: '_blank',
          })}
        >
          {item.link.label}

          <LinkIcon
            sxExternalLinkIcon={{
              ml: 0,
              color: 'inherit',
            }}
            showExternalLinkIcon={isValidExternalLink(item.link.href)}
            internalLinkIcon={
              <ArrowForwardIcon
                sx={{
                  color: 'inherit',
                }}
              />
            }
            {...(isValidExternalLink(item.link.href) && {
              externaLinkIconTarget: '_blank',
            })}
          />
        </Link>
      )}
    </Stack>
  );
};

export default Subtitle;
