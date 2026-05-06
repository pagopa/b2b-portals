import { Box, Typography, useTheme, Stack } from '@mui/material';
import { MediaResourcesProps } from '@react-components/types';
import { TextColor } from '../common/Common.helpers';
import { FileDownloadOutlined } from '@mui/icons-material';
import {
  resolveByThemeVariant,
  variantContentLinkColorMap,
  variantSectionBackgroundColorMap,
} from '../../theme';

const MediaResources = ({
  items,
  sectionID,
  theme,
  themeVariant,
  title,
  labels,
}: MediaResourcesProps) => {
  const muiTheme = useTheme();
  const { palette } = muiTheme;
  const ctx = { palette, theme };

  const backgroundColor = resolveByThemeVariant(
    variantSectionBackgroundColorMap,
    themeVariant,
    ctx,
  );

  const textColor = TextColor(theme);

  const linkColor = resolveByThemeVariant(
    variantContentLinkColorMap,
    themeVariant,
    ctx,
  );

  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
      }}
    >
      <Box
        component='section'
        {...(sectionID && { id: sectionID })}
        sx={{
          color: textColor,
          py: 10,
        }}
        width={1140}
        maxWidth='90vw'
        marginX='auto'
      >
        {title && (
          <Typography
            variant='h4'
            component='h2'
            mb={4}
            textAlign='left'
            color='inherit'
          >
            {title}
          </Typography>
        )}
        <Stack direction='row' flexWrap='wrap' rowGap={14} columnGap={9}>
          {items.map((item, index) => (
            <Stack
              key={index}
              component='a'
              href={item.resourceURL}
              download
              target='_blank'
              width={330}
              maxWidth='90vw'
              sx={{
                textDecoration: 'none',
              }}
              aria-label={labels.ariaLabelDownload(item.label, item.title)}
            >
              <img
                src={item.thumbnailURL}
                alt={item.title}
                width={330}
                height={192}
                style={{
                  marginBottom: '16px',
                  maxWidth: '90vw',
                  maxHeight: '52.36vw',
                  objectFit: 'cover',
                }}
              />
              <Stack
                direction='row'
                alignItems='center'
                spacing={1}
                color={linkColor}
              >
                <FileDownloadOutlined />
                <Typography color='inherit' fontSize={14} fontWeight={600}>
                  {item.label}
                </Typography>
              </Stack>
              <Typography
                variant='h6'
                component='h3'
                fontWeight={700}
                mt={3}
                sx={{ color: textColor }}
              >
                {item.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default MediaResources;
