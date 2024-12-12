import { Box, Typography, Grid, Link, useTheme } from '@mui/material';
import { MediaResourcesProps } from '@react-components/types';
import Image from 'next/image';
import {
  SendBackgroundColor,
  IoBackgroundColor,
  TextColor,
} from '../common/Common.helpers';

const MediaResources = ({
  items,
  sectionID,
  theme,
  themeVariant,
  sectionTitle,
}: MediaResourcesProps) => {
  const muiTheme = useTheme();

  const backgroundColor =
    themeVariant === 'SEND'
      ? SendBackgroundColor(theme)
      : IoBackgroundColor(theme);

  const textColor = TextColor(theme);

  const linkColor =
    theme === 'dark'
      ? muiTheme.palette.custom.white
      : themeVariant === 'SEND'
        ? muiTheme.palette.primary.main
        : muiTheme.palette.custom.primaryColorDark;

  return (
    <Box
      component='section'
      id={sectionID || undefined}
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        py: 6,
        px: 3,
      }}
    >
      {sectionTitle && (
        <Typography
          variant='h4'
          mb={4}
          textAlign='left'
          sx={{ color: textColor }}
        >
          {sectionTitle}
        </Typography>
      )}
      <Grid container spacing={4} alignItems='flex-start'>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: 'left' }}>
              <Image
                src={item.thumbnail.data.attributes.url}
                alt={item.title}
                width={200}
                height={200}
                style={{ borderRadius: '8px', marginBottom: '16px' }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Image
                  src={item.icon.data.attributes.url}
                  alt='Download Icon'
                  width={16}
                  height={16}
                  style={{ marginRight: '8px' }}
                />
                <Link
                  href={item.resource.data.attributes.url}
                  download
                  target='_blank'
                  underline='hover'
                  sx={{
                    fontSize: '14px',
                    color: linkColor,
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': {
                      color: linkColor,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item.label}
                </Link>
              </Box>
              <Typography variant='h6' mt={3} sx={{ color: textColor }}>
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MediaResources;
