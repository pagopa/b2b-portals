import { Grid, Stack, Button, Typography, useTheme } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { HighlightBoxProps } from '../../types/HighlightBox/HighlightBox.types';

const HighlightBox = ({
  title,
  body,
  image,
  eyelet,
  link,
  sectionID,
}: HighlightBoxProps) => {
  const theme = useTheme();

  return (
    <ContainerRC
      py={4}
      sxInner={{
        justifyContent: { xs: 'start', md: 'start' },
        borderRadius: '24px',
        padding: { xs: '48px', md: '0 48px' },
        backgroundColor: theme.palette.custom.highLightBoxLightGreenBackground,
      }}
      {...(sectionID && { sectionID })}
    >
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            {eyelet && (
              <Typography
                variant='subtitle2'
                color='textSecondary'
                sx={{
                  backgroundColor:
                    theme.palette.custom.highLightBoxLightPurpleBackground,
                  color: theme.palette.custom.highLightBoxPurpleText,
                  borderRadius: '100px',
                  display: 'inline-block',
                  px: 2,
                  py: 1,
                  width: 'fit-content',
                  fontSize: '12px',
                }}
              >
                {eyelet}
              </Typography>
            )}

            <Typography
              variant='h6'
              component='h2'
              color='textPrimary'
              fontWeight={700}
              sx={{ fontSize: { xs: '22px', md: '24px' } }}
            >
              {title}
            </Typography>

            <Typography variant='body1' color='textPrimary' fontSize='16px'>
              {body}
            </Typography>

            {link && (
              <Button
                variant='contained'
                href={link.href}
                size='small'
                sx={{
                  width: 'fit-content',
                  px: 3,
                  py: 1,
                  backgroundColor: theme.palette.custom.primaryColorDark,
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: 700,
                }}
              >
                {link.label}
              </Button>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Stack sx={{ width: '100%' }}>
            <img
              src={image.src}
              srcSet={image.srcSet}
              alt={'Highlight'}
              width={300}
              height={200}
              style={{
                height: 'auto',
                width: '100%',
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </ContainerRC>
  );
};

export default HighlightBox;
