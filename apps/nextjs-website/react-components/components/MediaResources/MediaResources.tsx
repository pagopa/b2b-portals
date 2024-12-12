import { Box, Typography, Grid, useTheme } from '@mui/material';
import { MediaResourcesProps } from '@react-components/types';
import {
  SendBackgroundColor,
  IoBackgroundColor,
  TextColor,
} from '../common/Common.helpers';
import { FileDownloadOutlined } from '@mui/icons-material';

const MediaResources = ({
  items,
  sectionID,
  theme,
  themeVariant,
  title,
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
      {...(sectionID && { id: sectionID })}
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        py: 6,
        px: 3,
      }}
    >
      {title && (
        <Typography
          variant='h4'
          mb={4}
          textAlign='left'
          sx={{ color: textColor }}
        >
          {title}
        </Typography>
      )}
      <Grid container spacing={4} alignItems='flex-start'>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: 'left' }}>
              <img
                src={item.thumbnailURL}
                alt={item.title}
                width={330}
                style={{
                  borderRadius: '8px',
                  marginBottom: '16px',
                  maxWidth: '90vw',
                  height: 'auto',
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  component='a'
                  href={item.resourceURL}
                  download
                  target='_blank'
                  sx={{
                    fontSize: '14px',
                    color: linkColor,
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': {
                      color: linkColor,
                      textDecoration: 'underline',
                    },
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                >
                  <FileDownloadOutlined sx={{ mr: 1 }} />
                  {item.label}
                </Typography>
              </Box>
              <Typography
                variant='h6'
                fontWeight={700}
                mt={3}
                sx={{ color: textColor }}
              >
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
