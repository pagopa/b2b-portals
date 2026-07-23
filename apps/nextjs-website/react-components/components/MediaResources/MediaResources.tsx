import { Box, Typography, useTheme, Stack, SvgIcon } from '@mui/material';
import { MediaResourcesProps } from '@react-components/types';
import { TextColor } from '../common/Common.helpers';
import { resolveThemeVariant } from '../../theme';

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

  const backgroundColor = resolveThemeVariant<string>(
    'sectionBackgroundColor',
    themeVariant,
    ctx,
  );

  const textColor = TextColor(theme, themeVariant);

  const linkColor = resolveThemeVariant<string>(
    'contentLinkColor',
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
                  maxHeight: '52.36vw', // Maintains same ratio (330/192 = 90/52.36)
                  objectFit: 'cover',
                }}
              />

              <Stack
                direction='row'
                alignItems='center'
                spacing={1}
                color={linkColor}
              >
                <SvgIcon
                  viewBox='0 0 22 20'
                  sx={{ width: 22, height: 20 }}
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M10.5563 15.0905L6.54592 11.1609C6.29842 10.9182 6.29842 10.5291 6.54592 10.2864C6.79342 10.0432 7.18987 10.0432 7.43737 10.2864L10.3698 13.1623V0.618182C10.3698 0.274545 10.6498 0 11 0C11.3502 0 11.6302 0.274545 11.6302 0.618182V13.1623L14.5576 10.2864C14.8051 10.0432 15.202 10.0432 15.4495 10.2864C15.697 10.5291 15.697 10.9182 15.4495 11.1609L11.4437 15.0905C11.3222 15.2136 11.1586 15.2732 11 15.2732C10.8414 15.2732 10.6778 15.2095 10.5563 15.0905M21.3698 9.75045C21.7195 9.75045 22 10.0295 22 10.3686V15.9923C22 18.2 20.1699 20 17.9149 20H4.08512C1.83471 20 0 18.205 0 15.9923V10.2768C0 9.93364 0.280042 9.65864 0.630208 9.65864C0.980375 9.65864 1.26042 9.93364 1.26042 10.2768V15.9923C1.26042 17.5177 2.52587 18.7632 4.08512 18.7632H17.9149C19.4691 18.7632 20.7396 17.5223 20.7396 15.9923V10.3686C20.7396 10.025 21.0192 9.75045 21.3698 9.75045'
                  />
                </SvgIcon>
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
